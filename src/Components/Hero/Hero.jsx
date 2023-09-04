import React from "react";
import heroBg from "../../assests/HeroBackground.png";
import heroRight from "../../assests/hero-right.png";
import HeroImg from "../../assests/web-design-hero-min.jpg";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-tr from-black to-[#0A1B1A] py-40 ">
        <div
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundRepeat: "round",
          }}
        >
          <div className="container mx-auto ">
            <div className="absolute z-[1] top-36 left-1/4">
              <h1 className=" text-[125px] font-bold italic text-white select-none ">
                WEB <br />
                <span className="font-new text-emerald-500">DESIGN</span>
                <br /> AGENCY
              </h1>
            </div>
            <div className="relative flex flex-col  justify-end items-end">
              <div className="mb-36 select-none">
                <img src={heroRight} alt="hero-right" />
              </div>
              <div className=" bg-cover bg-center w-full select-none ">
                <img src={HeroImg} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
