// app/edit/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectForm from "@/components/forms/ProjectForm";
import type { Project } from "@/types/project";
import FullPageLoader from "@/components/ui/FullPageLoader";

const EditProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  return (
    <>
      {loading ? (
        <FullPageLoader />
      ) : (
        <ProjectForm project={project} isLoading={loading} />
      )}
      <ToastContainer position="top-right" />
    </>
  );
};

export default EditProjectPage;
