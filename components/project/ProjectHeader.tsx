"use client";
import * as React from "react";
import { FilterButton } from "../FilterButton";

interface Props {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function ProjectsHeader({ activeFilter, setActiveFilter }: Props) {
  const filters = ["All", "UI", "Graphics", "Admin", "Promo", "General"];

  return (
    <header className="flex flex-col gap-4 mb-10 items-center text-center md:items-start md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold">
        <span className="text-zinc-900">My recent </span>
        <span className="text-myred-500">Projects</span>
      </h1>
      <nav className="flex flex-wrap justify-center md:justify-start gap-4">
        {filters.map((label) => (
          <FilterButton
            key={label}
            label={label}
            isActive={label === activeFilter}
            onClick={() => setActiveFilter(label)}
          />
        ))}
      </nav>
    </header>
  );
}
