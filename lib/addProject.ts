import { IProject } from "@/models/project";
export const addProject = async (project: IProject) => {
  const response = await fetch("/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Upload failed");
  }
  return data;
};
