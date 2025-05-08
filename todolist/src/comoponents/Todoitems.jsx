import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_tick from  '../assets/delete.png'

const Todoitems = ({text,id,iscomplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2 px-4 '>
        <div onClick={()=> {toggle(id)}} className='flex flex-1 items-center gap-2 cursor-pointer '>
            <img className='w-8' src={iscomplete ? tick : not_tick} alt="" />
            <p  className={`flex-1  decoration-slate-500 ${iscomplete ? "line-through" : ""}`}>{text}</p>
            <img onClick={()=>{deleteTodo(id)}} className='w-4 mx-2 cursor-pointer' src={delete_tick} alt="" />
        </div>
    </div>
  )
}

export default Todoitems
