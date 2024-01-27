import Projects from "@/components/component/Projects";
import Link from "next/link";
import React from "react";

export default function page() {
  const projects = [
    {
      name: "E-commerce Website",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "A full-stack e-commerce website built using MERN stack.",
      languages: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "Task Manager App",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      description: "A task manager application built with React and Firebase.",
      languages: ["JavaScript", "React", "Firebase"],
    },
    {
      name: "Weather App",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      description:
        "A simple weather application developed using Vue.js and OpenWeather API.",
      languages: ["JavaScript", "Vue.js"],
    },
  ];
  return (
    <div className=" p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            languages={project.languages}
          />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ image, name, description, languages }) => {
  return (
    <Link href="#" className="shadow-md  rounded-md p-4 border border-gray-900">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap">
          {languages.map((language, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm mr-2 mb-2"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
