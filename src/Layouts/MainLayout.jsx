import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

// Components
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Banner/Banner";
import About from "../Component/About/About";
import Skills from "../Component/Skill/Skills";
import Education from "../Component/Education/Education";
import Projects from "../Component/ProjectsSection/Projects";
import Contact from "../Component/Contact/Contact";
import Footer from "../Component/Footer/Footer";
import VerticalStepper from "../Component/VerticalStepper/VerticalStepper";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

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
        <meta
          property="og:image"
          content="https://yourdomain.com/preview.png"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Al Imran",
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://github.com/alimran74",
                "https://linkedin.com/in/alimran74"
              ],
              "jobTitle": "Full Stack Web Developer"
            }
          `}
        </script>
      </Helmet>

      <div>
        {/* Toast Notification */}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        {/* Vertical Stepper */}
        <VerticalStepper />

        {/* Site Layout */}
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
