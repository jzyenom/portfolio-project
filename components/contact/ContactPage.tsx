// "use client";
// import * as React from "react";
// import { ContactHero } from "./ContactHero";
// import { ContactForm } from "./ContactForm";

// export default function ContactPage() {
//   return (
//     <main className="flex overflow-hidden flex-col pt-64 bg-gray-800 max-md:pt-24">
//       <div
//         className="self-center w-full max-w-[1248px] max-md:max-w-full"
//         style={{ marginTop: "158px" }}
//       >
//         <div className="flex gap-5 max-md:flex-col">
//           <div className="w-[45%] max-md:ml-0 max-md:w-full">
//             <ContactHero />
//           </div>
//           <div className="ml-5 w-[55%] max-md:ml-0 max-md:w-full">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//       <div className="mt-64 w-full border border-solid border-zinc-100 border-opacity-10 min-h-px max-md:mt-10 max-md:max-w-full" />
//     </main>
//   );
// }

"use client";
import * as React from "react";
import { ContactHero } from "./ContactHero";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center pt-32 px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <ContactHero />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
      <div className="mt-24 w-full border-t border-zinc-100 border-opacity-10" />
    </main>
  );
}
