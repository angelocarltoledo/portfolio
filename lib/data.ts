import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ciarapayne from "@/public/ciarapayne.png";
import actmedia from "@/public/actmedia.png";
import movieland from "@/public/movieland.png";
import promptopia from "@/public/promptopia.png";
import vodirectory from "@/public/vodirectory.png";
import nextadmin from "@/public/nextadmin.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ciara Payne | Voice Actress",
    description:
      "Portfolio website for an amazing voice actress! Next JS version currently on development for optimization.",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Alpine JS"],
    imageUrl: ciarapayne,
    link: "https://ciarapayne.netlify.app/",
  },
  {
    title: "Movieland",
    description:
      "Movie searcher web app. It takes the top 10 results of the searched term and renders them as individual poster cards. The release dates are shown upon hovering over them.",
    tags: ["JSX", "React", "CSS"],
    imageUrl: movieland,
    link: "https://actmovieland.netlify.app/",
  },
  {
    title: "ACT Media",
    description:
      "YouTube Clone web app. I utilized Axios to fetch videos via YouTube v3 RapidAPI. You can watch your favorite videos here!",
    tags: [
      "JSX",
      "React",
      "CSS",
      "Axios",
      "RapidAPI",
      "React Router",
      "Material UI",
    ],
    imageUrl: actmedia,
    link: "https://actmedia.netlify.app/",
  },
  {
    title: "Promptopia",
    description:
      "Full-stack AI prompt sharing website. Sign in via Google and create your own prompts to share!",
    tags: [
      "React",
      "CSS",
      "Tailwind CSS",
      "Next JS",
      "Google OAuth",
      "MongoDB",
    ],
    imageUrl: promptopia,
    link: "https://promptopia-blush-beta.vercel.app/",
  },
  {
    title: "NextAdmin",
    description:
      "Admin dashboard. Users and products pages functional with CRUD operations, searching, and pagination.",
    tags: ["React", "Next JS", "Next Auth", "CSS", "MongoDB"],
    imageUrl: nextadmin,
    link: "https://nextadmin-orcin.vercel.app/",
  },
  {
    title: "VODirectory",
    description:
      "Voice over resource hub. Currently under development. This site will serve as a place where any voice talent in any level can find whatever they need regarding voiceover.",
    tags: ["Next JS", "Tailwind CSS"],
    imageUrl: vodirectory,
    link: "https://vodirectory.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
