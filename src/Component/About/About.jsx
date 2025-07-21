import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa";
import Tilt from "react-parallax-tilt";


const About = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const projects = [
    {
      title: "Aura Match",
      img: "https://i.ibb.co/5hX8pZmx/logo-with-name.png",
      route: "/project/4",
    },
    {
      title: "Service Spot",
      img: "https://i.ibb.co/nMxNsR0Q/Screenshot-2025-06-29-050741.png",
      route: "/project/1",
    },
    {
      title: "Hobby Hub",
      img: "https://i.ibb.co/N2s6MwtS/Screenshot-2025-06-29-050113.png",
      route: "/project/2",
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


  useEffect(() => {
    if (containerRef.current) {
      import("gsap").then(({ gsap }) => {
        const elements = containerRef.current.querySelectorAll(".gsap-intro");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.18, duration: 1, ease: "power3.out", delay: 0.4 }
        );
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Al Imran | About</title>
        <meta name="description" content="Learn more about Al Imran, full stack developer: skills, focus, and journey." />
      </Helmet>

      <section
        id="about"
        ref={containerRef}
        className="relative  overflow-hidden bg-gradient-to-tr from-blue-200 via-white to-cyan-100  px-6 sm:px-10"
      >
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
         {/* Right Section - Tilt Image */}
          <motion.div
            className="w-4/5 max-w-xs sm:max-w-md md:w-1/2 mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.3 }}
          >
            <Tilt
              glareEnable={true}
              glareColor="#93C5FD"
              glareMaxOpacity={0.36}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              transitionSpeed={2000}
              className="drop-shadow-xl rounded-3xl border-4 border-[#2563EB]"
            >
              <motion.img
                src="https://i.ibb.co/xqxj4qWq/portfolio-logo-2-removebg-preview-1.png"
                alt="Al Imran"
                className="rounded-3xl w-full h-auto block"
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ type: "spring", stiffness: 160, damping: 10 }}
              />
            </Tilt>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 text-gray-900"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          >
            <h2 className="gsap-intro text-4xl md:text-5xl font-bold mb-4 text-[#2563EB]">Who am I ?</h2>
            <p className="gsap-intro text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
              Hi! I’m <span className="font-semibold text-[#2563EB]">Al Imran</span>, a passionate web developer from Bangladesh with a diploma in Computer Science & Engineering.
            </p>
           <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
            I’ve been learning and practicing full-stack web development through the <span className="font-medium text-[#2563EB]">MERN stack</span>. I enjoy transforming real-world ideas into fast, responsive, and interactive web applications that users love.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
            Currently, I’m sharpening my skills by building projects like <span className="text-[#2563EB] font-medium">Aura match</span>, <span className="text-[#2563EB] font-medium">Service Spot</span>,<span className="text-[#2563EB] font-medium">HobbyHub</span>, and a parcel tracking system — all packed with features like JWT auth, Firebase integration, dashboards, filtering, and more.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
            My long-term goal is to become a professional full-stack developer and contribute to impactful products. I believe in continuous growth, clear UI, clean code, and meaningful user experience.
          </p>
            
            <motion.button
              type="button"
              aria-label="Open projects modal"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#2563EB",
                color: "#fff",
                boxShadow: "0 8px 20px rgba(37,99,235,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              See My Works <FaArrowRight className="ml-2 text-lg" />
            </motion.button>
          </motion.div>
        </div>

        {/* 🔍 Modal for Project Preview */}
       {showModal && (
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    className="
      fixed inset-0 z-50 bg-black/40 backdrop-blur-sm 
      flex items-center justify-center
      p-4
      overflow-auto
      min-h-screen
      "
  >
            <div className="bg-gradient-to-tr from-blue-300 via-white to-cyan-400 p-6 rounded-xl max-w-4xl shadow-xl w-full max-h-[90vh] overflow-auto">
              <h3 id="modal-title" className="text-2xl text-gray-700 font-semibold text-center mb-6">
                My Top Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((proj, i) => (
                  <div
                    key={i}
                    onClick={() => handleImageClick(proj.route)}
                    className="cursor-pointer group"
                    tabIndex={0}
                    onKeyDown={e => { if (e.key === "Enter") handleImageClick(proj.route) }}
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
        className="mt-6 w-full px-4 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md text-center transition"
      >
        Close
      </button>
    </div>
  </div>
)}
      </section>
    </>
  );
};

export default About;
