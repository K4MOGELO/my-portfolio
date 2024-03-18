import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ProjectLink from "./ProjectLink";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-6 space-y-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-32 w-32">
          <AvatarImage
            alt="Profile picture"
            src="https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747521/MY%20WEBSITE/Home/myimage_ookcyh.jpg"
            className="object-cover"
          />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="grid gap-2 text-lg">
          <h2 className="font-bold text-3xl">K4MOGELO</h2>
          <div className="text-gray-500">Software Engineer</div>
          <div className="flex gap-2">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/kamogelosithole/"
            >
              <LinkedinIcon className="w-4 h-4" />
            </Link>
            <Link target="_blank" href="https://github.com/K4MOGELO">
              <GithubIcon className="w-4 h-4" />
            </Link>
            <Link target="_blank" href="mailto:sitholekamogelo07@gmail.com">
              <MailIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

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
              working on web development, utilizing frameworks such as Next.js
              and Express.js to explore new avenues in the digital realm.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg ">Skills</h3>
            <div className="">
              <Badge>C </Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>Java</Badge>
              <Badge>Python</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
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
                <ProjectLink
                  name="Pro-Nav"
                  description="web app to help students find accomodation"
                />
                <ProjectLink
                  name="This Website ,LOL"
                  description="my personal website"
                />
              </div>
            </div>
            <Link href="/projects">
              <h1 className="">View all projects</h1>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>More...</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg">Making a Difference</h3>
          <p className="">
            Beyond coding, I&rsquo;m actively engaged in initiatives that
            contribute to society. Co-founding the{" "}
            <Link
              target="_blank"
              href="https://linktr.ee/uldevsociety"
              className="text-blue-500 hover:text-blue-700"
            >
              {" "}
              UL Dev Society{" "}
            </Link>
            exemplifies this commitment, offering students at my university
            valuable insights and resources as they navigate their educational
            and professional journeys.
          </p>
        </CardContent>
        <CardContent>
          <h3 className="font-semibold text-lg">Get in Touch</h3>
          <p className="">
            Ready to collaborate or have a question? Whether you want to hire
            me, collaborate on a project, or just have a chat, I&rsquo;m just a
            message away. Let&rsquo;s create something awesome together!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

//ICONS
function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
