"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import type { PortfolioContent } from "@/types/portfolio";
import { portfolioContentSchema } from "@/lib/validators/portfolio";
import { defaultPortfolioContent } from "@/lib/portfolioData";
import { toast } from "react-toastify";

const stringify = (value: unknown) => JSON.stringify(value, null, 2);

export default function AdminPortfolioPage() {
  const { role } = useAuth();
  const [raw, setRaw] = useState<string>(stringify(defaultPortfolioContent));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAdmin = role === "admin";

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/portfolio");
        if (!res.ok) throw new Error("Failed to fetch portfolio data");
        const data = (await res.json()) as PortfolioContent;
        setRaw(stringify(data));
      } catch (err: any) {
        setError(err.message || "Failed to load portfolio content");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const parsed = useMemo(() => {
    try {
      return portfolioContentSchema.parse(JSON.parse(raw));
    } catch {
      return null;
    }
  }, [raw]);

  const handleSave = async () => {
    setError(null);
    if (!parsed) {
      setError("Invalid JSON or schema mismatch.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Missing auth token.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/portfolio", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(parsed),
      });

      if (!res.ok) {
        throw new Error("Failed to save portfolio content");
      }

      toast.success("Portfolio content updated");
    } catch (err: any) {
      setError(err.message || "Failed to save");
      toast.error(err.message || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  if (!isAdmin) return <p className="text-white">Unauthorized</p>;
  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <main className="min-h-screen px-6 py-12 text-white">
      <div className="max-w-5xl mx-auto space-y-6">
        <header>
          <h1 className="text-3xl font-bold">Portfolio Content</h1>
          <p className="text-zinc-400 mt-2">
            Edit the JSON below. It is validated against the portfolio schema.
          </p>
        </header>

        <textarea
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          className="w-full min-h-[520px] bg-zinc-900 text-zinc-100 p-4 rounded-lg font-mono text-sm"
          spellCheck={false}
        />

        {error && <p className="text-red-400">{error}</p>}
        {!error && parsed && (
          <p className="text-lime-400">Valid schema.</p>
        )}

        <div className="flex gap-4">
          <button
            onClick={() => setRaw(stringify(defaultPortfolioContent))}
            className="px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600"
          >
            Reset to defaults
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 rounded bg-teal-600 hover:bg-teal-500 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </main>
  );
}
