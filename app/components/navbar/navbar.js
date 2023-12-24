"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { text: "home", href: "/" },
  { text: "projects", href: "/projects" },
  { text: "posts", href: "/posts" },
  { text: "gallery", href: "/gallery" },
  { text: "about", href: "/about" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY || window.pageYOffset;

      // Check if the current scroll position is greater than the previous one
      if (scrollPosition > prevScrollPosition) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }

      // Update the previous scroll position
      setPrevScrollPosition(scrollPosition);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <div
      className={clsx(
        "w-full bg-black  fixed  transition-all duration-200 transform",
        {
          "py-4 ": isScrollingUp,
          "py-2": !isScrollingUp,
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
