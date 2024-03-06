import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export function AboutMe() {
  return (
    <Section>
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {RESUME_DATA.summary}
      </p>
    </Section>
  );
}
