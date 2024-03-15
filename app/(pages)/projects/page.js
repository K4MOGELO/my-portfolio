import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function page() {
  const projects = [
    {
      name: "Personalised Website",

      image: "/images/projects/website.png",
      description: "My portfolio,showcasing my skills,projects and experience",
      languages: ["NextJs"],
    },
    {
      name: "Proparty Navigator(ProNav)",
      image: "/images/projects/pronav.png",
      description:
        "Web apllication to help students find  accomodation at university of limpopo showing all the prices and images4",
      languages: ["NextJS", "Firebase", "Clerk"],
    },
    {
      name: "Campus Connect",
      image: "/images/projects/campusconnect.png",
      description:
        "All in one website to help freshers find their way around the campus and get access to all services ",
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
