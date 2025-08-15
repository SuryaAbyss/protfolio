"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { devProjects, ProjectProps } from "./projectDetails";
import Image from "next/image";
import Link from "next/link";

const ProjectScroller = () => {
  const [hoveredProject, setHoveredProject] = useState<ProjectProps | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate which project should be active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !projectsRef.current) return;
      
      const container = containerRef.current;
      const projectsContainer = projectsRef.current;
      const containerRect = container.getBoundingClientRect();
      const projectsRect = projectsContainer.getBoundingClientRect();
      
      // Calculate which project is currently in view
      const projectHeight = projectsRect.height / devProjects.length;
      const scrollPosition = window.pageYOffset - projectsRect.top;
      const newIndex = Math.floor(scrollPosition / projectHeight);
      
      setActiveIndex(Math.max(0, Math.min(newIndex, devProjects.length - 1)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update hovered project based on active index when not manually hovering
  useEffect(() => {
    if (!hoveredProject) {
      setHoveredProject(devProjects[activeIndex]);
    }
  }, [activeIndex, hoveredProject]);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 max-w-7xl mx-auto">
        {/* Left side - Project list */}
        <div className="lg:col-span-1">
          <div className="sticky top-0 pt-20 pb-10 h-screen overflow-hidden">
            <h2 className="text-xl font-light text-gray-400 mb-12 tracking-wider">RECENT WORK</h2>
            <div ref={projectsRef} className="space-y-0">
              {devProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative cursor-pointer group"
                  onHoverStart={() => setHoveredProject(project)}
                  onHoverEnd={() => setHoveredProject(devProjects[activeIndex])}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    color: activeIndex === index ? "#000" : "#666"
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5
                  }}
                  whileHover={{ 
                    color: "#000",
                    x: 10
                  }}
                >
                  <div className="py-12 border-b border-gray-200 group-hover:border-gray-300 transition-colors">
                    <div className="flex justify-between items-center">
                      <motion.h3 
                        className="text-5xl lg:text-7xl font-bold transition-all duration-300"
                        style={{
                          fontWeight: activeIndex === index ? 900 : 700
                        }}
                      >
                        {project.name}
                      </motion.h3>
                      <motion.span 
                        className="text-sm font-medium transition-opacity duration-300"
                        style={{
                          opacity: activeIndex === index ? 1 : 0.6
                        }}
                      >
                        {project.technologies.includes("React") && project.technologies.includes("Design") 
                          ? "Interaction & Development"
                          : "Design & Development"
                        }
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Floating card */}
        <div className="lg:col-span-1">
          <div className="sticky top-0 h-screen flex items-center justify-center pt-20">
            <motion.div
              className="w-full max-w-lg"
              style={{ y }}
            >
              <AnimatePresence mode="wait">
                {hoveredProject && (
                  <motion.div
                    key={hoveredProject.id}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 50 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                  >
                    {/* Project Image with overlay */}
                    <div className="relative h-80 bg-gray-100">
                      {typeof hoveredProject.image === 'string' && 
                       (hoveredProject.image.endsWith('.mp4') || 
                        hoveredProject.image.endsWith('.webm') || 
                        hoveredProject.image.endsWith('.mov')) ? (
                        <video
                          src={hoveredProject.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={hoveredProject.image}
                          alt={hoveredProject.name}
                          fill
                          className="object-cover"
                        />
                      )}
                      
                      {/* Overlay with project info */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 flex flex-col justify-between p-8 text-white">
                        <div className="flex justify-between items-start">
                          <div className="space-y-3">
                            <div className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors cursor-pointer">WORK</div>
                            <div className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors cursor-pointer">SERVICES</div>
                          </div>
                          <div className="space-y-3 text-right">
                            <div className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors cursor-pointer">ABOUT</div>
                            <div className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors cursor-pointer">CONTACT</div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <h3 className="text-3xl font-bold mb-2 tracking-wide">{hoveredProject.name}</h3>
                          <p className="text-sm text-gray-300 max-w-xs mx-auto">
                            {hoveredProject.description.substring(0, 100)}...
                          </p>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div className="space-y-1">
                            <div className="text-xs tracking-wider">SINCE 2023</div>
                            <div className="text-xs tracking-wider">CHASING THE ELEMENTS</div>
                          </div>
                          <div className="space-y-1 text-right">
                            <div className="text-xs tracking-wider">SINCE 2023</div>
                            <div className="text-xs tracking-wider">WORKING GLOBALLY</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* View button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-600 text-white rounded-full px-10 py-4 font-medium cursor-pointer shadow-lg hover:bg-blue-700 transition-colors"
                        >
                          View
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Project details */}
                    <div className="p-8">
                      <h4 className="text-xl font-semibold text-black mb-3">
                        {hoveredProject.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {hoveredProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {hoveredProject.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex gap-3">
                        {hoveredProject.available ? (
                          <>
                            <Link
                              href={hoveredProject.github}
                              target="_blank"
                              className="flex-1 bg-black text-white text-center py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                              GitHub
                            </Link>
                            <Link
                              href={hoveredProject.demo}
                              target="_blank"
                              className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                              Live Demo
                            </Link>
                          </>
                        ) : (
                          <div className="flex-1 bg-gray-200 text-gray-500 text-center py-3 rounded-xl text-sm font-medium">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScroller; 