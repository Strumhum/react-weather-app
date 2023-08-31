import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="day col-sm-2 text-center">
          <div className="forecastDay">Friday</div>
          <i className="icon-wi_sunny"></i>
          <p className="ForecastHighLow">
            <span className="MaxTemp">25°C</span>
            <span className="MinTemp">15°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
