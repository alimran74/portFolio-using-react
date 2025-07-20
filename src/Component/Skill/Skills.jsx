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
import Squares from "../Banner/Squares";

import SkillCard from "./SkillCard";
import { Helmet } from "react-helmet";

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
    <>
     <Helmet>
        <title>Al Imran | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Al Imran, a passionate Full Stack Web Developer skilled in React, Node.js, MongoDB, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Al Imran, Web Developer, MERN stack, React portfolio, JavaScript developer"
        />
        <meta name="author" content="Al Imran" />
        <meta property="og:title" content="Al Imran | Full Stack Web Developer" />
        <meta property="og:description" content="Explore my projects and skills in React, Node.js, and more." />
        <meta property="og:image" content="https://al-imran-portfolio.netlify.app/" />
        <meta property="og:url" content="https://al-imran-portfolio.netlify.app/" />
        <meta name="twitter:card" content="https://i.ibb.co/FkQGbfY6/bannerP.png" />
      </Helmet>
    <section 
      id="skills"
      className="pt-24  px-4 sm:px-8 md:px-16  mx-auto relative overflow-hidden pb-8 bg-gradient-to-br from-blue-200 via-white to-cyan-100"
       // soft gray background & dark text
    >
      {/* ✅ Square Background Effect */}
    
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
    </>
  );
};

export default Skills;
