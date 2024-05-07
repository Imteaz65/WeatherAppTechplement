import { useEffect, useState } from "react";
import CurrentWeather from "./Components/CurrentWeather";
import SearchBar from "./Components/SearchBar";
import ParentContainer from "./Components/ParentContainer";

function App() {
  const [todayWeather,setTodayWeather]=useState(0);

  
  const url=`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=0b7f3ba924a83fed885bf8ac75d702d5`
  const url2=`https:api.openweathermap.org/data/2.5/forecast?q=Kolkata&appid=0b7f3ba924a83fed885bf8ac75d702d5`;
  

  useEffect(function(){
    getWeather();
    // getWeatherFourDays();
  },[])

  async function getWeather(placeName="kolkata"){

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=0b7f3ba924a83fed885bf8ac75d702d5`);
      const jsonResponse= await response.json();
      

      setTodayWeather(jsonResponse);
      // console.log(jsonResponse,"json response");
    } catch (error) {
      console.error(error);
    }

  }

  async function getWeatherFourDays(){
    try {
      const response = await fetch(url2);
      const ks= await response.json();
      
      console.log(ks);
    } catch (error) {
      console.error(error);
    }
  }

  function cityName(e){
    console.log("cityname:",e.current.value)

    getWeather(e.current.value)

    e.current.value="";

  }


  return (
    <>
      <ParentContainer className="ParentContainer">
        <SearchBar cityName={cityName}></SearchBar>
        {todayWeather !==0 && <CurrentWeather todayWeather={todayWeather}></CurrentWeather>}
      </ParentContainer>
      
    </>
  )

}
export default App
