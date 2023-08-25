import React from "react";

export default function MinTemp(props) {
  return <span className="MinTemp">Low {Math.round(props.tempMin)}ºC</span>;
}
