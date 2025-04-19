import { useState } from "react";

function Bulb() {
  const [source,setSource] = useState('offbulb.png');
  const handleOnClick = () => {
    setSource('onbulb.png')
  }
  const handleOffClick = () =>
  {
    setSource('offbulb.png')
  }
  return (
    <center>
      <img src={source} alt="Bulb" width ="200px" height="200px" />
      <button onClick={handleOnClick}>On</button>
      <button onClick={handleOffClick}>Off</button>
    </center>
  )
}
export default Bulb;



