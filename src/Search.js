import React from "react";
import "./App.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="search-field col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city..."
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
