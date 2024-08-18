"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TypeAnimation } from "react-type-animation";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh]
            w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] 
            w-[50vw]"
          fill="blue"
        />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100
         bg-white  dark:bg-grid-white/[0.01] bg-grid-black/
         [0.2] flex items-center justify-center
         absolute top-0 left-0"
      >
        <div
          className="absolute pointer-events-none inset-0 
            flex items-center justify-center
            dark:bg-black-100 bg-white 
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div
          className="md:max-w-2xl
            lg:max-w-[60vw] flex flex-col items-center
            justify-center"
        >
          <TypeAnimation
            className="text-center justify-center w-fit-content text-2xl sm:text-3xl
                    md:text-4xl lg:text-5xl text-blue-100 font-bold"
            sequence={[
              "I am a Software Engineer",
              1000,
              "I am a novice Frontend Developer",
              1000,
              "I am a Full time Backend Engineer",
              1000,
            ]}
            speed={10}
            wrapper="strong"
            repeat={Infinity}
          />

          <p
            className="text-center md:tracking-wider justify-center
                mb-4 mt-4 text-xs sm:text-sm md:text-lg lg:text-2xl text-blue-100 pt-4 pb-4"
          >
            Hi, I&apos;m Jonathan, a SWE based in Seattle, WA. A little more
            about me; I graduated from the University of Florida in August 2023
            with a degree in Computer Science.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
