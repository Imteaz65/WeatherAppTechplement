function KelvinToCelcius({temp}){

  // Assuming temp is the temperature in Kelvin
  const tempKelvin = temp;

  // Convert Kelvin to Celsius
  const tempCelsius = tempKelvin - 273.15;

  // Print the temperature in Celsius with degree symbol
  // console.log("Temperature in Celsius:", tempCelsius.toFixed(2) + "°C");

  return(
    <>
      <div>{tempCelsius.toFixed(2) + "°C"}</div>
    </>
  )
}
export default KelvinToCelcius