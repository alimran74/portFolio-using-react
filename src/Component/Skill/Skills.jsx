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

import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-800" /> },
    { name: "Git & GitHub", icon: <SiGithub className="text-gray-900" /> },
    { name: "NPM", icon: <SiNpm className="text-red-600" /> },
    { name: "Stripe", icon: <SiStripe className="text-indigo-500" /> },
  ];
  return (
    <section
      id="skills"
      className="pt-16 md:pt-18 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto"
      style={{ backgroundColor: "#F9FAFB", color: "#1F2937" }} // soft gray background & dark text
    >
      <div className="text-center mb-8">
        <h2
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ color: "#2563EB" }} // accent blue
        >
          My Skills
        </h2>
        <p
          className="max-w-xl mx-auto"
          style={{ color: "#4B5563" }} // secondary text color (gray-600)
        >
          Technologies I work with to build modern and scalable web apps.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
