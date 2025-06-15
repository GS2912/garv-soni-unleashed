
import React, { useEffect, useRef, useState } from "react";

interface AnimatedProfileImageProps {
  imageUrl: string;
  size?: number; // max size in px
  minSize?: number; // minimum size in px
}

export const AnimatedProfileImage: React.FC<AnimatedProfileImageProps> = ({
  imageUrl,
  size = 160, // px
  minSize = 32,
}) => {
  const [scale, setScale] = useState(0.2);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = 220; // px
      const scrollY = window.scrollY;
      let newScale = 0.2 + Math.min(scrollY / maxScroll, 1) * 0.8; // from 0.2 to 1
      if(scrollY < 16) newScale = 0.2; // start tiny
      setScale(newScale);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center w-full z-20 transition-all ease-out duration-300"
      style={{ minHeight: minSize, height: size, pointerEvents: "none" }}
    >
      <img
        src={imageUrl}
        alt="Profile"
        className="rounded-full border-4 border-white shadow-2xl object-cover bg-white dark:border-gray-800"
        style={{
          width: size * scale,
          height: size * scale,
          minWidth: minSize,
          minHeight: minSize,
          maxWidth: size,
          maxHeight: size,
          transform: `scale(${scale})`,
          transition: "width 0.2s, height 0.2s, transform 0.2s",
        }}
        draggable={false}
      />
    </div>
  );
};
