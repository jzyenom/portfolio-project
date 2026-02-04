// "use client";

// import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import LoginForm from "@/components/forms/LoginForm";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { useAuth } from "@/context/AuthContext";

// const LoginPage = () => {
//     const router = useRouter();

//      const { isLoggedIn, login } = useAuth();

//   useEffect(() => {
//     if (isLoggedIn) {
//       router.replace("/");
//     }
//   }, [isLoggedIn]);

//   //   useEffect(() => {
//   //   const isLoggedIn = localStorage.getItem("token");
//   //   if (isLoggedIn) {
//   //     router.replace("/"); // or wherever your home/dashboard is
//   //   }
//   // }, []);
//   return (
//     <main className="min-h-screen flex items-center justify-center  text-zinc-100 px-4 py-20">
//       <div className="w-full max-w-xl">
//         {/* Header */}
//         <header className="mb-12 text-center">
//           <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
//             <span style={{ color: "rgba(238,238,238,1)" }}>Welcome</span>{" "}
//             <span className="text-teal-500">Back</span>
//           </h1>
//           <p className="mt-4 text-zinc-400 text-base sm:text-lg">
//             Please log in to continue
//           </p>
//         </header>

//         {/* Login Form */}
//         <LoginForm />
//       </div>

//       {/* Toast Notifications */}
//       <ToastContainer position="top-right" />
//     </main>
//   );
// };

// export default LoginPage;

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginForm from "@/components/forms/LoginForm";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {
  const router = useRouter();
  const { isLoggedIn, login } = useAuth();
  const [isClient, setIsClient] = useState(false);

  // Avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  if (!isClient) return null;

  return (
    <main className="min-h-screen flex items-center justify-center text-zinc-100 px-4 py-20">
      <div className="w-full max-w-xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span style={{ color: "rgba(238,238,238,1)" }}>Welcome</span>{" "}
            <span className="text-teal-500">Back</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Please log in to continue
          </p>
        </header>

        {/* Pass the login handler from context */}
        <LoginForm onLogin={login} />
      </div>

      <ToastContainer position="top-right" />
    </main>
  );
};

export default LoginPage;
