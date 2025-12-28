import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Modal from './Modal';
import ContactForm from './ContactForm';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '#home', isScroll: true },
    { name: 'About', href: '#about', isScroll: true },
    { name: 'Services', href: '#services', isScroll: true },
    { name: 'Projects', href: '#projects', isScroll: true },
    { name: 'Start Learning', href: '#speaking', isScroll: true },
    { name: 'Blog', href: '/blog', isScroll: false },
    { name: 'Contact', href: '#contact', isScroll: true },
  ];

  const handleNavigation = async (e: React.MouseEvent<HTMLElement>, link: { href: string; isScroll: boolean }) => {
    // If it's a scroll link
    if (link.isScroll) {
      e.preventDefault();

      if (!isHomePage) {
        // If not on home page, navigate to home first
        await navigate('/');
        // Wait a bit for navigation and render
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    } else {
      // If it's a route link (like /blog), let standard behavior happen or navigate
      // but we need to close mobile menu
      setIsOpen(false);
      // If using Link component simpler, but for unified handler:
      if (link.href.startsWith('/')) {
        navigate(link.href);
      }
    }
  };

  const openContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-cyber-900/80 backdrop-blur-xl border-b border-cyber-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href={isHomePage ? "#home" : "/"} onClick={(e) => { e.preventDefault(); if (!isHomePage) navigate('/'); else window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-3 group">
                <img src="/logo.png" alt="Ankit Rai" className="h-20 w-auto" />
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={(e) => handleNavigation(e, link)}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 relative group cursor-pointer bg-transparent border-none"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}

                {/* Secret Admin Link */}
                <Link to="/admin" className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors">.</Link>

                <button
                  onClick={openContactModal}
                  className="bg-transparent border border-cyber-accent text-cyber-accent hover:bg-cyber-accent hover:text-cyber-900 px-5 py-2 rounded text-sm font-bold transition-all duration-300 cursor-pointer"
                >
                  Let's Talk
                </button>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-cyber-900 border-b border-cyber-700 shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavigation(e, link)}
                  className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-cyber-800 bg-transparent border-none"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={openContactModal}
                className="w-full text-left block px-3 py-3 rounded-md text-base font-medium text-cyber-accent hover:bg-cyber-800"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>

      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get in Touch"
      >
        <ContactForm />
      </Modal>
    </>
  );
};

export default Navbar;