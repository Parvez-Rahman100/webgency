import React from "react";
import CountUp from "react-countup";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Counter = () => {
  return (
    <div className="container mx-auto w-4/5">
      <div className="lg:flex lg:flex-row justify-between flex-col  items-center py-36 ">
        <div className="mt-5 lg:mt-0 ">
          <AiOutlineCheckCircle size={30} className="text-emerald-500" />
          <CountUp
            duration={10}
            className=" font-new lg:text-9xl text-6xl hover:text-emerald-500"
            end={25}
          />
          <p className="mt-10 text-xl font-bold text-white hover:text-emerald-500">
            Years Of Experience
          </p>
        </div>
        <div className="mt-5 lg:mt-0 ">
          <AiOutlineCheckCircle size={30} className="text-emerald-500" />
          <CountUp
            duration={10}
            className=" font-new lg:text-9xl text-6xl hover:text-emerald-500"
            end={200}
          />
          <p className="mt-10 text-xl font-bold text-white hover:text-emerald-500">
            Project&apos;s Complete
          </p>
        </div>
        <div className="mt-5 lg:mt-0 ">
          <AiOutlineCheckCircle size={30} className="text-emerald-500" />
          <CountUp
            duration={10}
            className="font-new lg:text-9xl text-6xl hover:text-emerald-500"
            end={45}
          />
          <p className="mt-10 text-xl font-bold text-white hover:text-emerald-500">
            Professionals Team Member
          </p>
        </div>
        <div className="mt-5 lg:mt-0 ">
          <AiOutlineCheckCircle size={30} className="text-emerald-500" />
          <CountUp
            duration={10}
            className=" font-new lg:text-9xl text-6xl hover:text-emerald-500"
            end={95}
          />
          <p className="mt-10 text-xl font-bold text-white hover:text-emerald-500">
            Awards Winnings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
