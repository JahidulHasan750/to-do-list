import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todo,setTodo]=useState([])
  const[input,setInput]=useState('')
 

  useEffect(()=>{
    const q= query(collection( db,'todo'))
    const unsubscribe= onSnapshot(q,(quereySnapshot)=>{
      let todoArray=[]
      quereySnapshot.forEach((doc)=>{
        todoArray.push({...doc.data(),id:doc.id})
      });
      setTodo(todoArray)
    })
    return ()=>unsubscribe
  },[])

const toggleComplete= async(todo)=>{
  await updateDoc(doc(db,'todo',todo.id),{
    complete: !todo.complete,

  })
 
}

const newTodo=async(e)=>{
    e.preventDefault()
      if(input === ''){
        alert('please enter a valid todo')
        return
      }
      await addDoc(collection(db,'todo'),{
        task: input,
        complete:false,
        
      })
      setInput('')
      
}

const deleteTask=async(id)=>{
  await deleteDoc(doc(db, 'todo' , id))
}




  return (
    <div className="App h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1cb5e0]">
      <div className="bg-slate-300 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
      <h3 className="text-3xl font-bold text-center text-gray-800">Todo App</h3>
      <form onSubmit={newTodo} className="flex justify-between">
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" className=" border p-2 w-full text-xl" />
        <button className=" border p-4 ml-2 bg-purple-600 text-slate-100">
          <AiOutlinePlus size={30}></AiOutlinePlus>{" "}
        </button>
      </form>
      <ul>
      {todo.map((todo,index)=>(
        <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTask={deleteTask}></Todo>
      ))}
        
      </ul>
      {todo.length<1? null: <p className=" text-center p-2">{`You have ${todo.length} todo`}</p>}
      
      </div>
    </div>
  );
}

export default App;
