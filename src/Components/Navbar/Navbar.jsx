import React from "react";
import { FiSearch } from "react-icons/fi";
import logo from "../../assests/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto ">
      <div className="navbar bg-transparent fixed container mx-auto text-white">
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
                <summary className="text-xl font-normal">Our Services</summary>
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
    </div>
  );
};

export default Navbar;
