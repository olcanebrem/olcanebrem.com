import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url, tags }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {tags && (
      <div className="flex flex-wrap gap-1 mt-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-200 rounded px-2 py-1">{tag}</span>
        ))}
      </div>
    )}
  </a>
);

export default ProjectCard;
