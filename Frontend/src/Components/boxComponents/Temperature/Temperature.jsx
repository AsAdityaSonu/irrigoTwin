import React from "react";

function Temperature({ temp: propTemp }) {
  const temp = propTemp ? (propTemp - 273.15).toFixed(2) : 0;
  const maxTemp = 55;
  const fillPercent = Math.min((temp / maxTemp) * 100, 100);

  // color
  let fillColor;
  if (temp <= 0) {
    fillColor = "bg-blue-500"; 
  } else if (temp > 0 && temp <= 20) {
    fillColor = "bg-green-500";
  } else if (temp > 20 && temp <= 35) {
    fillColor = "bg-yellow-500";
  } else {
    fillColor = "bg-red-500";
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Thermometer */}
      <div className="relative flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-between w-16 h-48">
          <div
            className={`absolute bottom-0 w-12 ${fillColor} rounded-b-full`}
            style={{ height: `${fillPercent}%` }}
          ></div>
          <div className="border-4 border-gray-300 rounded-full w-16 h-full"></div>
          <div className={`absolute bottom-0 w-16 h-16  ${fillColor} rounded-full border-4 border-gray-300`}></div>
        </div>
      </div>
      {/* Text */}
      <p className="text-xl text-green-800 font-bold text-center pt-1">
        {propTemp ? `${temp}°C` : "Loading..."}
      </p>
    </div>
  );
}

export default Temperature;