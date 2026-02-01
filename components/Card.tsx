"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full mt-15 mb-1">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-2xl w-full">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            I am Rihan
          </h2>
          <p className="mt-4 text-neutral-200">
            Full Stack Developer (MERN) with strong hands-on experience in
            building responsive web applications using React, Node.js,
            Express.js, and MongoDB. Skilled in modern JavaScript (ES6+),
            RESTful APIs, authentication, and state management. Developed
            real-world projects including a job portal, AI chatbot, and movie
            discovery platform. Passionate about writing clean, scalable code
            and continuously learning new technologies.
          </p>
        </div>
      </WobbleCard>
<WobbleCard containerClassName="col-span-1 min-h-[300px]">
  <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-white">
    I’m always open to discussing new projects, collaboration
    opportunities, or anything related to web development.
  </h2>

  <p className="mt-4 max-w-104 text-left text-base/6 text-neutral-200">
    Feel free to reach out—I’d love to connect!
  </p>

  {/* Make links clickable */}
  <div className="flex items-center gap-4 mt-5 pointer-events-auto">
    <a
      href="https://github.com/Rihan-saifi46"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-neutral-300 text-2xl"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/rihan-saifi-054a26347/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-neutral-300 text-2xl"
    >
      <FaLinkedin />
    </a>
  </div>
</WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[100px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            DICE ACADEMY
          </h2>
          <p className="mt-4 max-w-104 text-left lg:text-2xl font-bold text-neutral-200">
           🏆 Hackathon – Secured 2nd Position
          </p>
        </div>
        <img
          src="/certificate1.jpeg"
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute right-10 md:right-[40%] lg:right-[1%] bottom-4 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
