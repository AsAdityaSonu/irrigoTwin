import express from "express";
import dotenv from "dotenv";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";

const router = express.Router();
dotenv.config();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const SENSOR_FILE_KEY = "sensor_data.json"; 

const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
  });

router.get("/extractInfo", async (req, res) => {
  try {
    const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: SENSOR_FILE_KEY });
    const data = await s3Client.send(command);
    const jsonData = JSON.parse(await streamToString(data.Body));

    const latestData = jsonData[jsonData.length - 1];

    if (!latestData) {
      console.log("No data found in sensor_data.json");
      return res.status(404).send({ message: "No data found" });
    }

    res.status(200).json(latestData);
  } catch (error) {
    console.error("Error retrieving data from S3:", error);
    res.status(500).json({ message: "Error retrieving data", error: error.message });
  }
});

export { router as extractInfo };