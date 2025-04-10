import React from 'react';

function ServiceCard({ project }) {
  return (
    <div className="bg-[#E4E4E7] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] transition-shadow duration-300 overflow-hidden h-full">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-[#000000] font-['Orbitron']">{project.title}</h3>
        <p className="text-[#000000] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-[#000000] text-white px-2 py-1 text-xs font-medium border border-[#000000]">
              {tech}
            </span>
          ))}
        </div>
        <a href="/#/services" className="text-[#000000] hover:text-[#FACC15] font-medium flex items-center bg-transparent border-0 p-0 cursor-pointer transition-colors">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;