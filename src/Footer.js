import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="coded-by">
        <small>
          This project was coded by Sue McMillan and is{" "}
          <a
            href="https://github.com/Strumhum/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </small>
      </div>
    </div>
  );
}
