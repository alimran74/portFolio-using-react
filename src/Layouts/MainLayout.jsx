
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import Skills from '../Component/Skill/Skills';
import About from '../Component/About/About';



const MainLayout = () => {
    return (
        <div>
    
            
            <Navbar/>
            <Banner/>
            <About/>
            <Skills/>

            
        </div>
    );
};

export default MainLayout;