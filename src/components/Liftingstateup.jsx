import React, { useState } from 'react'

export const Liftingstateup = () => {
  const [inputValue , setinputValue] = useState("");


  return (
    <div>
      <Inputvalue  inPutValue={inputValue} outputValue={setinputValue}/>
      <Outputvalue inPutValue={inputValue}/>
    </div>
  )
}


 export const Inputvalue = ({inPutValue,outputValue}) => {



  return(
    <input type='text' placeholder='Enter Your Name ' value={inPutValue} onChange={(e) => outputValue(e.target.value)} ></input>
  )
}



export const Outputvalue = ({inPutValue}) => {
  return (
    <div>Inputvalue{inPutValue}</div>
  )
}

