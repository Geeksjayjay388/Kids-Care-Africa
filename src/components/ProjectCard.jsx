// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
      <div className="lg:w-1/2">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
            <div className="text-red-600">
              {project.icon}
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/2">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
        <p className="text-gray-600 text-lg mb-6">{project.description}</p>
        <div className="flex items-center gap-2 text-red-600 font-semibold">
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          <span>{project.impact}</span>
        </div>
        <div className="mt-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-red-600 h-3 rounded-full" 
              style={{ width: `${Math.random() * 30 + 70}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Progress</span>
            <span>Help us complete this project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;