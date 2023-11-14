'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

const Page = () => {
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch()
    const data = useSelector(data=> data.todoData.todos)
  
    const addTodoList = ()=>{
        dispatch(addTodo(todo))
        setTodo('')
    }


    // console.log(data);
  return (
    <div className='p-8'>
      <h2 className='text-2xl font-semibold'>Todo List</h2> 
      <div className='my-2'>
        <input className='border-2 py-1 px-2' value={todo} placeholder='enter todo' onChange={(e)=>setTodo(e.target.value)}/>
        <button className='bg-blue-300 py-1 px-2 rounded-sm' onClick={addTodoList}>Add todo</button>
      </div>
      <div className='py-4'>
        <h3 className='text-lg font-medium'>Todo List</h3>
        {
            data.map((list)=>{
              {/* console.log(list) */}
                return (<p className='bg-blue-300 my-2 py-2 px-2 w-[400px]' key={list.id}>{list.name}</p>)
            })
        }
      </div>
    </div>
  )
}

export default Page
