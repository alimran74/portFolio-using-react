import { Link } from "react-router";
import {
  FaArrowLeft,
  FaUsers,
  FaTools,
  FaFileAlt,
  FaLink,
  FaExclamationTriangle,
  FaRocket,
  FaHome,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import CardSwap, { Card } from "./CardSwap";
import Squares from "../Banner/Squares";
import ClickSpark from "./ClickSpark";
import { Helmet } from "react-helmet";

const HobbyHubDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrls = [
    "https://i.ibb.co/BVj4M3k1/Screenshot-2025-06-29-050035.png",
    "https://i.ibb.co/GQcZHgn0/Screenshot-2025-06-29-045807.png",
    "https://i.ibb.co/6Rcg7zcT/Screenshot-2025-06-29-045900.png",
    "https://i.ibb.co/N2s6MwtS/Screenshot-2025-06-29-050113.png",
    "https://i.ibb.co/jv5zxmPC/Screenshot-2025-06-29-050230.png",
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
  <section className="relative bg-[#F9FAFB] text-[#1F2937] pt-20 pb-12 px-4 sm:px-8 md:px-16 px-7 mx-auto overflow-hidden">
      <ClickSpark sparkColor="black" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={50}
            borderColor="rgba(31, 41, 55, 0.08)"
            hoverFillColor="#E0F2FE"
            className="absolute inset-0 -z-10"
          />
        </div>

        {selectedImage && (
          <div
            data-aos="zoom-in"
            className="fixed inset-0 z-[999] bg-white/20 backdrop-blur-md bg-opacity-95 flex items-center justify-center flex-col p-4"
          >
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl border border-white shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="custom-button mt-10"
            >
              🔙 Back to Project
            </button>
          </div>
        )}

        <Link
          to="/"
          className="relative z-10 inline-flex items-center gap-2 text-blue-400 font-semibold mb-6 hover:underline"
        >
          <FaArrowLeft /> Go Back
        </Link>

        <div className="text-center relative z-10 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 inline-flex items-center gap-3 justify-center mb-4">
            <FaUsers /> HobbyHub — Hobby Group Organizer
          </h2>
          <p className="text-[#1F2937] md:text-lg max-w-2xl mx-auto">
            A full-stack platform to discover, create, and manage hobby groups — built with the MERN stack, Firebase Auth, and Firestore.
          </p>
        </div>

        <div className="relative z-10" style={{ height: "600px", marginBottom: "3rem" }}>
          <CardSwap cardDistance={60} verticalDistance={70} delay={4000} pauseOnHover>
            {imageUrls.map((src, index) => (
              <Card key={index} onClick={() => setSelectedImage(src)}>
                <img
                  src={src}
                  alt={`HobbyHub ${index + 1}`}
                  className="rounded-xl border border-white w-full h-full object-cover cursor-zoom-in"
                />
              </Card>
            ))}
          </CardSwap>
        </div>

        <div className="relative z-10 mb-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaTools className="text-blue-400" /> Main Technology Stack
          </h3>
          <ul className="text-[#1F2937] list-disc list-inside space-y-1">
            <li>React 19, React Router v7, TailwindCSS 4.1</li>
            <li>Firebase Auth + Firestore, Custom Hooks, Toastify</li>
            <li>Protected Routes with JWT, Framer Motion, React Rating</li>
            <li>Full CRUD functionality, Responsive Design, Theme Toggle</li>
          </ul>
        </div>

        <div className="relative z-10 mb-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaFileAlt className="text-blue-400" /> Description
          </h3>
          <p className="text-[#1F2937] leading-relaxed">
            HobbyHub allows users to join, create, or manage hobby groups in various categories. It offers user authentication, group details, member management, and an interactive UI with animation, dark/light toggle, and filtering features.
          </p>
        </div>

        <div className="relative z-10 mb-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaLink className="text-blue-400" /> Project Links
          </h3>
          <ul className="text-blue-400 space-y-2 text-base md:text-lg">
            <li>
              🌐 Live:
              <a href="https://hobbyhub-27dd6.web.app/" target="_blank" rel="noreferrer" className="hover:underline">
                https://hobbyhub-27dd6.web.app/
              </a>
            </li>
            <li>
              💻 Client Repo:
              <a href="https://github.com/alimran74/Hobby-hub-client" target="_blank" rel="noreferrer" className="hover:underline">
                https://github.com/alimran74/Hobby-hub-client
              </a>
            </li>
            <li>
              🔧 Server Repo:
              <a href="https://github.com/alimran74/hobby-hub-server" target="_blank" rel="noreferrer" className="hover:underline">
                https://github.com/alimran74/hobby-hub-server
              </a>
            </li>
          </ul>
        </div>

        <div className="relative z-10 mb-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaExclamationTriangle className="text-blue-400" /> Challenges Faced
          </h3>
          <ul className="list-disc list-inside text-[#1F2937] space-y-1">
            <li>Firestore data structure planning and secure CRUD logic</li>
            <li>Conditional rendering and access control per user role</li>
            <li>Managing animation and responsiveness together</li>
            <li>Theme toggle with persistent user preference</li>
          </ul>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaRocket className="text-blue-400" /> Future Improvements & Plans
          </h3>
          <ul className="list-disc list-inside text-[#1F2937] space-y-1">
            <li>Group chat support via WebSocket or Firebase Realtime DB</li>
            <li>Event scheduling system and notifications</li>
            <li>Advanced group analytics and member stats</li>
            <li>Multi-image upload and optimized media storage</li>
          </ul>
        </div>

        <div className="relative z-10 flex justify-center mt-14">
          <Link to="/">
            <button className="flex items-center gap-2 px-4 py-2 custom-button">
              <FaHome className="text-lg" /> 
            </button>
          </Link>
        </div>
      </ClickSpark>
    </section>
    </>
  );
};

export default HobbyHubDetails;
