import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Squares from "../Banner/Squares";
import { Helmet } from "react-helmet";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const projects = [
    {
      title: "Service Spot",
      img: "https://i.ibb.co/nMxNsR0Q/Screenshot-2025-06-29-050741.png",
      route: "/project/1",
    },
    {
      title: "HobbyHub",
      img: "https://i.ibb.co/N2s6MwtS/Screenshot-2025-06-29-050113.png",
      route: "/project//2",
    },
    {
      title: "App Store",
      img: "https://i.ibb.co/BKBjTqP5/Screenshot-2025-06-29-051657.png",
      route: "/project/3",
    },
  ];

  const handleImageClick = (route) => {
    setShowModal(false);
    navigate(route);
  };

  return (
    <>
    <Helmet>
        <title>Al Imran | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Al Imran, a passionate Full Stack Web Developer skilled in React, Node.js, MongoDB, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Al Imran, Web Developer, MERN stack, React portfolio, JavaScript developer"
        />
        <meta name="author" content="Al Imran" />
        <meta property="og:title" content="Al Imran | Full Stack Web Developer" />
        <meta property="og:description" content="Explore my projects and skills in React, Node.js, and more." />
        <meta property="og:image" content="https://yourdomain.com/preview.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <section
      data-aos="fade-up"
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden bg-[#F9FAFB] text-[#1F2937]"
    >
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={50}
        borderColor="rgba(31, 41, 55, 0.08)"
        hoverFillColor="#E0F2FE"
        className="absolute inset-0 -z-10"
      />

      {/* 🔍 Modal for Project Preview */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl max-w-4xl w-full shadow-xl">
            <h3 className="text-2xl font-semibold text-center mb-6">My Top Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  onClick={() => handleImageClick(proj.route)}
                  className="cursor-pointer group"
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="rounded-xl w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300 shadow-md"
                  />
                  <p className="mt-2 text-center text-blue-600 font-medium">{proj.title}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="block mx-auto mt-6 px-5 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

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

        {/* Right Side: Full About Text */}
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

          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-lg shadow hover:bg-[#1D4ED8] transition"
          >
            View My Projects 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default About;
