import React from "react";
import Weather from "./Weather";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import MinTemp from "./MinTemp";
import MaxTemp from "./MaxTemp";

import "./Weather.css";

export default function WeatherToday(props) {
  return (
    <div className="WeatherToday">
      <div className="row weather-today">
        <div className="col-sm-5">
          <h1>{props.data.city}</h1>
          <h4>
            <FormatDate date={props.data.date} />
          </h4>
          <h4>{props.data.description}</h4>
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind: {props.data.wind} km/h</p>
        </div>
        <div className="col-sm-3 weather-graphic">
          <i className="main-graphic icon-wi_sunny">{props.iconUrl}</i>
        </div>
        <div className="todaytemp col-sm-4">
          <div className="main-temp">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="main-high-low">
            <span>
              <MaxTemp tempMax={props.data.mainHighTemp} />
              <MinTemp tempMin={props.data.mainLowTemp} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
