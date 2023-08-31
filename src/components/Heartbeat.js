import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/WavyLine.css"; // Import the CSS file for styling

const WavyCardiacEvent = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    const wavePath = waveRef.current;

    gsap.fromTo(
      wavePath,
      { attr: { d: "M0 20" } },
      {
        attr: { d: "M0 10 C 20 0, 50 0, 50 10 S 80 20, 100 10" },
        repeat: -1,
        duration: 2,
        ease: "linear",
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="wavy-cardiac-event">
      <svg className="wave" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path ref={waveRef} d="M0 10 C 20 0, 50 0, 50 10 S 80 20, 100 10" />
      </svg>
    </div>
  );
};

export default WavyCardiacEvent;
