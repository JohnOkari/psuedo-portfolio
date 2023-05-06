import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";
// import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

const Home = () => {
  return (
  //   <motion.div
  //   initial={{ opacity: 0, y: 30 }}
  //   animate={{ opacity: 1, y: 0 }}
  //   exit={{ opacity: 0, y: 30 }}
  //   transition={{ duration: 2 }}
  // >
    <div  name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-32 md:pt-0 text-center">
      <div className="max-w-[1240px] mx-auto h-full flex p-2 justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-white ">
            LET'S BUILD SOMETHING BEAUTIFUL
          </p>
          <h1 className="py-3 text-white-700">
            Hi , I am <span className="text-[#5651e5]">John Okari</span>
          </h1>
          <h2 className=" text-white text-center">I am a</h2>

          <h1 className="py-3 fjalla-one md:text-3xl text-md text-[#5651e5]">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "React Developer",
                  "Ruby on Rails Developer",
                  "Technical Writer",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </h1>
          <p className=" kulim-park py-4 text-white max-w-[85%] m-auto">
            Looking for a full-stack developer with a track record of success?
            Look no further! With 3 years of self-taught experience and
            graduation from top bootcamps Micorverse and Moringa, I have the
            skills and passion to build stunning, scalable web applications.
            From small to large-scale projects, I have used React and Ruby on
            Rails to create solutions that delight users and drive results. So
            why settle for less when you can have the best? Let's build
            something great together
          </p>
          <div className="flex items-center justify-between max-w-[330px] md:gap-4 gap-2 m-auto py-4">
            <div className="text-white rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer  hover:scale-110 ease-in   duration-300">
              <a
                href="https://www.linkedin.com/in/johnnokari-001/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="md:text-2xl text-md " />
              </a>
            </div>
            <div className="text-white rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
              <a
                href="https://github.com/JohnOkari"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="md:text-2xl text-md " />
              </a>
            </div>
            <div className="text-white rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
              <a
                href="https://twitter.com/johnnokari"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="md:text-2xl text-md " />
              </a>
            </div>
            <div className="text-white rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
              <a rel="noopener noreferrer" href="tel:0707205896">
                <FiPhoneCall className="md:text-2xl text-md " />
              </a>
            </div>
            <div className="text-white rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
              <a
                href="https://wa.me/254707205896"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="md:text-2xl text-md " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  // </motion.div>

  );
};

export default Home;
