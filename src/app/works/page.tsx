import React from "react";
import projects from "../../lib/data/project";
import WorkCard from "@/components/layout/work/work-card";

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {projects.map((project) => (
          <WorkCard
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
