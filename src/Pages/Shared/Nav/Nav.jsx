import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import logo from '../../../assets/logo.png'
import { AuthContext } from "../../../Provider/AuthProvider";

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => [
    logOut()
    
  ]
  // const navOptions = <>
  // <li className="text-white font-semibold hover:bg-white hover:rounded"><NavLink   to='/'>Home</NavLink></li>
  // <li className="text-white font-semibold hover:bg-white hover:rounded"><NavLink to='/instructor'>Instructor</NavLink></li>
  // <li className="text-white font-semibold hover:bg-white hover:rounded"><NavLink to='/classes'>Classes</NavLink></li>
  // </>

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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-400 rounded-box w-52 z-50"
            >
              <li className="text-black font-semibold hover:bg-white hover:rounded">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-black font-semibold hover:bg-white hover:rounded">
                <NavLink to="/instructor">Instructor</NavLink>
              </li>
              <li className="text-black font-semibold hover:bg-white hover:rounded">
                <NavLink to="/classes">Classes</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"

          >
            <img className="w-[120px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-black font-semibold hover:bg-white hover:rounded">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-white font-semibold hover:bg-white hover:rounded">
              <NavLink to="/instructor">Instructor</NavLink>
            </li>
            <li className="text-white font-semibold hover:bg-white hover:rounded">
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>
        {
          user?.email ? <>
          <div className="navbar-end">
          <label  className="btn btn-ghost btn-circle avatar mr-2  md:mr-5">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <div >
              <a onClick={handleLogOut} className="btn">LOGOUT</a>
            </div>
            
          </div>
            </> : <><div className="navbar-end">
              <Link to='/login' className="btn">LOGIN</Link>
            </div></>
        }

      </div>
    </div>
  );
};

export default Nav;
