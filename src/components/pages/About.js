import React, { useEffect, useState, useRef } from "react";
import Footer from "../Footer";
import { gsap } from "gsap";

import { AboutMeData } from "../../utils/aboutmeData";

import BioCard from "../BioCard";

export default function About() {
  const [currentBio, setBio] = useState(AboutMeData[0]);

  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".cards",
      { x: 400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.5, stagger: 0.15 }
    );
  });

  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    gsap.to(imageElement, {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className=" pb-8 flex  flex-wrap justify-center items-start md:items-center md:pt-12 md:pl-8  min-h-screen ">
      <div className="flex w-full md:w-1/2  ">
        <img
          ref={imageRef}
          src="/GradShot.jpeg"
          alt="myavator"
          className="w-auto max-h-lg rounded-lg pt-20"
          style={{
            opacity: 0,
            transition: "opacity 1.5s",
          }}
        />
      </div>
      <div className="flex-1 w-full md:w-1/2" ref={ref}>
        <div className="cards">
          {currentBio && <BioCard bio={currentBio} />}
          <Footer />
        </div>
      </div>
    </div>
  );
}
