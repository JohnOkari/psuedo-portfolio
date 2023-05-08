import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import ruby from "../assets/ruby.png";
import rails from "../assets/rails.png";
import postgres from "../assets/postgres.png";
// import graphql from "../assets/graphql.png";
// import github from "../assets/github.png";
// import php from "../assets/php.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    
    {
      id: 7,
      src: ruby,
      title: "Ruby",
      style: "shadow-red-400",
    },
    {
      id: 8,
      src: rails,
      title: "Ruby on poRails",
      style: "shadow-red-400",
    },
    {
      id: 9,
      src: postgres,
      title: "Ruby on poRails",
      style: "shadow-blue-400",
    },
    // {
    //   id: 10,
    //   src: php,
    //   title: "Ruby on poRails",
    //   style: "shadow-sky-400",
    // },
    // {
    //   id: 12,
    //   src: graphql,
    //   title: "GraphQL",
    //   style: "shadow-pink-400",
    // },
    // {
    //   id: 13,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-400",
    // },


  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-20 sm:mt-20 md:mt-20">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
