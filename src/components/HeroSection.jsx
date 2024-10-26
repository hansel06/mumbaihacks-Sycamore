import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { forwardRef } from "react";
import React from 'react';

const HeroSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        AI Educational Chatbot
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}oportunity for everyone
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Unlocking the Future of Learning, our AI-powered educational chatbot transforms questions into knowledge, empowering every student to explore, discover, and thrive—because every inquiry deserves an answer
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#sycamoreSection" // Update this to the correct section ID
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Go to Sycamore
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
});

export default HeroSection;

