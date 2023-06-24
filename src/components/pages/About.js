import React from "react";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiHandlebarsdotjs,
  SiReact,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiSequelize,
} from "react-icons/si";

export default function About() {
  return (
    <div className="text-center p-10 py-10 bg-gradient-to-b from-blue-600 to-lime-200">
      <h2 className=" animate-pulse text-5xl py-2 text-black dark:text-teal-600 md:text-6xl font-medium ">
        O's World
      </h2>
      <div className="mx-auto bg-gradient-to-b from-blue-300-500 rounded-sm w-80 h-100 relative overflow-hidden mt-20 md:h-100 md:w-100 ">
        <img
          src="/GradShot.jpeg"
          alt="myavator"
          className="w-auto max-h-lg rounded-lg "
        />
      </div>
      <p className=" py-7">
        My name is Oscar Leal and I am a recent graduate from the University of
        Texas with a Bachelor of Science in Arts & Entertainment Technologies
        and a Bachelor of Science in Corporate Communications. I am currently
        partaking in an intensive full stack coding bootcamp where I have been
        taught how to leverage various web Technologies to build fullstack
        applications.
      </p>
      <div className="text-center p-10 py-10 shadow-rose-600/40 ring-2 ring-indigo-600">
        <h2>My SkillSet</h2>
        <div className="flex justify-around py-10 animate-pulse">
          <SiJavascript className="text-yellow-300 text-4xl md:text-8xl" />
          <SiCss3 className="text-blue-300 text-4xl md:text-8xl " />
          <SiHtml5 className="text-red-500 text-4xl md:text-8xl " />
          <SiNodedotjs className="text-lime-500 text-4xl md:text-8xl " />
          <SiReact className="text-blue-700 text-4xl md:text-8xl" />
          <SiHandlebarsdotjs className="text-orange-500 text-4xl md:text-8xl " />
          <SiMongodb className="text-green-600  text-4xl md:text-8xl " />
          <SiMongoose className="text-red-600 text-4xl md:text-8xl " />
          <SiMysql className="text-orange-300 text-4xl md:text-8xl " />
          <SiSequelize className="text-blue-500 text-4xl md:text-8xl " />
        </div>
      </div>
    </div>
  );
}
