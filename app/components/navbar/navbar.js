import Link from "next/link";
import React from "react";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Skills", href: "/skills" },
  { text: "Gallery", href: "/gallery" },
  { text: "Posts", href: "/posts" },
  { text: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <div className="">
      <div className="flex space-x-1  flex-col items-center  p-10">
        <h1 className="text-3xl">HOME</h1>
        <div className="w-full flex justify-center space-x-2 p-4 ">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
