

"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Loader2, X } from "lucide-react";
// import { addProject } from "@/lib/addProject";

const LABEL_OPTIONS = ["UI", "Graphics", "Admin", "Promo", "General"];

const ProjectForm: React.FC<{ onSuccess?: () => void }> = () => {
  const [file, setFile] = useState<File | null>(null);
  const [clientName, setClientName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [label, setLabel] = useState("");
  const [projectDate, setProjectDate] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileType, setFileType] = useState<"image" | "video" | "audio" | null>(
    null
  );

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
        setFileType(null);
        setPreviewUrl("");
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl("");
    setFileType(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName || !projectType || !projectDate || !label || !file) {
      toast.error("Please fill all fields and upload a media file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("clientName", clientName);
    formData.append("projectType", projectType);
    formData.append("projectDate", projectDate);
    formData.append("label", label);

    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const res = await fetch("/api/projects", {
        method: "POST",
        body: formData,
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      toast.success("Upload Successful");

      // Reset form
      setClientName("");
      setProjectType("");
      setProjectDate("");
      setLabel("");
      setFile(null);
      setPreviewUrl("");
      setFileType(null);
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-6 py-12 flex justify-center items-center bg-zinc-950 text-white">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Upload Project</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Client Name
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-700 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Project Type
            </label>
            <input
              type="text"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-700 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Project Date
            </label>
            <input
              type="date"
              value={projectDate}
              onChange={(e) => setProjectDate(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-700 py-3 px-1 focus:outline-none focus:border-teal-500 text-zinc-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">Label</label>
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
                <option
                  key={opt}
                  value={opt}
                  className="bg-zinc-900 text-white"
                >
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Media File
            </label>
            <input
              type="file"
              accept="image/*,video/*,audio/*"
              onChange={handleFileChange}
              className="text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600"
              required
            />
            {previewUrl && (
              <div className="mt-4 relative">
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
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  title="Remove file"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full font-bold transition-all disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Uploading...
              </>
            ) : (
              "Upload Project"
            )}
          </button>
        </form>
      </div>
    </main>
  );
};

export default ProjectForm;
