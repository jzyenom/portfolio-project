/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title?: string;
  description?: string;
  imageUrl: string;
  aspectRatio?: string;
  paddingX?: string;
  paddingY?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  aspectRatio = "aspect-video",
  paddingX = "px-4",
  paddingY = "py-4",
}: ProjectCardProps) {
  const containerClasses = `flex flex-col items-center justify-center bg-transparent shadow-[0px_0_50px_gray] bg-opacity-50 rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden hover:shadow-lg transition ${paddingX} ${paddingY}`;

  return (
    <Link href={`/projects/${id}`}>
      <article className={containerClasses}>
        <div className="w-full relative rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title || "Project image"}
            width={400}
            height={300}
            className={`w-full h-auto object-cover ${aspectRatio}`}
          />
        </div>
        {title && (
          <div className="mt-3 text-center">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {description && (
              <p className="text-sm text-gray-700 line-clamp-2 mt-1">
                {description}
              </p>
            )}
          </div>
        )}
      </article>
    </Link>
  );
}

// shadow-[0_0_10px_teal]
