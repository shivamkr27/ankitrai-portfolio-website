import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const Services: React.FC = () => {
  return (
    <div id="services" className="py-20 bg-cyber-800 scroll-mt-16 border-y border-cyber-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive security solutions tailored for corporate, government, and educational institutions.
          </p>
        </div>

        <div className="grid gap-8">
          {SERVICES.map((service: Service) => {
            // Dynamic Icon Loading
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Shield;

            return (
              <div key={service.id} className="bg-cyber-900 rounded-xl p-8 border border-cyber-700 flex flex-col md:flex-row gap-8 items-start hover:border-cyber-accent/50 transition-colors">
                <div className="bg-cyber-800 p-4 rounded-lg border border-cyber-700 shrink-0">
                  <Icon className="h-10 w-10 text-cyber-accent" />
                </div>
                
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                  <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-cyber-800/50 p-3 rounded border border-cyber-700/50">
                      <span className="text-xs uppercase text-gray-500 font-bold block mb-1">Who is this for?</span>
                      <span className="text-sm text-gray-300">{service.targetAudience}</span>
                    </div>
                    <div className="bg-cyber-800/50 p-3 rounded border border-cyber-700/50">
                      <span className="text-xs uppercase text-gray-500 font-bold block mb-1">Outcome</span>
                      <span className="text-sm text-gray-300">{service.outcome}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                   <a 
                     href="#contact" 
                     className="px-6 py-3 bg-transparent border border-cyber-accent text-cyber-accent font-semibold rounded hover:bg-cyber-accent hover:text-cyber-900 transition-all whitespace-nowrap"
                   >
                     Request Proposal
                   </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;