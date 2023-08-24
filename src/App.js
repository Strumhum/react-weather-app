import React from "react";

import "./App.css";
import "./icons.css";

import Weather from "./Weather";
import Search from "./Search";
import Location from "./Location";
import Today from "./Today";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>

      <Search />
      <Location />
      <Today />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
