import express from "express";
import connectDB from "../config/Database.js";
import sensorData from "../models/sensorData.js";

const generateSeedData = (numEntries) => {
  const seedData = [];
  for (let i = 0; i < numEntries; i++) {
    seedData.push({
      temperature: Math.floor(Math.random() * 50),
      humidity: Math.floor(Math.random() * 100),
      soilMoisture: Math.floor(Math.random() * 100),
    });
  }
  return seedData;
};

const seedData = async () => {
  try {
    await connectDB();
    // await sensorData.deleteMany({});
    const data = generateSeedData(200);
    await sensorData.insertMany(data);

    console.log("Data Seeded Successfully");
  } catch (error) {
    console.error("Error Seeding Data:", error);
  } finally {
    process.exit();
  }
};

seedData();
