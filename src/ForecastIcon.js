import React from "react";

const ForecastIcon = ({ weatherForecastDescription }) => {
  let className;

  switch (weatherForecastDescription) {
    case "Clear":
      className = "icon-wi_sunny";
      break;
    case "Clouds":
      className = "icon-wi_cloudy";
      break;
    case "Rain":
      className = "icon-wi_rain";
      break;
    case "Thunderstorm":
      className = "icon-wi_thunderstorm";
      break;
    case "Drizzle":
      className = "icon-wi_drizzle";
      break;
    case "Snow":
      className = "icon-wi_snowflake";
      break;
    case "Fog":
      className = "icon-wi_fog";
      break;
    case "Haze":
      className = "icon-wi_fog";
      break;
    case "Mist":
      className = "icon-wi_fog";
      break;
    case "Tornado":
      className = "icon-wi_tornado";
      break;
    default:
      className = "icon-wi_partly-sunny";
      break;
  }

  return <div className={`DailyIcon ${className}`}></div>;
};

export default ForecastIcon;
