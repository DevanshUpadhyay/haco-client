"use client";
import { Typewriter } from "react-simple-typewriter";
import React from "react";

const TypewriterEffect = ({ words }) => {
  return (
    <>
      <Typewriter
        words={words}
        loop={false}
        cursor
        // cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={70}
        delaySpeed={1000}
      />
    </>
  );
};

export default TypewriterEffect;
