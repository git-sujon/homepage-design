import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiSearch, FiUser } from "react-icons/fi";

import logo from '../../Resource/Image_website/logo.png'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>

      <nav x-data={` ${{ isOpen: false }}`} className="bg-[#f5f5f7] ">
        <div className="container max-w-[980px] py-2 mx-auto ">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <Link to="/">
               <img src={logo} className="w-20 h-12" alt="" />
              </Link>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  x-cloak
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 `}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div
              x-cloak
              className={` ${
                isOpen
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
            >
              <div className="flex flex-col  capitalize  lg:flex   lg:flex-row lg:items-center font-medium">
                <Link
                  to="/"
                  className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4 text-[#29303b] hover:text-[#4c92d3]  py-1"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4 text-[#29303b] hover:text-[#4c92d3]  py-1"
                >
               About
                </Link>
                <Link
                  to="#"
                  className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4 text-[#29303b] hover:text-[#4c92d3]  py-1"
                >
                  Services
                </Link>

                <Link
                  to="/"
                  className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4 text-[#29303b] hover:text-[#4c92d3]  py-1"
                >
                  Downloads
                </Link>

                <Link
                  to="/"
                  className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4 text-[#29303b] hover:text-[#4c92d3]  py-1"
                >
                  Training Videos
                </Link>
                <Link
                  to="/"
                  className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4 text-[#29303b] hover:text-[#4c92d3]  py-1"
                >
                  Billing
                </Link>
                <Link
                  to="/"
                  className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4 text-[#29303b] hover:text-[#4c92d3]  py-1"
                >
                  Contact Us
                </Link>

           
                  <Link
                    to="/login"
                    className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4 bg-[#66c4f2] hover:bg-white  hover:text-[#4c92d3] text-white px-4 py-1 border rounded-full"
                  >
                    Login
                  </Link>

                  <Link
                    to="/login"
                    className="mt-2 transition-colors hover:rounded-full  duration-300 transform lg:mt-0 lg:mx-4hover:text-[#4c92d3] hover:text-[#4c92d3] px-4 py-1 "
                  >
                    Sign Up
                  </Link>
           
              
        
              </div>

             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;