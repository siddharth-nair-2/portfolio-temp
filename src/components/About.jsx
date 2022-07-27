import React from "react";

const About = () => {
  return (
    <div name="about" className="w-[80%] h-screen mx-auto bg-[#0a192f] text-gray-300 mb-[400px] md:mb-0">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E6536C]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi. I'm Siddharth, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a fourth year Computer Science student who specializes in
              Software and Fullstack development. Over the last 3 years, I have
              developed multiple websites and applications using various
              frameworks, including React and Node.js as well as Java and Swing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
