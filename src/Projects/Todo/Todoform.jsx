import React from 'react'
import { useState } from 'react'
import "../Todo/Todo.css"


const Todoform = ({onAddtodo,evint}) => {
  const [inputValue, setinputValue] = useState({})

  const Handleinputchange =(value) =>{
    setinputValue({id:value, content: value, checked: false});
 
   }
const handleformsubmit = (event) => {
  event.preventDefault();
  onAddtodo(inputValue);
  setinputValue({id:"", content: "", checked: false});
};

  return (
    <section className='Todoform'>
        <form className='form' onSubmit={handleformsubmit}>
            <div className='Todoinput'>
              <input type='text' className='todosinput' autoComplete='off' value={inputValue.content || ''} onChange={(event) => Handleinputchange(event.target.value)}></input>

              <button type='submit' className='but'>Add Task</button>
    
            </div>
    
            <div>
            <button className='clearall' onClick={evint}>Clear All</button>
            </div>

          </form>
          </section>
  )
}

export default Todoform
