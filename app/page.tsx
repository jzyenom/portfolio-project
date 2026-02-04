"use client";
import Hero from "@/components/Hero";
import AboutMe from "@/components/about/AboutMe";
import ProjectPage from "@/components/project/ProjectPage";
import ContactPage from "@/components/contact/ContactPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  );
}
