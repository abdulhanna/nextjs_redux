'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { deleteUser } from '../redux/slice'
import { useDispatch } from 'react-redux'

const DisplayUser = () => {
  const userData = useSelector((data)=> data.userData.users)
  const dispatch= useDispatch()
  // console.log(userData,'adata')
  const removeUser = (id)=>{
        dispatch(deleteUser({id}))
  }
  // console.log(userData,'data')
  return (
    <div className='border-2 m-4 py-8 pl-8'>
      <h2 className='text-lg font-medium'>Display USer List</h2> 
      {userData.map((user,index)=>{
        return(  <div className='flex bg-blue-300 p-2 my-2 justify-between w-[500px]' key={user.id}>
          <p>{user.name}</p> 
          <button className='cursor-pointer' onClick={()=>removeUser(user.id)}>remove</button>
        </div>    
      )})}
    </div>
  )
}

export default DisplayUser
