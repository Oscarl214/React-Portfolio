import React, { useEffect } from "react";
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
  SiGraphql,
  SiAmazons3,
  SiApollographql,
  SiTailwindcss,
  SiGit,
  SiBootstrap,
  SiAmazonaws,
  SiExpress,
} from "react-icons/si";
import Footer from "../Footer";
import { gsap } from "gsap";

export default function About() {
  return (
<div className=" pb-8 flex flex-wrap justify-center items-start md:items-center md:pt-12 md:pl-8 min-h-screen">
  <div className="max-h-full bg-gradient-to-b from-blue-300 to-blue-500 rounded-sm w-50 h-100 overflow-hidden mt-5 md:mt-20 md:h-100 md:w-100">
    <img
      src="/GradShot.jpeg"
      alt="myavator"
      className="w-auto max-h-lg rounded-lg "
    />
  </div>
  <div className="flex-1">
    
  </div>
</div>

  );
}



    // <div className="text-center py-10">
    //   <h2 className=" animate-pulse text-5xl text-lime-500 dark:text-teal-600 md:text-6xl font-medium ">
    //     O's World
    //   </h2>
    //   <div className="mx-auto bg-gradient-to-b from-blue-300-500 rounded-sm w-80 h-100 relative overflow-hidden mt-20 md:h-100 md:w-100 ">
    //     <img
    //       src="/GradShot.jpeg"
    //       alt="myavator"
    //       className=" w-auto max-h-lg rounded-lg "
    //     />
    //   </div>
    //   <p className="py-4">
    //     My name is Oscar Leal, and I recently graduated from the University of
    //     Texas with dual Bachelor of Science degrees in Arts & Entertainment
    //     Technologies and Corporate Communications. Additionally, I successfully
    //     completed a full-stack coding bootcamp, where I gained expertise in
    //     utilizing various web technologies to build comprehensive applications.
    //     The bootcamp was an intensive learning experience that taught me how to
    //     effectively navigate both front-end and back-end technologies.
    //   </p>
    //   <p>
    //     Equipped with this knowledge, I am proficient in creating full-stack
    //     applications. Furthermore, the bootcamp provided valuable opportunities
    //     to collaborate with peers, fostering strong teamwork and collaboration
    //     skills essential for developing successful projects.
    //   </p>

    //   <p>
    //     I am passionate about leveraging my education and coding skills to
    //     contribute to innovative and impactful projects in the field of
    //     technology. I am excited about the opportunities that lie ahead and look
    //     forward to bringing my expertise to the table in a collaborative and
    //     dynamic environment.
    //   </p>

    //   <div className="text-center p-10 py-10 shadow-rose-600/40 ring-2 ring-lime-600">
    //     <h2>My SkillSet</h2>
    //     <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-12 py-10 animate-pulse justify-items-center ">
    //       <SiJavascript className="text-yellow-300 text-4xl md:text-8xl" />
    //       <SiCss3 className="text-blue-300 text-4xl md:text-8xl " />
    //       <SiHtml5 className="text-red-500 text-4xl md:text-8xl " />
    //       <SiNodedotjs className="text-lime-500 text-4xl md:text-8xl " />
    //       <SiReact className="text-blue-700 text-4xl md:text-8xl" />
    //       <SiExpress className="text-4xl md:text-8xl" />
    //       <SiHandlebarsdotjs className="text-orange-500 text-4xl md:text-8xl " />
    //       <SiMongodb className="text-green-600  text-4xl md:text-8xl " />
    //       <SiMongoose className="text-red-600 text-4xl md:text-8xl " />
    //       <SiMysql className="text-orange-300 text-4xl md:text-8xl " />
    //       <SiSequelize className="text-blue-500 text-4xl md:text-8xl " />
    //       <SiGraphql className="text-red-500 text-4xl md:text-8xl" />
    //       <SiApollographql className="text-purple-500 text-4xl md:text-8xl " />
    //       <SiAmazonaws className="text-orange-300 text-4xl md:text-8xl" />
    //       <SiGit className="text-orange-500 text-4xl md:text-8xl " />
    //       <SiTailwindcss className="text-blue-400 text-4xl md:text-8xl" />
    //       <SiBootstrap className="text-purple-500 text-4xl md:text-8xl" />
    //     </div>
    //     {/* <p className=" py-7">
    //       I have been able to leverage JavaScript through various front end &
    //       back end Technologies that I have learned during my bootcamp
    //       experience.
    //     </p> */}
    //   </div>
    //   <Footer />
    // </div>