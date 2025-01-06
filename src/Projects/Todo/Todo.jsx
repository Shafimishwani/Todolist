import React from 'react'
import "../Todo/Todo.css"
import { useState } from 'react';
import Todoform from './Todoform';
import Datetime from './Datetime';
import Todolist from './Todolist';


const todokey = "reactTodo";

const Todo = () => {
  const [task, setTask] = useState(() => {
    try {
      const rawtodos = localStorage.getItem(todokey);
      return rawtodos ? JSON.parse(rawtodos) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage:", error);
      return [];
    }
  });

 

  const handleformsubmit = (inputValue) => {

const {id , content, checked} = inputValue;
  if(!content) return;
  //if(task.includes(inputValue))return;
  const ifTodoContentMatched = task.find(
    (curTask) => curTask.content === content
  );
  setTask((prevTask) => [...prevTask, {id, content, checked}]);
  if(ifTodoContentMatched) return;

  };

 
  localStorage.setItem(todokey, JSON.stringify(task));

  const removeitem = (value) => {
    const updateditem = task.filter((curTask) => {
      return curTask.content !== value;
    });
    setTask(updateditem);
  };

  const removeall = () =>{
    setTask([]);
  };

  const handlecheckedtodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if(curTask.content === content){
        return{ ...curTask, checked : !curTask.checked};
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <>
    <section className='back'>
      <h1>Todo List </h1>
      <Datetime />
     
      

    <Todoform onAddtodo={handleformsubmit} evint={removeall}/>
      

      <section className='unordlist'>
      <ul>
        {
          task.map((curTask) => {
            return (
              <Todolist
               key={curTask.id}
               data={curTask.content}
               checked ={curTask.checked}
                onhandledeletetodo={removeitem}
                onHandleCheckedTodo ={handlecheckedtodo} />



            )
          })
        }
      </ul>

    </section>


    </section>

   



    </>
  )
}

export default Todo