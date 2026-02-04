"use client";

import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "@/lib/projectApi"; // this is the function we wrote earlier

interface Project {
  _id: string;
  title?: string;
  description?: string;
  fileUrl: string;
  label?: string;
  clientName?: string;
}

interface Props {
  activeFilter: string;
}

export function ProjectsGrid({ activeFilter }: Props) {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProjects();

        console.log("✅ Raw Fetched Projects:", data);

        if (Array.isArray(data)) {
          data.forEach((p, index) => {
            console.log(`Project ${index + 1}:`, {
              id: p._id,
              title: p.title,
              label: p.label,
              fileUrl: p.fileUrl,
            });
          });
        }

        setProjects(data);
      } catch (error) {
        console.error("❌ Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : // : projects.filter((p) => p.label === activeFilter);
        projects.filter(
          (p) => p.label?.toLowerCase() === activeFilter.toLowerCase()
        );

  if (loading) return <p className="text-white">Loading projects...</p>;
  console.log("🟠 Active Filter:", activeFilter);
  console.log("🟢 Filtered Projects:", filteredProjects);

  return (
    <div className="w-full flex justify-center md:justify-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-screen-xl px-4">
        {/* {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title || project.clientName}
            imageUrl={project.imageUrl}
            description={project.description}
          />
        ))} */}
        {Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project._id}
              id={project._id}
              title={project.title || project.clientName}
              imageUrl={project.fileUrl || "/default-image.jpg"}
              description={project.description}
            />
          ))
        ) : (
          <p className="text-white">No projects found.</p>
        )}
      </div>
    </div>
  );
}
