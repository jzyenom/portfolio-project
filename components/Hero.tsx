"use client";

import React from "react";
import Image from "next/image";
import { ActionButtons } from "@/components/ActionBtn";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[500px] items-center"
      style={{ backgroundImage: "url('/pngs/pattern.png')" }}
    >
      <div className="text-black dark:text-white py-16 md:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-bounce delay-100">
              <span className="text-gray-800 dark:text-gray-100">
                {/* <Image src="/logo.svg" alt="Logo" className="h-20 ms-0" width={1000} height={1000} /> */}
                <img src="/logo.svg" alt="Logo" className="h-20 ms-0"  />
              </span>{" "}
              {/* <span className="theme-text">DESIGNER</span> */}
            </h1>

            <p className="motion motion-preset-typewriter-[16] text-base sm:text-lg leading-5 my-space text-gray-600 dark:text-gray-300 mb-6">
              ABOVE PERFECTION
            </p>

            <p className="motion motion-preset-slide-down motion-preset-fade-in">
              Welcome to Greatness.
            </p>

            {/* <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
            <h1>Test</h1>
          </div> */}

            <ActionButtons />
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="max-w-sm sm:max-w-md lg:max-w-lg ">
              <Image
                src="/svgs/landing2.svg"
                alt="Creative Character"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div class="-motion-translate-y-in-50 motion-ease-bounce">Bouncy translation</div> */
}
{
  /* <div class="motion-preset-slide-right">
    slide-right
</div> */
}

// <div class="motion-preset-slide-up-right">
//     slide-up-right
// </div>

{
  /* <div class="motion-preset-focus">
    focus
</div> */
}

{
  /* <div class="motion-preset-blur-right">
    blur-right
</div> */
}

{
  /* <div class="motion-preset-rebound-right">
    rebound-right
</div> */
}

{
  /* <div class="motion-preset-shrink">
    shrink
</div> */
}

// <div class="motion-preset-expand">
//     expand
// </div>
