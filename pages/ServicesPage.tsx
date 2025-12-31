import React from 'react';
import Services from './Services';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReadingProgressBar from '../components/ReadingProgressBar';

const ServicesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-cyber-900 text-gray-100 font-sans selection:bg-cyber-accent selection:text-cyber-900 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <Services />
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;
