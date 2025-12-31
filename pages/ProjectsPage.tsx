import React from 'react';
import Projects from './Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReadingProgressBar from '../components/ReadingProgressBar';

const ProjectsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-cyber-900 text-gray-100 font-sans selection:bg-cyber-accent selection:text-cyber-900 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <Projects />
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;