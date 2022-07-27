import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const linkArr = [
  {
    name: "home",
    text: "Home",
  },
  {
    name: "about",
    text: "About",
  },
  {
    name: "skills",
    text: "Skills",
  },
  {
    name: "work",
    text: "Work",
  },
  {
    name: "contact",
    text: "Contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  let mobileClassName = !nav
    ? "hidden"
    : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center";

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div style={{ width: "100%", height: "80px" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "75px", cursor: "pointer" }}
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        {linkArr?.map((item) => {
          return (
            <li key={item.name}>
              <Link to={item.name} smooth={true} duration={500}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu  */}
      <ul className={mobileClassName}>
        {linkArr?.map((item) => {
          return (
            <li key={item.name} className="py-6 text-4xl">
              <Link
                to={item.name}
                smooth={true}
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/siddharth-nair2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/siddharth-nair-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:nairsid2@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="resume.pdf"
              download="Siddharth-Nair-Resume.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
