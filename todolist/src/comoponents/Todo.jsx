import React, { useEffect, useRef, useState } from 'react'
import todoicon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'
const Todo = () => {
  const [Todolist,setTodolist]=useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
  const inputref = useRef();
  const add = () =>{
    const val = inputref.current.value;
    // console.log(val)
    if(val===""){
      return null;
    }
    const items ={
      id:Date.now(),
      text: val,
      iscomplete:false,
    };
    setTodolist([...Todolist, items]);
    inputref.current.value="";
  }
  const deleteTodo =(id)=>{
    // return setTodolist((prev)=>prev.filter((todo)=>todo.id!==id))
      return setTodolist((prev)=>{
      return prev.filter((todo)=>todo.id!==id)
    })
  }
  const toggle = (id)=>{
    setTodolist((prev)=>{
      return prev.map((todo)=>{
         if(todo.id===id){
          if(todo.iscomplete===false){
            return {...todo,iscomplete:true}
          }
          else{
            return {...todo,iscomplete:false}
          }
        }
        return todo;
      }
    )
    })
  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(Todolist));
  },[Todolist])
  return (
    // title
    <div className='bg-white min-h-[550px] w-11/12 max-w-[450px] flex flex-col rounded-xl'>
      <div className='flex flex-row gap-2 px-5 pt-10'>
      <img className='w-10' src={todoicon} alt="" />
      <h1 className='font-semibold text-3xl'>To-Do List</h1>
      </div>
    {/* // input */}
    <div className='flex items-center bg-gray-100 my-4 pl-4 mx-4 rounded-2xl h-10'>
      <input ref={inputref} className='w-11/12 bg-transparent border-0 outline-none placeholder:text-slate-600' type="text"  placeholder='Add Your Task Here'/>
      <button onClick={add} className='bg-orange-600 border-none rounded-full h-full w-1/2 text-white font-medium text-lg cursor-pointer'>Add+</button>
    </div>

    {/* to do list */}

    <div>
      {Todolist.map((item,index)=>{
        return <Todoitems key={index} text={item.text} id={item.id} iscomplete={item.iscomplete} deleteTodo={deleteTodo} toggle={toggle} />
      })}
    </div>


    </div>
  )
}

export default Todo
