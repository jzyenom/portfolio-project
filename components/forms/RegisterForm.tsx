// "use client";

// import React, { useState } from "react";
// import { IUser } from "@/types/user";
// import { registerUser } from "@/lib/registerUser";
// import { toast } from "react-toastify";

// const initialForm: IUser = {
//   name: "",
//   email: "",
//   password: "",
//   role: "",
// };

// const RegisterForm: React.FC = () => {
//   const [formData, setFormData] = useState<IUser>(initialForm);
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = await registerUser(formData);
//       toast.success(data.message);
//       setFormData(initialForm);
//     } catch (error: any) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto p-4 border rounded shadow"
//     >
//       <h2 className="text-xl font-bold mb-4">Register</h2>

//       <input
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//         className="w-full mb-3 p-2 border rounded"
//         required
//       />

//       <input
//         name="email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//         className="w-full mb-3 p-2 border rounded"
//         required
//       />

//       <input
//         name="password"
//         type="password"
//         value={formData.password}
//         onChange={handleChange}
//         placeholder="Password"
//         className="w-full mb-3 p-2 border rounded"
//         required
//       />

//       <select
//         name="role"
//         value={formData.role}
//         onChange={handleChange}
//         className="w-full mb-3 p-2 border rounded"
//         required
//       >
//         <option value="">Select Role</option>
//         <option value="user">User</option>
//         <option value="admin">Admin</option>
//       </select>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
//       >
//         {loading ? "Registering..." : "Register"}
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;

// "use client";

// import React, { useState } from "react";
// import { IUser } from "@/types/user";
// import { registerUser } from "@/lib/registerUser";
// import { toast } from "react-toastify";
// import { Loader2 } from "lucide-react";

// const initialForm: IUser = {
//   name: "",
//   email: "",
//   password: "",
//   role: "",
// };

// const RegisterForm: React.FC = () => {
//   const [formData, setFormData] = useState<IUser>(initialForm);
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = await registerUser(formData);
//       toast.success(data.message || "Registered successfully");
//       setFormData(initialForm);
//     } catch (error: any) {
//       toast.error(error.message || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-xl mx-auto px-6 py-8 bg-zinc-900 text-white rounded-lg shadow-md"
//     >
//       <div className="mb-6">
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="w-full bg-transparent border-b border-zinc-600 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
//           required
//         />
//       </div>

//       <div className="mb-6">
//         <input
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email Address"
//           className="w-full bg-transparent border-b border-zinc-600 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
//           required
//         />
//       </div>

//       <div className="mb-6">
//         <input
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="w-full bg-transparent border-b border-zinc-600 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
//           required
//         />
//       </div>

//       <div className="mb-8">
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="w-full bg-transparent border-b border-zinc-600 py-3 px-1 focus:outline-none focus:border-teal-500 text-white"
//           required
//         >
//           <option value="" disabled>
//             Select Role
//           </option>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full font-bold transition-all disabled:opacity-60"
//       >
//         {loading ? (
//           <>
//             <Loader2 className="animate-spin h-5 w-5" />
//             Registering...
//           </>
//         ) : (
//           "Register"
//         )}
//       </button>
//     </form>
//   );
// };

// export default RegisterForm;

"use client";

import React, { useState } from "react";
import { IUser } from "@/types/user";
import { registerUser } from "@/lib/registerUser";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const initialForm: IUser = {
  name: "",
  email: "",
  password: "",
  role: "",
};

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<IUser>(initialForm);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await registerUser(formData);
      toast.success(data.message || "Registered successfully");
      setFormData(initialForm);
    } catch (error: any) {
      toast.error(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto px-6 py-8 bg-zinc-900 text-white rounded-lg shadow-md"
    >
      {/* Name */}
      <div className="mb-6">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full bg-transparent border-b border-zinc-600 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full bg-transparent border-b border-zinc-600 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full bg-transparent border-b border-zinc-600 py-3 px-1 focus:outline-none focus:border-teal-500 placeholder:text-zinc-400"
          required
        />
      </div>

      {/* Role Select */}
      <div className="mb-8 relative">
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full appearance-none bg-transparent border-b border-zinc-600 py-3 px-1 focus:outline-none focus:border-teal-500 text-white cursor-pointer"
          required
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="user" className="bg-zinc-900 text-white">
            User
          </option>
          <option value="admin" className="bg-zinc-900 text-white">
            Admin
          </option>
        </select>
        {/* Custom dropdown icon */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full font-bold transition-all disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin h-5 w-5" />
            Registering...
          </>
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
