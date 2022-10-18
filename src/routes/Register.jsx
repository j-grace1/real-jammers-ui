import React from 'react'

import Logo from "../assets/logo.png";
import RegisterInput from '../Components/RegisterInput';

const Register = () => {
  return (
    <div className='px-12 py-5'>
      <div className='flex flex-row justify-between'>
        <img className='w-[240px]' src={Logo} alt="Logo" />
        <h3 className='text-[#f1ac3c] text-2xl font-semibold py-10'>Sign In</h3>
      </div>
      <h1 className='flex justify-center text-4xl font-semibold'>WELCOME TO <span className='px-2 text-[#f1ac3c]'>REAL JAMMERS</span> </h1>
      <RegisterInput />
    </div>
  )
}

export default Register