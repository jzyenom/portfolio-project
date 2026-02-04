// import React from "react";
// import Image from "next/image";

// const AboutMe: React.FC = () => {
//   return (
//     <section className=" text-dark py-20">
//       <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
//         {/* Left Side Content */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h1 className="text-5xl font-extrabold leading-tight mb-6">
//             About Me
//           </h1>
//           {/* <span className="text-4xl font-bold mb-4 text-blue-400">
//             Cre8tif-Above Perfection
//           </span> */}
//           <p className="text-lg mb-6">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sit
//             praesentium culpa laboriosam quo aut, saepe voluptate esse explicabo
//             sint minima? Illo ut, aut aliquam sapiente tempora quo optio
//             consequuntur! Veniam quasi natus consequuntur facilis exercitationem
//             impedit perspiciatis aut id ratione earum dolores maio.....
//             <span className="font-bold"> Read more</span>
//           </p>
//         </div>
//         {/* Right Side Image */}
//         {/* <div className="md:w-1/2">
//           <img
//             src="/path-to-hero-image.jpg" // Replace with the actual path to the image
//             alt="Faith and Sports"
//             className="rounded-lg shadow-lg w-full"
//           />
//         </div> */}
//         <div className="md:w-1/2">
//           <div className="hero-container md:ml-10">
//             <Image
//               src="/path-to-hero-image.jpg" // Replace with the actual path to the image
//               alt="motion"
//               width={200}
//               height={200}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

"use client";
import React from 'react';
import { AboutSection } from './AboutSection';
import { AboutImage } from './AboutImage';

export const AboutMePage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-16 py-44 max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[1234px] max-xl:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[37%] max-md:ml-0 max-xl:w-full">
            <AboutSection />
          </div>
          <div className="ml-5 w-[63%] mt-96 max-md:ml-0 max-xl:w-full">
            <AboutImage/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMePage;
