import React from "react";

interface WorkDetailsProps {
  title: string;
  id: number;
  details: string;
  image: string;
  technologies: string[];
}

const WorkDetails: React.FC<WorkDetailsProps> = ({
  title,
  details,
  image,
  technologies,
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4" />
      <p className="mb-4">{details}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-200 text-gray-800 px-3 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default  WorkDetails;
