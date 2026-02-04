import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectForm from "@/components/forms/ProjectForm";

const ProjectPage = () => (
  <>
    <ProjectForm />
    <ToastContainer position="top-right" />
  </>
);

export default ProjectPage;

