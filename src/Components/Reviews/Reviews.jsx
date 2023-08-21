import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
// import {RiDoubleQuotesR} from 'react-icons/ri';

import reviewer from "../../assests/reviewer.jpg";

const Reviews = () => {
  return (
    <div className=" bg-black pt-32">
      <div className="flex justify-center flex-col lg:flex-row items-center gap-10  container mx-auto">
        <div className="lg:w-1/5 w-full ">
          <div className="flex items-center text-emerald-500">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          <p className="mt-5">
            On the other hand, we denounce see with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure moment.
          </p>
        </div>
        <div>
          <img className="w-5/6" src={reviewer} alt="reviewer" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
