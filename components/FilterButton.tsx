// "use client";
// import * as React from "react";

// interface FilterButtonProps {
//   label: string;
//   isActive: boolean;
//   onClick: () => void;
// }

// export function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
//   const baseClasses =
//     "gap-2.5 px-8 py-2.5 whitespace-nowrap rounded-3xl max-md:px-5";
//   const activeClasses = "bg-teal-500";
//   const inactiveClasses = "overflow-hidden bg-zinc-700 bg-opacity-50";

//   return (
//     <button
//       className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// }

"use client";
import * as React from "react";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  const text = "shadow-[0_0_10px_dark]";
  const base =
    "px-6 py-2 rounded-3xl text-sm sm:text-base font-medium transition-colors";
  const active = "bg-myred-500 text-white";
  const inactive =
    "bg-zinc-700 bg-opacity-50 text-gray-50 opacity-50 hover:bg-opacity-70";
  return (
    <button
      className={`${base} ${isActive ? active : inactive} ${text}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
