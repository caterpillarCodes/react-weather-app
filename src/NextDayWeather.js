import React from "react";
import "./NextDayWeather.css";
import ReactAnimatedWeather from "react-animated-weather";
export default function NextDayWeather() {
  return (
    <div className="next-day-forecast">
      <h5>MON</h5>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color={"goldenrod"}
        size={50}
        animate={true}
      />
      <p className="next-day-situation">few clouds</p>
      <span className="temperature-max">15º</span>
      <span className="temperature-min">4º</span>
    </div>
  );
}
