import { useEffect, useRef } from 'react';

export const usePerformanceMonitor = () => {
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsRef = useRef(0);

  useEffect(() => {
    const measurePerformance = () => {
      const currentTime = performance.now();
      frameCountRef.current++;

      if (currentTime - lastTimeRef.current >= 1000) {
        fpsRef.current = frameCountRef.current;
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;

        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`FPS: ${fpsRef.current}`);
          
          if (fpsRef.current < 30) {
            console.warn('Low FPS detected - consider optimizing animations');
          }
        }
      }

      requestAnimationFrame(measurePerformance);
    };

    const animationId = requestAnimationFrame(measurePerformance);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return { fps: fpsRef.current };
};
