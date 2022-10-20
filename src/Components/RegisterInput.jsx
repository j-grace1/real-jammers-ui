import React from 'react'

const RegisterInput = () => {
  return (
    <div className='w-[400px] h-[550px] text-white bg-drum bg-cover bg-left bg-fixed rounded-xl box-border shadow-2xl my-5 absolute left-[25%] translate-x-2/4'>
      <div className='bg-black/80 w-[400px] h-[550px] px-8 rounded-xl'>
        <h1 className='px-2 py-5 text-center text-[27px]'>Sign Up</h1>
        <form>
          <input className='w-full bg-transparent mb-4 h-10 border-b-2 outline-none' type="text" placeholder='First Name' required />
          <input className='w-full bg-transparent mb-4 h-10 border-b-2 outline-none' type="text" placeholder='Last Name' required />
          <input className='w-full bg-transparent mb-4 h-10 border-b-2 outline-none' type="text" placeholder='Username' required />
          <input className='w-full bg-transparent mb-4 h-10 border-b-2 outline-none' type="email" placeholder='Email' />
          <input className='w-full bg-transparent mb-4 h-10 border-b-2 outline-none' type="password" placeholder='Password' />
          <input className='w-full bg-transparent mb-4 h-10 border-b-2 outline-none' type="number" placeholder='How Many Instruments can you Play?' />
          <input className='w-full bg-transparent mb-4 h-10 border-b-2 outline-none' type="text" placeholder='Major Instrument' />
          <input className='w-24 mx-32 p-2 px-3 bg-white border border-white outline-none rounded-lg text-black font-semibold hover:bg-[#f1ac3c] hover:text-white duration-300' type="submit" value="Sign Up" />
        </form>
      </div>
      <span className="flex justify-center py-2 text-black text-center">© 2022 Real Jammers. All Rights Reserved</span>
    </div>
  )
}

export default RegisterInput