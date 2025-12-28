import React from 'react';
import { Linkedin, Twitter, FileText, Shield } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-900 border-t border-cyber-700 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <img src="/logo.png" alt="Ankit Rai" className="h-20 w-auto" />
          <p className="text-sm leading-relaxed mb-4 max-w-sm">
            Founder of Codevirus Security. Helping organizations secure systems, data, and people through expert consulting and training.
          </p>
          <div className="flex space-x-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyber-accent transition-colors"><Linkedin size={20} /></a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="hover:text-cyber-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-cyber-accent transition-colors"><FileText size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Expertise</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-cyber-accent">VAPT Services</a></li>
            <li><a href="#services" className="hover:text-cyber-accent">Corporate Training</a></li>
            <li><a href="#services" className="hover:text-cyber-accent">Dark Web Intel</a></li>
            <li><a href="#services" className="hover:text-cyber-accent">Consulting</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal & Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyber-accent">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyber-accent">Terms of Service</a></li>
            <li><a href="#" className="hover:text-cyber-accent">Media Kit</a></li>
            <li><a href="#contact" className="hover:text-cyber-accent">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-cyber-700 text-center text-xs">
        &copy; {new Date().getFullYear()} Ankit Rai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;