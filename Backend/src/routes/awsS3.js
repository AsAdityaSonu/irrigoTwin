import express from "express";
import dotenv from "dotenv";
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

const router = express.Router();
dotenv.config();

const LAMBDA_FUNCTION_NAME = process.env.LAMBDA_FUNCTION_NAME;

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const lambdaClient = new LambdaClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const FILE_KEY = "outputData/Actions.json";

const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
  });

const fetchDataFromS3 = async () => {
  try {
    const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: FILE_KEY });
    const data = await s3Client.send(command);
    const jsonData = JSON.parse(await streamToString(data.Body));
    return jsonData;
  } catch (error) {
    console.error("Error fetching data from S3:", error);
    throw new Error("Could not retrieve data from S3");
  }
};

const updateDataInS3 = async (updatedData) => {
  try {
    const putCommand = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: FILE_KEY,
      Body: JSON.stringify(updatedData),
      ContentType: "application/json",
    });
    await s3Client.send(putCommand);
    console.log("Data successfully updated in S3");
  } catch (error) {
    console.error("Error updating data in S3:", error);
    throw new Error("Could not update data in S3");
  }
};

// Function to trigger Lambda
const triggerLambdaFunction = async () => {
  try {
    const command = new InvokeCommand({
      FunctionName: LAMBDA_FUNCTION_NAME,
      InvocationType: "Event", // Async invocation
    });
    const response = await lambdaClient.send(command);
    console.log("Lambda function triggered:", response);
  } catch (error) {
    console.error("Error triggering Lambda function:", error);
    throw new Error("Failed to invoke Lambda function");
  }
};

router.post("/s3-set", async (req, res) => {
  try {
    const { waterFlow: newWaterFlow, fanStatus: newFanStatus } = req.body;
    console.log("Received from frontend:", { newWaterFlow, newFanStatus });

    // Fetch the current data from S3
    const currentData = await fetchDataFromS3();
    
    if (!Array.isArray(currentData) || currentData.length === 0) {
      throw new Error("Invalid or empty data retrieved from S3.");
    }

    // Update the waterFlow and fanStatus in the current data
    const updatedData = { 
      ...currentData[0], 
      Watering_plant_pump_ON: newWaterFlow, 
      Fan_actuator_ON: newFanStatus 
    };

    // Update S3 with new data
    await updateDataInS3([updatedData]);

    // Trigger the Lambda function after updating S3
    // await triggerLambdaFunction();

    res.status(200).json({ message: "Data updated and Lambda function triggered successfully" });
  } catch (error) {
    console.error("Error updating data or triggering Lambda:", error);
    res.status(500).json({
      message: "Error updating data in S3 or triggering Lambda",
      error: error.message,
      stack: error.stack
    });
  }
});

router.get("/s3-fetch", async (req, res) => {
  try {
    const data = await fetchDataFromS3();

    if (Array.isArray(data) && data.length > 0) {
      const dataObject = data[0];
      const waterFlow = dataObject.Watering_plant_pump_ON ?? 0;
      const fanStatus = dataObject.Fan_actuator_ON ?? 0;

      console.log("Data sent to frontend:", { waterFlow, fanStatus });
      res.status(200).json({ waterFlow, fanStatus });
    } else {
      res.status(500).json({ message: "Invalid data format or empty data from S3" });
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({
      message: "Error retrieving data from S3",
      error: error.message
    });
  }
});

export { router as awsS3 };