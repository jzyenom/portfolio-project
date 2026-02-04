// export default ProjectsPage;
"use client";
import * as React from "react";
import { ProjectsHeader } from "./ProjectHeader";
import { ProjectsGrid } from "./ProjectGrid";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const { role } = useAuth();
  const isAdmin = role === "admin";

  return (
    <section className="flex flex-col items-center px-4 py-24 md:px-10 md:py-40  text-white">
      <div className="w-full max-w-7xl">
        <ProjectsHeader
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {isAdmin && (
          <div className="mb-6 flex justify-end">
            <Link
              href="/addProject"
              className="px-4 py-2 rounded bg-teal-600 hover:bg-teal-500 text-white font-semibold"
            >
              Add Project
            </Link>
          </div>
        )}
        <ProjectsGrid activeFilter={activeFilter} />
      </div>
    </section>
  );
}

export default ProjectsPage;
