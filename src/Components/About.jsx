import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  // SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiVercel,
  SiNpm,
  SiFigma,
} from "react-icons/si";

import Navbar from "./Navbar";

function About() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-400" size={20} /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={20} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400" size={20} />,
    },
    { name: "React", icon: <SiReact className="text-blue-300" size={20} /> },
    // { name: "Next.js", icon: <SiNextdotjs size={20} /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-400" size={20} />,
    },
    { name: "Express.js", icon: <SiExpress size={20} /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" size={20} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" size={20} />,
    },
    { name: "Git", icon: <SiGit className="text-orange-500" size={20} /> },
    { name: "Vercel", icon: <SiVercel size={20} /> },
    { name: "NPM", icon: <SiNpm className="text-red-500" size={20} /> },
    { name: "Figma", icon: <SiFigma size={20} /> },
  ];
  return (
    <div className="relative bg-[#2E424D] font-sans min-h-screen text-gray-200">
      {/* Navbar (same style as Hero section) */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Page Content */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Passion & Progress</h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-12 text-lg">
          A progression of my education, skill development, and growth as a
          developer.
        </p>

        {/* Example Section Header */}
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>

        {/* Example Card */}
        <div className="bg-[#405460] p-6 rounded-xl border border-[#5b8d98]">
          {/* <h3 className="text-xl font-semibold">
            B.S. in Software Engineering
          </h3> */}
          <p className="text-gray-300 mt-1">
            I’m a{" "}
            <span className="font-bold">MERN Stack Full-Stack Developer</span>{" "}
            focused on creating clean, efficient, and user-friendly web
            applications. With strong skills in MongoDB, Express.js, React, and
            Node.js, I transform ideas into powerful digital solutions.
          </p>
          <p className="text-gray-300 mt-4">
            I’m committed to learning fast and adapting quickly, especially as I
            explore the world of{" "}
            <span className="font-bold">Generative AI</span> to bring smarter
            features into modern web apps. My goal is to combine full-stack
            engineering with AI innovation so clients get future-ready, scalable
            products.
          </p>
          <p className="text-gray-300 mt-4">
            If you need a developer who is technical, creative, and
            growth-driven, I’m the right fit for your next project.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-6">Education</h2>

        {/* Example Card */}
        <div className="bg-[#405460] p-6 rounded-xl border border-[#5b8d98]">
          <h3 className="text-xl font-semibold">
            B.S. in Software Engineering
          </h3>
          <p className="text-gray-300 mt-1">
            The Superior University,Lahore | 2024 – 2028
          </p>
        </div>

        {/* Add Skills Section */}
        <h2 className="text-2xl font-semibold mt-12 mb-6">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-6 gap-4 bg-[#405460] border  rounded-xl  border-[#5b8d98]">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 bg-[#2E424D] rounded-xl p-3  transition"
            >
              <span>{skill.icon}</span>
              <span className="text-gray-200 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#405460] p-6 rounded-xl border border-[#5b8d98] mt-10 text-center">
          <h3 className="text-xl font-semibold text-white">
            Want to See the Full Picture?
          </h3>
          <p className="text-gray-300 mt-4">
            Check out my resume/CV for a comprehensive overview of my skills,
            experience, and projects.
          </p>
          <a
            href="MyResume.pdf"
            className="bg-[#5b8d98] text-white font-medium px-4 py-2 rounded-lg mt-6 inline-block transition-transform transform hover:scale-105 hover:bg-[#72a1b2]"
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
