import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  const navOptions = <>
  <li className="text-white font-semibold hover:bg-white hover:rounded"><NavLink   to='/'>Home</NavLink></li>
  <li className="text-white font-semibold hover:bg-white hover:rounded"><NavLink to='/instructor'>Instructor</NavLink></li>
  <li className="text-white font-semibold hover:bg-white hover:rounded"><NavLink to='/classes'>Classes</NavLink></li>
  </>






  return (
    <div>
      <div className="navbar bg-[#232932]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-[#232932] lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              
             {navOptions}
            </ul>
          </div>
          <Link to='/' className=" text-white normal-case text-xl md:text-2xl font-bold md:font-extrabold ml-2 ">Martial Art Camp</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
           {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
