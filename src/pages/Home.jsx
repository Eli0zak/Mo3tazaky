import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OperationsRoadmap from '../components/OperationsRoadmap';
import SecurityVault from '../components/SecurityVault';
import GrowthLab from '../components/GrowthLab';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <OperationsRoadmap />
            <SecurityVault />
            <GrowthLab />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
