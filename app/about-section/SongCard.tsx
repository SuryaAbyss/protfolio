import Image from "next/image";
import { SongProps } from "./songDetails";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const SongCard = ({ title, artist, image, link, video }: SongProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setShowVideo(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  return (
          <Link href={link} target="_blank" aria-label="Check out song on Spotify">
      <div
        className="relative flex h-[138px] w-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px]"
        data-blobity
        data-blobity-radius="20"
        data-blobity-invert="true"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-full">
          {video && (
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              preload="auto"
              className={`w-full h-full object-cover rounded-xl absolute top-0 left-0 transition-opacity duration-300 cursor-pointer ${showVideo ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              style={{ background: "#000" }}
            />
          )}
          <Image
            src={image}
            alt={title}
            width={270}
            height={190}
            className={`w-full h-full object-cover rounded-xl absolute top-0 left-0 transition-opacity duration-300 ${showVideo ? "opacity-0 z-0" : "opacity-100 z-10"}`}
          />
        </div>
        <div className=" hidden h-[150%] w-full bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-3 left-5 hidden">
          <p className="text-[14px] text-white">{artist}</p>
          <h4 className="text-[30px] text-white">{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;