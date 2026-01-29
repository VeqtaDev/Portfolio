import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/VeqtaDev",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Developpeur Fullstack at West Coast RP FiveM",
    description:
      "Développeur Fullstack pour le projet West Coast RP FiveM. Je suis responsable de la création et de la maintenance du serveur.",
    image: "/projects/westcoast.png",
    link: "https://discord.gg/deX9YzmuMG",
  },
  {
    title: "Developpeur Fullstack at Visual Development",
    description:
      "Développeur Fullstack pour le projet Visual Development. Je suis responsable de la création et de la maintenance des différents projets clients.",
    image: "/projects/visualdevelopment.png",
    link: "https://veqtadev.github.io/VisualFramework/",
  },
  {
    title: "ReMap",
    description:
      "ReMap est un projet de correction de mappings FiveM. Je suis responsable de la création et de la maintenance du Saas.",
    image: "/projects/remap.png",
    link: "https://discord.gg/HK655Fhh",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Communauté",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/VeqtaDev",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.gg/GshXbYPkTP",
      },
    ],
  },
  {
    title: "À propos",
    data: [
      {
        name: "Devenir sponsor",
        icon: null,
        link: "https://discord.gg/GshXbYPkTP",
      },
      {
        name: "En savoir plus sur moi",
        icon: null,
        link: "https://github.com/VeqtaDev",
      },
      {
        name: "Me contacter",
        icon: null,
        link: "mailto:louismonier13@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "À propos",
    link: "#about-me",
  },
  {
    title: "Compétences",
    link: "#skills",
  },
  {
    title: "Projets",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/VeqtaDev",
};
