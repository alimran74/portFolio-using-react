import React from "react";
import { Link } from "react-router";
import Squares from "../Banner/Squares";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "./Projects.css";

const projects = [
  {
    id: 4,
    name: "Aura Match",
    image: "https://i.ibb.co/5hX8pZmx/logo-with-name.png",
    url: "/project/4",
    liveUrl: "https://aura-match.web.app/",
    description:
      "Aura match is a matrimony platform where you can find your best match",
    badges: ["MERN", "Community", "CRUD", "Protected"],
  },
  {
    id: 1,
    name: "Service Spot",
    image: "https://i.ibb.co/Wv6fzJyt/Screenshot-2025-06-29-050830.png",
    url: "/project/1",
    liveUrl: "https://service-spot-2f7aa.web.app/",
    description:
      "A MERN-based service platform with reviews and authentication.",
    badges: ["MERN", "Auth", "Reviews"],
  },
  {
    id: 2,
    name: "HobbyHub",
    image: "https://i.ibb.co/MyLKwb84/Screenshot-2025-06-29-050230.png",
    url: "/project/2",
    liveUrl: "https://hobbyhub-27dd6.web.app/",
    description: "A local hobby group organizer for community engagement.",
    badges: ["Firebase", "CRUD", "Community"],
  },
  {
    id: 3,
    name: "App Store",
    image: "https://i.ibb.co/j9QcSdLJ/Screenshot-2025-06-29-051432.png",
    url: "/project/3",
    liveUrl: "https://assignment-09-80714.firebaseapp.com/",
    description: "App discovery platform with categories and protected routes.",
    badges: ["React", "Routing", "Protected"],
  },
];

const badgeColors = {
  MERN: "bg-green-200 text-green-800",
  Auth: "bg-blue-200 text-blue-800",
  Reviews: "bg-yellow-200 text-yellow-800",
  Firebase: "bg-orange-200 text-orange-800",
  CRUD: "bg-purple-200 text-purple-800",
  Community: "bg-pink-200 text-pink-800",
  React: "bg-sky-200 text-sky-800",
  Routing: "bg-indigo-200 text-indigo-800",
  Protected: "bg-red-200 text-red-800",
};

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Al Imran | Full Stack Web Developer</title>
      </Helmet>
      <section
        id="projects"
        className="relative pb-14  px-4 sm:px-8 bg-gradient-to-br from-blue-200 via-white to-cyan-100  text-[#1F2937]  overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 "
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2563EB]">
              My Projects
            </h2>
            <div className="w-48 h-1 mt-2 bg-blue-700 mx-auto mb-8"></div>
            <p className="text-gray-600 mt-2 text-base md:text-lg max-w-2xl mx-auto">
              Explore some of my best work showcasing real-world solutions using
              modern web technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.65,
                  type: "spring",
                  delay: 0.15 * index,
                }}
              >
                <Tilt
                  glareEnable={true}
                  glareColor="#93C5FD"
                  glareMaxOpacity={0.36}
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  transitionSpeed={2000}
                  className="drop-shadow-xl rounded-2xl"
                >
                  <div className="group bg-white relative rounded-2xl shadow-xl overflow-hidden border border-gray-300 hover:border-[#2563EB] transition-all duration-300 h-80 flex flex-col">
                    {/* Image - 3/4 height */}
                    <div className="h-4/5 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                        whileHover={{ scale: 1.04, rotate: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 160,
                          damping: 10,
                        }}
                      />
                    </div>

                    {/* Project name always visible */}
                    <div className="h-1/4 flex items-center justify-center bg-white relative z-10">
                      <h3 className="text-lg font-semibold text-[#2563EB] group-hover:text-[#1F2937] transition duration-300">
                        {project.name}
                      </h3>
                    </div>

                    {/* Hidden content: slide up on hover */}
                    <div className="absolute inset-0 bg-white px-6 py-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 z-20">
                      <div className="flex flex-wrap gap-2 mb-2">
                        
                        {project.badges.map((badge, i) => (
                          <span
                            key={i}
                            className={`px-2 py-1 text-xs font-semibold rounded ${
                              badgeColors[badge] || "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {project.description}
                      </p>
                      <div className="flex gap-4">
                    <Link to={project.url} className="custom-button mt-3 inline-flex items-center group">
                      <FaArrowRight className="text-base hover:translate-x-2 transition" />
                    </Link>
                    <Link to={project.liveUrl} className="btn border-2 border-blue-500 bg-white text-gray-900 mt-3  inline-flex items-center hover:bg-blue-600 hover:text-white ">
                      Live Url
                    </Link>
                    </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
