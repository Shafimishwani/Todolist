import React from 'react'

const Buttonhandle = () => {
  const Handlebutton = (user) =>{
    console.log(`Hey ${user} wellcome boss`);

  }
  return (
    <div>
      <button onClick={()=> Handlebutton("shafi")}>Click Me 2</button>
    </div>
  )
}

export default Buttonhandle