import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: ``,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `66704d6e2b630aa672201ea21ee8f291`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
            <input type="submit" value="Search" className="form-control btn" />
          </div>
        </div>
      </form>
    </div>
  );
}
