import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_i22pku8",
        "template_iu8l9jf",
        formRef.current,
        "2kQVs3_IYOpkmNTuh"
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 p-8 md:p-16 min-h-screen bg-[#2E424D] font-sans text-gray-200">
      {/* Navbar wrapper similar to Hero section */}
      <div className="absolute top-0 left-0 w-full z-50">
        <div className=" mx-auto ">
          <Navbar />
        </div>
      </div>

      {/* Left Text Section */}
      <div className="max-w-lg mt-40 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-400 mb-6">
          I’m open to freelance projects, collaborations, or career
          opportunities. Whether you have a new idea, a challenge to solve, or
          just want to say hi, I’d love to hear from you. Let’s create something
          amazing together!
        </p>
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

      {/* Right Form Section */}
      <div className="bg-[#405460] p-8 rounded-xl w-full max-w-md shadow-lg  md:mt-0">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your full name"
            required
            className="p-3 rounded bg-[#2C3E50] border border-gray-600 focus:outline-none  focus:border-[#5b8d98] placeholder-gray-400 text-gray-200"
          />

          <label className="font-semibold">Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            required
            className="p-3 rounded bg-[#2C3E50] border border-gray-600 focus:outline-none focus:border-[#5b8d98] placeholder-gray-400 text-gray-200"
          />

          <label className="font-semibold">Your Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Hi, I’d like to connect regarding..."
            required
            className="p-3 rounded bg-[#2C3E50] border-2 border-gray-600 focus:outline-none  focus:border-[#5b8d98]  placeholder-gray-400 text-gray-200"
          />

          <button
            type="submit"
            disabled={loading}
            className={`mt-2 p-3 rounded bg-[#5b8d98] text-white font-semibold hover:bg-[#507d87] transition-colors ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2">
              Failed to send message. Try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
