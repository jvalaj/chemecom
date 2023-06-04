import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='w-full h-screen  flex justify-center flex-col gap-12 items-center'>
      <p className='font-extrabold text-4xl'>Oops! You've lost your way... </p>
        <button className="rounded-md p-3 border border-blue-800 text-white bg-blue-500 hover:bg-blue-400 hover:text-black " >
          <Link to="/">Go Back</Link>
        </button>
      </div>
  )
}

export default Error