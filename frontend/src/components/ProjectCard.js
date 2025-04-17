import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-text border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] transition-shadow duration-300 overflow-hidden h-full">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-secondary">{project.title}</h3>
        <p className="text-secondary mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-secondary text-text px-2 py-1 text-xs font-medium border border-secondary">
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.url || "/projects"} 
          target={project.url ? "_blank" : "_self"}
          rel={project.url ? "noopener noreferrer" : ""}
          className="text-secondary hover:text-accent font-medium flex items-center bg-transparent border-0 p-0 cursor-pointer transition-colors"
        >
          {project.url ? "View Project" : "Learn more"}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;