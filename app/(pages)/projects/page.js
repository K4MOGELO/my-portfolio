import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function page() {
  const projects = [
    {
      name: "Personalised Website",

      image:
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747476/MY%20WEBSITE/projects/website_sqarak.png",
      description:
        "My portfolio,showcasing my skills,projects and experience  while also experimenting, innovating, and bringing my ideas to life.",
      languages: ["NextJs", "TailwindCSS"],
    },
    {
      name: "Proparty Navigator(ProNav)",
      image:
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747477/MY%20WEBSITE/projects/pronav_jfoapt.png",
      description:
        "Web apllication to help students find  accomodation at university of limpopo showing all the prices and images4",
      languages: ["NextJS", "Firebase", "ClerkAuth"],
    },
    {
      name: "Campus Connect",
      image:
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747474/MY%20WEBSITE/projects/campusconnect_ievtw2.png",
      description:
        "All in one website to help freshers find their way around the campus and get access to all services ",
      languages: ["NextJS"],
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
