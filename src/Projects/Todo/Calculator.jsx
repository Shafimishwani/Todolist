import React from 'react'
import "../Todo/Todo.css"
import { useState } from 'react'


const Calculator = () => {
  const [num1, setnum1] = useState("")
  const [num2, setnum2] = useState("")
  const [result, setresult] = useState("")

  const Add = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setresult(result.toString());
    
  };

  
  const subtract = () => {
    const result = parseFloat(num1) - parseFloat(num2);
    setresult(result.toString());
    
  };



  return (
    <div className='divv'>

      <input type='number' value={num1} onChange={(e) => setnum1(e.target.value)}/>
      <input type='number' value={num2} onChange={(e) => setnum2(e.target.value)}/>
      <button onClick={Add}>Add</button>
      <button onClick={subtract}>subtract</button>

      <h1> Result : {result}</h1>
    </div>
  )
}

export default Calculator