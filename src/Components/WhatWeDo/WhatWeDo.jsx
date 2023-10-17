import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import whatWeDo from "../../assests/whatWeDo.jpg";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto w-4/5">
      <div className="lg:flex flex-row justify-between items-start ">
        <div className="left">
          <p className=" text-emerald-500 flex items-center mb-6 font-bold text-2xl">
            <BsArrowReturnRight /> <span className=" ml-4">What We Do</span>
          </p>
          <h1 className="lg:text-6xl text-xl  text-white">
            Latest Way to Get Web Solutions & Business Growth
          </h1>
        </div>
        <div className="right mt-4 lg:mt-0">
          <img className="w-3/5 mx-auto" src={whatWeDo} alt="whatWeDoImg" />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center my-10 pt-8">
        <div className="hidden sm:block">
          <p className="border rounded-full px-7 py-6 text-white hover:text-black hover:bg-emerald-500 font-bold text-xl cursor-pointer ease-in-out duration-700 ">
            01
          </p>
        </div>
        <div className="ml-10">
          <h2 className="text-4xl text-emerald-500 font-bold">
            Mobile Solutions
          </h2>
          <p className=" text-justify mt-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia repellat autem ipsa accusantium non animi alias
            suscipit. Quia, pariatur?
          </p>
          <a
            href=" #"
            className="flex items-center mt-10 underline decoration-sky-600 hover:decoration-blue-900 text-2xl"
          >
            <FiArrowUpRight className="text-emerald-500" size={40} />
            <span className="text-emerald-500 opacity-0 hover:opacity-100 ease-in-out duration-700">
              Read More
            </span>
          </a>
        </div>
      </div>
      <div className=" w-full bg-white hover:bg-emerald-500 border"></div>
      <div className="flex justify-between items-center my-10">
        <div className="hidden sm:block">
          <p className="border rounded-full px-7 py-6 text-white hover:text-black hover:bg-emerald-500 font-bold text-xl cursor-pointer ease-in-out duration-700 ">
            02
          </p>
        </div>
        <div className="ml-10">
          <h2 className="text-4xl text-emerald-500 font-bold">Web Solutions</h2>
          <p className=" text-justify mt-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia repellat autem ipsa accusantium non animi alias
            suscipit. Quia, pariatur?
          </p>
          <a
            href=" #"
            className="flex items-center mt-10 underline decoration-sky-600 hover:decoration-blue-900 text-2xl"
          >
            <FiArrowUpRight className="text-emerald-500" size={40} />
            <span className="text-emerald-500 opacity-0 hover:opacity-100 ease-in-out duration-700">
              Read More
            </span>
          </a>
        </div>
      </div>
      <div className=" w-full bg-white hover:bg-emerald-500 border"></div>
      <div className="flex justify-between items-center my-10">
        <div className="hidden sm:block">
          <p className="border rounded-full px-7 py-6 text-white hover:text-black hover:bg-emerald-500 font-bold text-xl cursor-pointer ease-in-out duration-700 ">
            03
          </p>
        </div>
        <div className="ml-10">
          <h2 className="text-4xl text-emerald-500 font-bold">
            Custom Solutions
          </h2>
          <p className=" text-justify mt-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia repellat autem ipsa accusantium non animi alias
            suscipit. Quia, pariatur?
          </p>
          <a
            href=" #"
            className="flex items-center mt-10 underline decoration-sky-600 hover:decoration-blue-900 text-2xl"
          >
            <FiArrowUpRight className="text-emerald-500" size={40} />
            <span className="text-emerald-500 opacity-0 hover:opacity-100 ease-in-out duration-700">
              Read More
            </span>
          </a>
        </div>
      </div>
      <div className=" w-full bg-white hover:bg-emerald-500 border"></div>
    </div>
  );
};

export default WhatWeDo;
