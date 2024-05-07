
import { IoMdSunny } from "react-icons/io";

import { BsFillCloudSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillCloudMoonFill } from "react-icons/bs";

import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudMoonRain } from "react-icons/fa";

import { BsFillCloudSnowFill } from "react-icons/bs";
import { LuHaze } from "react-icons/lu"
import { TbHazeMoon } from "react-icons/tb";

import { useEffect, useState } from "react";

function WeatherTypeLogo({weather,sys}){

  const [isMorning,setisMorning]=useState(true);

  const {id:weatherId}=weather[0];

  const currentTime = new Date();
  const hours = currentTime.getHours();

  useEffect(function(){
    if(hours>=18 || hours<=6){
      setisMorning(false);
    }
  },[])
  
  
  return(
    <>
      <div className="weatherLogo" style={{fontSize:"100px",position:"absolute",left:"53%",top:"40%"}}>

        {weatherId===800 && isMorning ?<IoMdSunny />  : weatherId===800 && !isMorning ?<RiMoonClearFill />
        :weatherId>=801 && weatherId<=804 && isMorning ? <BsFillCloudSunFill /> :weatherId>=801 && weatherId<=804 && !isMorning ? <BsFillCloudMoonFill />
        :weatherId>=500 && weatherId<=531 && isMorning  ? <FaCloudSunRain /> :weatherId>=500 && weatherId<=531 && !isMorning  ? <FaCloudMoonRain /> 
        :weatherId>=600 && weatherId<=622 && isMorning  ? <BsFillCloudSnowFill />
        :weatherId>=701 && weatherId<=781 && isMorning  ? <LuHaze /> :weatherId>=701 && weatherId<=781 && !isMorning  ? <TbHazeMoon/>  : isMorning ? <BsFillCloudSunFill />  : <BsFillCloudMoonFill />
        }  
      </div>
      
    </>
  )
}
export default WeatherTypeLogo;