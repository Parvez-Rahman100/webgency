import React from "react";
import CountUp from "react-countup";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Counter = () => {
  return (
    <div className="bg-black">
      <div className="lg:flex lg:flex-row justify-between flex-col  items-center py-36 container mx-auto">
        <div>
          <AiOutlineCheckCircle size={30} className="text-emerald-500" />
          <CountUp
            duration={10}
            className=" font-new text-9xl hover:text-emerald-500"
            end={25}
          />
          <p className="mt-10 text-xl font-bold text-white hover:text-emerald-500">
            Years Of Experience
          </p>
        </div>
        <div>
          <AiOutlineCheckCircle size={30} className="text-emerald-500" />
          <CountUp
            duration={10}
            className=" font-new text-9xl hover:text-emerald-500"
            end={200}
          />
          <p className="mt-10 text-xl font-bold text-white hover:text-emerald-500">
            Project&apos;s Complete
          </p>
        </div>
        <div>
          <AiOutlineCheckCircle size={30} className="text-emerald-500" />
          <CountUp
            duration={10}
            className="font-new text-9xl hover:text-emerald-500"
            end={45}
          />
          <p className="mt-10 text-xl font-bold text-white hover:text-emerald-500">
            Professionals Team Member
          </p>
        </div>
        <div>
          <AiOutlineCheckCircle size={30} className="text-emerald-500" />
          <CountUp
            duration={10}
            className=" font-new text-9xl hover:text-emerald-500"
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
