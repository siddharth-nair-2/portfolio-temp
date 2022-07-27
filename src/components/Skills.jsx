import React from "react";
import JS from "../assets/javascript.png";
import Java from "../assets/java.png";
import CSS from "../assets/css.png";
import Node from "../assets/node.png";
import ReactLogo from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Github from "../assets/github.png";
import Mysql from "../assets/mysql.png";
import HTML from "../assets/html.png";
import AWS from "../assets/aws.png";
import Firebase from "../assets/firebase.png";
import Postman from "../assets/postman.webp";

const imgArr = [
  { name: "Java", img: Java },
  { name: "JavaScript", img: JS },
  { name: "React", img: ReactLogo },
  { name: "Node.js", img: Node },
  { name: "MongoDB", img: Mongo },
  { name: "Github", img: Github },
  { name: "CSS", img: CSS },
  { name: "MySQL", img: Mysql },
  { name: "AWS", img: AWS },
  { name: "HTML", img: HTML },
  { name: "Firebase", img: Firebase },
  { name: "Postman", img: Postman },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen mb-[400px] md:mb-0">
      <div className="max-w-[1000px] mx-auto p-16 flex flex-col justify-center w-full h-full text-gray-300 ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#E6536C]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 justify-center items-center">
          {imgArr?.map((item) => {
            return (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-300"
                key={item.name}
              >
                <img
                  className="w-20 h-20 mx-auto"
                  src={item.img}
                  alt={item.name}
                />
                <p className="my-4">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
