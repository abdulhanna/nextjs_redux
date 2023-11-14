import React from 'react'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'
const Page = () => {
  return (
    <div>
      <h1 className='bg-red-300 text-center p-4 text-2xl'>   Next js with Redux toolkit</h1>
      <AddUser/>
      <DisplayUser/>
    </div>
  )
}

export default Page
