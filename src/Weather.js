import React, { useState } from "react";
import axios from "axios";
import WeatherToday from "./WeatherToday";
import "./Weather.css";
import "./icons.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: ``,
      description: response.data.weather[0].main,
      city: response.data.name,
      mainHighTemp: response.data.main.temp_max,
      mainLowTemp: response.data.main.temp_min,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `66704d6e2b630aa672201ea21ee8f291`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
            <div className="col-sm-4">
              <button className="location-button">
                ▹ Use my current location
              </button>
            </div>
          </div>
        </div>

        <WeatherToday data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
