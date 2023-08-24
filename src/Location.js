import React from "react";
import "./App.css";

export default function Location() {
  return (
    <div className="Location">
      <div className="row location">
        <div className="col-sm-4">
          <button className="location-button">▹ Use my current location</button>
        </div>
      </div>
    </div>
  );
}
