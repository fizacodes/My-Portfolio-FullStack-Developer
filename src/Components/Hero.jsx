import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  return (
    <div className="relative bg-[#2E424D] font-sans min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO CONTENT ABSOLUTELY CENTERED */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2">
        <h1 className="text-white font-semibold font-sans sm:text-8xl  text-4xl mb-4">
          Fiza Shahid
        </h1>
        <h2 className="text-2xl tracking-wider font-medium text-[#98DAD9] mb-4">
          Fullstack Developer
        </h2>

        <p className="text-gray-300 text-lg  sm:w-[600px] mb-6">
          Crafting fast, intuitive, and user-focused web experiences from idea
          to full deployment.
        </p>

        <div className="flex sm:flex-row flex-col sm:items-center gap-6 mt-6">
          {/* Button */}
          <Link
  to="/projects"
  className="bg-[#5b8d98] font-medium text-white px-6 py-3 rounded-lg text-center w-max hover:bg-[#79a6ac] transition"
>
  View My Works
</Link>


          {/* Social Icons */}
          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/fizacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-500 bg-opacity-30 flex items-center justify-center rounded-full hover:bg-opacity-50 transition cursor-pointer shadow-sm"
            >
              <Github size={20} color="#FFFFFF" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fizaprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-500 bg-opacity-30 flex items-center justify-center rounded-full hover:bg-opacity-50 transition cursor-pointer shadow-sm"
            >
              <Linkedin size={20} color="#FFFFFF" />
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fiza.codes@gmail.com
"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-500 bg-opacity-30 flex items-center justify-center rounded-full hover:bg-opacity-50 transition cursor-pointer shadow-sm"
            >
              <Mail size={20} color="#FFFFFF" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
