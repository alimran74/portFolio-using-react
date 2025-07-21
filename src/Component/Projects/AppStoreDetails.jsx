import { Link } from "react-router";
import {
  FaArrowLeft,
  FaBlog,
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

const AppStoreDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrls = [
    "https://i.ibb.co/23116Sk9/Screenshot-2025-06-29-051839.png",
    "https://i.ibb.co/GvPJZRC9/Screenshot-2025-06-29-051754.png",
    "https://i.ibb.co/BKBjTqP5/Screenshot-2025-06-29-051657.png",
    "https://i.ibb.co/60tZkF3W/Screenshot-2025-06-29-051535.png",
    "https://i.ibb.co/zV9S7D5R/Screenshot-2025-06-29-051314.png",
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
    <section className="relative bg-[#F9FAFB] text-[#1F2937] pt-20 pb-12  sm:px-8 md:px-16  mx-auto overflow-hidden">
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
          <div data-aos="zoom-in" className="fixed inset-0 z-[999] bg-white/20 backdrop-blur-md bg-opacity-95 flex items-center justify-center flex-col p-4">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl border border-white shadow-2xl"
            />
            <button onClick={() => setSelectedImage(null)} className="custom-button mt-10">
              🔙 Back to Project
            </button>
          </div>
        )}

        <Link to="/" className="relative z-10 inline-flex items-center gap-2 text-blue-400 font-semibold mb-6 hover:underline">
          <FaArrowLeft /> Go Back
        </Link>

        <div className="text-center relative z-10 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 inline-flex items-center gap-3 justify-center mb-4">
            <FaBlog /> AppStore — Explore, Review & Discover Apps
          </h2>
          <p className="text-[#1F2937] md:text-lg max-w-2xl mx-auto">
            A front-end app marketplace with categories, reviews, authentication, and protected routes.
          </p>
        </div>

        <div className="relative z-0 flex justify-center items-center w-full py-10 sm:py-16 md:py-24 lg:py-32 px-4">
  <div className="w-full max-w-6xl">
    <CardSwap
      cardDistance={60}
      verticalDistance={70}
      delay={4000}
      pauseOnHover
    >
      {imageUrls.map((src, index) => (
        <Card key={index} onClick={() => setSelectedImage(src)}>
          <img
            src={src}
            alt={`Aura Match ${index + 1}`}
            className="w-full h-full max-h-[500px] sm:max-h-[550px] md:max-h-[600px] lg:max-h-[700px] aspect-video object-cover rounded-2xl border border-white shadow-xl cursor-zoom-in"
          />
        </Card>
      ))}
    </CardSwap>
  </div>
</div>

        <div className="relative z-10 mb-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaTools className="text-blue-400" /> Main Technology Stack
          </h3>
          <ul className="text-[#1F2937] list-disc list-inside space-y-1">
            <li>React 19, React Router v7, TailwindCSS 4.1</li>
            <li>Firebase Auth (Email/Password + Google OAuth)</li>
            <li>Local JSON for App Data & Category Filtering</li>
            <li>Client-side search, review system, and routing</li>
          </ul>
        </div>

        <div className="relative z-10 mb-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaFileAlt className="text-blue-400" /> Description
          </h3>
          <p className="text-[#1F2937] leading-relaxed">
            AppStore is a front-end focused React application allowing users to explore categorized apps, write and read reviews, and enjoy smooth UI transitions. Firebase Authentication is used to manage user sessions and protect private routes. All app data is sourced from local JSON.
          </p>
        </div>

        <div className="relative z-10 mb-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaLink className="text-blue-400" /> Project Links
          </h3>
          <ul className="text-blue-400 space-y-2 text-base md:text-lg">
            <li>
              🌐 Live: {" "}
              <a href="https://assignment-09-80714.firebaseapp.com/" target="_blank" rel="noreferrer" className="hover:underline">
                https://assignment-09-80714.firebaseapp.com/
              </a>
            </li>
            <li>
              💻 Client Repo: {" "}
              <a href="https://github.com/alimran74/ap-store" target="_blank" rel="noreferrer" className="hover:underline">
                https://github.com/alimran74/ap-store
              </a>
            </li>
          </ul>
        </div>

        <div className="relative z-10 mb-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaExclamationTriangle className="text-blue-400" /> Challenges Faced
          </h3>
          <ul className="list-disc list-inside text-[#1F2937] space-y-1">
            <li>Client-side category filter with real-time updates</li>
            <li>Firebase route protection and state handling</li>
            <li>Animation and responsive UI layout optimization</li>
          </ul>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
            <FaRocket className="text-blue-400" /> Future Improvements & Plans
          </h3>
          <ul className="list-disc list-inside text-[#1F2937] space-y-1">
            <li>Dark/light theme toggle</li>
            <li>App favorites/bookmarking feature</li>
            <li>Ratings breakdown chart using Recharts</li>
          </ul>
        </div>

        <div className="relative z-10 flex justify-center mt-14">
          <Link to="/">
            <button className="flex items-center gap-2 px-4 py-2 custom-button">
              <FaHome className="text-lg" />
              Home
            </button>
          </Link>
        </div>
      </ClickSpark>
    </section>
    </>
  );
};

export default AppStoreDetails;
