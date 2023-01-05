import React from "react";
import AdminSide from "../assets/adminside.gif";
import FootyShop from "../assets/footyshopgif.gif";
import Weather from "../assets/weather.gif";
import Chat from "../assets/arenaapp.gif";

const projectsArr = [
  {
    id: 1,
    name: "Arena Chat",
    img: Chat,
    demo: "https://temp-arena-chat.herokuapp.com/",
    code: "https://github.com/siddharth-nair-2/Arena-chat-app",
  },
  {
    id: 2,
    name: "FootyShop",
    img: FootyShop,
    demo: "https://delightful-cascaron-a4fa91.netlify.app/",
    code: "https://github.com/siddharth-nair-2/Ecommerce-Project/tree/main/Client",
  },
  {
    id: 3,
    name: "Weather App",
    img: Weather,
    demo: "https://serene-zabaione-d5023e.netlify.app/",
    code: "https://github.com/siddharth-nair-2/weather-app",
  },
  {
    id: 4,
    name: "Admin Dashboard",
    img: AdminSide,
    demo: "https://luminous-mermaid-b5e898.netlify.app/",
    code: "https://github.com/siddharth-nair-2/Ecommerce-Project/tree/main/Admin",
  },
];

const Work = () => {
  return (
    <div
      className="w-full md:h-screen text-gray-300 mb-[400px] md:mb-0"
      name="work"
    >
      <div className="max-w-[1000px] mx-auto px-16 p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E6536C]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container  */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* grid item */}

          {projectsArr?.map((item) => {
            return (
              <div
                style={{ backgroundImage: `url(${item.img})` }}
                key={item.id}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* hover  */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider text-center ml-4">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-large px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href={item.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-large px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
