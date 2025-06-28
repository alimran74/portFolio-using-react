import React from 'react';
import ThemeToggle from '../Component/ThemeToggle';
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import Education from '../Component/Education/Education';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Education/>
            <ThemeToggle/>
            
        </div>
    );
};

export default MainLayout;