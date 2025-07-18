import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const {token,setToken} = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const onLogoutHandler = () =>{
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  }

  return (
    <div className="h-16 bg-blue border-radius-bottom z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
        <Link to="/">
          <h1 className="font-heading text-3xl text-dark sm:mt-0 mt-2">
            URLShortener
          </h1>
        </Link>

        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5 bg-white/95 backdrop-blur-sm" : "h-0 overflow-hidden"
          } transition-all duration-200 sm:h-fit sm:bg-transparent sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="hover:text-blue font-[500] transition-all duration-150">
            <Link
              className={`${
                path === "/" ? "text-dark font-text text-blue-600 font-semibold" : "text-gray-700"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="text-dark font-text hover:text-blue-400 font-[500] transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>

          
          {token && (
            <li className="hover:text-blue-400 font-[500] transition-all duration-150">
              <Link
                className={`${
                  path === "/dashboard" ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}
          {!token && (
            <Link to="/register">
            <li className="font-text text-dark sm:ml-0 -ml-1 text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md hover:text-slate-300 transition-all duration-150">
              Sign Up
            </li>
          </Link>
          )}

          {token && (
            <button
              onClick={onLogoutHandler}
              className="sm:ml-0 -ml-1 bg-rose-700 text-white cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md hover:text-slate-300 transition-all duration-150"
            >
              Logout
            </button>
          )}
          
        </ul>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
