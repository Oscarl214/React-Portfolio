import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/app.css";
import Footer from "../Footer";

import { videoData } from "../../utils/homeutils";
export default function Home() {
  useEffect(() => {
    const hero = document.querySelector(".hero");

    gsap.to(hero, {
      yPercent: -20,
      ease: "power1.out",
      scrollTrigger: {
        trigger: {
          trigger: ".home-page",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
    });
  }, []);

  useEffect(() => {
    const hero = document.querySelector(".hero2");

    gsap.to(hero, {
      yPercent: -40,
      ease: "power1.out",
      scrollTrigger: {
        trigger: {
          trigger: ".home-page",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".links",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  });

  return (
    <div className="text-center p-10 py-10 ">
      <section className="other-content">
        <h2 className=" text-5xl py-2 text-lime-500 font-medium dark:text-teal-400 md:text-6xl">
          Hi, I'm <span className="animate-pulse"> Oscar</span>
        </h2>
        <h3 className="text-2xl pt-3 dark:text-white md:text-3xl">Software</h3>
        <h3 className="text-2xl text-lime-500 md:text-3xl">Developer</h3>
        <section className="hero">
          <p className="App-text md pt-5 leading-9 max-w-xl mx-auto md:text-x4 font-bold">
            Dedicated to creating web applications that solve real world
            problems.
            <br></br>
          </p>
          <p className="App-text md leading-9 max-w-xl mx-auto md:text-x4 font-bold">
            Lets <span style={{ color: "#4CBB17" }}>Connect!</span>
          </p>
        </section>
      </section>

      <div className="nav-container">
        <section className="hero2">
          <div className=" mx-auto bg-gradient-to-b from-blue-300-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-100 md:w-100">
            <img
              src="/Me.jpeg"
              alt="myavator"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <div className="py-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
