import axios, { AxiosError } from "axios";
import type { Project } from "@/types/project";

type ApiListResponse<T> = { data: T[] };
type ApiErrorResponse = { message?: string };

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL || "",
});

const getAuthHeaders = () => {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export async function getProjects() {
  const res = await api.get<ApiListResponse<Project>>("/api/projects");
  return Array.isArray(res.data?.data) ? res.data.data : [];
}

export async function getProject(id: string) {
  const res = await api.get<Project>(`/api/projects/${id}`);
  return res.data;
}

export async function deleteProject(id: string) {
  const res = await api.delete(`/api/projects/${id}`, {
    headers: getAuthHeaders(),
  });
  return res.data;
}

export const addProject = async (formData: FormData) => {
  try {
    const response = await axios.post("/api/projects", formData, {
      headers: {
        ...getAuthHeaders(),
        // Let browser set this automatically; do not set Content-Type here.
      },
    });
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<ApiErrorResponse>;
    const message = err.response?.data?.message || "Upload failed";
    throw new Error(message);
  }
};

export const updateProject = async (id: string, formData: FormData) => {
  try {
    const response = await axios.patch(`/api/projects/${id}`, formData, {
      headers: {
        ...getAuthHeaders(),
        // Let browser set this automatically; do not set Content-Type here.
      },
    });
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<ApiErrorResponse>;
    const message = err.response?.data?.message || "Update failed";
    throw new Error(message);
  }
};
