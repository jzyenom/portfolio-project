import React from "react";
import Image from "next/image";

const LeftSideBar = () => {
  const profileInfo = [
    { label: "Age", value: "24" },
    { label: "Residence", value: "BD" },
    { label: "Freelance", value: "Available", valueColor: "text-lime-500" },
    { label: "Address", value: "Dhaka, Bangladesh" },
  ];

  const languages = [
    { name: "Bangla", level: "100%", bar: "w-full" },
    { name: "English", level: "80%", bar: "w-4/5" },
    { name: "Spanish", level: "60%", bar: "w-3/5" },
  ];

  const skills = [
    { name: "HTML", level: "90%", bar: "w-11/12" },
    { name: "CSS", level: "85%", bar: "w-10/12" },
    { name: "JS", level: "80%", bar: "w-4/5" },
    { name: "PHP", level: "75%", bar: "w-3/4" },
    { name: "WordPress", level: "85%", bar: "w-10/12" },
  ];

  const extraSkills = [
    "Bootstrap, Materialize",
    "Stylus, Sass, Less",
    "Gulp, Webpack, Grunt",
    "GIT Knowledge",
  ];

  return (
    <div>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="https://placehold.co/150x150"
            className="w-36 h-36 rounded-full shadow"
            alt="Profile"
            width={150}
            height={150}
          />
          <h2 className="text-lg font-medium text-zinc-800">Rayan Adlardard</h2>
          <p className="text-neutral-500 text-base">Front-end Developer</p>
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Profile Info */}
        <div className="space-y-4">
          {profileInfo.map(
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
        {languages.map((lang, i) => (
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
        {skills.map((skill, i) => (
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
        <h3 className="text-lg font-medium text-zinc-800 mb-2">Extra Skills</h3>
        <ul className="list-disc list-inside text-neutral-500 space-y-2">
          {extraSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>

        {/* Download Button */}
        <button className="mt-6 w-full bg-yellow-500 py-2 text-sm font-semibold text-zinc-800 uppercase rounded">
          Download CV
        </button>
        </div>
  );
};

export default LeftSideBar;
