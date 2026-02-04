import React from "react";
import Image from "next/image";

export const AboutImage: React.FC = () => {
  return (
    <Image
      src="/svgs/about.svg"
      alt="About me main image"
      className="object-contain grow mt-24 aspect-[1.12] max-md:mt-10 max-md:max-w-full"
      width={500}
      height={500}
    />
  );
};
