import React from "react";
import "./CurrentHumidityWind.css";
export default function CurrentHumidityWind() {
  return (
    <div className="CurrentHumidityWind">
      <p>
        Humidity: <span id="humidity"></span>%
      </p>
      <p>
        Wind: <span id="wind"></span> km/h
      </p>
    </div>
  );
}
