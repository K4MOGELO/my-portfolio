import Link from "next/link";

export default function ProjectCard({ image, name, description, languages }) {
  return (
    <Link href="" className="shadow-md  rounded-md p-4 border border-gray-900">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-md mb-4"
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
