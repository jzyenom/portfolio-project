// "use client";

// import React, { useState } from "react";
// import { IUserResponse, ILoginInput } from "@/types/auth";
// import { toast } from "react-toastify";
// import { loginUser } from "@/lib/loginUser";
// import { useRouter } from "next/navigation";

// const initialForm: ILoginInput = {
//   email: "",
//   password: "",
// };

// const LoginForm: React.FC = () => {
//   const [formData, setFormData] = useState(initialForm);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const response = await loginUser(formData);

//       if (!response?.user || !response?.token) {
//         throw new Error("Invalid response from server");
//       }

//       toast.success("Login successful!");
//       localStorage.setItem("token", response.token);
//       localStorage.setItem("role", response.user.role);

//       if (response.user.role === "admin") {
//         router.push("/admin/dashboard");
//       } else {
//         router.push("/");
//       }
//     } catch (error: any) {
//       setError(error.message || "Login failed");
//       toast.error(error.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-md mx-auto text-zinc-500 font-semibold"
//     >
//       <div className="mb-6">
//         <label htmlFor="email" className="block mb-1">
//           Email
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-2 py-3 bg-transparent border-b-2 border-zinc-100 focus:outline-none focus:border-teal-500 placeholder-zinc-400"
//         />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="password" className="block mb-1">
//           Password
//         </label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="w-full px-2 py-3 bg-transparent border-b-2 border-zinc-100 focus:outline-none focus:border-teal-500 placeholder-zinc-400"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-3xl transition-colors font-bold disabled:opacity-60"
//       >
//         {loading ? "Logging in..." : "Login"}
//       </button>

//       {error && <p className="mt-4 text-red-400">{error}</p>}
//     </form>
//   );
// };

// export default LoginForm;

"use client";

import React, { useState } from "react";
import { IUserResponse, ILoginInput } from "@/types/auth";
import { toast } from "react-toastify";
import { loginUser } from "@/lib/loginUser";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // ✅ use context

const initialForm: ILoginInput = {
  email: "",
  password: "",
};

type LoginFormProps = {
  onLogin?: (token: string, role: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { login } = useAuth(); // ✅ import login from context

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response: IUserResponse = await loginUser(formData);

      if (!response?.user || !response?.token) {
        throw new Error("Invalid response from server");
      }

      // ✅ Set global auth state using context
      login(response.token, response.user.role);

      toast.success("Login successful!");

      // ✅ Navigate based on role
      if (response.user.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      setError(error.message || "Login failed");
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto text-zinc-500 font-semibold"
    >
      <div className="mb-6">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 bg-transparent border-b-2 border-zinc-100 focus:outline-none focus:border-teal-500 placeholder-zinc-400"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-2 py-3 bg-transparent border-b-2 border-zinc-100 focus:outline-none focus:border-teal-500 placeholder-zinc-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-3xl transition-colors font-bold disabled:opacity-60"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {error && <p className="mt-4 text-red-400">{error}</p>}
    </form>
  );
};

export default LoginForm;
