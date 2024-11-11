import React, { useState, useEffect } from "react";
import axios from "axios";

function Controls() {
  const [waterFlow, setWaterFlow] = useState(false);
  const [fanStatus, setFanStatus] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [initialWaterFlow, setInitialWaterFlow] = useState(false);
  const [initialFanStatus, setInitialFanStatus] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://irrigo-twin-backend.vercel.app/aws/s3-fetch"
      )
      .then((res) => {
        const { waterFlow, fanStatus } = res.data;
        setWaterFlow(waterFlow);
        setFanStatus(fanStatus);
        setInitialWaterFlow(waterFlow);
        setInitialFanStatus(fanStatus);
      })
      .catch((error) => {
        console.error("Error fetching initial data:", error);
      });
  }, []);

  const toggleWaterFlow = () => {
    setWaterFlow(!waterFlow);
    setIsSaved(false);
  };

  const toggleFan = () => {
    setFanStatus(!fanStatus);
    setIsSaved(false);
  };

  axios.defaults.withCredentials = true;

  const handleSave = () => {
    if (waterFlow === initialWaterFlow && fanStatus === initialFanStatus) {
      alert("No changes made to save.");
      return;
    }

    console.log("Saved Settings:", { waterFlow, fanStatus });

    axios
      .post("https://irrigo-twin-backend.vercel.app/aws/s3-set", {
        waterFlow: waterFlow,
        fanStatus: fanStatus,
      })
      .then((res) => {
        console.log("Data saved successfully:", res.data);
        setIsSaved(true);
        setInitialWaterFlow(waterFlow);
        setInitialFanStatus(fanStatus);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div className="min-h-screen min-w-[730px] bg-gray-50 p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-50 border-e rounded-lg shadow-lg bg-gray-50">
        <h1 className="text-5xl font-extrabold text-green-700 mb-8 text-center">
          Smart Hydroponics Controls
        </h1>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Control Panel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Water Flow Control */}
          <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
            <img
              src="Controls/pump.png"
              alt="Water Flow"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Water Flow
            </h3>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={waterFlow}
                onChange={toggleWaterFlow}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer ring-4 ring-green-800 dark:bg-green-300 peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ms-3 text-sm font-medium text-green-700 dark:text-gray-700">
                {waterFlow ? "On" : "Off"}
              </span>
            </label>
          </div>

          {/* Fan Control */}
          <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
            <img
              src="Controls/fan.png"
              alt="Fan"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-green-700 mb-2">Fan</h3>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={fanStatus}
                onChange={toggleFan}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer ring-4 ring-green-800 dark:bg-green-300 peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-900">
                {fanStatus ? "On" : "Off"}
              </span>
            </label>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 focus:outline-none"
          >
            Save Changes
          </button>
          {isSaved && (
            <p className="text-green-600 font-semibold mt-4">
              Changes saved successfully!
            </p>
          )}
        </div>

        <div className="text-lg text-gray-700 mt-8 text-center">
          <p className="font-semibold">
            Control your system in real-time for optimized plant growth!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Controls;
