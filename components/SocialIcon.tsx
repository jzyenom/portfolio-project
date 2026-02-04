"use client";
import * as React from "react";

interface SocialIconProps {
  icon: string;
  ariaLabel: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ icon, ariaLabel }) => {
  return (
    <button
      className="flex justify-center items-center p-3 w-12 h-12 border-2 border-myred-500 rounded-[50px] max-md:p-2.5 max-md:w-11 max-md:h-11 max-sm:p-2 max-sm:w-10 max-sm:h-10 hover:bg-myred-500 transition-colors"
      aria-label={ariaLabel}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: icon,
        }}
      />
    </button>
  );
};
