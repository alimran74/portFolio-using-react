import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-20"
      style={{ backgroundColor: "#F9FAFB" }} // soft gray background
    >
      {/* Left Side */}
      <div className="flex-1 text-center md:text-left">
        <h1
          className="text-6xl md:text-8xl font-bold mb-2"
          style={{ color: "#1F2937" }} // dark gray text
        >
          Al Imran
        </h1>

        <p
          className="text-2xl md:text-4xl mb-4 font-semibold"
          style={{ color: "#2563EB" }} // accent blue color for typewriter text
        >
          <Typewriter
            words={[
              "Web Developer",
              "Frontend Enthusiast",
              "MERN Stack Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <p
          className="max-w-md text-lg md:text-xl mx-auto md:mx-0 mb-6"
          style={{ color: "#1F2937" }} // dark gray text
        >
          I build responsive and user-friendly websites with modern technologies.
          Passionate about coding and always eager to learn more.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 text-3xl">
          <a
            href="https://github.com/alimran74"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-black"
            style={{ color: "#1F2937" }} // primary text color
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/alimran74"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-blue-700"
            style={{ color: "#2563EB" }} // accent blue color
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/alimran74"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition hover:text-blue-600"
            style={{ color: "#2563EB" }} // accent blue color
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 max-w-xs md:max-w-md">
        <Tilt
          glareEnable={true}
          glareColor="#2563EB" // blue glare matching accent color
          glareMaxOpacity={0.3}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
        >
          <img
            src="https://i.ibb.co/W46CHFWY/Whats-App-Image-2025-05-10-at-20-42-37-0259ce4c-removebg-preview-removebg-preview.png"
            alt="Al Imran"
            className="rounded-3xl border-4 shadow-2xl mx-auto"
            style={{ borderColor: "#E5E7EB" }} // light border color
          />
        </Tilt>
      </div>
    </section>
  );
};

export default Banner;
