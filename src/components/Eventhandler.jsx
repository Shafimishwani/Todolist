import React from 'react'


const Eventhandler = () => {

  const Call = (user) => {
    alert(`Hey ${user} You are Clicked`);
  }

  const Mouseover = () => {
    alert("Hey Your mouse hover");
  }
 
  return (
    <div>

      <Handleevent onClick={() => Call("shafi")} onmouseover={Mouseover}/>

    </div>
  )
}

const Handleevent = (props) =>{
  return(
    <>
    <button onClick={props.onClick}>Click Here</button>
    <button onMouseEnter={props.onmouseover}>Mouse over</button>
    </>
  )
}


export default Eventhandler