import type { PortfolioContent } from "@/types/portfolio";

export const defaultPortfolioContent: PortfolioContent = {
  hero: {
    name: "Rayan Adlrdard",
    rolePrimary: "Front-end",
    roleSecondary: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.",
    ctaLabel: "Hire Me",
    backgroundImageUrl: "https://placehold.co/1440x467",
    heroImageUrl: "https://placehold.co/326x459",
  },
  sidebar: {
    profileImageUrl: "https://placehold.co/150x150",
    displayName: "Rayan Adlardard",
    title: "Front-end Developer",
    statusColor: "bg-green-500",
    profileInfo: [
      { label: "Age", value: "24" },
      { label: "Residence", value: "BD" },
      { label: "Freelance", value: "Available", valueColor: "text-lime-500" },
      { label: "Address", value: "Dhaka, Bangladesh" },
    ],
    languages: [
      { name: "Bangla", level: "100%", bar: "w-full" },
      { name: "English", level: "80%", bar: "w-4/5" },
      { name: "Spanish", level: "60%", bar: "w-3/5" },
    ],
    skills: [
      { name: "HTML", level: "90%", bar: "w-11/12" },
      { name: "CSS", level: "85%", bar: "w-10/12" },
      { name: "JS", level: "80%", bar: "w-4/5" },
      { name: "PHP", level: "75%", bar: "w-3/4" },
      { name: "WordPress", level: "85%", bar: "w-10/12" },
    ],
    extraSkills: [
      "Bootstrap, Materialize",
      "Stylus, Sass, Less",
      "Gulp, Webpack, Grunt",
      "GIT Knowledge",
    ],
    resumeUrl: "#",
  },
  services: [
    {
      title: "Web Development",
      desc: "Blog, E-commerce",
      iconKey: "web-development",
    },
    {
      title: "UI/UX Design",
      desc: "Wireframes, Prototypes",
      iconKey: "ui-ux",
    },
    {
      title: "SEO Optimization",
      desc: "On-Page, Keywords",
      iconKey: "seo",
    },
  ],
};
