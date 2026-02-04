import Image from "next/image";
import type { Project } from "@/types/project";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{project.clientName}</h1>

      {project.fileUrl && (
        <div className="mb-6">
          <Image
            src={project.fileUrl}
            alt={project.clientName}
            width={800}
            height={500}
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      )}

      <p className="text-lg text-gray-300 mb-2">
        <strong>Client:</strong> {project.clientName}
      </p>
      <p className="text-lg text-gray-300 mb-2">
        <strong>Type:</strong> {project.projectType}
      </p>
      <p className="text-lg text-gray-300 mb-6">
        <strong>Date:</strong> {new Date(project.projectDate).toDateString()}
      </p>
    </div>
  );
}
