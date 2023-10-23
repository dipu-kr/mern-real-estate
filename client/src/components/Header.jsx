import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-slate-200 shadow-md">
      <div className="max-w-7xl flex justify-between items-center m-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="flex items-center bg-slate-100 rounded-md p-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-24 sm:w-64 bg-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-slate-700 hover:underline">sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
