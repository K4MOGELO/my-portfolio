"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { text: "home", href: "/" },

  { text: "projects", href: "/projects" },
  { text: "posts", href: "/posts" },
  { text: "about", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > prevScrollPosition) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setPrevScrollPosition(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <div
      className={clsx(
        "w-full bg-black text-white fixed top-0 left-0 z-40 transition-all duration-200 transform space-y-1",
        {
          "py-5 ": isScrollingUp,
          "py-4": !isScrollingUp,
        }
      )}
    >
      <h1 className="text-4xl text-center ">
        {activeLink === "/"
          ? "KAMOGELO SITHOLE"
          : navLinks
              .find((link) => link.href === activeLink)
              ?.text.toUpperCase()}
      </h1>

      <div
        className={clsx("   flex   space-x-2  justify-center text-sm  ", {
          block: isScrollingUp,
          hidden: !isScrollingUp,
        })}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <p
              className={clsx({ "border-b ": pathname === link.href })}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
