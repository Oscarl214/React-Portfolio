import React from 'react';

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-lime-200 min-h-screen ">
      <div className="container mx-auto px-4 py-10 max-h-full">
        <h3 className=" text-center animate-pulse text-5xl py-2 text-lime-300 font-medium">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-white">
          Since beginning this road of becoming a software developer I have been able to exercise the power of JavaScript through various web development projects. My projects extend from front end work and the back end to create full stack applications. 
        </p>
        <p className="text-md py-2 leading-8 text-white">
          I offer a wide range of skillsets and I am knowledgable in ...
        </p>
        <div className="flex flex-wrap gap-10 py-10">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <img
              className="rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105"
              src="/WebARProejct.png"
              alt="arproject"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 ">
            <img
              className="rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105"
              src="/BirdSite.png"
              alt="birdsite"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <img
              className="rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105"
              src="/GetFit.png"
              alt="getfitapp"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <img
              className="rounded-lg object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-105"
              src="/Weather_App.png"
              alt="weatherapp"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
