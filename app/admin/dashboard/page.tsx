"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AdminOnlyPage = () => {
  const [secret, setSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSecret = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized");
        // router.push("/login"); // redirect if not logged in
        return;
      }

      try {
        const res = await fetch("/api/admin/secret", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401 || res.status === 403) {
          toast.error("Access denied: Admins only");
          // router.push("/login");
          return;
        }

        const data = await res.json();
        setSecret(data.message);
      } catch {
        toast.error("Something went wrong");
        // router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchSecret();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {secret && <p>{secret}</p>}
      <div className="mt-6 flex gap-4">
        <a
          href="/admin/portfolio"
          className="px-4 py-2 rounded bg-teal-600 hover:bg-teal-500 text-white"
        >
          Edit Portfolio
        </a>
        <a
          href="/addProject"
          className="px-4 py-2 rounded bg-teal-600 hover:bg-teal-500 text-white"
        >
          Add Project
        </a>
      </div>
    </div>
  );
};

export default AdminOnlyPage;
