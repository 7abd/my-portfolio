"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Amazon-style storefront",
    description:
      "A responsive e-commerce front end inspired by Amazon—product browsing, cart-style flows, and a polished UI built with React and Tailwind CSS. Focused on layout, spacing, and component structure for a production-like shopping experience.",
    image: "/project-amazon-clone.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/7abd/amazon___clone",
    previewUrl: "https://amazon-clone-nnzm.vercel.app/",
  },
  {
    id: 4,
    title: "VaultApp",
    description:
      "A privacy-first vault for sensitive notes and credentials in the browser. Uses client-side cryptography (AES-GCM and PBKDF2) so data stays encrypted on the device—built with React and Tailwind for a clear, mobile-friendly interface.",
    image: "/project-vault-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/7abd/vault-app",
    previewUrl: "https://vault-app-gray.vercel.app/",
  },
  {
    id: 2,
    title: "Personal finance tracker",
    description:
      "Track income, spending, and balances in one place. Clean dashboards and forms make it easy to see where money goes, with a custom React front end and CSS-driven layout and styling.",
    image: "/project-finance-tracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/7abd/personal-finance-tracker",
    previewUrl: "https://personalfinancetracker123.netlify.app/",
  },
  {
    id: 3,
    title: "Personal habits tracker",
    description:
      "Build consistency with a habit dashboard: add routines, mark progress, and stay motivated with a simple, focused UI. Implemented in React with hand-written CSS for typography, color, and responsive behavior.",
    image: "/project-habits-tracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/7abd/personnal-habits-tracker",
    previewUrl: "https://darkaoui.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;