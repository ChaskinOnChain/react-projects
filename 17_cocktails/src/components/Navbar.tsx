import React from "react";
import { Link } from "react-router-dom";
import About from "../pages/About";

function Navbar() {
  return (
    <div className="bg-white cursor-pointer w-full h-[5.6rem] drop-shadow-2xl border-b-4 border-b-green-800 px-16 py-8 flex justify-between items-center">
      <Link to="/">
        <img className="h-5" src="images/logo.svg" alt="logo" />
      </Link>
      <div className="text-xl cursor-pointer">
        <Link className="mr-4" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
