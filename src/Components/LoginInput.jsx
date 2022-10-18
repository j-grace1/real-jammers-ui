import React from 'react'

const LoginInput = () => {
  return (
    <div className='flex flex-col h-[80vh] justify-center space-y-5'>
        <center>
            <input className='w-96 p-2 px-3 bg-[#bababa] placeholder:text-[#efefef] border border-white outline-none rounded-lg text-black' type="text" name="" placeholder='Username' />
        </center>
        <center>
            <input className='w-96 p-2 px-3 bg-[#bababa] placeholder:text-[#efefef] border border-white outline-none rounded-lg text-black' type="password" name="" placeholder='Password' />
        </center>
        <center>
            <a className='text-white text-lg hover:text-bold hover:border-b border-spacing-5 duration-300' href="#">Forgotten Password?</a>
        </center>
        <center>
            <input className='w-96 p-2 px-3 bg-[#df9d39] border border-white outline-none rounded-lg text-black font-semibold hover:bg-[#f1ac3c] hover:text-white duration-300' type="submit" value="Log In" />
        </center>
        <center>
            <h4 className='text-white hover:text-blue-700 cursor-pointer duration-300'>CREATE ACCOUNT</h4>
        </center>
    </div>
  )
}

export default LoginInput