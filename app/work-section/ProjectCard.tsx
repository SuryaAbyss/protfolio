import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";

interface ExtendedProjectProps extends ProjectProps {
  index: number;
}

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
  index,
}: ExtendedProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Optimized scroll-based transforms with reduced calculations
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Use motion values for better performance
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(0.3);

  // Optimized transform updates
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Reduced transform calculations for better performance
      const yValue = latest * (-50 - (index * 15));
      const scaleValue = 1 + (Math.sin(latest * Math.PI) * 0.01);
      const opacityValue = latest < 0.2 ? 0.3 + (latest * 3.5) : 
                          latest > 0.8 ? 1.3 - (latest * 0.375) : 1;
      
      y.set(yValue);
      scale.set(scaleValue);
      opacity.set(Math.max(0.3, Math.min(1, opacityValue)));
    });

    return unsubscribe;
  }, [scrollYProgress, index, y, scale, opacity]);

  // Intersection Observer for video optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <motion.div 
      ref={cardRef}
      className="relative group project-card will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.3, 
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{
        y,
        scale,
        opacity,
        zIndex: 10 + index,
        transform: "translateZ(0)", // Force GPU layer
      }}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.1, ease: "easeOut" }
      }}
    >
      <motion.div
        className="relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-black/20 backdrop-blur-[6px] border border-white/15 py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px] transform-gpu transition-all duration-150 group-hover:shadow-xl group-hover:border-white/25 will-change-transform"
        whileHover={{
          scale: 1.002,
          transition: { duration: 0.1, ease: "easeOut" }
        }}
      >
        {/* Optimized Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
          <video
            ref={videoRef}
            autoPlay={isInView}
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoad}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-65 transition-opacity duration-300 transform-gpu"
            style={{
              filter: 'blur(0.3px) brightness(0.85) contrast(1.05)',
              willChange: 'opacity',
            }}
          >
            <source src={index % 2 === 0 ? "/projects/back5.mp4" : "/projects/back8.mp4"} type="video/mp4" />
          </video>
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
          )}
        </div>

        {/* Optimized Glassmorphism Effect - More Transparent */}
        <div className="absolute inset-0 z-10 rounded-3xl bg-white/1 backdrop-blur-[4px] border border-white/10 shadow-lg will-change-auto" />
        
        {/* Optimized depth effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-200 z-20 will-change-opacity" 
             style={{
               background: `radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`
             }} />

        {typeof image === 'string' && (image.endsWith('.mp4') || image.endsWith('.webm') || image.endsWith('.mov')) ? (
          <motion.video
            src={image}
            autoPlay={isInView}
            loop
            muted
            playsInline
            preload="metadata"
            className={`absolute bottom-12 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] rounded-lg z-20 transform-gpu will-change-transform ${
              id % 2 === 0 ? "right-7" : "left-0"
            }`}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />
        ) : (
          <motion.div
            className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] z-20 transform-gpu will-change-transform ${
              id % 2 === 0 ? "right-4" : "left-0"
            }`}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Image
              src={image}
              alt={name}
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full h-auto"
              {...(index < 2 ? { priority: true } : { loading: "lazy" })}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </motion.div>
        )}

        <div
          className={`absolute top-0 text-[#0E1016] z-20 ${
            id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
          } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
        >
          {available ? (
            <>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.08, ease: "easeOut" }}
              >
                <Link
                  href={github}
                  target="_blank"
                  className="rounded-full will-change-transform"
                  aria-label="Open GitHub Repository"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-[20px] rounded-full bg-white/90 backdrop-blur-sm p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px] shadow-md hover:shadow-lg transition-shadow duration-100"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.08, ease: "easeOut" }}
              >
                <Link href={demo} target="_blank" aria-label="Open Live Demo">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="w-[20px] rounded-full bg-white/90 backdrop-blur-sm p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px] shadow-md hover:shadow-lg transition-shadow duration-100"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
              </motion.div>
            </>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.08, ease: "easeOut" }}
              >
                <Link
                  href={github}
                  target="_blank"
                  className="mt-1 rounded-full will-change-transform"
                  aria-label="Open GitHub Repository"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-[20px] rounded-full bg-white/90 backdrop-blur-sm p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px] shadow-md hover:shadow-lg transition-shadow duration-100"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
              </motion.div>
              <motion.div 
                className="rounded-xl bg-white/90 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 shadow-md will-change-transform"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
                  Coming soon
                </h3>
              </motion.div>
            </div>
          )}
        </div>

        <div
          className={`absolute text-white z-20 ${
            !(id % 2 === 0)
              ? "right-0 top-24 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-48  lg:mr-4"
              : "left-10 top-24 ml-0 md:mr-12 lg:top-44 lg:ml-4"
          } mb-10  md:mb-16 lg:mb-14 `}
        >
          <AnimatedTitle
            text={name}
            className={
              "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
          <AnimatedBody
            text={description}
            className={
              "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
            }
          />
          
          {/* Optimized Technology Tags */}
          <div className="mt-9 flex gap-2 flex-wrap">
            {technologies.map((tech, techId) => (
              <motion.div
                key={techId}
                className="relative group/tech will-change-transform"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
                transition={{ duration: 0.08, ease: "easeOut" }}
              >
                <div
                  className="px-3 py-1 rounded-full bg-white/12 backdrop-blur-sm border border-white/20 text-white text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] cursor-pointer transition-all duration-100 group-hover/tech:bg-white/20 group-hover/tech:border-white/35"
                >
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
