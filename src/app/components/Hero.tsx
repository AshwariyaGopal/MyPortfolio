"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-44 sm:mt-10 h-screen flex flex-col justify-center items-center bg-white bg-fixed bg-cover bg-center p-8"
    >
      {/* Hero Container */}
      <div className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto space-y-8 md:space-y-0">
        {/* Left Side (Text Section) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:ml-30">
          <h1 className=" text-5xl md:text-7xl font-bold mb-4 text-black">
            Hello, I am <span className="text-blue-600">Ashwariya Gopal</span>
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Content Writer",
                  "A Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 75,
              }}
            />
          </h1>

          {/* Content Paragraph */}
          <p className="text-xl md:text-2xl mb-8 text-black">
            I'm a passionate web developer, creating modern websites with the
            latest technologies. I also enjoy writing and sharing content that
            helps others.
          </p>

          {/* Call to Action Button */}
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3  rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            See My Work
          </a>
        </div>
        {/* Right Side (Web Development Icon Section) */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 xl:ml-20 ">
          <div className="bg-white p-4 rounded-full shadow-xl">
            {/* Web Development Icon - Replace with any suitable icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-40 h-40 text-blue-600"
            >
              <path d="M20 12l-8 8-8-8" />
              <path d="M12 4v16" />
            </svg>
          </div>
        </div>
      </div>

      {/* Optional additional content */}
      <div className="mt-12 text-center">
        <p className="text-lg font-light text-black">
          Let's connect and create something amazing together.
        </p>
      </div>
    </section>
  );
}
