import React from 'react'
import Cardone from "./components/Cardone";
import Profile from "./components/Profile";
import "./components/Cardone.css";


const App = () => {
  return ( 
    <section className='container'>
      <h1 className='common-heading'>This My Card List</h1>
      <Cardone />
      {/*<Profile />*/}
      
    </section>
   
  )
}
export default App;


