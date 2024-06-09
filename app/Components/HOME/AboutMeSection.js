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
            pursuing a BSc in Mathematical Sciences with a focus on Computer
            Science and Applied Mathematics.
          </p>
          <p>
            As a power user, I actively develop tools to enhance the efficiency
            and functionality of my Linux system, leveraging scripting languages
            such as Bash and Python. Additionally, I am passionate about
            building innovative web and mobile applications that address
            real-world challenges, using JavaScript libraries like React and
            frameworks like Next.js to create robust and dynamic solutions.
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg ">Skills</h3>
          <div className="">
            {skills.map((skill, index) => (
              <Badge key={index} className="text-white">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
