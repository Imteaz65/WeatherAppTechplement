function UnixTimeStapToReadableFormat({dt}){

  // Assuming dt is your Unix timestamp

  // Convert Unix timestamp to milliseconds
  const unixTimeStampToMilliseconds = dt * 1000;

  // Create a new Date object
  const dateObj = new Date(unixTimeStampToMilliseconds);

  // Print the human-readable date
 
  // console.log("Date:", dateObj.toISOString().slice(0,10));


  return(
    <>
        <p>{dateObj.toISOString().slice(0,10)}</p>
    </>
  )
}
export default UnixTimeStapToReadableFormat;