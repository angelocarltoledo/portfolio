"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to
        pursue my passion for programming. I first worked for a hotel chain in
        the Philippines doing{" "}
        <span className="font-medium">
          full-stack web and software development
        </span>{" "}
        before then specializing as a{" "}
        <span className="font-medium">front-end web developer</span> in my
        freelance work.{" "}
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Next.js, TailwindCSS, TypeScript, and MongoDB
        </span>
        . I am always keeping myself updated with new technologies (I'm diving
        into Framer Motion with this portfolio website!) and I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a <span className="font-medium underline">web/software developer</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I do voice acting
        for various manga channels on YouTube. I also enjoy{" "}
        <span className="font-medium">learning foreign languages</span>.{" "}
        <span className="group font-medium italic underline hover:before:content-['Bonjour!']">
          <span className="group-hover:hidden">
            Currently, I'm learning French.
          </span>
        </span>
      </p>
    </motion.section>
  );
}
