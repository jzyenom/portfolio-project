"use client";

import { Download } from "lucide-react";
import React from "react";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start mt-10 text-lg">
      {/* Hire Me Button */}
      <button
        className="px-8 py-2.5 text-white rounded-3xl bg-myred-500 hover:border-myred-500 hover:border-2 hover:bg-transparent hover:text-myred-500 transition-colors font-bold"
        aria-label="Hire me"
      >
        Hire me
      </button>

      {/* Download CV Button */}
      <button
        className="flex items-center gap-2 px-8 py-2.5 bg-zinc-700 dark:bg-zinc-800 bg-opacity-80 text-white rounded-3xl hover:bg-zinc-600 dark:hover:bg-zinc-600 transition-colors font-bold"
        aria-label="Download CV"
      >
        <span>Download CV</span>
        <Download size={20} />
      </button>
    </div>
  );
}

// shadow-[0_0_10px_teal]
