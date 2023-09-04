import React from "react";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <WeatherForecast />
      <Footer />
    </div>
  );
}

export default App;
