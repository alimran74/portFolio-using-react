import React from "react";
import { motion } from "framer-motion";
import Squares from "../Banner/Squares";
import "./Education.css"; // New CSS for animated border

const Education = () => {
  const educationData = [
    {
      title: "Diploma in Engineering (CST)",
      institute: "Hope Polytechnic Institute, Khulna",
      year: "2024",
      result: "CGPA 3.69",
    },
    {
      title: "NTVQF Level-1",
      institute: "Hope Technical Institute, Khulna",
      year: "2023",
    },
    {
      title: "Secondary School Certificate",
      institute: "Amihupi Secondary School",
      year: "2020",
      result: "GPA 3.50",
    },
    {
      title: "Professional Web Development (MERN Stack)",
      institute: "Programming Hero",
      year: "Running",
    },
  ];

  return (
    <section data-aos="fade-up"
    data-aos-duration="2000"
      id="education"
      className="relative max-w-7xl mx-auto py-28  bg-[#F9FAFB] text-[#1F2937] overflow-hidden"
    >
      {/* ✅ Background Squares */}
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={50}
        borderColor="rgba(31, 41, 55, 0.08)"
        hoverFillColor="#E0F2FE"
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#2563EB] mb-12"
        >
          Education
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="animated-border-box bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-[#1F2937] group-hover:text-[#2563EB]">
                {edu.title}
              </h3>
              <p className="text-gray-600 mb-1">{edu.institute}</p>
              <p className="text-sm text-gray-500">Year: {edu.year}</p>
              {edu.result && (
                <p className="text-sm text-gray-500">Result: {edu.result}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
