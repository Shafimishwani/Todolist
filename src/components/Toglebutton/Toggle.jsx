import React from 'react'
import { useState } from 'react';
import "../Toglebutton/Toggle.css";
import { HiAcademicCap } from "react-icons/hi";


const Toggle = () => {
  const [on,off] = useState(true);


  const Handletoggle = () => {
    off(!on)

  }

  

  
 
  return (
    <div className={`main ${on ? "red" : "green"}`} >
      <div className={`chiled ${on ? "offf" : "onn"}` } onClick={Handletoggle}>
        <span>{on ? "off" : "on"}</span>
      </div>
    </div>
  )
}

export default Toggle