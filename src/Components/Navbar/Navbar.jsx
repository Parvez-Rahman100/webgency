import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GiTireIronCross } from "react-icons/gi";
import { SiWebflow } from "react-icons/si";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "PAGES", link: "/" },
    { name: "OUR SERVICES", link: "/" },
    { name: "PORTFOLIO", link: "/" },
    { name: "BLOG", link: "/" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
  }, []);

  return (
    <nav>
      <div
        className={`${
          visible ? "blur-nav" : ""
        } shadow-md w-full fixed top-0 left-0`}
      >
        <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
          {/* logo section */}
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <SiWebflow className="w-7 h-7 text-blue-600" />
            <span>Inscribe</span>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <GiTireIronCross /> : <BiMenuAltRight />}
          </div>
          {/* linke items */}
          <ul
            className={` md:flex md:items-center   md:pb-0 pb-12 absolute md:static  md:z-20 z-20 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12 && bg-emerald-600 && text-black " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <a
                  href={link.link}
                  className={`${
                    open ? " text-black font-semibold " : "text-white"
                  }   hover:text-emerald-500 duration-500`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button className=" text-white md:ml-8 font-semibold  rounded duration-500 md:static">
              <FiSearch size={35} />
            </button>
          </ul>
          {/* button */}
        </div>
      </div>

      {/* <div className={` ${visible ? "blur-nav" : ""} bg-[#091716]`}>
        <div className="navbar bg-transparent container mx-auto text-white">
          <div className="flex-1">
            <a href=" #" className=" cursor-pointer normal-case text-xl w-36">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="text-xl font-normal">
                <a href="/">Home</a>
              </li>
              <li>
                <details>
                  <summary className="text-xl font-normal">About</summary>
                  <ul className="p-2 bg-base-100">
                    <li className="text-xl font-normal">
                      <a href=" #">Link 1</a>
                    </li>
                    <li className="text-xl font-normal">
                      <a href=" #">Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-xl font-normal">Pages</summary>
                  <ul className="p-2 bg-base-100">
                    <li className="text-xl font-normal">
                      <a href=" #">Link 1</a>
                    </li>
                    <li className="text-xl font-normal">
                      <a href=" #">Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-xl font-normal">
                    Our Services
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li className="text-xl font-normal">
                      <a href=" #">Link 1</a>
                    </li>
                    <li className="text-xl font-normal">
                      <a href=" #">Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="text-xl font-normal">
                <a href="/">Portfolio</a>
              </li>
              <li>
                <details>
                  <summary className="text-xl font-normal">Blog</summary>
                  <ul className="p-2 bg-base-100">
                    <li className="text-xl font-normal">
                      <a href=" #">Link 1</a>
                    </li>
                    <li className="text-xl font-normal">
                      <a href=" #">Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <FiSearch size={25} />
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
