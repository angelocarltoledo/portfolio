"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <p className="text-center mb-4 text-lg">
        Hover/Tap on the images to access these sites in a new page!
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
