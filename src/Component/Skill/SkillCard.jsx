import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  const tooltipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div
      className="relative  flex flex-col items-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
    >
      {/* Tooltip */}
      <motion.div
        className="absolute -top-10 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-lg whitespace-nowrap z-50"
        style={{
          backgroundColor: "#2563EB",
          border: " solid #1F2937",
        }}
        variants={tooltipVariants}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}

      >
        {skill.name}
      </motion.div>

      {/* Tooltip Arrow */}
      <motion.div
        className="absolute -top-4 w-2 h-2 rotate-45 z-50"
        style={{
          backgroundColor: "#2563EB",
          borderLeft: "1px solid #1F2937",
          borderBottom: "1px solid #1F2937",
        }}
        
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 } }
      />

      {/* Enhanced Tilt Card */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.36}
        glareColor="#93C5FD" 
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={1000}
        className="w-28 h-28 sm:w-44 sm:h-44 rounded-3xl border-4 border-[#8da8e0] drop-shadow-xl overflow-hidden cursor-pointer focus:outline-none"
        whileHover={{ scale: 1.06, rotate: 8 }}
                transition={{ type: "spring", stiffness: 160, damping: 10 }}
        style={{
          backgroundColor: "#F9FAFB",
        }}
      >
        <motion.div
          className="flex items-center justify-center h-full text-6xl sm:text-7xl select-none relative rounded-3xl"
          whileHover={{ scale: 1.06, rotate: 12 }}
          animate={{ scale: hovered ? 1.06 : 1, rotate: hovered ? 8 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 100 }}
          style={{ color: "#1F2937" }}
        >
          {skill.icon}

          {/* Glow Border */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              border: "1.5px solid #2563EB",
            }}
            animate={hovered ? { opacity: 0.3, scale: 1.05 } : { opacity: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.div>
      </Tilt>
    </div>
  );
};

export default SkillCard;
