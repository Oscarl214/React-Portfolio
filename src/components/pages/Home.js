import React, { useEffect, useRef} from "react";
import {
  AiOutlineFileText,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { gsap } from "gsap";
import "../../styles/app.css";

export default function Home() {



  
  useEffect(() => {
    gsap.fromTo(
      ".links",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  });

  return (
    <div className="text-center p-10 py-10 ">
      <h2 className=" animate-pulse text-5xl py-2 text-lime-500 font-medium dark:text-teal-400 md:text-6xl">
        Hi, I'm Oscar 
      </h2>

      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Software Developer.
      </h3>
      <p className="App-text md py-5 leading-9 max-w-xl mx-auto md:text-x4 font-bold">
        Dedicated to creating web applications that solve real world problems.
        <br></br>
        Lets Connect!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-white-600 dark:text-white-400 links">
        <a
          href="www.linkedin.com/in/oscar-l-8371a512a"
          target="_blank"
          alt="LinkedIn"
          title="LinkediN"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/Oscarl214"
          title="Github"
          target="_blank"
          alt="Github"
          className="decoration-none"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://drive.google.com/file/d/17-0lqDk_KMBrRq-iD69BnZaCOB8diu4X/view?usp=drive_link"
          target="_blank"
          alt="drive"
          title="Resume"
        >
          {" "}
          <AiOutlineFileText />
        </a>
      </div>
        <div className="nav-container">
    
      <div className=" mx-auto bg-gradient-to-b from-blue-300-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-100 md:w-100">
       

        <img
          src="/Me.jpeg"
          alt="myavator"
          className="w-full h-full object-cover"
          />
          </div>
          </div>
      </div>
   
  );
}
