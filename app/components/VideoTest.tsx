"use client";

import { useEffect, useRef, useState } from 'react';

const VideoTest = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => setStatus('Loading started');
    const handleCanPlay = () => setStatus('Can play');
    const handleError = (e: Event) => setStatus(`Error: ${e}`);
    const handleLoadedData = () => setStatus('Data loaded');

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className="p-4 border rounded">
      <h3>Video Test</h3>
      <p>Status: {status}</p>
      <video
        ref={videoRef}
        src="/projects/main1.mp4"
        controls
        preload="metadata"
        className="w-full max-w-md"
      />
    </div>
  );
};

export default VideoTest;
