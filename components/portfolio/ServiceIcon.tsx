import React from "react";

export function ServiceIcon({ iconKey }: { iconKey: string }) {
  switch (iconKey) {
    case "web-development":
      return (
        <svg
          className="w-12 h-12 text-yellow-500"
          viewBox="0 0 66 54"
          fill="currentColor"
        >
          <path d="M62.2188 0.4375H3.78125C2.79531..." />
        </svg>
      );
    case "ui-ux":
      return (
        <svg
          className="w-12 h-12 text-yellow-500"
          viewBox="0 0 66 54"
          fill="currentColor"
        >
          <circle
            cx="33"
            cy="27"
            r="25"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      );
    case "seo":
      return (
        <svg
          className="w-12 h-12 text-yellow-500"
          viewBox="0 0 66 54"
          fill="currentColor"
        >
          <rect
            width="50"
            height="30"
            x="8"
            y="12"
            rx="4"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      );
    default:
      return null;
  }
}
