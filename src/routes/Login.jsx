import React from "react";

import Logo from "../assets/logo.png";
import LoginInput from "../Components/LoginInput";

const Login = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-fixed bg-[url("https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?cs=srgb&dl=pexels-pixabay-34221.jpg&fm=jpg")]'>
      <div className='bg-black/80 w-full h-screen px-8 py-3'>
        <img className="w-[240px]" src={Logo} alt="Logo" />
        <LoginInput />
        <span className="flex justify-center text-white text-center">© 2022 Real Jammers. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Login;
