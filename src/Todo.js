import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
const Todo = ({todo, toggleComplete, deleteTask}) => {
   
  return (
    <li className={todo.complete ?' flex justify-between bg-slate-400 p-4 my-2 capitalize':' flex justify-between bg-slate-200 p-4 my-2 capitalize'}>
        <div className=' flex'>
            <input onChange={()=>toggleComplete(todo)} type="checkbox" checked={todo.complete? 'checked':''} />
            <p onClick={()=>toggleComplete(todo)} className={todo.complete? 'ml-2 cursor-pointer line-through':'ml-2 cursor-pointer '}>{todo.task}</p>
        </div>
        <button onClick={()=>deleteTask(todo.id)} className='curson-pointer flex items-center'>{<FaRegTrashAlt></FaRegTrashAlt>}</button>
    </li>
  )
}

export default Todo