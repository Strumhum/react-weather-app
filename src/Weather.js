import React, { useState } from "react";
import axios from "axios";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";
import "./icons.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  // const [weatherDescription, setWeatherDescription] = useState("");

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      weatherDescription: response.data.weather[0].main,
      city: response.data.name,
      mainHighTemp: response.data.main.temp_max,
      mainLowTemp: response.data.main.temp_min,
    });
  }

  function search() {
    const apiKey = `1a2b7258ebd456c01aef9175dfe8b709`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  // get city by geolocation - coordinates
  function showLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h2>Weather</h2>

        <div className="Search">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="search-field col-sm-10">
                <input
                  type="search"
                  className="form-control"
                  name="search"
                  placeholder="Enter a city..."
                  onChange={updateCity}
                  autoFocus="on"
                  autoComplete="off"
                />
              </div>
              <div className="col-sm-2">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="Location">
          <div className="row location">
            <div className="col-sm-12 d-inline-flex justify-content-between align-items-center">
              <button className="location-button" onClick={getCurrentLocation}>
                ▹ Use my current location
              </button>
            </div>
          </div>
        </div>
        <WeatherToday data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading weather...";
  }
}
