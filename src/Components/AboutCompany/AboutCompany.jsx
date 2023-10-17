import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import quote from "../../assests/quote.png";

const AboutCompany = () => {
  return (
    <section className="py-10 bg-black container mx-auto">
      <div className=" lg:flex flex-row-reverse lg:justify-around justify-between items-center ">
        <div className=" ">
          <img className="mx-auto lg:w-full w-2/4" src={quote} alt="quote" />
        </div>
        <div className=" w-2/4 mx-auto">
          <p className=" text-emerald-500 flex items-center mb-6 font-bold text-2xl">
            <BsArrowReturnRight /> <span className=" ml-4">About Company</span>
          </p>
          <h3 className="text-6xl  text-white mb-14">
            Our Main Goal to Satisfied local & Global Clients
          </h3>
          <p className=" text-justify mb-14 ml-10">
            Looking for the top web design company that creates high-converting
            websites? View the best web design agencies with their rates,
            reviews, portfolios, location, expertise, and more. Use custom
            filters to select the best business partner to help your brand
            attract, engage and convert the audience.
          </p>
          <a
            href=" #"
            className="flex items-center ml-10 underline decoration-sky-600 hover:decoration-blue-900 text-2xl"
          >
            <span className="text-emerald-500">Read More</span>{" "}
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
