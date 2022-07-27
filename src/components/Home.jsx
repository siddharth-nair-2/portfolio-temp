import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full">
        <p className="text-[#E6536C]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd8f8]">
          Siddharth Nair
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Developer
        </h2>
        <p className="text-[#ccd8f8] py-4 max-w-[700px]">
          I am passionate about building excellent software that improves the
          lives of those around me. Coding is something I've been passionate
          about since I was a child, and over the years my love for the field
          has only grown. I'm dependable, versa
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E6536C] hover:border-[#E6536C]">
            View Work
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
