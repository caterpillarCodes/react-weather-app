import "./index.css";
import CurrentWeatherBox from "./CurrentWeatherBox.js";
import Search from "./search.js";
import CurrentHumidityWind from "./CurrentHumidityWind.js";
import NextDayWeather from "./NextDayWeather.js";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-4">
          <Search />
        </div>
        <div className="row-1">
          <div className="col-2">
            <CurrentWeatherBox />
          </div>
          <div className="col-3">
            <CurrentHumidityWind />
          </div>
        </div>
        <div className="row-2">
          <div className="col-1">
            <NextDayWeather />
          </div>
          <div className="col-1">
            <NextDayWeather />
          </div>
          <div className="col-1">
            <NextDayWeather />
          </div>
          <div className="col-1">
            <NextDayWeather />
          </div>
          <div className="col-1">
            <NextDayWeather />
          </div>
        </div>
      </div>
      <p>
        <a>open source</a> code by caterpillar
      </p>
    </div>
  );
}

export default App;
