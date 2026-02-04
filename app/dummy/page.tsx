import React from "react";
import { defaultPortfolioContent } from "@/lib/portfolioData";

const renderServiceIcon = (iconKey: string) => {
  switch (iconKey) {
    case "web-development":
      return (
        <svg
          className="w-12 h-12 text-yellow-500"
          viewBox="0 0 66 54"
          fill="currentColor"
        >
          <path d="M62.2188 0.4375H3.78125C2.79531..." />
        </svg>
      );
    case "ui-ux":
      return (
        <svg
          className="w-12 h-12 text-yellow-500"
          viewBox="0 0 66 54"
          fill="currentColor"
        >
          <circle
            cx="33"
            cy="27"
            r="25"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      );
    case "seo":
      return (
        <svg
          className="w-12 h-12 text-yellow-500"
          viewBox="0 0 66 54"
          fill="currentColor"
        >
          <rect
            width="50"
            height="30"
            x="8"
            y="12"
            rx="4"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function Page() {
  const { sidebar, hero, services } = defaultPortfolioContent;

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* === Left Sidebar === */}
        <aside className="w-full lg:w-1/4 shadow px-6 py-8">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={sidebar.profileImageUrl}
              className="w-36 h-36 rounded-full shadow"
              alt="Profile"
            />
            <h2 className="text-lg font-medium text-zinc-800">
              {sidebar.displayName}
            </h2>
            <p className="text-neutral-500 text-base">{sidebar.title}</p>
            <div className={`w-3 h-3 rounded-full ${sidebar.statusColor}`} />
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Profile Info */}
          <div className="space-y-4">
            {sidebar.profileInfo.map(
              ({ label, value, valueColor = "text-zinc-800" }, i) => (
                <div
                  key={i}
                  className="flex justify-between text-base capitalize"
                >
                  <p className="text-zinc-800">{label}:</p>
                  <p className={valueColor}>{value}</p>
                </div>
              )
            )}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Languages */}
          <h3 className="text-lg font-medium text-zinc-800 mb-2">Languages</h3>
          {sidebar.languages.map((lang, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-base text-neutral-500 capitalize">
                <span>{lang.name}</span>
                <span>{lang.level}</span>
              </div>
              <div className="w-full h-1 bg-yellow-100 rounded-full mt-1">
                <div
                  className={`h-1 bg-yellow-500 rounded-full ${lang.bar}`}
                ></div>
              </div>
            </div>
          ))}

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Skills */}
          <h3 className="text-lg font-medium text-zinc-800 mb-2">Skills</h3>
          {sidebar.skills.map((skill, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-base text-neutral-500 capitalize">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full h-1 bg-yellow-100 rounded-full mt-1">
                <div
                  className={`h-1 bg-yellow-500 rounded-full ${skill.bar}`}
                ></div>
              </div>
            </div>
          ))}

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Extra Skills */}
          <h3 className="text-lg font-medium text-zinc-800 mb-2">
            Extra Skills
          </h3>
          <ul className="list-disc list-inside text-neutral-500 space-y-2">
            {sidebar.extraSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          {/* Download Button */}
          <a
            href={sidebar.resumeUrl}
            className="mt-6 w-full bg-yellow-500 py-2 text-sm font-semibold text-zinc-800 uppercase rounded text-center inline-block"
          >
            Download CV
          </a>
        </aside>
        {/* end of left SideBar */}

        {/* === Main Content Area === */}
        <main className="flex-1">
          {/* === Hero Section === */}
          <section
            className="relative bg-cover bg-center text-center sm:text-left px-6 py-16 flex flex-col justify-center items-center sm:items-start sm:px-16 md:px-24 lg:px-32"
            style={{ backgroundImage: `url('${hero.backgroundImageUrl}')` }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 leading-tight">
              I'm {hero.name}
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-yellow-500">{hero.rolePrimary}</span>{" "}
              <span className="text-zinc-800">{hero.roleSecondary}</span>
            </h2>
            <p className="text-neutral-500 text-base mt-4 max-w-lg">
              {hero.description}
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-zinc-800 font-medium rounded flex items-center gap-2">
              {hero.ctaLabel}
              <svg width="16" height="16" fill="currentColor">
                <path d="M10.7814 7.33336L7.20541 3.75736L8.14808..." />
              </svg>
            </button>

            {/* Hero Image (hidden on small screens) */}
            <img
              src={hero.heroImageUrl}
              alt="Hero"
              className="hidden lg:block absolute right-12 top-12 w-80 h-auto object-cover"
            />
          </section>

          {/* === Services Section === */}
          <section className="bg-white px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zinc-800 capitalize">
                My Services
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. lorem
                ipsum
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {renderServiceIcon(service.iconKey)}
                  </div>
                  <h3 className="text-lg font-medium text-zinc-800 capitalize mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-base">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        {/* === end of Main Content Area === */}
      </div>
    </>
  );
}
