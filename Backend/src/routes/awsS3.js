import express from "express";

const router = express.Router();

let x=0;
let y=0;

router.post("/s3-set", async (req, res) => {
  try {
    const { waterFlow, fanStatus } = req.body;
    console.log("Received from frontend:", { waterFlow, fanStatus });
    x=waterFlow;
    y=fanStatus;

    res.status(200).json({ message: "Data received successfully" });
  } catch (error) {
    console.error("Error receiving data:", error);
    res.status(500).json({ message: "Error receiving data", error });
  }
});

router.get("/s3-fetch", async (req, res) => {
  try {
    const hardcodedData = {
      waterFlow: x,
      fanStatus: y,
    };
    console.log("Sending hardcoded data:", hardcodedData);

    res.status(200).json(hardcodedData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ message: "Error retrieving data", error });
  }
});

export { router as awsS3 };
