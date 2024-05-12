import React from "react";
import "./CurrentWeatherBox.css";
import ReactAnimatedWeather from "react-animated-weather";
import { FaLocationDot } from "react-icons/fa6";

export default function CurrentWeatherBox() {
  return (
    <div className="CurrentWeatherBox">
      <div className="row">
        <div className="col">
          <FaLocationDot />
        </div>
        <div className="col city-date">
          <p className="current-city">Berlin</p>
          <p className="current-date">Wednesday 16:08 | AUG 18</p>
        </div>
      </div>
      <p className="current-temperature">
        <span id="temperature">17</span>°<span id="temperature-unit">C</span>
        <sub style={{ fontSize: "25px" }}>
          |
          <a href="/" id="unit-sub">
            °F
          </a>
        </sub>
      </p>
      <div className="row">
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_NIGHT"
          color={`#101319`}
          size={60}
          animate={true}
        />
        <p className="current-situation-text">Mostly cloudy</p>
      </div>
    </div>
  );
}
