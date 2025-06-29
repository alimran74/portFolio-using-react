import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Helmet } from "react-helmet";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const resumeLink =
  "https://drive.google.com/file/d/1VQmAzpoJ0bybykEPyDtToQRr14G4d3d7/view?usp=sharing";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔽 Smooth scroll with offset for fixed header
  const handleLinkClick = (href) => {
    setActiveLink(href.replace("#", ""));
    setMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; // Adjust based on your navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
        <meta property="og:image" content="https://yourdomain.com/preview.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4 transition-colors duration-500 ${
            scrolled
              ? "bg-white/40 backdrop-blur-md shadow-md rounded-lg"
              : "bg-transparent"
          }`}
        >
          {/* 🔷 Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="https://i.ibb.co/qFmfJC6B/image-modified.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* 🔷 Desktop Links */}
          <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-800">
            {navLinks.map(({ name, href }) => (
              <li key={name} className="relative">
                <button
                  onClick={() => handleLinkClick(href)}
                  className={`hover:text-[#2563EB] transition-colors duration-300 ${
                    activeLink === href.replace("#", "")
                      ? "text-[#2563EB]"
                      : "text-gray-800"
                  }`}
                >
                  {name}
                </button>
                {activeLink === href.replace("#", "") && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] rounded"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* 🔷 Resume Button */}
          <div className="hidden md:flex justify-end">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="custom-button"
            >
              Resume
            </a>
          </div>

          {/* 🔷 Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-[#2563EB] focus:outline-none shadow-md transition-transform duration-150 active:scale-95"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* 🔷 Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white/30 backdrop-blur-md shadow-lg z-50 flex flex-col p-6"
            >
              <button
                className="self-end mb-6 p-2 rounded-md text-gray-700 hover:text-[#2563EB] focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <HiX className="w-7 h-7" />
              </button>

              {/* Mobile Links */}
              <nav className="flex flex-col space-y-6 font-semibold text-gray-800">
                {navLinks.map(({ name, href }) => (
                  <button
                    key={name}
                    onClick={() => handleLinkClick(href)}
                    className={`text-lg text-left ${
                      activeLink === href.replace("#", "")
                        ? "text-[#2563EB]"
                        : "hover:text-[#2563EB]"
                    } transition-colors duration-300`}
                  >
                    {name}
                  </button>
                ))}
              </nav>

              {/* Resume in Mobile */}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="custom-button mt-auto text-center"
              >
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
