import KelvinToCelcius from "./KelvinToCelcius";
import PressureHumidityWind from "./PresuureHumidityWindCard";
import SearchBar from "./SearchBar";
import UnixTimeStapToReadableFormat from "./UnixTimeStapToReadableFormat";

import { FaLocationDot } from "react-icons/fa6";
import WeatherTypeLogo from "./WeatherTypeLogo";

function CurrentWeather({ todayWeather }) {
  const { main, weather, name, wind, dt,sys } = todayWeather;
  const { humidity, pressure, temp,} = main;


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-2 pb-2">
            <div className="location d-flex justify-content-center align-center mt-4 mb-2 p-1" >
              <FaLocationDot className="fs-5 mt-1"/>
              <h3 className="placeName fs-4">
                {name}
              </h3>

              <WeatherTypeLogo weather={weather} sys={sys}></WeatherTypeLogo>
              
              
            </div>

            <UnixTimeStapToReadableFormat
              dt={dt}
            ></UnixTimeStapToReadableFormat>

            <h1 className="mt-3 mb-3">
              <KelvinToCelcius temp={temp}></KelvinToCelcius>
            </h1>

            <h4 className="mb-4">{weather[0].main}</h4>

            <PressureHumidityWind
              pressure={pressure}
              humidity={humidity}
              wind={wind}
            >
              {" "}
            </PressureHumidityWind>
          </div>
        </div>
      </div>
    </>
  );
}
export default CurrentWeather;
