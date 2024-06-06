import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function MoreSection() {
  return (
    <Card id="test" className="w-full max-w-2xl">
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
          valuable insights and resources as they navigate their educational and
          professional journeys.
        </p>
      </CardContent>
      <CardContent>
        <h3 className="font-semibold text-lg">Get in Touch</h3>
        <p className="">
          Ready to collaborate or have a question? Whether you want to hire me,
          collaborate on a project, or just have a chat, I&rsquo;m just a
          message away. Let&rsquo;s create something awesome together!
        </p>
      </CardContent>
    </Card>
  );
}
