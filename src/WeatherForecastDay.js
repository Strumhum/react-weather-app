import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div>
        <div className="ForecastDay">{day()}</div>
        <i className="DailyIcon">
          <ForecastIcon
            weatherForecastDescription={props.data.weather[0].main}
          />
        </i>
        <p className="ForecastHighLow">
          <span className="MaxTemp">{maxTemperature()}C</span>
          <span className="MinTemp">{minTemperature()}C</span>
        </p>
      </div>
    </div>
  );
}
