
  import { notFound } from "next/navigation";
  import projects from "../../../lib/data/project";
  import WorkDetails from "@/components/layout/work/work-details";
  
  interface ProjectPageProps {
    params: {
      slug: string;
    };
  }
  export interface Project {
    id: number;
    title: string;
    description: string;
    details:string;
    image: string;
    slug: string;
    technologies: string[];
  }
  
  async function getProjectBySlug(slug: string): Promise<Project | null> {
    const project = projects.find((p) => p.slug === slug) || null;
    return project;
  }
  
  export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProjectBySlug(params.slug);
  
    if (!project) {
      notFound();
    }
  
    return (
      <div className="max-w-6xl mx-auto p-6">
        <WorkDetails
          key={project.id}
          id={project.id}
          title={project.title}
          details={project.details}
          image={project.image}
          technologies={project.technologies}
        />
      </div>
    );
  }
  