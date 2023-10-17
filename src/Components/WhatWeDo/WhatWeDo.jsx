import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import whatWeDo from "../../assests/whatWeDo.jpg";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between ">
        <div className="left w-1/2">
          <p className=" text-emerald-500 flex items-center mb-6 font-bold text-2xl">
            <BsArrowReturnRight /> <span className=" ml-4">What We Do</span>
          </p>
          <h1 className="text-6xl text-white">
            Latest Way to Get Web Solutions & Business Growth
          </h1>
          <div className="flex justify-between items-center my-10 pt-8">
            <div>
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
                Voluptatibus quia repellat autem ipsa accusantium non animi
                alias suscipit. Quia, pariatur?
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
            <div>
              <p className="border rounded-full px-7 py-6 text-white hover:text-black hover:bg-emerald-500 font-bold text-xl cursor-pointer ease-in-out duration-700 ">
                02
              </p>
            </div>
            <div className="ml-10">
              <h2 className="text-4xl text-emerald-500 font-bold">
                Web Solutions
              </h2>
              <p className=" text-justify mt-10 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus quia repellat autem ipsa accusantium non animi
                alias suscipit. Quia, pariatur?
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
            <div>
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
                Voluptatibus quia repellat autem ipsa accusantium non animi
                alias suscipit. Quia, pariatur?
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
        <div className="right">
          <img src={whatWeDo} alt="whatWeDoImg" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
