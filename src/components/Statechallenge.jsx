import React, { useState } from 'react'

const Statechallenge = () => {

  const [first, setfirst] = useState( [
    {Name : "Shafi" , Age : "25"},
    {Name : "Khan" , Age : "29"},
    {Name : "Akbar" , Age : "30"},
    {Name : "Shafi", Age : "26"},
    {Name : "Mishwnai" , Age : "35"},
  ]);

  const Usercount = first.length;

  const Average = first.reduce((accum, curElem) => accum + Number(curElem.Age), 0) / Usercount ;

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {first.map((curElem , index) => {
          return(
           <li key={index}>
            {curElem.Name} - {curElem.Age}
        
           </li>
          );
        })};
       
       
      </ul>

      <p>User Count {Usercount}</p>
      <p>User average {Average}</p>


      
    </div>
  )
}

export default Statechallenge