import ProjectGrid from "./ProjectGrid";
import { motion } from "framer-motion";
import { usePerformanceMonitor } from "../hooks/usePerformanceMonitor";

const Work = () => {
  // Monitor performance for this section
  usePerformanceMonitor();
  
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] py-16 md:py-20 lg:py-20 overflow-hidden will-change-transform"
      id="work"
    >
      {/* Simplified Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="mb-4 text-[36px] text-[#e4ded7] md:text-[42px] lg:text-[72px] font-bold">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
      </motion.div>

      <ProjectGrid />
    </section>
  );
};

export default Work;
