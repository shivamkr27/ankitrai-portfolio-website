import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, FolderLock } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div id="projects" className="py-24 bg-cyber-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-10">
       <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-cyber-accent uppercase tracking-widest mb-2">Portfolio</h2>
            <h1 className="text-4xl font-bold text-white">Selected Engagements</h1>
          </div>
          <p className="text-gray-400 max-w-md text-right md:text-left">
            A selection of critical security assessments and audits performed for high-compliance sectors.
          </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group bg-cyber-800 rounded-xl overflow-hidden border border-cyber-700 hover:border-cyber-accent transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col">
            
            {/* Fake "File" Header */}
            <div className="px-6 py-4 bg-cyber-900 border-b border-cyber-700 flex justify-between items-center">
               <div className="flex items-center gap-2 text-gray-400 text-[10px] font-mono">
                  <FolderLock size={14} />
                  <span>CASE_ID: {project.id.toUpperCase()}_00{project.id.length}</span>
               </div>
               <span className="px-2 py-1 rounded bg-cyber-800 text-[10px] font-bold text-cyber-accent uppercase border border-cyber-700">
                 {project.category}
               </span>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyber-accent transition-colors flex justify-between items-start">
                {project.title}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1" size={20} />
              </h3>
              
              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Challenge</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Execution</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Result & Tags */}
              <div className="mt-auto">
                 <div className="mb-4 p-3 bg-green-900/20 border border-green-800/50 rounded">
                    <h4 className="text-[10px] font-bold text-green-500 uppercase tracking-wider mb-1">Impact</h4>
                    <p className="text-sm text-green-100 font-medium">{project.result}</p>
                 </div>
                 
                 <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-cyber-900 text-gray-400 border border-cyber-700">
                        #{tag}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;