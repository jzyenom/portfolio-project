"use client";
import * as React from "react";
import { Send } from "lucide-react";

interface ContactButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function ContactButton({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  onClick,
  type = "button",
}: ContactButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex gap-2.5 items-center self-start px-8 py-2.5 mt-0 bg-myred-500 rounded-3xl text-zinc-100 max-md:px-5 hover:cursor-pointer"
    >
      <span className="self-stretch my-auto">Send Message</span>
      <Send size={20} className="text-white" />
    </button>
  );
}
