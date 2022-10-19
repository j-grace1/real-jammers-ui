import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "w-screen h-{80px} z-10 bg-[#f1b23bea] fixed drop-shadlow-lg p-3 px-12"
          : "w-screen h-{80px} z-10 fixed drop-shadlow-lg p-3 px-12"
      }
    >
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="w-[140px]" src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:flex pr-4">
          <ul className="hidden md:flex text-white">
            <li className="transition duration-300 hover:text-[#1df0db]">
              Home
            </li>
            <li className="transition duration-300 hover:text-[#1df0db]">
              About
            </li>
            <li className="transition duration-300 hover:text-[#1df0db]">
              Features
            </li>
          </ul>
          <button className="border-none transition duration-150 bg-transparent hover:bg-transparent hover:text-[#1df0db] text-white mx-6 mr-4">
            <Link to="/login">Sign In</Link>
          </button>
          <button className="px-8 my-2 h-10">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <HiMenu className="w-5" />
          ) : (
            <AiFillCloseCircle className="w-5" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "aboslute bg-zinc-200 w-full px-8 py-3"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Features</li>
        <div className="flex flex-col my-4">
          <button className="text-black py-3 mb-4">
            <Link to="/login">Sign In</Link>
          </button>
          <button className="px-8 py-3 text-black hover:bg-[#f1b23bea] duration-300">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
