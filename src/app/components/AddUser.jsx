'use client'
import React, { useState } from 'react'
import { addUser } from '../redux/slice'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

const AddUser = () => {
  const [name,setName] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = ()=>{
       
    dispatch(addUser({name:name}))
    setName(' ')
  }
  return (
    <div className=' m-4 border-2 py-8 pl-8'>
      <h4 className='font-medium text-lg'>Add  User</h4>
      <div className='space-x-4'> 
        <input className=' border-blue-400 py-1 border-2 rounded' value={name} placeholder='Enter user' onChange={(e)=>setName(e.target.value)}/>
        <button className='bg-blue-500 py-1 px-2 rounded-sm text-white' onClick={handleSubmit}>Add User</button>
        <Link className='underline text-blue-600' href={'/removeUser'}>Reomve user</Link>
      </div>     
    </div>
  )
}

export default AddUser
