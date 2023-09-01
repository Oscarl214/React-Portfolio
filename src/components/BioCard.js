import React, { useState } from "react";
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

const BioCard = ({ bio }) => {
  const [displaySkills, setDisplaySkills] = useState(false);

  return (
    <div className="nav-container">
      <div className="flex justify-center items-center h-screen p-4">
        <div className="card">
          <div className="block rounded-lg max-w-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6">
              <h2 className="mb-2 font-medium leading-tight text-black-800 dark:text-black-50 text-2xl text-center">
                {displaySkills ? "My SkillSet" : "Bio"}
              </h2>
              <div
                className={`mb-4 text-2xl text-center max-h-60 overflow-y-auto App-card`}
              >
                {displaySkills ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-12 py-10 animate-pulse justify-items-center ">
                    <SiJavascript className="text-yellow-300 text-4xl md:text-8xl" />
                    <SiCss3 className="text-blue-300 text-4xl md:text-8xl " />
                    <SiHtml5 className="text-red-500 text-4xl md:text-8xl " />
                    <SiNodedotjs className="text-lime-500 text-4xl md:text-8xl " />
                    <SiReact className="text-blue-700 text-4xl md:text-8xl" />
                    <SiExpress className="text-4xl md:text-8xl" />
                    <SiHandlebarsdotjs className="text-orange-500 text-4xl md:text-8xl " />
                    <SiMongodb className="text-green-600  text-4xl md:text-8xl " />
                    <SiMongoose className="text-red-600 text-4xl md:text-8xl " />
                    <SiMysql className="text-orange-300 text-4xl md:text-8xl " />
                    <SiSequelize className="text-blue-500 text-4xl md:text-8xl " />
                    <SiGraphql className="text-red-500 text-4xl md:text-8xl" />
                    <SiApollographql className="text-purple-500 text-4xl md:text-8xl " />
                    <SiAmazonaws className="text-orange-300 text-4xl md:text-8xl" />
                    <SiGit className="text-orange-500 text-4xl md:text-8xl " />
                    <SiTailwindcss className="text-blue-400 text-4xl md:text-8xl" />
                    <SiBootstrap className="text-purple-500 text-4xl md:text-8xl" />
                  </div>
                ) : (
                  <>
                    {bio.bio}
                    <br />
                    {bio.p2}
                    <br />
                    {bio.p3}
                  </>
                )}
              </div>
              <div className="flex flex-col items-center justify-center h-full bg-lime-400 hover:bg-indigo-600">
                <button
                  type="button"
                  onClick={() => setDisplaySkills(!displaySkills)}
                  className=" inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white"
                >
                  <span className="text-white no-underline">
                    {displaySkills ? "Back to Bio" : "Skills"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
