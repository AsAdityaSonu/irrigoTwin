import React from "react";
import { useState, useEffect } from "react";
import Clock from "../boxComponents/Clock/Clock";
import axios from "axios";
import Temperature from "../boxComponents/Temperature/Temperature";

const api = {
  key: "6594d3b53c14c75c84b2f1a80e320763",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Dashboard() {
  // API Call
  const [location, setLocation] = useState("Fetching location...");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(
          `${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}`
        )
          .then((res) => res.json())
          .then((data) => {
            setLocation(`${data.name}, ${data.sys.country}`);
          })
          .catch(() => {
            setLocation("Location not found");
          });
      },
      (error) => {
        setLocation("Location access denied");
      }
    );
  }, []);

  // Backend API Call
  const [lastUpdated, setLastUpdated] = useState("Fetching data...");
  const [temperature, setTemperature] = useState("Fetching data...");
  const [humidity, setHumidity] = useState("Fetching data...");
  const [soilMoisture, setSoilMoisture] = useState("Fetching data...");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    const fetchData = () => {
      axios
      .get("https://irrigo-twin-backend-git-main-asadityasonus-projects.vercel.app/extract/extractInfo")
      .then((res) => {
          const { timestamp, temperature, humidity, soil_moisture } = res.data;
          setLastUpdated(new Date(timestamp).toLocaleString());
          setTemperature(`${temperature} °C`);
          setHumidity(`${humidity} %`);
          setSoilMoisture(`${soil_moisture} %`);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    // immediately on mount
    fetchData();

    // 3 minutes
    const intervalId = setInterval(fetchData, 180000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen min-w-[730px] bg-gray-50 p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-50 border-e rounded-lg shadow-lg bg-gray-50">
        <div className="flex items-center justify-center h-96 mb-6 rounded-lg bg-white">
          <div className="grid grid-cols-10 gap-4 w-full h-full">
            {/* Left Box (60%) */}
            <div className="col-span-6 flex flex-col gap-4 mb-6 h-full">
              <div className="flex flex-col items-start p-4 h-20 rounded-lg bg-gradient-to-r from-sky-100 to-sky-200 shadow-md w-full">
                <p className="text-2xl font-bold text-sky-800">DASHBOARD</p>
                <div className="flex justify-between w-full">
                  <p className="text-xs text-sky-600 font-medium">
                    Realtime Data
                  </p>
                  <p className=" text-base text-sky-600 font-medium">
                    {location}
                  </p>
                </div>
              </div>

              {/* New Boxes */}
              <div className="flex-1 grid grid-cols-10 gap-4 w-full">
                {/* Left Box (50%) */}
                <div className="col-span-5 w-full bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center">
                  <p className="text-xl font-semibold text-gray-700">
                    Last Updated:
                  </p>
                  {lastUpdated && lastUpdated.includes(",") ? (
                    <div className="mt-2 flex flex-col items-center">
                      <p className="text-3xl font-bold text-orange-800">
                        {lastUpdated.split(",")[0]} {/* Date part */}
                      </p>
                      <p className="text-lg font-medium text-orange-700 mt-1">
                        {lastUpdated.split(",")[1].trim()} {/* Time part */}
                      </p>
                    </div>
                  ) : (
                    <p className="text-2xl font-medium text-orange-700">
                      Not available
                    </p>
                  )}
                </div>

                {/* Right Box (50%) */}
                <div className="col-span-5 bg-gradient-to-r from-green-100 to-green-200 rounded-lg shadow-md p-4 h-full">
                  <Temperature temp={parseInt((temperature), 10)+273.15} />
                </div>
              </div>
            </div>
            {/* Right Box (40%) */}
            <div className="col-span-4 rounded-lg shadow-md h-full">
              <Clock />
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6">
            {/* Humidity */}
            <div className="flex flex-col items-center justify-evenly p-4 bg-gradient-to-r from-teal-100 to-teal-200 shadow-md rounded-lg w-full h-60">
              <p className="text-xl font-bold text-teal-900">Humidity</p>
              <div className="flex items-center justify-center w-20 h-20 mb-2">
                <img
                  src="TempHumidity\humidity.png"
                  alt="Humidity"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-2xl font-semibold text-teal-900">
                {humidity && `${humidity}`}
              </p>
            </div>

            {/* Soil Moisture */}
            <div className="flex flex-col items-center justify-evenly p-4 bg-gradient-to-r from-orange-100 to-orange-200 shadow-md rounded-lg w-full h-60">
              <p className="text-xl font-bold text-orange-900">Soil Moisture</p>
              <div className="flex items-center justify-center w-20 h-20 mb-2">
                <img
                  src="soilMoisture\soilMoisture.png"
                  alt="Soil Moisture"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-2xl font-semibold text-orange-900">
                {soilMoisture && `${soilMoisture}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
