import React from "react";
import projects from "../../lib/data/project";
import PortfolioCard from "@/components/layout/portfolio/portfolio-card";

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            id={project.id} 
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
