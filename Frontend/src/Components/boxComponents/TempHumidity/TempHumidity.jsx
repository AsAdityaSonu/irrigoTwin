import React from "react";

function TempHumidity({ tempMin, tempMax, humidity }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 mb-4 rounded-lg bg-gradient-to-r">
      <div className="grid grid-cols-3 gap-4 w-full h-full">
        {/* Max Temperature */}
        <div className="flex flex-col items-center justify-between p-4 bg-gradient-to-r from-red-100 to-red-200 rounded-lg shadow-md w-full h-full">
          <p className="text-xl font-bold text-red-800 mb-2">
            Max Temperature
          </p>
          <div className="w-20 h-20 mb-2">
            <img
              src="TempHumidity/high-temperature.png"
              alt="Max Temperature Icon"
              className="w-full h-full"
            />
          </div>
          <p className="text-2xl font-semibold text-red-800">
            {(tempMax - 273.15).toFixed(2)}°C
          </p>
        </div>

        {/* Min Temperature */}
        <div className="flex flex-col items-center justify-between p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md w-full h-full">
          <p className="text-xl font-bold text-blue-900 mb-2">
            Min Temperature
          </p>
          <div className="w-20 h-20 mb-2">
            <img
              src="TempHumidity/low-temperature.png"
              alt="Min Temperature Icon"
              className="w-full h-full"
            />
          </div>
          <p className="text-2xl font-semibold text-blue-900">
            {(tempMin - 273.15).toFixed(2)}°C
          </p>
        </div>

        {/* Humidity */}
        <div className="flex flex-col items-center justify-between p-4 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-lg shadow-md w-full h-full">
          <p className="text-xl font-bold text-cyan-800 mb-2">Humidity</p>
          <div className="w-20 h-20 mb-2">
            <img
              src="TempHumidity/humidity.png"
              alt="Humidity Icon"
              className="w-full h-full"
            />
          </div>
          <p className="text-2xl font-semibold text-green-800">
            {humidity }%
          </p>
        </div>
      </div>
    </div>
  );
}

export default TempHumidity;