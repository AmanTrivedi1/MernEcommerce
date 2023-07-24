import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="bg-dark mt-64">
        <div className=" md:flex  p-2 md:flex-row flex flex-col gap-3  text-white  w-full max-w-[1280px] px-5 md:px-10 mx-auto bg-dark justify-around">
          <div className="flex  flex-col gap-3">
            <h1 className="text-2xl font-libre text-maindark">Quick Acess</h1>
            <ul className="font-Poppins flex flex-col gap-2">
              <li className=" cursor-pointer hover:text-maindark">Home</li>
              <li className=" cursor-pointer hover:text-maindark">Product</li>
              <li className=" cursor-pointer hover:text-maindark">Contact</li>
              <li className=" cursor-pointer hover:text-maindark">About us</li>
            </ul>
          </div>
          <div className="flex  flex-col gap-3">
            <h1 className="font-libre text-maindark text-2xl">Products</h1>
            <ul className="font-Poppins flex flex-col gap-2">
              <li className=" cursor-pointer hover:text-maindark">Perfumes</li>
              <li className=" cursor-pointer hover:text-maindark">
                Essentiol Oil
              </li>
              <li className=" cursor-pointer hover:text-maindark">
                Natural Oil
              </li>
              <li className=" cursor-pointer hover:text-maindark">
                Carrier Oil
              </li>
            </ul>
          </div>
          <div className="flex   flex-col gap-3">
            <h1 className="font-libre text-maindark text-2xl">Usefull links</h1>
            <ul className="font-Poppins flex flex-col gap-2">
              <li className=" cursor-pointer hover:text-maindark">
                Disclaimer
              </li>
              <li className=" cursor-pointer hover:text-maindark">
                Quality Assurance
              </li>
              <li className=" cursor-pointer hover:text-maindark">
                Sample Pieces
              </li>
              <li className=" cursor-pointer hover:text-maindark">Blogs</li>
            </ul>
          </div>
          <div className="flex  flex-col gap-3">
            <h1 className="font-libre text-2xl text-maindark">Be our Family</h1>
            <p className="text-xs font-Poppins">
              Do follow us in plateforms <br /> to get a offer details
            </p>
            <div className="md:flex md:flex-row flex flex-row items-center gap-6 justify-start md:justify-between">
              <BsInstagram className="text-2xl cursor-pointer hover:text-maindark" />
              <BsTwitter className="text-2xl cursor-pointer hover:text-maindark  " />
              <BsFacebook className="text-2xl cursor-pointer hover:text-maindark " />
              <BsLinkedin className="text-2xl  cursor-pointer hover:text-maindark " />
            </div>
          </div>
        </div>
        <p className="text-xs text-center text-white p-2">
          © 2023 Perfume24x7.com All transactions on Perfume24x7.com are secured
          by SSL and protected via multiple payment gateways.
        </p>
      </div>
    </>
  );
};

export default Footer;
