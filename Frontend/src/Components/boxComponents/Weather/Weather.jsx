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
    <div >
      {weather && (
        <div className="text-center">
          <img
            src={getWeatherIcon(weather.weather[0].main)}
            alt="Weather Condition"
            className="mx-auto my-4 w-40 h-40"
          />
          <p className="text-xl text-orange-800 font-bold">
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
