import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Todolist = ({ data , onhandledeletetodo, checked , onHandleCheckedTodo}) => {
  return (
    <>
    <li>
                <span className={checked ? "checklist" : "notchecklist"}>{data}</span>
                <button className='button checkbutton' onClick={() => onHandleCheckedTodo(data)}>
                <IoMdCheckmark />
                </button>
                <button className='button deletebutton' onClick={() => onhandledeletetodo(data)}>
                <MdDelete />

                </button>

              </li>
    
    </>
  )
}

export default Todolist