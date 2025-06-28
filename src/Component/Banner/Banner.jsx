// ✅ Banner.jsx with Square Background and Updated Color Palette

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import Squares from "./Squares"; 

const Banner = () => {
  return (
    <section data-aos='fade-right' className="relative overflow-hidden">
      {/* ✅ Square Background Effect */}
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={50}
        borderColor="rgba(31, 41, 55, 0.08)" // textPrimary as subtle grid lines
        hoverFillColor="#E0F2FE" // Light blue on hover
        className="absolute inset-0 -z-10"
      />

      {/* ✅ Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-center items-center gap-10 bg-[#F9FAFB] py-20">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold mb-2 text-[#1F2937]">
            Al Imran
          </h1>

          <p className="text-2xl md:text-4xl mb-4 font-semibold text-[#2563EB]">
            <Typewriter
              words={["Web Developer", "Frontend Enthusiast", "MERN Stack Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="max-w-md text-lg md:text-xl mx-auto md:mx-0 mb-6 text-gray-700">
            I build responsive and user-friendly websites with modern technologies.
            Passionate about coding and always eager to learn more.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 text-[#1F2937] text-3xl">
            <a
              href="https://github.com/alimran74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/alimran74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#2563EB] transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com/alimran74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#2563EB] transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 max-w-xs md:max-w-md">
          <Tilt
            glareEnable={true}
            glareColor="#93C5FD"
            glareMaxOpacity={0.3}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <img
              src="https://i.ibb.co/W46CHFWY/Whats-App-Image-2025-05-10-at-20-42-37-0259ce4c-removebg-preview-removebg-preview.png"
              alt="Al Imran"
              className="rounded-3xl border-4 border-[#2563EB] shadow-2xl mx-auto"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Banner;
