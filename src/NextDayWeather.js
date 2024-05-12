import React from "react";
import "./NextDayWeather.css";
import ReactAnimatedWeather from "react-animated-weather";
export default function NextDayWeather() {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 50,
    animate: true,
  };
  return (
    <div className="next-day-forecast">
      <h5>MON</h5>
      <ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
      <p class="next-day-situation">few clouds</p>
      <span className="temperature-max">15º</span>
      <span className="temperature-min">4º</span>
    </div>
  );
}
