import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import quote from "../../assests/quote.png";

const AboutCompany = () => {
  return (
    <section className="py-10 bg-black container mx-auto">
      <div className=" lg:flex flex-row-reverse lg:justify-around justify-between items-center ">
        <div>
          <img className="mx-auto lg:w-full w-2/4" src={quote} alt="quote" />
        </div>
        <div className="lg:w-2/4 w-full flex flex-col justify-center items-start">
          <p className="text-emerald-500 lg:w-full w-2/3 mx-auto mt-5 lg:mt-0 flex items-center mb-6 font-bold text-2xl">
            <BsArrowReturnRight />
            <span className="ml-4">About Company</span>
          </p>
          <h3 className="lg:text-6xl text-xl lg:w-full w-2/3 mx-auto text-white mb-14">
            Our Main Goal to Satisfied local & Global Clients
          </h3>
          <p className=" text-justify mb-14 lg:w-full w-2/3 mx-auto">
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
