import React from 'react';
import { Mic, Video, Users } from 'lucide-react';
import { SPEAKING_ITEMS } from '../constants';

const Speaking: React.FC = () => {
  return (
    <div id="speaking" className="py-20 bg-cyber-800 scroll-mt-16 border-t border-cyber-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-3 rounded-full bg-cyber-900 border border-cyber-700 mb-6">
          <Mic className="h-8 w-8 text-cyber-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Speaking & Training</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          Available for Universities, Corporate Summits, and Tech Conferences. 
          Sharing insights on the future of cybersecurity and digital defense.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
           {SPEAKING_ITEMS.map((item, idx) => {
             let Icon;
             switch (item.icon) {
               case 'Users': Icon = Users; break;
               case 'Video': Icon = Video; break;
               case 'Mic': Icon = Mic; break;
               default: Icon = Users;
             }
             return (
               <div key={idx} className="bg-cyber-900/50 p-6 rounded-xl border border-cyber-700 group relative">
                 <Icon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                 <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                 <p className="text-gray-400">{item.description}</p>
                 <div className="absolute left-0 top-0 hidden group-hover:block bg-cyber-800 text-white text-sm p-4 rounded shadow-lg z-10 max-w-xs mt-16">
                   {item.details}
                 </div>
               </div>
             );
           })}
        </div>

        <div className="p-8 bg-cyber-900 rounded-xl border border-dashed border-gray-600">
          <p className="text-lg text-gray-500">
            Full speaking schedule and event gallery coming soon.
          </p>
          <a href="#contact" className="inline-block mt-4 text-cyber-accent hover:underline">
            Invite for a talk &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Speaking;