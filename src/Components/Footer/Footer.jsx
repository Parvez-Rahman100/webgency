import React from "react";
import { BsBehance, BsDribbble, BsFacebook, BsTwitter } from "react-icons/bs";
import logo from "../../assests/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#0C151C]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col py-10 ">
          <div>
            <img className=" w-40" src={logo} alt="logo" />
          </div>
          <div className="flex lg:flex-row flex-col">
            <p className="flex items-center cursor-pointer hover:text-emerald-500">
              <BsFacebook /> <span className=" mx-4">Facebook</span>
            </p>
            <p className="flex items-center cursor-pointer hover:text-emerald-500">
              <BsTwitter /> <span className=" mx-4">Twitter</span>
            </p>
            <p className="flex items-center cursor-pointer hover:text-emerald-500">
              <BsDribbble /> <span className=" mx-4">Dribble</span>
            </p>
            <p className="flex items-center cursor-pointer hover:text-emerald-500">
              <BsBehance /> <span className=" mx-4">Behance</span>
            </p>
          </div>
        </div>
        <div className="w-full pb-7  border-b-2 border-white"></div>
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div>
            <h2 className=" text-6xl my-10 font-extrabold font-design text-center lg:text-left">
              Let's Work Together
            </h2>
            <a
              className="font-bold mx-6 border border-white p-5 rounded-lg hover:bg-emerald-500 text-white"
              href=" #"
            >
              support@gmail.com
            </a>
            <a
              className="font-bold mx-6 border border-white p-5 rounded-lg hover:bg-emerald-500 text-white"
              href=" #"
            >
              +8801000000006
            </a>
          </div>
          <div className=" w-3/5">
            <h5 className="my-7 text-4xl text-center">Quick Links</h5>
            <div className="flex justify-around items-center flex-col lg:flex-row">
              <div>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  Home
                </p>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  Popular Services
                </p>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  Team Members
                </p>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  Latest News
                </p>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  Contact Us?
                </p>
              </div>
              <div>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  UI/UX Design
                </p>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  Development
                </p>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  Marketing
                </p>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  Need A Career?
                </p>
                <p className="my-2 cursor-pointer hover:text-emerald-500">
                  FAQ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
