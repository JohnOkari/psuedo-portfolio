import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
    
      name="about"
      className="w-full  md:my--0 h-full md:h-screen p-2 flex items-center bg-gradient-to-b from-gray-800 to-black text-white pt-20 sm:pt-4 md:pt-2 pb-20 sm:py-4 md:pb-2"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-2">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-white">
            I am a Fullstack Developer who believes that technology's full
            potential is yet to be exploited. I enjoy building solutions that
            impact people and businesses. I initially focused on{" "}
            <span className=" text-[#5651e5]">problem-solving</span> before
            transitioning into a
            <span className=" text-[#5651e5]">
              {" "}
              a full stack software engineer
            </span>{" "}
            and <span className=" text-[#5651e5]">Technical Writer</span>
          </p>
          <p className="py-2 text-white">
            Over the last <span className=" text-[#5651e5]">three years</span> I
            have gained considerable experience in the technology industry . I
            am a graduate of {""}
            <span className=" text-[#5651e5]">Microverse,</span> a remote
            International learning institution where I learned through pair
            programming and project building. We worked on many different
            technologies like{" "}
            <span className=" text-[#5651e5]">
              HTML, CSS, JS, React, Postgresql, Ruby on Rails,
            </span>{" "}
            and collaborated with developers across the globe . Additionally, I
            have completed a software development program at{" "}
            <span className=" text-[#5651e5]">Moringa School</span> which is the{" "}
            <span className=" text-[#5651e5]">top programming school</span> in
            Kenya.
          </p>

          <p className="py-2 text-white">
            My overwhelming curiosity about tech can't stop me from exploring
            new challenges. I'm passionate about making open-source more
            accessible and creating technology to solve problems.
          </p>
          <p className="py-2 text-white">
            Through my experiences, I discovered my passion for teaching and
            mentoring others. Currently, I write technical articles on{" "}
            <span className=" text-[#5651e5]">
              <a
                href="https://medium.com/@michaelmunavu83"
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </a>
            </span>
          </p>
          <p className="py-2 text-white  cursor-pointer">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Check out my portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </p>
        </div>

        <div className="flex justify-center mt-5 bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full md:w-96 md:h-96 w-80 h-80 m-auto hover:scale-105 ease-in duration-300 shadow-xl shadow-[#5651e5] cursor-pointer">
          <img
            src={HeroImage}
            alt="my profile"
            layout="fill"
            objectFit="cover"
            className="flex rotate-270 mx-auto justify-center rounded-full shadow-lg shadow-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
