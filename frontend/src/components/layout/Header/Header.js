import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineProfile,
  AiOutlineShoppingCart,
  AiOutlineDown,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { TbPrompt } from "react-icons/tb";
import { GrContactInfo } from "react-icons/gr";
export default function Header() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);

  return (
    <>
      <div className=" ">
        {/* Code block starts */}
        <nav className="bg-white    xl:block hidden">
          <div className="">
            <div className="flex items-center justify-between mx-20">
              <div className="inset-y-0 left-0 flex items-center justify-between xl:hidden"></div>
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-between">
                <div className="flex items-center hover:text-dark">
                  <Link to="/">
                    <h2 className="hidden sm:block text-base text-gray-700  leading-normal pl-3">
                      Ecentric india
                    </h2>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-16">
                  <Link
                    to="/"
                    className="flex px-5  items-center py-6 text-sm "
                  >
                    <span className="mr-2">
                      <AiOutlineHome />
                    </span>
                    Home
                  </Link>
                  <Link
                    to="/products"
                    className="flex  px-5 items-center py-6 text-sm "
                  >
                    <span className="mr-2 hover:text-red">
                      <TbPrompt />
                    </span>
                    Products
                  </Link>
                  <Link
                    to="/about"
                    className="flex px-5 items-center py-6 text-sm "
                  >
                    <span className="mr-2">
                      <BsChatDots />
                    </span>
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="flex px-5 items-center py-6 text-sm "
                  >
                    <span className="mr-2">
                      <GrContactInfo />
                    </span>
                    Contact
                  </Link>
                  <Link
                    to="/cart"
                    className="flex px-5 items-center py-6 text-sm "
                  >
                    <span className="mr-2">
                      <AiOutlineShoppingCart />
                    </span>
                    Cart
                  </Link>
                </div>
                <div className="hidden xl:flex items-center">
                  <div className="ml-6 relative">
                    <div
                      className="flex items-center relative"
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-40 border-r z-30 bg-white absolute rounded right-0 shadow top-0 mt-16 ">
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div className="flex items-center">
                              <AiOutlineLogin />
                              <Link to="/login">
                                <span className="ml-2">Login</span>
                              </Link>
                            </div>
                          </li>
                          <Link to="/login">
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                              <AiOutlineProfile />
                              <span className="ml-2">Signup</span>
                            </li>
                          </Link>
                          <Link to="/account">
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                              <AiOutlineProfile />
                              <span className="ml-2">My Profile</span>
                            </li>
                          </Link>
                        </ul>
                      )}
                      <div className="cursor-pointer flex items-center justify-center">
                        <div className=" flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                          <AiOutlineUser className="text-xl" />
                        </div>
                        <div className="ml-2 text-gray-600">
                          <AiOutlineDown className="text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden sticky justify-between items-center bg-white  top-0 z-40">
            <div className="w-full">
              <h1>Ecentric India</h1>
            </div>
            <div className="flex items-center">
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40  overflow-y-auto  top-[-56px] absolute bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <h1>Ecentric india</h1>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <AiOutlineClose />
                        </div>
                      </div>
                    </div>
                    <ul className=" flex flex-col items-start">
                      <Link to="/" className="cursor-pointer">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center hover:text-dark translate-x-0  ">
                            <div className="flex justify-center items-center gap-x-4">
                              <AiOutlineHome />
                              <p className="">Home</p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link className="cursor-pointer">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center hover:text-dark translate-x-0  ">
                            <div className="flex justify-center items-center gap-x-4">
                              <TbPrompt />
                              <p className="">Products</p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link className="cursor-pointer">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center hover:text-dark translate-x-0  ">
                            <div className="flex justify-center items-center gap-x-4">
                              <BsChatDots />
                              <p className="">About</p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to="/contact">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center hover:text-dark translate-x-0  ">
                            <div className="flex justify-center items-center gap-x-4">
                              <GrContactInfo />
                              <p className="">Contact</p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to="/login">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center hover:text-dark translate-x-0  ">
                            <div className="flex justify-center items-center gap-x-4">
                              <AiOutlineLogin />
                              <p className="">Login</p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to="/login">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center hover:text-dark translate-x-0  ">
                            <div className="flex justify-center items-center gap-x-4">
                              <AiOutlineProfile />
                              <p className="">Signup</p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link to="/account">
                        <li className="text-gray-800 pt-6">
                          <div className="flex items-center hover:text-dark translate-x-0  ">
                            <div className="flex justify-center items-center gap-x-4">
                              <AiOutlineProfile />
                              <p className="">My Profile</p>
                            </div>
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}
