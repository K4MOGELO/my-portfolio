import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Profile() {
  return (
    <main className="flex flex-col items-center p-6 space-y-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-32 w-32">
          <AvatarImage
            alt="Profile picture"
            src="/images/home/myimage.jpeg"
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
        <CardContent className="space-y-2">
          <p>
            I'm currently a final-year student at the University of Limpopo,
            pursuing a BSc in Mathematical Sciences with a focus on computer
            sciences and applied mathematics. With a passion for web
            development, I've mastered JavaScript and its libraries like React,
            along with frameworks like Next.js. My journey into the Linux world
            has honed my scripting skills in languages like Bash and Python.
            Recently, I've delved into the fascinating world of supercomputing,
            gaining valuable insights into the field.
          </p>
          <h3 className="font-semibold">Skills</h3>
          <div className="flex gap-2">
            <Badge>Python</Badge>
            <Badge>Java</Badge>
            <Badge>Node.js</Badge>
            <Badge>Django</Badge>
            <Badge>React</Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Explore some of my exciting projects that showcase my skills and
            creativity. From web development to scripting and supercomputing,
            each project has a unique story to tell.
          </p>

          <div className="py-4">
            <h1> some of my latests projects</h1>
            <div className="space-y-2 flex flex-col">
              <Link href="/projects">
                <div className="bg-[#262626] rounded-sm py-2 ">
                  <div className="p-2">
                    <h1 className="">MY PROJECT BLUH BLUH BLUH</h1>
                    <h1 className="text-sm ">react and firebase</h1>
                  </div>
                </div>
              </Link>
              <Link href="/projects">
                <div className="bg-[#262626] rounded-sm py-2 ">
                  <div className="p-2">
                    <h1 className="">MY PROJECT BLUH BLUH BLUH</h1>
                    <h1 className="text-sm ">react and firebase</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <Link href="/projects">
            <h1 className="pt-2">View all projects</h1>
          </Link>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>More ....</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg">Making a Difference</h3>
          <p className="">
            Beyond coding, I'm actively involved in initiatives that give back
            to society. Co-founding the UL Dev Society is one such endeavor,
            helping students at my university gain insights into future careers.
          </p>
        </CardContent>
        <CardContent>
          <h3 className="font-semibold text-lg">Get in Touch</h3>
          <p className="">
            Ready to collaborate or have a question? Whether you want to hire
            me, collaborate on a project, or just have a chat, I'm just a
            message away. Let's create something awesome together!
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-4">
        <Button className="w-full max-w-md">
          Hire Me | Contact Me | Collaborate
        </Button>
      </div>
    </main>
  );
}

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

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

{
  /* <Card className="w-full max-w-2xl">
  <CardHeader>
    <CardTitle>Experience</CardTitle>
  </CardHeader>
  <CardContent>
    <h3 className="font-semibold">Software Engineer, Google</h3>
    <p className="text-gray-500">2020 - Present</p>
    <p>
      Working on the development of Google&apos;s core search functionality.
    </p>
  </CardContent>
  <CardContent>
    <div className="absolute blur">
      <h3 className="font-semibold">Software Engineering Intern, Microsoft</h3>
      <p className="text-gray-500">Summer 2018</p>
      <p>Worked on enhancing the user experience for Microsoft Office Suite.</p>
    </div>
    <div className="p-4 relative z-10 text-white text-center">
      <h1 className="text-4xl font-bold">Adding more Soon</h1>
    </div>
  </CardContent>
</Card>; */
}
