import express from "express";
import connectDB from "../config/Database.js";
import sensorData from "../models/sensorData.js";

const generateSeedData = () => {
  return {
    // temperature: Math.floor(Math.random() * 50),
    temperature: 25,
    // humidity: Math.floor(Math.random() * 100),
    humidity: 50,
    // soilMoisture: Math.floor(Math.random() * 100),
    soilMoisture: 75,
  };
};

const seedData = async () => {
  try {
    await connectDB();
    const data = generateSeedData();
    await sensorData.create(data);

    console.log("Data Seeded Successfully");
  } catch (error) {
    console.error("Error Seeding Data:", error);
  } finally {
    process.exit();
  }
};

seedData();
