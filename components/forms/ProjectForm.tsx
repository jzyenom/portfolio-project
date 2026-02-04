"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import type { Project } from "@/types/project";
import FullPageLoader from "@/components/ui/FullPageLoader"


const LABEL_OPTIONS = ["UI", "Graphics", "Admin", "Promo", "General"];


const ProjectForm: React.FC<{
  project?: Project;
  onSuccess?: () => void;
  isLoading?: boolean;
}> = ({ project, onSuccess, isLoading }) => {
  const [file, setFile] = useState<File | null>(null);
  const [clientName, setClientName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectDate, setProjectDate] = useState("");
  const [label, setLabel] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [fileType, setFileType] = useState<"image" | "video" | "audio" | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Populate form with existing project data if editing
  useEffect(() => {
    if (project) {
      setClientName(project.clientName || "");
      setProjectType(project.projectType || "");
      setProjectDate(project.projectDate?.slice(0, 10) || "");
      setLabel(project.label || "");
      setPreviewUrl(project.fileUrl || "");

      if (project.fileUrl) {
        const ext = project.fileUrl.split(".").pop();
        if (ext?.match(/(jpg|jpeg|png|gif)$/)) setFileType("image");
        else if (ext?.match(/(mp4|webm)$/)) setFileType("video");
        else if (ext?.match(/(mp3|wav)$/)) setFileType("audio");
      }
    }
  }, [project]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const type = selected.type;
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));

      if (type.startsWith("image")) setFileType("image");
      else if (type.startsWith("video")) setFileType("video");
      else if (type.startsWith("audio")) setFileType("audio");
      else {
        toast.error("Unsupported file type");
        setFile(null);
        setFileType(null);
        setPreviewUrl("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName || !projectType || !projectDate || !label) {
      toast.error("Please fill all required fields.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    if (file) formData.append("file", file);
    formData.append("clientName", clientName);
    formData.append("projectType", projectType);
    formData.append("projectDate", projectDate);
    formData.append("label", label);


    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const res = await fetch(
        project?._id ? `/api/projects/${project._id}` : `/api/projects`,
        {
          method: project?._id ? "PATCH" : "POST",
          body: formData,
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        }
      );

      if (!res.ok) throw new Error("Request failed");

      toast.success(project?._id ? "Project updated!" : "Project uploaded!");

      if (project?._id) {
        // Redirect to the same project edit page after update
        router.push(`/projects/${project._id}`);
      } else {
        // Optional: redirect after new upload
        router.push("/projects"); // or home, or list page
      }

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (isLoading) return <FullPageLoader />;

  return (
    <main className="min-h-screen px-6 py-12 flex justify-center items-center bg-zinc-950 text-white">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {project ? "Edit Project" : "Upload Project"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full bg-transparent border-b border-zinc-700 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
            required
          />

          <input
            type="text"
            placeholder="Project Type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full bg-transparent border-b border-zinc-700 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
            required
          />

          <input
            type="date"
            value={projectDate}
            onChange={(e) => setProjectDate(e.target.value)}
            className="w-full bg-transparent border-b border-zinc-700 py-3 px-1 focus:outline-none focus:border-teal-500 text-zinc-300"
            required
          />

          <select
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full bg-transparent border-b border-zinc-700 py-3 px-1 focus:outline-none focus:border-teal-500 text-white"
            required
          >
            <option value="" disabled>
              Select Label
            </option>
            {LABEL_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-zinc-900 text-white">
                {opt}
              </option>
            ))}
          </select>

          <input
            type="file"
            accept="image/*,video/*,audio/*"
            onChange={handleFileChange}
            className="text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600"
            required={!previewUrl}
          />

          {previewUrl && (
            <div className="mt-6 relative">
              {fileType === "image" && (
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-cover rounded-full border-4 border-teal-500"
                />
              )}
              {fileType === "video" && (
                <video
                  src={previewUrl}
                  controls
                  className="w-full max-w-md border border-teal-500 rounded"
                />
              )}
              {fileType === "audio" && (
                <audio
                  src={previewUrl}
                  controls
                  className="w-full max-w-md mt-4 border-t border-teal-500 pt-2"
                />
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full font-bold transition-all disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                {project ? "Updating..." : "Uploading..."}
              </>
            ) : project ? (
              "Update Project"
            ) : (
              "Upload Project"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}

export default ProjectForm;
