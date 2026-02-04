import React from "react";
import Image from "next/image";
import { AboutHeading } from "./AboutHeading";
import Link from "next/link";

export const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col max-md:mt-10">
      <Image
        src="/svgs/question.svg"
        alt="Logo"
        width={100}
        height={76}
        className="object-contain aspect-[1.31] w-[100px] opacity-25 animate-ping"
      />

      <AboutHeading />

      <p className="text-lg text-zinc-700">
        At Cre8tif, we believe perfection is not the finish line&mdash; it&apos;s
        where we begin. Our brand exists to push creativity beyond expectations.
        Whether we are coding seamless web experiences, designing user-friendly
        interfaces, crafting compelling visuals, or animating stories through
        motion graphics, we do it with a playful but precise touch. We are
        multi-disciplinary, multi-dimensional, and above perfection
        <span className=" font-bold">
          <Link href="/login" className="hover:font-light">
            {" "}
            ...Learn More
          </Link>
        </span>
      </p>

      <Image
        src="/svgs/pen.svg"
        alt="Decorative element"
        width={146}
        height={150}
        className="object-contain self-end mt-24 mr-20 max-w-full aspect-[0.97] w-[146px] max-md:mt-10 max-md:mr-2.5 opacity-25 animate-bounce"
      />
    </section>
  );
};
