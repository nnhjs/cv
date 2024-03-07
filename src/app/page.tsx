import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { Introduction } from "@/app/sections/introduction";
import { AboutMe } from "@/app/sections/about-me";
import { WorkExperience } from "@/app/sections/work-experience";
import { Education } from "@/app/sections/education";
import { Skills } from "@/app/sections/skills";
import { Projects } from "@/app/sections/projects";
import { Header } from "@/app/header";
import React from "react";

export default function Page() {
  return (
    <>
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-6">
        <Header />
        <Introduction />
        <AboutMe />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
      </section>
      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </>
  );
}
