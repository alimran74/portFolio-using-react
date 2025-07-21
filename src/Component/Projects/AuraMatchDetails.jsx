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

const AuraMatchDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrls = [
    "https://i.ibb.co/TxF0X1QC/Screenshot-2025-07-21-064413.png",
    "https://i.ibb.co/HDwSzSq9/Screenshot-2025-07-21-064516.png",
    "https://i.ibb.co/nMm8vrdV/Screenshot-2025-07-21-064342.png",
    "https://i.ibb.co/N2sw5T2b/Screenshot-2025-07-21-064647.png",
    "https://i.ibb.co/MD5t1FRB/Screenshot-2025-07-21-064624.png ",
  ];

  return (
    <>
      <Helmet>
        <title>Aura Match | Al Imran Portfolio</title>
        <meta
          name="description"
          content="Aura Match is a dating and personality match web platform powered by React, Tailwind, and Firebase Auth."
        />
        <meta name="author" content="Al Imran" />
        <meta property="og:title" content="Aura Match | Project" />
        <meta
          property="og:description"
          content="AI-enhanced dating and matching experience using modern stack"
        />
        <meta property="og:image" content="https://aura-match.netlify.app/banner.png" />
        <meta property="og:url" content="https://aura-match.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="relative bg-gradient-to-br from-blue-100 via-white to-cyan-100 text-[#1F2937] pt-20 pb-12  sm:px-8 md:px-16 px-7 mx-auto overflow-hidden">
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

          <Link to="/" className="relative z-10 inline-flex items-center gap-2 text-blue-400 font-semibold mb-6 hover:underline">
            <FaArrowLeft /> Go Back
          </Link>

          <div className="text-center relative z-10 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 inline-flex items-center gap-3 justify-center mb-4">
              <FaBlog /> Aura Match — Personality & matrimony Platform
            </h2>
            <p className="text-[#1F2937] md:text-lg max-w-2xl mx-auto">
              A modern matching and dating platform that uses questionnaires, Firebase auth, and secure profiles to connect users.
            </p>
          </div>

         <div className="relative z-0 flex items-center justify-center px-12 sm:px-6 md:px-16  lg:px-24 py-12 min-h-[40vh]">
  <div className="relative z-0 flex justify-center items-center w-full py-10 sm:py-16 md:py-24  lg:py-32 px-4">
  <div className="w-full  max-w-6xl">
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

</div>


          <div className="relative z-10 mb-10">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
              <FaTools className="text-blue-400" /> Main Technology Stack
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>React 19, TailwindCSS 4.1, React Hook Form</li>
              <li>Firebase Auth, Firestore Database</li>
              <li>Framer Motion, Toastify, Heroicons</li>
              <li>JWT Authorization, Protected Routes</li>
            </ul>
          </div>

          <div className="relative z-10 mb-10">
  <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
    <FaFileAlt className="text-blue-400" /> Description
  </h3>
  <p className="leading-relaxed space-y-3">
    Aura Match is a dynamic and engaging dating/personality matching web application. It allows users to register via Firebase Auth, upload a profile with cropped avatars, and complete interactive personality quizzes. These results drive the matchmaking algorithm.
    <br /><br />
    Users receive compatibility-based match suggestions and can view detailed partner scores. The frontend is built with TailwindCSS and React, using modern animations and transitions for fluid UX. Profiles are securely stored and editable, and dynamic route protection ensures only authorized access.
    <br /><br />
    The app adapts responsively across all screen sizes and offers a mobile-friendly experience with touch optimization.
  </p>
</div>
          <div className="relative z-10 mb-10">
  <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
    <FaRocket className="text-blue-400" /> Key Features
  </h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Quiz-based compatibility scoring system</li>
    <li>Profile creation with avatar cropping and editing</li>
    <li>Secure authentication and user-specific dashboards</li>
    <li>Compatibility match list with dynamic score cards</li>
    <li>Match history tracking with stats and filter</li>
    <li>Fully responsive, optimized for both mobile and desktop</li>
  </ul>
</div>

          <div className="relative z-10 mb-10">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
              <FaLink className="text-blue-400" /> Project Links
            </h3>
            <ul className="text-blue-400 space-y-2 text-base md:text-lg">
              <li>
                🌐 Live:{" "}
                <a href="https://aura-match.web.app/" target="_blank" rel="noreferrer" className="hover:underline">
                 https://aura-match.web.app
                </a>
              </li>
              <li>
                💻 Client Repo:{" "}
                <a href="https://github.com/alimran74/Aura-Match-client" target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/alimran74/Aura-Match-client
                </a>
              </li>
              <li>
                🔧 Server Repo:{" "}
                <a href="https://github.com/alimran74/Aura-Match-server" target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/alimran74/Aura-Match-server
                </a>
              </li>
            </ul>
          </div>

          <div className="relative z-10 mb-10">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
              <FaExclamationTriangle className="text-blue-400" /> Challenges Faced
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Creating dynamic personality quizzes with score mapping</li>
              <li>Managing conditional rendering for profile states</li>
              <li>Ensuring Firebase security rules and route protection</li>
            </ul>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
              <FaRocket className="text-blue-400" /> Future Improvements & Plans
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Real-time match recommendations using AI</li>
              <li>Private chat with moderation tools</li>
              <li>Theme customization and mobile enhancements</li>
            </ul>
          </div>

          <div className="relative z-10 flex justify-center mt-14">
            <Link to="/">
              <button className="grid grid-cols-2 items-center gap-2 px-4 py-2 custom-button">
                
                <FaHome className="" />
                 
              </button>
            </Link>
          </div>
        </ClickSpark>
      </section>
    </>
  );
};

export default AuraMatchDetails;
