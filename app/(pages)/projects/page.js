import Image from "next/image";
import Link from "next/link";
import React from "react";
1;

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
        "Web apllication to help students find  accomodation at university of limpopo showing all the prices and images",
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
    {
      name: "ULDEV SOCIETY WEBSITE",
      image:
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710749646/MY%20WEBSITE/projects/Screenshot_2024-03-18_101222_npcsur.png",
      description:
        "Created website for UL developer society to show their work and display some of their content to increase their social media what what warra warra",
      languages: ["React", "Node.js", "Mongoose"],
    },
  ];
  return (
    <div className=" p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const { image, name, description, languages } = project;
  return (
    <Link
      href={`/projects/${name}`}
      className="shadow-md  rounded-md p-4 border border-gray-900"
    >
      <Image
        width={300}
        height={300}
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-md  "
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{description.slice(0, 70)}...</p>
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
}
