import React from "react";
import { BsArrowReturnRight, BsStarFill, BsStarHalf } from "react-icons/bs";
// import {RiDoubleQuotesR} from 'react-icons/ri';

import reviewer from "../../assests/reviewer.jpg";

const Reviews = () => {
  return (
    <div className="container mx-auto py-32">
      <p className=" text-emerald-500 flex items-center justify-center mb-6 font-bold text-2xl py-10">
        <BsArrowReturnRight />
        <span className="ml-4">Review From A Customer.</span>
      </p>
      <div className="flex justify-center flex-col-reverse lg:flex-row mx-auto items-center gap-10">
        <div className="lg:w-2/5 w-full mx-auto ">
          <div className="flex w-10/12 lg:w-full items-center text-emerald-500 mx-auto">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          <p className="mt-5 w-10/12 lg:w-full mx-auto">
            On the other hand, we denounce see with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure moment.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-3/6" src={reviewer} alt="reviewer" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
