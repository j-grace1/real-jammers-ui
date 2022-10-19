import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import 'aos/dist/aos.css'

import Icon from '../assets/image.png'

AOS.init();
const Hero = () => {
  return (
    <div className='w-full h-[550px] bg-[#df9d39] flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 mx-24 py-32'>
            <div className='flex flex-col justify-center md:items-start py-8' data-aos='fade-up' data-aos-delay='200' data-aos-duration="1500">
                <h1 className='py-3 text-[45px] text-white font-bold'>Building a World of Music</h1>
                <h2 className='text-2xl text-[#ffffff99]'>Able to meet talented musicians making music</h2>
                <button className='py-3 mt-12 sm:w-[60%] bg-[#f1ac3c] transition duration-150 hover:bg-[#76def0] border-none'>
                  <Link to='/register'>Get Started</Link>
                </button>
            </div>
            <div data-aos='zoom-in' data-aos-delay='200' data-aos-duration="1500">
                <img className='animate-bounce' src={Icon} alt='Icon' />
            </div>
        </div>
    </div>
  )
}

export default Hero