import { Link } from "react-router"; // fixed import
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
import Squares from "../Banner/Squares"; // adjust path if needed
import ClickSpark from "./ClickSpark";
import { Helmet } from "react-helmet";

const ServiceSpotDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrls = [
    "https://i.ibb.co/QFsw1k7J/Screenshot-2025-06-29-050540.png",
    "https://i.ibb.co/79dtXnz/Screenshot-2025-06-29-050830.png",
    "https://i.ibb.co/zVMwybWv/Screenshot-2025-06-29-050949.png",
    "https://i.ibb.co/MD0L8z2H/Screenshot-2025-06-29-051119.png",
    "https://i.ibb.co/nMxNsR0Q/Screenshot-2025-06-29-050741.png",
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
    className="relative bg-gradient-to-br from-blue-100 via-white to-cyan-100 text-[#1F2937] pt-20 pb-12  sm:px-8 md:px-16 px-7 mx-auto overflow-hidden">
        <ClickSpark  sparkColor='black'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}>

      {/* 🎇 Squares Canvas Effect */}
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

      {/* 🔍 Fullscreen Image Preview */}
      {selectedImage && (
        <div  data-aos="zoom-in" className="fixed inset-0 z-[999] bg-white/20 backdrop-blur-md bg-opacity-95 flex items-center justify-center flex-col p-4">
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

      {/* 🔙 Go Back Link */}
      <Link
        to="/"
        className="relative z-10 inline-flex items-center gap-2 text-blue-400 font-semibold mb-6 hover:underline"
      >
        <FaArrowLeft /> Go Back
      </Link>

      {/* 🏷️ Title + Subtitle */}
      <div className="text-center relative z-10 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 inline-flex items-center gap-3 justify-center mb-4">
          <FaBlog /> Service Spot — Local Service Marketplace
        </h2>
        <p className="text-[#1F2937] md:text-lg text-[#1F2937]0 max-w-2xl mx-auto">
          A full-stack platform to create, browse, and review services — powered
          by MERN, Firebase Auth, and JWT-secured backend.
        </p>
      </div>

      {/* 🔄 CardSwap Image Carousel */}
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

      {/* 🛠️ Tech Stack */}
      <div className="relative z-10 mb-10">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
          <FaTools className="text-blue-400" /> Main Technology Stack
        </h3>
        <ul className="text-[#1F2937] list-disc list-inside space-y-1">
          <li>React 19, React Router v7, TailwindCSS 4.1</li>
          <li>Framer Motion, Toastify, React Rating, Lottie</li>
          <li>Firebase Auth (Email/Password + Google OAuth)</li>
          <li>JWT Secure Auth | MongoDB | Express.js</li>
          <li>Stripe Payment | React Hook Form | Custom Hooks</li>
        </ul>
      </div>

      {/* 📄 Description */}
      <div className="relative z-10 mb-10">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
          <FaFileAlt className="text-blue-400" /> Description
        </h3>
        <p className="text-[#1F2937] leading-relaxed">
          Service Spot is a complete service hub where users can list their services, browse offerings, and submit reviews with ratings. It supports protected routes using JWT, secure Firebase login, and offers a polished responsive UI enhanced with smooth animations, filterable service cards, and real-time data updates.
        </p>
      </div>

      {/* 🔗 Project Links */}
      <div className="relative z-10 mb-10">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
          <FaLink className="text-blue-400" /> Project Links
        </h3>
        <ul className="text-blue-400 space-y-2 text-base md:text-lg">
          <li>
            🌐 Live:{" "}
            <a
              href="https://service-spot-7c739.web.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              service-spot-7c739.web.app
            </a>
          </li>
          <li>
            💻 Client Repo:{" "}
            <a
              href="https://github.com/alimran74/Service-Spot-client"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              github.com/alimran74/Service-Spot-client
            </a>
          </li>
          <li>
            🔧 Server Repo:{" "}
            <a
              href="https://github.com/alimran74/Service-Spot-server"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              github.com/alimran74/Service-Spot-server
            </a>
          </li>
        </ul>
      </div>

      {/* ⚠️ Challenges */}
      <div className="relative z-10 mb-10">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
          <FaExclamationTriangle className="text-blue-400" /> Challenges Faced
        </h3>
        <ul className="list-disc list-inside text-[#1F2937] space-y-1">
          <li>JWT setup and backend token validation using Firebase Admin SDK</li>
          <li>Optimizing card animation and UI reusability</li>
          <li>Managing dynamic forms and validations using React Hook Form</li>
          <li>Custom review + rating system with instant updates</li>
        </ul>
      </div>

      {/* 🚀 Future Improvements */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
          <FaRocket className="text-blue-400" /> Future Improvements & Plans
        </h3>
        <ul className="list-disc list-inside text-[#1F2937] space-y-1">
          <li>Admin analytics dashboard with service controls</li>
          <li>Real-time chat between clients and service providers</li>
          <li>Dark/light toggle and improved accessibility</li>
          <li>Multi-image support and cloud image compression</li>
        </ul>
      </div>

      {/* 🏠 Go Home Button */}
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

export default ServiceSpotDetails;
