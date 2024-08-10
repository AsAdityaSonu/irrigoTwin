import React from "react";

function WindAir({ weather }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Wind Speed */}
      <div className="flex flex-col items-center justify-evenly p-4 bg-gradient-to-r from-teal-100 to-teal-200 shadow-md rounded-lg w-full h-60">
        <p className="text-xl font-bold text-teal-900">Wind Speed</p>
        <div className="flex items-center justify-center w-20 h-20 mb-2">
          <img
            src="WindAir/storm.png"
            alt="Wind Speed"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-2xl font-semibold text-teal-900">
          {weather && `${weather.wind.speed} m/s`}
        </p>
      </div>

      {/* Air Pressure */}
      <div className="flex flex-col items-center justify-evenly p-4 bg-gradient-to-r from-orange-100 to-orange-200 shadow-md rounded-lg w-full h-60">
        <p className="text-xl font-bold text-orange-900">Air Pressure</p>
        <div className="flex items-center justify-center w-20 h-20 mb-2">
          <img
            src="WindAir/pressure.png"
            alt="Air Pressure"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-2xl font-semibold text-orange-900">
          {weather && `${weather.main.pressure} millibars`}
        </p>
      </div>
    </div>
  );
}

export default WindAir;
