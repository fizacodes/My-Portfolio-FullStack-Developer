import React from "react";
import Navbar from "./Navbar";

function Project() {
  return (
    <div className="relative bg-[#2E424D] font-sans min-h-screen text-gray-200 overflow-x-auto">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">My Works</h1>
        <p className="text-gray-400">
          Here's a selection of my projects that showcase my skills and
          experience. Each project includes a brief description, the
          technologies used, and links to the live demo and source code.
        </p>
        <div className="flex gap-6 flex-wrap">
          {/* Project Items */}
          <div className=" flex flex-col w-96 mt-10 p-4 border border-[#2E424D] rounded-lg shadow-lg hover:shadow-xl transition mb-6">
            <img src="agromart.png" alt="" />
            <h1 className="mb-4 mt-4 text-2xl font-serif font-semibold">
              Farmer Marketplace
            </h1>
            <p className="text-gray-300">
              Farmer Marketplace is a full-stack web application that connects farmers directly with buyers eliminating middleman through a digital marketplace. The platform allows farmers to manage and showcase their products, while customers can browse, search, and purchase agricultural items easily. It includes features such as secure authentication, product management, real-time communication, and a responsive user interface built with modern web technologies.{" "}
            </p>
            <div className="flex gap-4 mt-4 w-96 flex-wrap">
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Html
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                TailwindCss
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Nextjs
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                PostgreSQL
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Prisma 
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Neon
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                JWT Authentication
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Cloudinary{" "}
              </p>
            </div>
            <div className="flex justify-between ">
              <a
                href="https://agro-mart-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5b8d98] text-white mt-6 font-medium p-2 hover:bg-[#719ca6] rounded-lg"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/fizacodes/AgroMart-web"
                className="bg-[#5b8d98] text-white mt-6 font-medium p-2 hover:bg-[#719ca6] rounded-lg ml-4"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className=" flex flex-col w-96 mt-10 p-4 border border-[#2E424D] rounded-lg shadow-lg hover:shadow-xl transition mb-6">
            <img src="lacuisine.png" alt="" />
            <h1 className="mb-4 mt-4 text-2xl font-serif font-semibold">
              Resturant Website
            </h1>
            <p className="text-gray-300">
              La Cuisine is a fully responsive restaurant website designed to
              elevate the brand’s online presence by showcasing its menu,
              ambiance, and dining experience. It features high-quality visuals,
              smooth navigation, and clear call-to-action elements, all
              optimized for performance and mobile usability. With a
              user-centered design, La Cuisine delivers a modern and seamless
              browsing experience across all devices.{" "}
            </p>
            <div className="flex gap-4 mt-4 w-96 flex-wrap">
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Html
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                TailwindCss
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Reactjs
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Nodejs
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Mongodb
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Expressjs{" "}
              </p>
            </div>
            <div className="flex justify-between ">
              <a
                href="https://resturant-website-frontend-pearl.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5b8d98] text-white mt-6 font-medium p-2 hover:bg-[#719ca6] rounded-lg"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/fizacodes/Resturant-Website-Frontend"
                className="bg-[#5b8d98] text-white mt-6 font-medium p-2 hover:bg-[#719ca6] rounded-lg ml-4"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* Taskly Website */}
          <div className=" flex flex-col w-96 mt-10 p-4 border border-[#2E424D] rounded-lg shadow-lg hover:shadow-xl transition mb-6">
            <img src="taskly.png" alt="" />
            <h1 className="mb-4 mt-4 text-2xl font-serif font-semibold">
              Taskly-Task Manager
            </h1>
            <p className="text-gray-300">
              La Cuisine is a fully responsive restaurant website designed to
              elevate the brand’s online presence by showcasing its menu,
              ambiance, and dining experience. It features high-quality visuals,
              smooth navigation, and clear call-to-action elements, all
              optimized for performance and mobile usability. With a
              user-centered design, La Cuisine delivers a modern and seamless
              browsing experience across all devices.{" "}
            </p>
            <div className="flex gap-4 mt-4 w-96 flex-wrap">
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Html
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                TailwindCss
              </p>
              <p className="text-[#98DAD9] font-semibold rounded-md p-1 px-2 bg-[#405460]">
                Reactjs
              </p>
            </div>
            <div className="flex justify-between">
              <a
                href="https://task-manager-cw89.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5b8d98] text-white mt-6 font-medium p-2 hover:bg-[#719ca6] rounded-lg"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/fizacodes/Task-Manager"
                className="bg-[#5b8d98] text-white mt-6 font-medium p-2 hover:bg-[#719ca6] rounded-lg ml-4"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
