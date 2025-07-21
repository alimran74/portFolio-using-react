import { Helmet } from "react-helmet";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Footer = () => {
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
        <meta
          property="og:description"
          content="Explore my projects and skills in React, Node.js, and more."
        />
        <meta property="og:image" content="https://al-imran-portfolio.netlify.app/banner.png" />
        <meta property="og:url" content="https://al-imran-portfolio.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <footer className="bg-gradient-to-br from-blue-200 via-white to-cyan-100  shadow-inner px-4 md:px-10 py-10 text-center text-gray-800">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/logo.png"
            alt="Al Imran Logo"
            className="h-20 w-auto"
          />

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-[#2563EB]">
            Al Imran
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-gray-700">
            Full Stack Web Developer | MERN Stack | Clean UI Enthusiast
          </p>
          <p className="italic text-sm text-gray-600 animate-pulse">
            “Turning Ideas into Interfaces — One Line at a Time.”
          </p>

          {/* Social Links */}
          
        </div>

        <hr className="my-6   w-1/2 mx-auto" />

        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Al Imran — All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
