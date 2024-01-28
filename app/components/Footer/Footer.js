import { Button } from "@/components/ui/button";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center gap-4">
        <Button className="w-full max-w-md">
          Hire Me | Contact Me | Collaborate
        </Button>
      </div>
    </footer>
  );
}
