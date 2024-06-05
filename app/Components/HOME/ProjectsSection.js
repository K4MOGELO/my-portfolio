import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Projects from "./Projects";
import Link from "next/link";

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
                name="Pro-Nav"
                description="web app to help students find accomodation"
              />
              <Projects name="This Website" description="my personal website" />
            </div>
          </div>
          <Link href="/projects">
            <h1 className="">View all projects</h1>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
