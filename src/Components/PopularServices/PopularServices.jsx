import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import icon1 from "../../assests/icon1.png";
import icon2 from "../../assests/icon2.png";
import icon3 from "../../assests/icon3.png";
import icon4 from "../../assests/icon4.png";

const PopularServices = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <p className=" text-emerald-500 flex items-center justify-center mb-6 font-bold text-2xl pt-10">
          <BsArrowReturnRight /> <span className="ml-4">Popular Services</span>
        </p>
        <h1 className=" text-7xl font-design font-bold italic text-center text-white py-6">
          We Provide Amazing Web <br />
          <span className=" text-emerald-500">Design</span> Solutions
        </h1>

        {/* Cards Here  */}
        <div className="lg:flex lg:flex-row justify-between items-center gap-6 flex-col py-14">
          <div className="card card-side bg-[#0A1019] shadow-xl h-full hover:shadow-2xl hover:shadow-emerald-400 cursor-pointer">
            <div className="card-body">
              <figure className="w-20 mx-auto mb-5">
                <img src={icon1} alt="icon" />
              </figure>
              <h2 className="card-title text-4xl text-white ">
                Web Design From Figma
              </h2>
              <p className="my-10 text-justify">
                We denounce with righteous indignation dislike beguile
              </p>
              <a
                href=" #"
                className="flex hover:text-emerald-500 ease-in-out duration-700 items-center underline text-2xl "
              >
                <span>Read More</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="card card-side bg-[#0A1019] shadow-xl h-full hover:shadow-2xl hover:shadow-emerald-400 cursor-pointer">
            <div className="card-body">
              <figure className="w-20 mx-auto mb-5">
                <img src={icon2} alt="icon" />
              </figure>
              <h2 className="card-title text-4xl text-white ">
                PSD, XD to HTML Convert
              </h2>
              <p className=" my-10 text-justify">
                At vero eos et accusamus et dignissim ducimbl ditiis
              </p>
              <a
                href=" #"
                className="flex hover:text-emerald-500 ease-in-out duration-700 items-center underline text-2xl "
              >
                <span>Read More</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="card card-side bg-[#0A1019] shadow-xl h-full hover:shadow-2xl hover:shadow-emerald-400 cursor-pointer">
            <div className="card-body">
              <figure className="w-20 mx-auto mb-5">
                <img src={icon3} alt="icon" />
              </figure>
              <h2 className="card-title text-4xl text-white ">
                WordPress Development
              </h2>
              <p className=" my-10 text-justify">
                To take trivial example which ever undertakes laborious
              </p>
              <a
                href=" #"
                className="flex hover:text-emerald-500 ease-in-out duration-700 items-center underline text-2xl "
              >
                <span>Read More</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="card card-side bg-[#0A1019] shadow-xl h-full hover:shadow-2xl hover:shadow-emerald-400 cursor-pointer">
            <div className="card-body">
              <figure className="w-20 mx-auto mb-5">
                <img src={icon4} alt="icon" />
              </figure>
              <h2 className="card-title text-4xl text-white ">
                React Development
              </h2>
              <p className=" my-10 text-justify">
                Sed persiciatis unde omnisey natus error voluptatem
              </p>
              <a
                href=" #"
                className="flex hover:text-emerald-500 ease-in-out duration-700 items-center underline text-2xl "
              >
                <span>Read More</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
