import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import rocketLaunch from "../../assets/Rocket-launch.json"; // Adjust path if needed
import logo from "/public/logo.png";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiNpm,
  SiStripe,
} from "react-icons/si";

const techIcons = [
  { icon: SiHtml5, color: "text-orange-500", label: "HTML5" },
  { icon: SiCss3, color: "text-blue-500", label: "CSS3" },
  { icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
  { icon: SiReact, color: "text-cyan-400", label: "React" },
  { icon: SiNextdotjs, color: "text-black", label: "Next.js" },
  { icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind" },
  { icon: SiExpress, color: "text-gray-800", label: "Express" },
  { icon: SiFirebase, color: "text-yellow-500", label: "Firebase" },
  { icon: SiNodedotjs, color: "text-green-600", label: "Node.js" },
  { icon: SiMongodb, color: "text-green-700", label: "MongoDB" },
  { icon: SiGithub, color: "text-gray-800", label: "GitHub" },
  { icon: SiNpm, color: "text-red-500", label: "NPM" },
  { icon: SiStripe, color: "text-indigo-600", label: "Stripe" },
];

const Loading = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show main content after 4.5 seconds (lottie play duration)
    const timer = setTimeout(() => setShowContent(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-100 via-white to-cyan-100 flex items-center justify-center">
      {!showContent ? (
        <div className="w-64 h-64 md:w-80 md:h-80">
          <Lottie animationData={rocketLaunch} loop={false} />
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Imran Logo"
            className="w-24 md:w-32 animate-pulse drop-shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          />

          {/* Title */}
          <motion.h1
            className="text-xl md:text-3xl font-bold text-[#2563eb] mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Al Imran Portfolio
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-700 text-sm md:text-base mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading Imran’s world of creativity and code...
          </motion.p>

          {/* Spinner */}
          <motion.div
            className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          ></motion.div>

          {/* Animated Tech Icon Cloud */}
          <motion.div
            className="flex flex-wrap justify-center gap-5 md:gap-6 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {techIcons.map(({ icon: Icon, color, label }, idx) => (
              <motion.div
                key={label}
                className={`text-3xl md:text-4xl ${color} hover:scale-125 transition-transform duration-300`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: idx * 0.1,
                }}
                title={label}
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Loading;
