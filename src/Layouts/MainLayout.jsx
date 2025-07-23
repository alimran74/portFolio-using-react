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



const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Al Imran | Mern Stack Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Al Imran, a passionate Mern Stack Web Developer skilled in React, Node.js, MongoDB, and modern web technologies."
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
          content="https://al-imran-portfolio.netlify.app/"
        />
        <meta property="og:url" content="https://al-imran-portfolio.netlify.app/" />
        <meta name="twitter:card" content="https://i.ibb.co/FkQGbfY6/bannerP.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Al Imran",
              "url": "https://al-imran-portfolio.netlify.app/",
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
       

            <div className="">
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
      </div>
    </>
  );
};

export default MainLayout;
