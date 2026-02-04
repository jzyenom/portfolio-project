// /* eslint-disable react/no-children-prop */
// "use client";
// import * as React from "react";
// import { ContactButton } from "./ContactButton";

// export function ContactForm() {
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <section className="flex flex-col w-full text-lg font-bold max-md:mt-10 max-md:max-w-full">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-[600px] max-md:max-w-full"
//       >
//         <div className="flex flex-wrap gap-6 justify-center items-start w-full">
//           <div className="flex-1 shrink basis-0 min-w-60">
//             <label htmlFor="name" className="text-zinc-100">
//               Your name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Name"
//               className="gap-2.5 py-4 pr-52 pl-6 mt-2.5 w-full whitespace-nowrap rounded-2xl bg-zinc-700 bg-opacity-50 text-zinc-100 max-md:px-5 border-none outline-none placeholder-zinc-100"
//             />
//           </div>
//           <div className="flex-1 shrink basis-0 min-w-60">
//             <label htmlFor="email" className="text-zinc-100">
//               Your email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//               className="gap-2.5 py-4 pr-52 pl-6 mt-2.5 w-full whitespace-nowrap rounded-2xl bg-zinc-700 bg-opacity-50 text-zinc-100 max-md:px-5 border-none outline-none placeholder-zinc-100"
//             />
//           </div>
//         </div>
//         <div className="mt-6 w-full max-md:max-w-full">
//           <label htmlFor="message" className="text-zinc-100">
//             Your Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             placeholder="Message"
//             className="gap-2.5 pt-4 pr-64 pb-60 pl-6 mt-2.5 w-full whitespace-nowrap rounded-2xl bg-zinc-700 bg-opacity-50 min-h-[280px] text-zinc-100 max-md:px-5 max-md:pb-24 max-md:max-w-full border-none outline-none placeholder-zinc-100 resize-none"
//           />
//         </div>
//         <ContactButton type="submit" children={undefined} />
//       </form>
//     </section>
//   );
// }

"use client";
import * as React from "react";
import { ContactButton } from "./ContactButton";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full text-myred-500 font-bold"
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        <span className="text-zinc-700">Contact</span>
        <span className="text-myred-500"> Us</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full mt-0 px-4 py-3 bg-myred-100 bg-opacity-100 rounded-2xl text-myred-600 placeholder-myred-300 placeholder-font-semibold outline-none border-none"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="email">Your email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full mt-0 px-4 py-3 bg-myred-100 bg-opacity-50 rounded-2xl text-myred-600 placeholder-myred-300 placeholder-font-semibold outline-none border-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          rows={8}
          className="w-full mt-0 px-4 py-3 bg-myred-100 bg-opacity-50 rounded-2xl text-myred-600 placeholder-myred-300 placeholder-font-semibold outline-none border-none resize-none"
        />
      </div>

      <ContactButton type="submit">Send Message</ContactButton>
    </form>
  );
}
