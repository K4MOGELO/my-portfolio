import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Projects from "./Projects";
import Link from "next/link";
import { GithubIcon } from "../icons/SociealMedia";

export default function ProjectsSection() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Explore some of my exciting projects showcasing my skills and
          creativity, each project having a unique story to tell.
        </p>

        <div className="my-3">
          <h1 className="text-gray-300 ">some of my latests projects...</h1>

          <div className="space-y-2 flex flex-col my-2">
            <div className=" flex flex-col space-y-2 w-full">
              <Projects
                link="https://byt3.vercel.app"
                name="BYT3"
                description="A basic landing page BYT3 crypto coin"
              />

              <Projects name="ProNav" description="Proparty navigator application to help students at my university find and rent accomodation" link="https://pronav.vercel.app"
              />
            </div>
          </div>
          <Link target="_blank"
            className="flex items-center space-x-1" href="https://github.com/K4MOGELO">
            <h1>Visit my GITHUB</h1>
            <GithubIcon className="w-4 h-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
