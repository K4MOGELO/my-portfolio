import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function AboutMeSection() {
  const skills = ["C", "React", "NodeJs", "GO", "Python"];
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p>
            I&rsquo;m a final-year student at the University of Limpopo,
            dedicated to pursuing a BSc in Mathematical Sciences with focus on
            Computer Sciences and Applied Mathematics.
          </p>
          <p>
            With recent interests in High-Performance Computing (HPC),
            I&rsquo;ve been focusing on improving my system administration
            skills and scripting abilities. At the same time, I&rsquo;ve been
            working on web development, utilizing frameworks such as Next.js and
            Express.js to explore new avenues in the digital realm.
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg ">Skills</h3>
          <div className="">
            {skills.map((skill, index) => (
              <Badge id={index} className="text-white">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
