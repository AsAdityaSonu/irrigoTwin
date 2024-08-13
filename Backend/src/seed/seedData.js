import express from "express";
import connectDB from "../config/Database.js";
import sensorData from "../models/sensorData.js";

const seedData = async () => {
  try {
    await connectDB();
    // await sensorData.deleteMany({});
    await sensorData.insertMany([
      {
        temperature: 20,
        humidity: 50,
        soilMoisture: 100,
      },
      {
        temperature: 25,
        humidity: 60,
        soilMoisture: 60,
      },
      {
        temperature: 30,
        humidity: 70,
        soilMoisture: 70,
      },
    ]);

    console.log("Data Seeded Successfully");
  } catch (error) {
    console.error("Error Seeding Data:", error);
  } finally {
    process.exit();
  }
};

seedData();