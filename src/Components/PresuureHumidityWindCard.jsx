import { FaWater } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

import { RiWaterPercentFill } from "react-icons/ri";

function PressureHumidityWind({pressure,humidity,wind,}){

  return(
    <>
      <div className="container-fluid pressureHumidityWindContainer mt-2 mb-2">

        <div className="row">

          <div className="col-4 text-center pressure">
  
            <div className="logo fs-5">
              <FaWater />
            </div>
            {pressure} <br />
            Pressure            
          </div>

          <div className="col-4 text-center">

            <div className="logo fs-5">
              <RiWaterPercentFill />

            </div>
            {humidity}% <br />
            Humidity
            
          </div>
          
          <div className="col-4 text-center">

            <div className="logo fs-5">
              <FaWind />

            </div>
            {wind.speed} M/S <br />
            Wind Speed 

          </div>

        </div>
      </div>
    </>
  )
}
export default PressureHumidityWind;