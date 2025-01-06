import React from 'react'
import { useState } from 'react'

const Usestate = () => {
  const [count, setcount] = useState(0)

  const Call = () =>{
    setcount(() => count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Call}>Increment</button>
    </div>
  )
}

export default Usestate