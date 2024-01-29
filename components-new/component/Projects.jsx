/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Kjesq4w4a1q
 */
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col w-full min-h-screen px-4 py-6 md:px-8 lg:px-10">
      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mx-auto">
        <Card>
          <Link className="flex flex-col items-center" href="#">
            <img
              alt="Project 1"
              className="w-full h-60 object-cover rounded-t-lg"
              height="200"
              src={"images/projects/pronav.png"}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <CardContent className="flex flex-col items-start gap-2 p-4">
              <h3 className="font-semibold text-lg md:text-xl">Project 1</h3>
              <Badge className="text-sm font-medium bg-blue-500 text-white">
                JavaScript
              </Badge>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link className="flex flex-col items-center" href="#">
            <img
              alt="Project 2"
              className="w-full h-60 object-cover rounded-t-lg"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <CardContent className="flex flex-col items-start gap-2 p-4">
              <h3 className="font-semibold text-lg md:text-xl">Project 2</h3>
              <Badge className="text-sm font-medium bg-green-500 text-white">
                Python
              </Badge>
            </CardContent>
          </Link>
        </Card>
      </main>
    </div>
  );
}
