import React from "react";
import { motion } from "framer-motion";
import Squares from "../Banner/Squares"; 

const About = () => {
  return (
    <section data-aos="fade-up"
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden bg-[#F9FAFB] text-[#1F2937]"
    >
      {/* ✅ Square Background Effect */}
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={50}
        borderColor="rgba(31, 41, 55, 0.08)" // textPrimary as subtle grid lines
        hoverFillColor="#E0F2FE" // Light blue on hover
        className="absolute inset-0 -z-10"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Side: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://i.ibb.co/xqxj4qWq/portfolio-logo-2-removebg-preview-1.png"
            alt="About Al Imran"
            className="w-full bg-gray-200 rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2563EB]">
            Who am I ?
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
            Hi! I’m <span className="font-semibold text-[#2563EB]">Al Imran</span>, a passionate web developer from Bangladesh with a diploma in Computer Science & Engineering. My coding journey began with curiosity — and soon became a full-blown mission to build meaningful software solutions.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
            I’ve been learning and practicing full-stack web development through the <span className="font-medium text-[#2563EB]">MERN stack</span>. I enjoy transforming real-world ideas into fast, responsive, and interactive web applications that users love.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
            Currently, I’m sharpening my skills by building projects like <span className="text-[#2563EB] font-medium">Career Code</span>, <span className="text-[#2563EB] font-medium">HobbyHub</span>, and a parcel tracking system — all packed with features like JWT auth, Firebase integration, dashboards, filtering, and more.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
            My long-term goal is to become a professional full-stack developer and contribute to impactful products. I believe in continuous growth, clear UI, clean code, and meaningful user experience.
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-lg shadow hover:bg-[#1D4ED8] transition"
          >
            View My Projects 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
