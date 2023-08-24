import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="coded-by">
        <small>
          <a
            href="https://github.com/Strumhum/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>
          by Sue McMillan using React, HTML, CSS, Bootstrap and Openweather &
          Geolocation APIs.
        </small>
      </div>
    </div>
  );
}
