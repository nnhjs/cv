import { GotItLogo, SolidTech, MindX, HocVanChiHien } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hung Nguyen Nghia",
  initials: "nnhjs",
  location: "Ha Noi, Viet Nam",
  locationLink: "https://www.google.com/maps/place/HaNoi",
  about:
    "Frontend Engineer focused on building high-quality web applications.",
  summary:
    "I work mostly with TypeScript, React. I'm interested in building high-quality web applications, and I'm always looking for new opportunities to learn and grow.",
  personalWebsiteUrl: "https://nnhjs.me",
  contact: {
    email: "nnhungjs@gmail.com",
    tel: "+84866979200",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nnhjs",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nnhungjs/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nnhungjs",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Engineering and Technology, Vietnam National University",
      degree: "Computer Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Got It Inc",
      link: "https://vn.got-it.ai/",
      badges: [],
      title: "Intern Developer → Frontend Developer",
      logo: GotItLogo,
      start: "2021",
      end: "Present",
      description:
        "Breakdown tasks, coordinating with design team and product team to developing new feature. Technologies: React, TypeScript, Jest, Cypress, Storybook, Git, UI System Design.",
    },
    {
      company: "MindX",
      link: "https://mindx.edu.vn/",
      badges: [],
      title: "Teaching Assistant",
      logo: MindX,
      start: "2021",
      end: "2021",
      description:
        "Teaching Assistant for Game Maker course. Technologies: Game Maker Studio 2.",
    },
    {
      company: "Solid Tech",
      link: "https://solidtech.vn/",
      badges: [],
      title: "Fresher Developer",
      logo: SolidTech,
      start: "2020",
      end: "2021",
      description:
        "Built a React Native Application for testing food safety. Technologies: React Native, Javascript.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Remix",
    "Jest",
    "Cypress",
    "SQLite",
  ],
  projects: [
    {
      title: "Hoc Van Chi Hien",
      techStack: [
        "Side Project",
        "React Native"
      ],
      description: "A mobile application for learning Vietnamese. Technologies: React Native, Javascript.",
      logo: HocVanChiHien,
      link: {
        label: "hocvanchihien.com",
        href: "https://play.google.com/store/apps/details?id=com.hvch&hl=vi",
      },
    },
  ],
} as const;
