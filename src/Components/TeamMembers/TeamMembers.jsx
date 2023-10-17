import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import person1 from "../../assests/person1.jpg";
import person2 from "../../assests/person2.jpg";
import person3 from "../../assests/person3.jpg";
import person4 from "../../assests/person4.jpg";
import person5 from "../../assests/person5.jpg";

const TeamMembers = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="container lg:w-10/12 w-9/12 mx-auto">
      <p className=" text-emerald-500 flex items-center justify-center mb-6 font-bold text-2xl pt-10">
        <BsArrowReturnRight /> <span className="ml-4">Team Members</span>
      </p>
      <h1 className="lg:text-6xl text-2xl font-design mb-10 font-bold italic text-center text-white py-6">
        Meet Our Professionals Team Members
      </h1>
      <Slider {...settings}>
        <div className="card w-96  shadow-xl cursor-pointer">
          <figure>
            <img src={person1} alt="person" className="rounded-xl w-5/6 " />
          </figure>
          <div className=" flex justify-around mt-8  items-center text-center">
            <div>
              <h2 className="card-title text-2xl text-white mb-2">
                Mrs . Bindu
              </h2>
              <p className="text-white lg:text-xl text-sm">Web Designer</p>
            </div>
            <div>
              <FiArrowUpRight size={30} />
            </div>
          </div>
        </div>
        <div className="card w-96 cursor-pointer ">
          <figure>
            <img src={person2} alt="person" className="rounded-xl w-5/6 " />
          </figure>
          <div className=" flex justify-around mt-8  items-center text-center">
            <div>
              <h2 className="card-title text-2xl text-white mb-2">Mr. Anik</h2>
              <p className="text-white lg:text-xl text-sm">Web Developer</p>
            </div>
            <div>
              <FiArrowUpRight size={30} />
            </div>
          </div>
        </div>
        <div className="card w-96 cursor-pointer ">
          <figure>
            <img src={person3} alt="person" className="rounded-xl w-5/6" />
          </figure>
          <div className=" flex justify-around mt-8  items-center text-center">
            <div>
              <h2 className="card-title text-2xl text-white mb-2">
                Mr. Parvez
              </h2>
              <p className="text-white lg:text-xl text-sm">Web Developer</p>
            </div>
            <div>
              <FiArrowUpRight size={30} />
            </div>
          </div>
        </div>
        <div className="card w-96 cursor-pointer ">
          <figure>
            <img src={person4} alt="person" className="rounded-xl w-5/6 " />
          </figure>
          <div className=" flex justify-around mt-8  items-center text-center">
            <div>
              <h2 className="card-title text-2xl text-white mb-2">Mr. Aurko</h2>
              <p className="text-white lg:text-xl text-sm">Project Manager</p>
            </div>
            <div>
              <FiArrowUpRight size={30} />
            </div>
          </div>
        </div>
        <div className="card w-96 cursor-pointer ">
          <figure>
            <img src={person5} alt="person" className="rounded-xl w-5/6" />
          </figure>
          <div className=" flex justify-around mt-8  items-center text-center">
            <div>
              <h2 className="card-title text-2xl text-white mb-2">
                Mrs. Nisha
              </h2>
              <p className="text-white lg:text-xl text-sm">Data Analyzer</p>
            </div>
            <div>
              <FiArrowUpRight size={30} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TeamMembers;
