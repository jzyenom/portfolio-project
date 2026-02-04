"use client";
import * as React from "react";

interface NavigationItemProps {
  icon: string;
  label: string;
  href?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  href = "#",
}) => {
  return (
    <a
      href={href}
      className="flex gap-2.5 items-start p-2.5 max-md:gap-2 max-md:p-2 max-sm:gap-1.5 max-sm:p-1.5 hover:bg-zinc-700 rounded-lg transition-colors"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: icon,
        }}
      />
      <span className="text-lg text-zinc-100 max-md:text-base max-sm:text-sm">
        {label}
      </span>
    </a>
  );
};
