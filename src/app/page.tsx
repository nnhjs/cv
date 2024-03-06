import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { Introduction } from "@/app/sections/introduction";

export default function Page() {
  return (
    <main>
      <Introduction />
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6"></section>
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
    </main>
  );
}
