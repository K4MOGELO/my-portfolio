import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, MailIcon } from "../icons/SociealMedia";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileSection() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-32 w-32  flex shrink-0 overflow-hidden rounded-full">
        <Image
          width={300}
          height={300}
          src="https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747521/MY%20WEBSITE/Home/myimage_ookcyh.jpg"
          alt="KS"
          loading="lazy"
          className="object-cover  "
        />
      </div>
      <div className="grid gap-2 text-lg">
        <Link href="#test">click me</Link>
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
  );
}
