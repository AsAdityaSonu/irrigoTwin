import React from "react";
import { useState, useEffect } from "react";
import Clock from "../boxComponents/Clock/Clock";
import Weather from "../boxComponents/Weather/Weather";
import Temperature from "../boxComponents/Temperature/Temperature";

const api = {
  key: "6594d3b53c14c75c84b2f1a80e320763",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Dashboard() {
  const [location, setLocation] = useState("Fetching location...");
  const [weather, setWeather] = useState(null);

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
            setWeather(data);
            console.log(data);
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
                <div className="col-span-5 w-full bg-lime-100 rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center">
                  <Weather weather={weather} />
                </div>

                {/* Right Box (50%) */}
                <div className="col-span-5 bg-green-100 rounded-lg shadow-md p-4 h-full">
                  <Temperature weather={weather} />
                </div>
              </div>
            </div>
            {/* Right Box (40%) */}
            <div className="col-span-4 bg-rose-100 rounded-lg shadow-md h-full ">
              <Clock />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-96 mb-4 rounded-lg bg-gradient-to-r from-pink-100 to-pink-200 shadow-md p-4">
          {weather && (
            <div>
              <p className="text-2xl font-semibold text-pink-800">
                Max Temperature: {(weather.main.temp_max - 273.15).toFixed(2)}°C
              </p>
              <p className="text-2xl font-semibold text-pink-800">
                Min Temperature: {(weather.main.temp_min - 273.15).toFixed(2)}°C
              </p>
              <p className="text-2xl font-semibold text-pink-800">
                Humidity: {weather.main.humidity}%
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* <div className="flex items-center justify-center h-28 rounded-lg bg-gradient-to-r from-teal-100 to-teal-200 shadow-md">
            <p className="text-2xl font-semibold text-pink-800">
              Wind Speed: {weather.wind.speed}m/s
            </p>
          </div> */}

          {/* <div className="flex items-center justify-center h-28 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 shadow-md">
          <p className="text-2xl font-semibold text-pink-800">
                Air Pressure: {weather.main.pressure} millibars
              </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
