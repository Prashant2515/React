import { useState } from "react";

function Count ()
{
    const [count,setCount] = useState(0)
    const Increrment = ()=>
    {
        // count = count + 1;
        setCount(count+1); //as setCount is an event so here we pass the value 
    }
    const Decrement =()=>
    {
        // count = count - 1;
        setCount(count-1);
    }

    return (
      <>
      <center>
        <br></br>
        {/* <input type="text">Count:{setCount}</input><br></br> */}
        <p>Count:{count}</p>
        <button onClick={Increrment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        
      </center>
      </>
    )

}
export default Count;
