import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import Skills from '../Component/Skill/Skills';
import About from '../Component/About/About';
import { useEffect } from "react";
import Education from "../Component/Education/Education";
import Projects from "../Component/ProjectsSection/Projects";
import Contact from "../Component/Contact/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "../Component/Footer/Footer";



const MainLayout = () => {
    useEffect(() => {
    AOS.init({
      duration: 2000,  // animation lasts 1 second
      once: true,      // animation runs only once per scroll
    });
  }, []);
    return (
        <div>
            <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    
            
            <Navbar/>
            <Banner/>
            <About/>
            <Skills/>
            <Education/>
            <Projects/>
            <Contact/>
            <Footer/>

            
        </div>
    );
};

export default MainLayout;