// import * as React from "react";

// export function ContactHero() {
//   return (
//     <section className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
//       <header className="text-6xl font-bold text-white leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
//         <span style={{ color: "rgba(238,238,238,1)" }}>Got a project in</span>{" "}
//         <span style={{ color: "rgba(0,173,181,1)" }}>mind?</span>
//       </header>
//       <div
//         className="self-center max-w-full w-[450px]"
//         style={{ marginTop: "19px" }}
//       >
//         <div className="flex gap-5 max-md:flex-col">
//           <div className="w-[37%] max-md:ml-0 max-md:w-full">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/0458efe28bfee3ee64686f1907a91d45133d05cb?placeholderIfAbsent=true&apiKey=5b6fe28f26c84f30b987f7b2501e2d7c"
//               alt="Contact illustration 1"
//               className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[1.24] w-[161px] max-md:mt-10"
//             />
//           </div>
//           <div className="ml-5 w-[63%] max-md:ml-0 max-md:w-full">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/495ab59635f7f24d3975c3eaa77edcf1cee04bca?placeholderIfAbsent=true&apiKey=5b6fe28f26c84f30b987f7b2501e2d7c"
//               alt="Contact illustration 2"
//               className="object-contain grow w-full rounded-none aspect-[0.74] max-md:mt-5"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";

interface ContactButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function ContactHero({
  onClick,
  type = "button",
}: ContactButtonProps) {
  return (
    <section className="flex flex-col w-full text-white">
      <div className="flex gap-5 mt-6 justify-center sm:justify-start">
        <div className="w-40">
          <Image
            src="/svgs/request.svg"
            alt="Contact Illustration 1"
            width={180}
            height={180}
            className="object-contain w-full h-auto mt-10"
          />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-black leading-tight mt-6">
        <span className="text-zinc-700">Bring your project to</span>
        <span className="text-myred-500"> Life</span>
      </h1>

      <button
        type={type}
        onClick={onClick}
        className="flex gap-2.5 items-center self-start px-20 py-6 mt-6 bg-myred-500 rounded-3xl text-white font-bold max-md:px-5 hover:cursor-pointer animate-pulse"
      >
        <span className="self-stretch my-auto">Request Now</span>
      </button>

      {/* <div className="flex gap-5 mt-6 justify-center sm:justify-start">
        <div className="w-40">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0458efe28bfee3ee64686f1907a91d45133d05cb"
            alt="Contact Illustration 1"
            width="160"
            height="130"
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="w-60">
          <img
            src="/svgs/message.s"
            alt="Contact Illustration 2"
            width="240"
            height="180"
            className="object-contain w-full h-auto"
          />
        </div>
      </div> */}
    </section>
  );
}
