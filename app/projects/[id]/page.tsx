"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProject, deleteProject } from "@/lib/projectApi";
import ProjectDetails from "@/components/project/ProjectDetails";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { role } = useAuth();
  const isAdmin = role === "admin";
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const data = await getProject(id as string);
        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchProject();
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(id as string);
        toast.success("Project deleted");
        router.push("/projects"); // redirect after delete
      } catch (err) {
        toast.error("Failed to delete project");
        console.error(err);
      }
    }
  };

  if (loading) return <p className="text-white">Loading project...</p>;

  if (!project) return <p className="text-white">Project not found</p>;

  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <ProjectDetails project={project} />

      {isAdmin && (
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
          <button
            onClick={() => router.push(`/projects/edit/${id}`)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
