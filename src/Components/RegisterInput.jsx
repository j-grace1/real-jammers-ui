import React from 'react'

const RegisterInput = () => {
  return (
    <div className='flex flex-col justify-center'>
      <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl text-white font-bold text-center mb-5'>Sign Up</h2>
          <input className='flex flex-col w-full text-gray-400 py-2 p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='First Name' required />
          <input className='flex flex-col w-full text-gray-400 py-2 p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Last Name' required />
          <input className='flex flex-col w-full text-gray-400 py-2 p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Username' required />
          <input className='flex flex-col w-full text-gray-400 py-2 p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" placeholder='Email Address' required />
          <input className='flex flex-col w-full text-gray-400 py-2 p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder='Password' required />
          <input className='flex flex-col w-full text-gray-400 py-2 p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Your Major Instrument' required />
          
          <button className='w-full mt-16 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign in</button>
      </form>
    </div>
  )
}

export default RegisterInput