import { useEffect, useRef, useState } from 'react';

export const useVideoLoader = (videoSrc: string, shouldAutoplay: boolean = false) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      console.log('Video loading started:', videoSrc);
      setIsLoaded(false);
      setHasError(false);
    };

    const handleCanPlay = () => {
      console.log('Video can play:', videoSrc);
      setIsLoaded(true);
      setCanPlay(true);
      
      if (shouldAutoplay) {
        video.play().catch((error) => {
          console.warn('Autoplay failed:', error);
          // Autoplay might fail due to browser policies, this is normal
        });
      }
    };

    const handleError = (e: Event) => {
      console.error('Video failed to load:', videoSrc, e);
      setHasError(true);
      setIsLoaded(false);
    };

    const handleLoadedData = () => {
      console.log('Video data loaded:', videoSrc);
    };

    // Add event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);

    // Cleanup
    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [videoSrc, shouldAutoplay]);

  const play = async () => {
    if (videoRef.current && canPlay) {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.warn('Play failed:', error);
      }
    }
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const reset = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return {
    videoRef,
    isLoaded,
    hasError,
    canPlay,
    play,
    pause,
    reset
  };
};
