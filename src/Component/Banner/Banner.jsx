import  { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaFileDownload } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import gsap from "gsap";





const Banner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const introElements = containerRef.current.querySelectorAll(".gsap-intro");
      gsap.fromTo(
        introElements,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Al Imran | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Al Imran, a passionate Full Stack Web Developer skilled in React, Node.js, MongoDB, and modern web technologies."
        />
        <meta name="keywords" content="Al Imran, Web Developer, MERN stack, React portfolio, JavaScript developer" />
        <meta property="og:title" content="Al Imran | Full Stack Web Developer" />
        <meta property="og:description" content="Explore my projects and skills in React, Node.js, and more." />
        <meta property="og:image" content="https://al-imran-portfolio.netlify.app/" />
      </Helmet>

      <section
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100"
      >
        
        

        {/* Main Container */}
        <div
          ref={containerRef}
          className="relative z-10 container max-w-7xl px-5 sm:px-10 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16"
        >
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="gsap-intro text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Al Imran
            </h1>

            <p className="gsap-intro text-xl sm:text-2xl md:text-3xl text-blue-600 font-semibold min-h-[3.5rem]">
              <Typewriter
                words={["Web Developer", "Frontend Enthusiast", "MERN Stack Developer"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1400}
              />
            </p>

            <p className="gsap-intro max-w-lg mx-auto md:mx-0 text-gray-700 text-lg font-medium">
              I build responsive and user-friendly websites.<br className="hidden sm:inline" /> Passionate about code and always eager to learn.
            </p>

            {/* Additional Subtitle */}
            <p className="text-gray-500 max-w-md mx-auto md:mx-0 italic font-light text-sm sm:text-base">
              Creating seamless digital experiences with efficient and clean code.
            </p>

            {/* Social Links with white background */}
            <motion.div
              className="gsap-intro flex justify-center md:justify-start space-x-6 text-3xl mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                {
                  href: "https://github.com/alimran74",
                  icon: FaGithub,
                  aria: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/al-imran-98a7ab247/",
                  icon: FaLinkedin,
                  aria: "LinkedIn",
                },
                {
                  href: "https://www.facebook.com/wizard34.net",
                  icon: FaFacebook,
                  aria: "Facebook",
                },
              ].map(({ href, icon: Icon, aria }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={aria}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-gray-900 rounded-full p-3 shadow-md text-gray-900 dark:text-white transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact and Resume Buttons */}
            <motion.div
              className="gsap-intro mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/8801956495589"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#fff",
                  color: "#25D366",
                  borderColor: "#25D366",
                  boxShadow: "0 8px 20px rgba(37,211,102,0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg shadow-lg border border-[#25D366] transition-all duration-300"
              >
                <FaWhatsapp className="text-xl mr-2" />
                Contact
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                aria-label="Download Resume"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#2563EB",
                  color: "#fff",
                  boxShadow: "0 8px 20px rgba(37,99,235,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                <FaFileDownload className="mr-2 text-lg" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right Section - Tilt Image */}
          <motion.div
            className="w-4/5 max-w-xs sm:max-w-md md:w-1/2 mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.3 }}
          >
            <Tilt
              glareEnable={true}
              glareColor="#93C5FD"
              glareMaxOpacity={0.36}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              transitionSpeed={2000}
              className="drop-shadow-xl rounded-3xl border-4 border-[#2563EB]"
            >
              <motion.img
                src="https://i.ibb.co/W46CHFWY/Whats-App-Image-2025-05-10-at-20-42-37-0259ce4c-removebg-preview-removebg-preview.png"
                alt="Al Imran"
                className="rounded-3xl w-full h-auto block"
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ type: "spring", stiffness: 160, damping: 10 }}
              />
            </Tilt>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Banner;
