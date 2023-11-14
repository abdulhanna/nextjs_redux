'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../redux/slice'

const page = () => {
  const dispatch = useDispatch()
  const userData = useSelector((data)=>data.userData.users)
  const removeUser = (id)=>{
        dispatch(deleteUser({id}))
  }
  console.log(userData,'data')
  return (
    <div className='py-4 px-8'>
      <h2 className='text-2xl font-semibold'>Remove User Page</h2>
      {
        userData.map((user)=>{
          return(<div className='flex justify-between w-[500px] p-4 my-4 bg-blue-300' key={user.id}>
             <p>{user.name}</p>
             <button onClick={()=> removeUser(user.id)}>remove</button>
          </div>)
        })
      }
    </div>
  )
}

export default page
