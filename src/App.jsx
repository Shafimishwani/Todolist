import React from 'react'
import Cardone from "./components/Cardone";
import Profile from "./components/Profile";
import "./components/Cardone.css";
import Eventhandler from "./components/Eventhandler";
import Usestate from './components/State/Usestate';
import Statechallenge from "./components/Statechallenge";
import {Liftingstateup} from "./components/Liftingstateup";
import Toggle from "./components/Toglebutton/Toggle"
import "./components/Toglebutton/Toggle.css"
import "./App.css"
import Todo from "./Projects/Todo/Todo.jsx";
import Calculator from './Projects/Todo/Calculator.jsx';
import Counter from './Projects/Todo/Counter.jsx';


const App = () => {

    



 
  return ( 
    <section className="container">

      
    <h1 className='common-heading'>This Is My Todo List</h1>

     {/* <Eventhandler />*/} 
     {/*<Cardone />*/ }  
     {/*<Usestate /> */}
     {/*<Statechallenge />*/}
      
      {/*<Profile />*/}
      {/*<Buttonhandle />*/}
      {/* <Liftingstateup /> */}
      {/* <Toggle />  */}     
      <Todo />
      {/* <Calculator /> */}
      {/* <Counter /> */}

    </section>
   
  )
}
export default App;


