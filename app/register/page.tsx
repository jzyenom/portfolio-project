// import React from "react";
// import RegisterForm from "@/components/forms/RegisterForm";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RegisterPage = () => (
//   <>
//     <RegisterForm />
//     <ToastContainer position="top-right" />
//   </>
// );

// export default RegisterPage;

"use client";

import React from "react";
import RegisterForm from "@/components/forms/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center text-zinc-100 px-4 py-20">
      <div className="w-full max-w-xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-zinc-100">Create</span>{" "}
            <span className="text-teal-500">Account</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Join us and bring your ideas to life
          </p>
        </header>

        <RegisterForm />
      </div>

      <ToastContainer position="top-right" />
    </main>
  );
};

export default RegisterPage;
