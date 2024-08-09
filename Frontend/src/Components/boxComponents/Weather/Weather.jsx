import React from "react";

const getWeatherIcon = (weatherMain) => {
  switch (weatherMain) {
    case "Clouds":
      return "weather/clouds.png";
    case "Clear":
      return "weather/clear.png";
    case "Rain":
      return "weather/rain.png";
    case "Drizzle":
      return "weather/drizzle.png";
    case "Mist":
      return "weather/mist.png";
    case "Snow":
      return "weather/snow.png";
    default:
      return "weather/clear.png";
  }
};

function Weather({ weather }) {
  return (
    <div className="col-span-5 w-full bg-lime-100 rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center">
      {weather && (
        <div className="text-center">
          <img
            src={getWeatherIcon(weather.weather[0].main)}
            alt="Weather Icon"
            className="mx-auto my-4 w-40 h-40"
          />
          <p className="text-xl text-yellow-800 font-bold">
            {weather
              ? weather.weather[0].description
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              : "Loading..."}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
