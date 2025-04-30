import React,{useState} from 'react'

const Calculator = () => {
  const[firstValue,setFirstValue] = useState("")
  const[secondValue,setSecondValue] = useState("")
  const[operator,setOperator] = useState("")
  const[result,setResult] = useState("")
  const handleSubmit=()=>{
    const num1 = parseFloat(firstValue)
    const num2 = parseFloat(secondValue)
    // console.log(num1,num2)
    if(num1==0 || num2==0)
    {
      setResult("Enter valid Number")
    }
    switch (operator)
    {
      case "+":
        setResult(num1+num2)
        break
      case "-":
        if(num1>num2){
          setResult(num1-num2)
          break;
        }
        else{
          setResult(num2-num1)
          break;
        }
      case "*":
        setResult(num1*num2)
        break;
      case "/":
        if(num1>num2){
          setResult(num1/num2)
          break;
        }
        else{
          setResult(num2/num1)
          break;
        }
    }

  }

  return (
    <>
    <center>
        <h1>Simple_calculator</h1>
        <p>Using  useState</p>
        FirstNumber<input type='text' value={firstValue} onChange={(e)=>setFirstValue(e.target.value)}/><br/>
        SecondNumber<input type='text' value={secondValue} onChange={(e)=>setSecondValue(e.target.value)}/><br/>
        <select value={operator} onChange={(e)=>setOperator(e.target.value)}><br/>
            <option>Select Operator</option>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select><br/>
        Result<input type='text' value={result} readOnly/><br/>
        <button onClick={handleSubmit}>Submit</button>

    </center>
      


    </>
  )
}
export default Calculator;
