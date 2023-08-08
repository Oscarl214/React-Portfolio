import React from "react";
import { useState, useEffect, useRef } from "react";
import Footer from "../Footer";

import ProjectCard from "../ProjectCard";
import { projectData } from "../../utils/projectData";
import { gsap } from "gsap";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(null);
  const ref = useRef(null);

  const handleSetCurrentProject = (projectId) => {
    const project = projectData.find((data) => data.id === projectId);
    setCurrentProject(project);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    gsap.fromTo(
      ".cards",
      { x: 400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.5, stagger: 0.15 }
    );
  });

  return (
    <div className="bg-gradient-to-b from-blue-600 to-lime-200 min-h-screen flex items-center flex-col md:flex-row">
      {currentProject ? null : (
        <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 animate-pulse text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          My Projects
        </h2>
      )}
      <div className="flex flex-col gap-4 p-11 text-2xl">
        {projectData.map((project) => (
          <button
            key={project.id}
            onClick={() => handleSetCurrentProject(project.id)}
            className=" bg-lime-200 hover:bg-blue-400 text-blue font-bold py-2 px-4 border border-blue-700 rounded "
          >
            {project.title}
          </button>
        ))}
      </div>
      <div className="flex-1 cards">
        <div ref={ref}>
          {currentProject && <ProjectCard project={currentProject} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
