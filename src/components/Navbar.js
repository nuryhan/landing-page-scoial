import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("Marketplace");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-[#5F40AF] md:bg-transparent fixed md:px-[250px] px-6 z-[15] flex py-6 justify-between items-center">
      <div className="flex items-center w-[145px] h-[39px] ">
        <img src={logo} alt="bluejestic" className="w-[36px] h-[28px]" />
        <h2 className="font-yantramanav not-italic font-[700] md:text-[30px] text-[22px] text-[#F8F8F8] xs:leading-[39px] leading-[28px] w-full">
          Bluejestic
        </h2>
      </div>

      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-600  cursor-pointer text-[16px] leading-[24px] ${
              active === nav.title ? "text-white" : "text-[#efefef]"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <Button color="#fff" content="Get Started" />
      </ul>

      {/* Navbar responsive menu */}
      <div className="md:hidden flex  justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[42px] h-[42px]  object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#5F40AF] z-[12] flex-col justify-center items-center absolute top-20 right-0  w-full  `}
        >
          <ul className="list-none flex z-[12] justify-center items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-[600] cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-gray-400"
                }  mb-8`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <div className="mb-8">
              <Button color="#fff" content="Get Started" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
