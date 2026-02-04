import Image from "next/image";
interface Project {
  title?: string;
  fileUrl?: string;
  clientName: string;
  projectDate: string;
  description?: string;
}

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{project.title || "Untitled"}</h1>

      {project.fileUrl && (
        <div className="mb-6">
          <Image
            src={project.fileUrl}
            alt={project.title || "Project"}
            width={800}
            height={500}
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      )}

      <p className="text-lg text-gray-300 mb-2">
        <strong>Client:</strong> {project.clientName}
      </p>
      <p className="text-lg text-gray-300 mb-6">
        <strong>Date:</strong> {new Date(project.projectDate).toDateString()}
      </p>

      {project.description && (
        <p className="text-base text-gray-200 leading-relaxed">
          {project.description}
        </p>
      )}
    </div>
  );
}
