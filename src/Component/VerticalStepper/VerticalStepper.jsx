import { useEffect, useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaGraduationCap,
  FaTools,
  FaFolderOpen,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUserAlt />, label: "About" },
  { id: "skills", icon: <FaTools />, label: "Skills" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
  { id: "projects", icon: <FaFolderOpen />, label: "Projects" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  { id: "resume", icon: <FaFileAlt />, label: "Resume" },
];

const VerticalStepper = () => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = steps.map((step) => {
        const section = document.getElementById(step.id);
        return {
          id: step.id,
          offset: section?.getBoundingClientRect().top,
        };
      });

      const visible = offsets.find(
        (step) => step.offset >= 0 && step.offset < window.innerHeight / 2
      );
      if (visible) setActiveId(visible.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-5 z-50">
      {steps.map(({ id, icon, label }) => (
        <a key={id} href={`#${id}`} className="group relative flex items-center">
          <motion.div
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
              activeId === id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.div>
          <span className="ml-4 text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-500">
            {label}
          </span>
        </a>
      ))}
    </aside>
  );
};

export default VerticalStepper;
