import React from "react";

export default function MaxTemp(props) {
  return <span className="MaxTemp">High {Math.round(props.tempMax)}ºC </span>;
}
