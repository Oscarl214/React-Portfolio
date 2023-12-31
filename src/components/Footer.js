import React, { useEffect } from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFileText,
} from 'react-icons/ai';
import { gsap } from 'gsap';

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      '.links',
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  });

  return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-white-600 dark:text-white-400 links p-7">
      <a
        href="https://www.linkedin.com/in/oscar-l-8371a512a/"
        target="_blank"
        alt="LinkedIn"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/Oscarl214"
        target="_blank"
        alt="Github"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://drive.google.com/file/d/11gU35QzXitGPqcjVjn9fqxWqJb7qwqmJ/view?usp=sharing"
        target="_blank"
        alt="drive"
        rel="noreferrer"
      >
        {' '}
        <AiOutlineFileText />
      </a>
    </div>
  );
};

export default Footer;
