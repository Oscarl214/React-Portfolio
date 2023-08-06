import React from "react";
import { useState, useEffect } from "react";
import Footer from "../Footer";


import ProjectCard from "../ProjectCard";

export default function Projects() {
  const [hoverStates, setHoverStates] = useState(Array(4).fill(false));

  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  useEffect(() => {
    const timeoutIds = [];

    hoverStates.forEach((hoverStates, index) => {
      if (hoverStates) {
        const timeoutId = setTimeout(() => {
          handleMouseLeave(index);
        }, 10000);
        timeoutIds.push(timeoutId);
      }
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [hoverStates]);

  return (
    <div className="bg-gradient-to-b from-blue-600 to-lime-200 min-h-screen ">
      <div>
        <ProjectCard/>
      </div>
      <div className="container mx-auto px-4 py-10 max-h-full">
        <h3 className=" text-center animate-pulse text-5xl py-2 text-lime-300 font-medium">
          Portfolio
        </h3>
        <p className="text-md py-2 leading-8 text-white">
          Throughout my journey of becoming a software developer, I have
          harnessed the power of JavaScript through a diverse range of web
          development projects. These projects showcase my proficiency in both
          front-end and back-end development, as well as my ability to
          seamlessly integrate the two to create robust full-stack applications.
        </p>
        <div className="flex flex-wrap gap-10 py-10">
          <div
            className="relative w-full md:w-1/2 lg:w-1/4"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <img
              className={`rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105 ${
                hoverStates[0] ? "filter blur-lg" : ""
              }`}
              src="/WebARProejct.png"
              alt="arproject"
            />
            {hoverStates[0] && (
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 transition-opacity">
                <a
                  href="https://codesandbox.io/s/github/Oscarl214/WebAR-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className=" bg-transparent text-4xl font-bold text-white drop-shadow-2xl">
                    AR WEBPAGE/<span className=" text-cyan-400">FRONT-END</span>
                  </h2>
                </a>
              </div>
            )}
          </div>
          <div
            className="relative w-full md:w-1/2 lg:w-1/4"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <img
              className={`rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105 ${
                hoverStates[1] ? "filter blur-lg" : ""
              }`}
              src="/BirdSite.png"
              alt="BirdProject"
            />
            {hoverStates[1] && (
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 transition-opacity">
                <a
                  href="https://oscarl214.github.io/Bird_Project/"
                  target="_blank"
                  alt="Birdproject"
                  rel="noreferrer"
                >
                  <h2 className=" bg-transparent text-4xl font-bold text-white drop-shadow-2xl">
                    BIRD HOUSE<span className=" text-cyan-400">/FRONT-END</span>
                  </h2>
                </a>
              </div>
            )}
          </div>
          <div
            className="relative w-full md:w-1/2 lg:w-1/4"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <img
              className={`rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105 ${
                hoverStates[3] ? "filter blur-lg" : ""
              }`}
              src="/Weather_App.png"
              alt="weatherapp"
            />
            {hoverStates[3] && (
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 transition-opacity">
                <a
                  href="https://oscarl214.github.io/weather_App/"
                  target="_blank"
                  alt="WeatherApp"
                  rel="noreferrer"
                >
                  <h2 className=" bg-transparent text-4xl font-bold text-white drop-shadow-2xl">
                    WEATHER APP
                    <span className=" text-cyan-400">/FRONT-END</span>
                  </h2>
                </a>
              </div>
            )}
          </div>

          <div
            className="relative w-full md:w-1/2 lg:w-1/4"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <img
              className={`rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105 ${
                hoverStates[4] ? "filter blur-lg" : ""
              }`}
              src="/SocialMediaAPI.png"
              alt="socialmediaapi"
            />
            {hoverStates[4] && (
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 transition-opacity">
                <a
                  href="https://github.com/Oscarl214/Social-Media-API"
                  target="_blank"
                  alt="sOCIALMEDIAAPI"
                  rel="noreferrer"
                >
                  <h2 className=" bg-transparent text-4xl font-bold text-white drop-shadow-2xl">
                    SOCIAL MEDIA API
                    <span className=" text-red-400">/BACK-END</span>
                  </h2>
                </a>
              </div>
            )}
          </div>

          <div
            className="relative w-full md:w-1/2 lg:w-1/4"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={() => handleMouseLeave(5)}
          >
            <img
              className={`rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105 ${
                hoverStates[5] ? "filter blur-lg" : ""
              }`}
              src="/EcommerceBackend.png"
              alt="ecommerce"
            />
            {hoverStates[5] && (
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 transition-opacity">
                <a
                  href="https://github.com/Oscarl214/Ecommerce_BackEnd"
                  target="_blank"
                  alt="sOCIALMEDIAAPI"
                  rel="noreferrer"
                >
                  <h2 className=" bg-transparent text-4xl font-bold text-gray-400 drop-shadow-2xl">
                    ECOMMERCE STORE
                    <span className=" text-red-400">/BACK-END</span>
                  </h2>
                </a>
              </div>
            )}
          </div>
          <div
            className="relative w-full md:w-1/2 lg:w-1/4"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <img
              className={`rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105 ${
                hoverStates[2] ? "filter blur-lg" : ""
              }`}
              src="/GetFit.png"
              alt="getfitapp"
            />
            {hoverStates[2] && (
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 transition-opacity">
                <a
                  href="https://getfit.herokuapp.com/"
                  target="_blank"
                  alt="GetFitProject"
                  rel="noreferrer"
                >
                  <h2 className=" bg-transparent text-4xl font-bold text-gray-500 drop-shadow-2xl">
                    GET FIT<span className=" text-purple-500">/FULL-STACK</span>
                  </h2>
                </a>
              </div>
            )}
          </div>

          <div
            className="relative w-full md:w-1/2 lg:w-1/4"
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={() => handleMouseLeave(6)}
          >
            <img
              className={`rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105 ${
                hoverStates[6] ? "filter blur-lg" : ""
              }`}
              src="/Cohort-retort.png"
              alt="cohort-retort"
            />
            {hoverStates[6] && (
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 transition-opacity">
                <a
                  href="https://cohort-retort-v1-3ead1d24c761.herokuapp.com"
                  target="_blank"
                  alt="cohortapp"
                  rel="noreferrer"
                >
                  <h2 className=" bg-transparent text-4xl font-bold text-white drop-shadow-2xl">
                    COHORT-RETORT/
                    <span className="text-purple-500">FULLSTACK</span>
                  </h2>
                </a>
              </div>
            )}
          </div>
          <div
            className="relative w-full md:w-1/2 lg:w-1/4"
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={() => handleMouseLeave(7)}
          >
            <img
              className={`rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105 ${
                hoverStates[7] ? "filter blur-lg" : ""
              }`}
              src="/OsPortfolio.png"
              alt="first-portfolio"
            />
            {hoverStates[7] && (
              <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-100 transition-opacity">
                <a
                  href="https://cohort-retort-v1-3ead1d24c761.herokuapp.com"
                  target="_blank"
                  alt="cohortapp"
                  rel="noreferrer"
                >
                  <h2 className=" bg-transparent text-4xl font-bold text-white drop-shadow-2xl">
                    FIRST-PORTFOLIO/
                    <span className="text-cyan-400">FRONT-END</span>
                  </h2>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
