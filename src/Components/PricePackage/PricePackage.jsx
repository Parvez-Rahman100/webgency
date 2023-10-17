import React from "react";
import { AiFillThunderbolt, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import { GrRadialSelected } from "react-icons/gr";
import join from "../../assests/join.PNG";

const PricePackage = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 w-10/12 mx-auto">
        <p className=" text-emerald-500 flex items-center justify-center mb-6 font-bold text-2xl pt-10">
          <BsArrowReturnRight /> <span className="ml-4">Pricing Packages</span>
        </p>
        <h1 className=" lg:text-6xl text-xl font-design mb-10 font-bold italic text-center text-white py-6">
          Best Pricing Package For All <br className="hidden sm:block" /> Web
          Design Solutions
        </h1>
        <div className="lg:flex flex-row justify-between items-center gap-5">
          <div className="w-full mb-6 lg:mb-0">
            <img src={join} alt="join pic" />
          </div>
          <div className="lg:w-4/5  w-11/12 mb-6 lg:mb-0 mx-auto">
            <div className="card bg-[#0A1019] ">
              <div className="card-body rounded-none items-center text-center ">
                <h2 className="card-title">
                  <AiFillThunderbolt className=" rounded-full text-black bg-emerald-600" />
                  Monthly Package
                </h2>
                <p className="mt-5">
                  We denounce with righteous indignation dislike beguiled and
                  demoralize
                </p>
                <div className="flex items-start flex-col justify-center">
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Landing Page Design</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Web Development</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">SEO Optimizations</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Mobile Applications Design</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Quality Assurance</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Customs Services</p>
                  </li>
                </div>
                <h1 className=" my-8">
                  $ <span className=" font-bold text-6xl">49.9</span> /per month
                </h1>
                <div className="card-actions ">
                  <button className="btn w-full text-white hover:bg-emerald-500 hover:text-black  mt-5">
                    Choose Packages <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-4/5 w-11/12 mb-6 lg:mb-0 mx-auto">
            <div className="card bg-[#0A1019]">
              <div className="card-body rounded-none items-center text-center">
                <h2 className="card-title">
                  <AiFillThunderbolt className=" rounded-full text-black bg-emerald-600" />
                  Yearly Package
                </h2>
                <p className="mt-5">
                  We denounce with righteous indignation dislike beguiled and
                  demoralize
                </p>
                <div className="flex items-start flex-col justify-center">
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Landing Page Design</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Web Development</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">SEO Optimizations</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Mobile Applications Design</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Quality Assurance</p>
                  </li>
                  <li className=" flex items-center mt-5">
                    <GrRadialSelected className=" bg-emerald-500 rounded-full" />
                    <p className=" ml-2">Customs Services</p>
                  </li>
                </div>
                <h1 className=" my-8">
                  $ <span className="font-bold text-6xl">98.3</span> /per month
                </h1>
                <div className="card-actions ">
                  <button className="btn w-full text-white hover:bg-emerald-500 hover:text-black  mt-5">
                    Choose Packages <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePackage;
