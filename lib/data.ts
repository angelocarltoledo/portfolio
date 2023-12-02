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
    title: "Graduated From University",
    location: "Dumaguete, Philippines",
    description:
      "I graduated after 5 years of studying and immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Full-Stack Developer",
    location: "Cebu, Philippines",
    description:
      "I worked as a full-stack developer for 1 year in the head office of a hotel chain. My greatest accomplishment was creating a portal for partnering travel agencies to place special-rate hotel bookings during peak travelling seasons. I flew abroad after my resignation.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Front-End Developer",
    location: "Vancouver, Canada",
    description:
      "After recognizing the appeal of front-end development, I shifted my focus towards it. I'm now a front-end developer working as a freelancer. My core stack is JavaScript, React, Next.js, and TailwindCSS. I'm open to full-time opportunities!",
    icon: React.createElement(FaReact),
    date: "2019 - present",
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
    tags: ["JavaScript", "React", "Next JS", "Tailwind CSS"],
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
  "Alpine.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Python",
  "C",
  "C#",
  "C++",
  "SQL",
  "MySQL",
  "Framer Motion",
] as const;
