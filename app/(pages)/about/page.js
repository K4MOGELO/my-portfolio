// About.js

import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 ">
      <p className="mb-8">
        Inspired by{" "}
        <Link
          target="_blank"
          href="https://leerob.io/"
          className="text-blue-500 hover:underline"
        >
          Lee Robinson&rsquo;s
        </Link>{" "}
        portfolio, I decided to create one of my own. Here, I showcase my
        skills, projects, and experiences, which have allowed me to delve deeper
        into web development and explore various interesting features. This
        portfolio isn&rsquo;t just a showcase, it&rsquo;s my creative sandbox
        where I can experiment, innovate, and bring my ideas to life.
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Mission & Purpose</h2>
        <p className="text-gray-500">
          My portfolio serves as a platform to bridge the gap between ideas and
          execution. It&rsquo;s a space where I showcase my skills, projects,
          and experiences, aiming to inspire and empower others in the tech
          community.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">What Sets Me Apart</h2>
        <p className="text-gray-500">
          I believe in the power of innovation and collaboration. With a strong
          foundation in mathematical sciences and a keen interest in software
          engineering, I bring a unique perspective to every project. Whether
          it&rsquo;s crafting elegant code or solving complex problems, I strive
          for excellence in everything I do.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-gray-500">
          Looking to collaborate on a project or discuss a potential
          opportunity? Feel free to reach out to me via email. I&rsquo;m always
          open to new challenges and eager to explore how we can work together
          to bring your ideas to life.
        </p>
        <p className="text-gray-500 mb-4">
          <strong>Contact Me:</strong> Email:{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
      </div>
      <div>
        <p className="">
          Thank you for taking the time to visit my portfolio. I&rsquo;m excited
          about the possibilities that lie ahead and the opportunity to connect
          with like-minded individuals in the tech community. Let&rsquo;s create
          something extraordinary together!
        </p>
      </div>
    </div>
  );
}

export default About;
