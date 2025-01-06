import React, { useEffect } from 'react'
import "../Todo/Todo.css"
import { useState } from 'react';



const Datetime = ({value}) => {
  const [datetime, setdatetime] = useState("");

useEffect(() => {
  const interval =  setInterval(() => {
    const now = new Date();
    const formatedDate = now.toLocaleDateString();
    const formatedTime = now.toLocaleTimeString();

    setdatetime(`${formatedDate} - ${formatedTime}`)
  }, 1000)

  return() => clearInterval(interval);


}, []);

  return (
    <>
   <h1>{datetime}</h1>
    </>
  )
}

export default Datetime