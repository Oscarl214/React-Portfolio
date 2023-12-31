import React from 'react';

import '../styles/app.css';

const ProjectCard = ({ project }) => {
  let displayBtn;

  if (project.link === '') {
    displayBtn = (
      <div className="mt-5">
        <p>LiveSite not Available at the moment</p>
      </div>
    );
  } else {
    displayBtn = (
      <div className="mt-6">
        {' '}
        <button
          type="button"
          className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-lime-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline bg-lime"
          >
            Live
          </a>
        </button>{' '}
      </div>
    );
  }

  return (
    <div className="nav-container">
      <div className="flex justify-center items-center h-screen p-4 ">
        <div className="card">
          <div className=" block rounded-lg max-w-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="relative overflow-hidden ">
              <img className="rounded-t-lg" src={project.image} alt="" />
              {/* this is where my image url will go  */}
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>

            <div className=" p-6 ">
              <h5 className="mb-2 font-medium leading-tight text-black-800 dark:text-black-50 text-2xl">
                {project.title}
              </h5>{' '}
              {/*this is where my project title will go*/}
              <p className="App-card mb-4 text-2xl">
                {project.description}
              </p>{' '}
              {/* this is where my description of data will go*/}
              <button
                type="button"
                className="bg-purple-500 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-lime-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline bg-lime "
                >
                  Github
                </a>
              </button>{' '}
              {displayBtn}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
