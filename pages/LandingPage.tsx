import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Speaking from '../components/Speaking';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReadingProgressBar from '../components/ReadingProgressBar';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-cyber-900 text-gray-100 font-sans selection:bg-cyber-accent selection:text-cyber-900 flex flex-col animate-fade-in">
            <Navbar />

            <main className="flex-grow">
                {/* All sections stacked for landing page layout */}
                <Home />
                <About />
                <Services />
                <Projects />
                <Speaking />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;
