import React from 'react'
import { useState } from 'react';

const Counter = () => {
  const [count, setcount] = useState(0)

  const Counter = () => {
    setcount(count + 1);
  };


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Counter}>Increment</button>

    </div>
  )
}

export default Counter