import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Download, MapPin, Terminal } from 'lucide-react';
import { HERO_CONTENT, TRUST_BADGES } from '../constants';
import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <div id="home" className="flex flex-col relative">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">


              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-accent to-blue-500">
                  {HERO_CONTENT.name}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
                {HERO_CONTENT.title}
              </p>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {HERO_CONTENT.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={openContactModal}
                  className="px-8 py-4 bg-cyber-accent text-cyber-900 font-bold rounded hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 group cursor-pointer"
                >
                  Book Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-sm font-mono">
                <MapPin size={14} />
                {HERO_CONTENT.location}
              </div>
            </div>

            {/* Right Visual: Personal Profile Photo */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative w-72 md:w-80 aspect-[3/4] group">
                {/* Background Accents - decorative blob behind image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyber-accent to-blue-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Image Container with Cyber Frame */}
                <div className="relative h-full w-full bg-cyber-800" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}>
                  {/* Border Effect via pseudo-element simulation (parent background) */}
                  <div className="absolute inset-0 bg-cyber-accent opacity-20"></div>

                  {/* Main Image */}
                  <div className="absolute inset-[2px] bg-cyber-900 overflow-hidden" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}>
                    <img
                      src="/ankit-rai.jpg"
                      alt="Ankit Rai - Cyber Security Expert"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay Badge/Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-900 via-transparent to-transparent opacity-80 z-10"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-4 right-4 z-20">
                    <div className="bg-cyber-900/90 backdrop-blur border border-cyber-700 p-4 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyber-800 rounded-lg border border-cyber-700">
                          <Shield className="text-cyber-accent h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-white font-bold leading-tight">Ankit Rai</p>
                          <p className="text-[10px] text-cyber-accent font-mono mt-0.5">Codevirus Security</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Clean Strip */}
      <section className="bg-cyber-900 border-y border-cyber-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-xs font-bold uppercase tracking-[0.2em] mb-6">Recognized Industry Authority</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {TRUST_BADGES.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 group cursor-default">
                <CheckCircle className="text-cyber-accent h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get in Touch"
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

export default Home;