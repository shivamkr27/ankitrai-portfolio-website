import React from 'react';
import { Award, Briefcase, Mic, Cpu } from 'lucide-react';
import { EXPERIENCE, MEDIA, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div id="about" className="py-24 bg-cyber-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-10">
      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* Left Column: Bio & Skills */}
        <div className="lg:col-span-7">
           <div className="mb-12">
             <h2 className="text-sm font-bold text-cyber-accent uppercase tracking-widest mb-2">My Background</h2>
             <h1 className="text-4xl font-bold text-white mb-6">Bridging Security Gaps <br /> for a Safer Digital World.</h1>
             <p className="text-lg text-gray-400 leading-relaxed mb-6">
               As the Founder of <strong>Codevirus Security</strong>, I have dedicated my career to not just identifying vulnerabilities, but building resilient systems. 
               My approach combines offensive security knowledge with defensive strategy.
             </p>
             <p className="text-lg text-gray-400 leading-relaxed">
               I act as a strategic partner to government bodies and corporations, translating complex cyber threats into actionable leadership decisions.
             </p>
           </div>

           {/* Technical Arsenal */}
           <div className="mb-12">
             <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-cyber-accent" />
                <h3 className="text-xl font-bold text-white">Technical Arsenal</h3>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
               {SKILLS.map((skill, idx) => (
                 <div key={idx} className="relative flex items-center gap-2 p-3 bg-cyber-800/50 rounded border border-cyber-700/50 hover:border-cyber-accent/30 transition-colors group">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent"></div>
                   <span className="text-gray-300 text-sm font-medium">{skill.title}</span>
                   <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-cyber-800 text-white text-xs p-2 rounded shadow-lg z-10 max-w-xs">
                     {skill.details}
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Right Column: Timeline & Awards */}
        <div className="lg:col-span-5 space-y-12">
           
           {/* Experience */}
           <div>
             <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-cyber-accent" />
                <h2 className="text-xl font-bold text-white">Experience Timeline</h2>
             </div>
             <div className="relative border-l border-gray-800 ml-3 space-y-8 pl-8 py-2">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-cyber-900 border-2 border-gray-600 group-hover:border-cyber-accent transition-colors"></div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <div className="text-cyber-accent text-sm mb-2">{exp.organization}</div>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                ))}
             </div>
           </div>

           {/* Awards & Media */}
           <div className="bg-gradient-to-br from-cyber-800 to-cyber-900 rounded-2xl p-6 border border-cyber-700">
              <div className="flex items-center gap-3 mb-6">
                 <Award className="text-yellow-500" />
                 <h2 className="text-xl font-bold text-white">Recognition</h2>
              </div>
              <div className="space-y-4">
                {MEDIA.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                     <div className="mt-1">
                       {item.type === 'Award' ? <Award size={16} className="text-yellow-500" /> : <Mic size={16} className="text-blue-500" />}
                     </div>
                     <div>
                        <h4 className="text-white font-medium text-sm">{item.outlet}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                     </div>
                  </div>
                ))}
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default About;
