"use client";

import { useEffect, useRef, useState } from 'react';

const VideoDebug = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState('Initializing...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      console.log('Video load started');
      setStatus('Loading started');
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      setStatus('Can play');
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setError('Video failed to load');
      setStatus('Error');
    };

    const handleLoadedData = () => {
      console.log('Video data loaded');
      setStatus('Data loaded');
    };

    const handlePlay = () => {
      console.log('Video started playing');
      setStatus('Playing');
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  const testVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error('Play failed:', err);
        setError(`Play failed: ${err.message}`);
      });
    }
  };

  return (
    <div className="fixed top-4 right-4 bg-black text-white p-4 rounded-lg z-50 max-w-sm">
      <h3 className="text-lg font-bold mb-2">Video Debug</h3>
      <p className="text-sm mb-2">Status: {status}</p>
      {error && <p className="text-red-400 text-sm mb-2">Error: {error}</p>}
      <button 
        onClick={testVideo}
        className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
      >
        Test Play
      </button>
      <video
        ref={videoRef}
        controls
        preload="auto"
        className="w-full mt-2"
        muted
      >
        <source src="/projects/main1.mp4" type="video/mp4" />
        <source src="/api/video?path=projects/main1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoDebug;
