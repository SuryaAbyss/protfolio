import ProjectCard from "./ProjectCard";
import { devProjects, designProjects, ProjectProps } from "./projectDetails";
import { motion } from "framer-motion";

const ProjectGrid = () => {
  // Combine all projects
  const allProjects = [...devProjects, ...designProjects];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Project Grid with Optimized Animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: "-50px" }}
        className="grid w-full grid-cols-1 gap-6 lg:max-w-[1200px] lg:grid-cols-1 will-change-transform"
      >
        {allProjects.map((project: ProjectProps, index: number) => (
          <ProjectCard
            key={`project-${project.id}-${index}`}
            id={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectGrid;
