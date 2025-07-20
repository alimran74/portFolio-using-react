import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { Helmet } from "react-helmet";

// Your timeline data
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

const timelineColors = ["#2563EB", "#9333EA", "#F59E0B", "#14B8A6"];

export default function Education() {
  return (
    <>
      <Helmet>
        <title>Al Imran | Education</title>
        <meta
          name="description"
          content="Al Imran - Education Timeline Portfolio Example"
        />
      </Helmet>
      <section
        id="education"
        className="
          bg-gradient-to-tr from-blue-200 via-white to-cyan-100 
          py-24 sm:py-32 px-4
          relative 
        "
      >
         <img
          src="/edu-bg.png"  // <-- use relative path for public folder images
          alt="Education background"
          className="
      absolute right-0 top-1/2 transform -translate-y-1/2 scale-x-[-1] 
      w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] 
      opacity-50 pointer-events-none select-none
    "
        />
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-[#2563EB]">
          Education
        </h2>

        {/* Background image from public folder */}
       

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-300 via-indigo-100 to-cyan-100 z-0 rounded-full" />
          {/* Timeline steps */}
          <div className="relative z-10 flex flex-col gap-14 pl-16">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  type: "spring",
                }}
                className="flex items-start group"
              >
                {/* Timeline Dot/Icon */}
                <span
                  className="w-10 h-10 flex-shrink-0 rounded-full grid place-content-center text-white text-2xl shadow-lg border-4 border-white"
                  style={{
                    background: timelineColors[i % timelineColors.length],
                    boxShadow: `0 2px 24px 0 ${timelineColors[i % timelineColors.length]}44`,
                  }}
                >
                  <FaGraduationCap />
                </span>
                {/* Content */}
                <div className="ml-6">
                  <h3 className="font-bold text-lg md:text-xl mb-1 text-[#2563EB] group-hover:text-indigo-500 transition">
                    {edu.title}
                  </h3>
                  <p className="mb-1 text-gray-700">{edu.institute}</p>
                  <div className="text-sm text-gray-500 flex gap-8">
                    <span>Year: {edu.year}</span>
                    {edu.result && <span>Result: {edu.result}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}