import { useState } from "react"
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaWordpress, FaJs,
  FaDatabase, FaFire, FaGithub, FaCode
} from "react-icons/fa"
import {
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase,
  SiCanva, SiWoocommerce, SiReactrouter, SiDaisyui, SiNetlify, SiVercel, 
} from "react-icons/si"


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "React Router", level: 88 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Firebase", level: 80 },
      { name: "Ract APIs", level: 85 },
      { name: "Authentication", level: 80 },
    ],
    tools: [
      { name: "VS Code", level: 95 },
      { name: "Git & GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Canva", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Netlify", level: 100 },
    ],

  }

  const skillIcons = {
    "React.js": <FaReact size={20} className="text-white" />,
    "JavaScript": <FaJs size={20} className="text-white" />,
    "HTML5": <FaHtml5 size={20} className="text-white" />,
    "CSS3": <FaCss3Alt size={20} className="text-white" />,
    "Tailwind CSS": <SiTailwindcss size={20} className="text-white" />,
    "React Router": <SiReactrouter size={20} className="text-white" />,

    "Node.js": <FaNodeJs size={20} className="text-white" />,
    "Express.js": <SiExpress size={20} className="text-white" />,
    "MongoDB": <SiMongodb size={20} className="text-white" />,
    "Firebase": <FaFire size={20} className="text-white" />,
    "Ract APIs": <FaDatabase size={20} className="text-white" />,
    "Authentication": <FaGithub size={20} className="text-white" />,

    "VS Code": <FaCode size={20} className="text-white" />,
    "Git & GitHub": <FaGitAlt size={20} className="text-white" />,
    "Figma": <FaFigma size={20} className="text-white" />,
    "Canva": <SiCanva size={20} className="text-white" />,
    "Vercel": <SiVercel size={20} className="text-white" />,
    "Netlify": <SiNetlify size={20} className="text-white" />,
  }

  const categories = [
    { key: "frontend", label: "FRONTEND", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "tools", label: "Tools", icon: "🛠️" },
   
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-200 via-white to-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            My <span className="text-cyan-500">Skills</span>
          </h2>
          <div className="w-38 h-1 bg-blue-700 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-cyan-500 text-white"
                  : "bg-blue-600 text-gray-300  custom-button"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-blue-500  p-6 rounded-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white  font-semibold flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {skillIcons[skill.name]}
                  </div>
                  {skill.name}
                </h3>
                <span className="text-white font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills