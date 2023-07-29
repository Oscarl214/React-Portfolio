import React, { useEffect } from "react";
import {
  AiOutlineFileText,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".links",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  });

  return (
    <div className="text-center p-10 py-10 bg-gradient-to-b from-lime-200 to-blue-600 h-screen w-screen">
      <h2 className=" animate-pulse text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Oscar Leal
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Software Developer.
      </h3>
      <p className="text-md py-5 leading-9 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-x4 font-bold">
        Dedicated to creating web applications that solve real world problems.
        <br></br>
        Lets Connect!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-white-600 dark:text-white-400 links">
        <a
          href="https://www.linkedin.com/in/oscar-l-8371a512a/"
          target="_blank"
          alt="LinkedIn"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Oscarl214" target="_blank" alt="Github">
          <AiFillGithub />
        </a>
        <a
          href="https://drive.google.com/file/d/17-0lqDk_KMBrRq-iD69BnZaCOB8diu4X/view?usp=drive_link"
          target="_blank"
          alt="drive"
        >
          {" "}
          <AiOutlineFileText />
        </a>
      </div>
      <div className="mx-auto bg-gradient-to-b from-blue-300-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-100 md:w-100">
        <img
          src="/Me.jpeg"
          alt="myavator"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
