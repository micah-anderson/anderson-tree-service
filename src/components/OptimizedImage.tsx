import React, { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  style = {},
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setError(false);
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setError(true);
      setIsLoaded(true);
    };
  }, [src]);

  if (error) {
    console.error(`Image failed to load: ${src}`);
    return (
      <div
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={style}
      >
        <span className="text-gray-400">Image not found</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden" style={style}>
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        style={style}
        onError={() => setError(true)}
      />
      {!isLoaded && (
        <div
          className={`absolute inset-0 ${className}`}
          style={{
            backgroundColor: "#f3f4f6",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      )}
    </div>
  );
}
