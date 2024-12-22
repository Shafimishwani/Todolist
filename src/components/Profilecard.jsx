import React from 'react'

const Profilecard = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.para}</p>
      <div>{props.greeting}</div>
   
    <div>{props.children}</div>
    </div>
  )
}

export default Profilecard