import express from "express";
import sensorData from "../models/sensorData.js";

const router = express.Router();

router.get("/extractInfo", async (req, res) => {
  try {
    const latestData = await sensorData
      .findOne()
      .sort({ timeStamp: -1 })
      .exec();

    if (!latestData) {
      console.log("No data found");
      return res.status(404).send({ message: "No data found" });
    }
    res.status(200).json(latestData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ message: "Error retrieving data", error });
  }
});

export { router as extractInfo };
