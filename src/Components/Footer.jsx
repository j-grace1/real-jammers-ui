import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowUp} from 'react-icons/fa'

import './FooterStyles.css'
const Footer = () => {
  return (
    <div className='back-to-top flex items-center justify-center'>
        <Link to='/'>
          <FaArrowUp />
        </Link>
    </div>
  )
}

export default Footer