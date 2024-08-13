import mongoose from "mongoose";

const formatDate = () => {
  const now = new Date();
  return now
    .toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    .replace(",", "")
    .replace(/\//g, "-");
};

const sensorDataSchema = new mongoose.Schema({
  timeStamp: {
    type: Date,
    required: true,
    default: formatDate,
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
