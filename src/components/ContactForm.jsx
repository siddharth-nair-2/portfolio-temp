import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <>
      <div
        name="contact"
        className="w-[80%] mx-auto h-screen bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/0efa1ea7-0594-4f53-b5e4-375d817db696"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#E6536C] text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below or shoot me an email - nairsid2@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button className="text-white border-2 hover:bg-[#E6536C] hover:border-[#E6536C] px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
      <div className=" pb-16 lg:hidden">
        <ul className=" w-[90%] mx-auto grid grid-cols-2 gap-4">
          <li className="w-[160px] h-[60px] flex justify-between items-center hover:mt-[-10px] duration-300 bg-blue-600 rounded-lg  mx-auto my-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/siddharth-nair2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center hover:mt-[-10px] duration-300 bg-[#333333] rounded-lg  mx-auto my-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/siddharth-nair-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center hover:mt-[-10px] duration-300 bg-[#6fc2b0] rounded-lg  mx-auto my-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:nairsid2@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center hover:mt-[-10px] duration-300 bg-[#565f69] rounded-lg  mx-auto my-4">
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
    </>
  );
};

export default ContactForm;
