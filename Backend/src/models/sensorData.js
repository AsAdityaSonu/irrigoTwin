import mongoose from "mongoose";


const sensorDataSchema = new mongoose.Schema({
  timeStamp: {
    type: Date,
    required: true,
    default: new Date(),
  },
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  soilMoisture: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const sensorData = mongoose.model("SensorData", sensorDataSchema);

export default sensorData;