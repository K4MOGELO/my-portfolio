import AboutMeSection from "@/app/Components/HOME/AboutMeSection";
import MoreSection from "@/app/Components/HOME/MoreSection";
import ProfileSection from "@/app/Components/HOME/ProfileSection";
import ProjectsSection from "@/app/Components/HOME/ProjectsSection";

import React from "react";

export default function HOME() {
  return (
    <main className="flex flex-col items-center p-6 space-y-8">
      <ProfileSection />
      <AboutMeSection />
      <ProjectsSection />
      <MoreSection />
    </main>
  );
}
