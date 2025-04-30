import React, { useState } from "react";
const Cal = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = () => {
    // console.log(firstValue, secondValue);
    const sum = parseInt(firstValue) + parseInt(secondValue);
    setResult(sum);
  };

  return (
    <div>
      <input
        type="text"
        value={firstValue}
        onChange={(e) => setFirstValue(e.target.value)}
      />
      <input
        type="text"
        value={secondValue}
        onChange={(e) => setSecondValue(e.target.value)}
      />
      <input type='text'value={result} />
      {/* <p>{result}</p> */}
      {/* {result}&&<p></p> */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default Cal;
