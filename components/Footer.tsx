/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { IoCopyOutline } from "react-icons/io5";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("granadojonathan29@gmail.com");

    setCopied(true);
  };

  return (
    <section id="contact">
      <footer>
        <div className="flex flex-col md:flex-row  justify-center items-center">
          <a href="mailto:granadojonathan29@gmail.com">
            <MagicButton
              title={copied ? "Talk to you soon!" : "Let's get in touch!"}
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            />
          </a>
        </div>
        <div className="flex mt-16 pb-10 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Jonathan Granado
          </p>
          <div className="flex itmes-center md:gap-3 gap-5 pt-3 pl-4">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop:filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300 "
              >
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
