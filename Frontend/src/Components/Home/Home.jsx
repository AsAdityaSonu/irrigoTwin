import React from "react";
import { useState, useEffect } from "react";
import Clock from "../boxComponents/Clock/Clock";
import Weather from "../boxComponents/Weather/Weather";
import Temperature from "../boxComponents/Temperature/Temperature";
import TempHumidity from "../boxComponents/TempHumidity/TempHumidity";
import WindAir from "../boxComponents/WindAir/WindAir";

const api = {
  key: "6594d3b53c14c75c84b2f1a80e320763",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Home() {
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
        <div className="flex items-center justify-center h-96 mb-6 rounded-lg bg-gray-50">
          <div className="grid grid-cols-10 gap-4 w-full h-full">
            {/* Left Box (60%) */}
            <div className="col-span-6 flex flex-col gap-4 mb-6 h-full">
              <div className="flex flex-col items-start p-4 h-20 rounded-lg bg-gradient-to-r from-sky-100 to-sky-200 shadow-md w-full">
                <p className="text-2xl font-bold text-sky-800">HOME</p>
                <div className="flex justify-between w-full">
                  <p className="text-xs text-sky-600 font-medium">
                    Powered by Openweather Map
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
                  <Weather weather={weather} />
                </div>

                {/* Right Box (50%) */}
                <div className="col-span-5 bg-gradient-to-r from-green-100 to-green-200 rounded-lg shadow-md p-4 h-full">
                  {weather && weather.main ? (
                    <Temperature temp={weather.main.temp} />
                  ) : (
                    <div>Loading...</div>
                  )}
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
          {weather && weather.main ? (
            <>
              <TempHumidity
                tempMin={weather.main.temp_min}
                tempMax={weather.main.temp_max}
                humidity={weather.main.humidity}
              />
              <WindAir weather={weather} />
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
