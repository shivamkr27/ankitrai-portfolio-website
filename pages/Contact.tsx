import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {

  return (
    <div id="contact" className="py-20 bg-cyber-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16 border-t border-cyber-700/50">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-gray-400 mb-8 text-lg">
            Looking for a VAPT audit, corporate training, or a keynote speaker?
            Fill out the form or reach out directly.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-cyber-900 p-3 rounded-lg border border-cyber-700 text-cyber-accent">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">contact@ankitrai.in</p>
                <p className="text-gray-500 text-sm mt-1">Typical response time: 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-cyber-900 p-3 rounded-lg border border-cyber-700 text-cyber-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">India (Serving Globally)</p>
                <p className="text-gray-500 text-sm mt-1">Available for remote & on-site consulting</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-cyber-900 p-3 rounded-lg border border-cyber-700 text-cyber-accent">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Social</h3>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-cyber-accent hover:underline">LinkedIn Profile</a>
              </div>
            </div>


          </div>
        </div>

        <div className="bg-cyber-900 p-8 rounded-xl border border-cyber-700">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;