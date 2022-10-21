import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo2.png";
import RegisterInput from "../Components/RegisterInput";

const Register = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full'>
        <div className='hidden md:block md:bg-cover md:bg-center md:bg-[url("https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg?cs=srgb&dl=pexels-cottonbro-4709822.jpg&fm=jpg&_gl=1*lja57t*_ga*MzAyNTQzMjg0LjE2NjYwNjgwMDU.*_ga_8JE65Q40S6*MTY2NjM1MTk2MC40LjEuMTY2NjM1MjAxNy4wLjAuMA..")]'>
        </div>

        <div className="bg-gray-100 text-center">
          <div className="flex justify-between items-center p-3">
            <img className="w-[40%]" src={Logo} alt="Logo" />
            <h2 className="text-[25px] text-[#f4b04b] font-semibold">
              <Link to='/login'>Sign In</Link>
            </h2>
          </div>
          <h1 className="text-[25px] lg:text-[40px] font-semibold py-5">WELCOME TO <span className="text-[#f4b04b]">REAL JAMMERS</span> </h1>
          <RegisterInput />
          <span>© 2022 Real Jammers. All Rights Reserved</span>
        </div>
    </div>
  );
};

export default Register;
