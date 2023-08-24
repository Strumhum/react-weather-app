import React from "react";
import Search from "./Search";
import "./App.css";
import "./icons.css";

export default function Today() {
  let weatherData = {
    city: "London",
    date: "Friday 16:19",
    main: "Cloudy",
    humidity: 27,
    wind: 8,
    iconUrl: "",
  };
  return (
    <div className="Today">
      <div className="row weather-today">
        <div className="col-sm-5">
          <h1>{weatherData.city}</h1>
          <h4>{weatherData.date}</h4>
          <h4>{weatherData.main}</h4>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {weatherData.wind} mph</p>
        </div>
        <div className="col-sm-3 weather-graphic">
          <i className="main-graphic icon-wi_cloudy">{weatherData.iconUrl}</i>
        </div>
        <div className="todaytemp col-sm-4">
          <p className="main-temp">22°C</p>
          <h5 className="main-high-low">
            <span className="high-temp">High 27°C</span>
            <span className="low-temp"> Low 15°C</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
