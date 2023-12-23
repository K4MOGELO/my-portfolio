"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Skills", href: "/skills" },
  { text: "Gallery", href: "/gallery" },
  { text: "Posts", href: "/posts" },
  { text: "About", href: "/about" },
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
        "w-full bg-[#111010]  fixed flex space-x-1  flex-col items-center transition-all duration-200 transform",
        {
          "p-4 ": isScrollingUp,
          "p-2": !isScrollingUp,
        }
      )}
    >
      <h1 className="text-4xl">
        {activeLink === "/"
          ? "KAMOGELO SITHOLE"
          : navLinks
              .find((link) => link.href === activeLink)
              ?.text.toUpperCase()}
      </h1>

      <div
        className={clsx(
          "  w-full flex justify-center space-x-2 p-2  transition-all duration-300 transform ",
          {
            block: isScrollingUp,
            hidden: !isScrollingUp,
          }
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <p
              className={clsx({ "border-b": pathname === link.href })}
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
