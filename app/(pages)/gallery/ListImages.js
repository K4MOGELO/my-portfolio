"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const imageUrls = [
  "/images/gallery/image1.jpg",
  "/images/gallery/image3.jpg",
  "/images/gallery/image4.jpg",
];

export default function ListImages() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const overlayRef = useRef(null);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setFullscreenImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (fullscreenImage !== null) {
        if (event.key === "Escape") {
          closeFullscreen();
        }
      }
    };

    const handleOverlayClick = (event) => {
      if (event.target === overlayRef.current) {
        closeFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    overlayRef.current?.addEventListener("click", handleOverlayClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      overlayRef.current?.removeEventListener("click", handleOverlayClick);
    };
  }, [fullscreenImage]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto p-4">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} onClick={() => openFullscreen(index)}>
            <Image
              alt={`Gallery Image ${index + 1}`}
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden  transition-transform duration-200 "
              height="600"
              src={imageUrl}
              width="600"
            />
          </div>
        ))}
      </div>

      {fullscreenImage !== null && (
        <div
          onClick={closeFullscreen}
          className="fixed top-0 left-0 w-full h-full bg-black  flex justify-center items-center "
        >
          <div className="">
            <img
              alt={`Fullscreen Image ${currentIndex + 1}`}
              src={imageUrls[currentIndex]}
            />
          </div>
        </div>
      )}
    </div>
  );
}
