import { Link } from "react-router";
import Squares from "../Banner/Squares";
import { motion } from "framer-motion";
import "./Projects.css"; // 🌟 Import for animated button

const projects = [
  {
    id: 1,
    name: "Service Spot",
    image: "https://i.ibb.co/Wv6fzJyt/Screenshot-2025-06-29-050830.png",
    url: "/project/1",
    description: "A MERN-based service platform with reviews and authentication.",
    badges: ["MERN", "Auth", "Reviews"],
  },
  {
    id: 2,
    name: "HobbyHub",
    image: "https://i.ibb.co/MyLKwb84/Screenshot-2025-06-29-050230.png",
    url: "/project/2",
    description: "A local hobby group organizer for community engagement.",
    badges: ["Firebase", "CRUD", "Community"],
  },
  {
    id: 3,
    name: "App Store",
    image: "https://i.ibb.co/j9QcSdLJ/Screenshot-2025-06-29-051432.png",
    url: "/project/3",
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
    <section
      id="projects"
      data-aos="fade-up"
      className="relative py-12 px-4 sm:px-8 bg-[#F9FAFB] text-[#1F2937] max-w-7xl mx-auto overflow-hidden"
    >
      {/* 🔲 Canvas Background */}
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={50}
        borderColor="rgba(31, 41, 55, 0.08)"
        hoverFillColor="#E0F2FE"
        className="absolute inset-0 -z-10"
      />

      {/* 🔤 Heading */}
      <motion.div
        
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#2563EB]">
          My Projects
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg max-w-2xl mx-auto">
          Explore some of my best work showcasing real-world solutions using modern web technologies.
        </p>
      </motion.div>

      {/* 🔳 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-900 transition duration-300"
          >
            {/* 🖼️ Image - grayscale on desktop only */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover border-b border-gray-200 grayscale-0 md:grayscale md:group-hover:grayscale-0 transition duration-500"
            />

            {/* 📄 Content */}
            <div className="p-6 space-y-3">
              {/* 🏷️ Badges */}
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-xs font-semibold rounded ${badgeColors[badge] || "bg-gray-200 text-gray-700"}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-[#2563EB] group-hover:text-[#1F2937] transition">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600">{project.description}</p>

              {/* 🚀 Button with CSS animation */}
              <Link to={project.url} className="custom-button mt-3 inline-block">
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
