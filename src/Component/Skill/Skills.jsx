import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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

  const skillGridRef = useRef(null);

  useEffect(() => {
    if (skillGridRef.current) {
      const cards = skillGridRef.current.querySelectorAll(".gsap-skill-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillGridRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="skills"
      className="pt-24 px-4 sm:px-8 md:px-16 mx-auto relative overflow-hidden pb-8 bg-gradient-to-br from-blue-200 via-white to-cyan-100"
    ><div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-700">My Skills</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          Technologies I work with to build modern and scalable web apps.
        </p>
      </div>

      {/* ✅ Apply ref to this wrapper */}
      <div
        ref={skillGridRef}
        className="grid grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center"
      >
        {skills.map((skill, index) => (
          <div key={index} className="gsap-skill-card">
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
