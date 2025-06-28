import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import Skills from '../Component/Skill/Skills';
import About from '../Component/About/About';
import { useEffect } from "react";
import Education from "../Component/Education/Education";



const MainLayout = () => {
    useEffect(() => {
    AOS.init({
      duration: 2000,  // animation lasts 1 second
      once: true,      // animation runs only once per scroll
    });
  }, []);
    return (
        <div>
    
            
            <Navbar/>
            <Banner/>
            <About/>
            <Skills/>
            <Education/>

            
        </div>
    );
};

export default MainLayout;