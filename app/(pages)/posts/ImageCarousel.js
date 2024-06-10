'use client'
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


import { Card } from "@/components/ui/card";
import Image from "next/image";

export function ImageCarousel({ images }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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

  function checkMediaType(url) {
    const imageExtensions = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "webp",
      "tiff",
    ];
    const videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "webm", "mkv"];

    const urlParts = url.split(".");
    const extension = urlParts[urlParts.length - 1].toLowerCase();

    if (imageExtensions.includes(extension)) {
      return "image";
    } else if (videoExtensions.includes(extension)) {
      return "video";
    } else {
      return "unknown";
    }
  }

  return (
    <div className="p-6 md:p-2 mx-3 md:mx-0">
      <Carousel setApi={setApi} className="w-full ">
        <CarouselContent>
          {images.map((media, index) => (
            <CarouselItem key={index} onClick={() => openFullscreen(index)}>
              <Card>
                {checkMediaType(media) === "image" ? (
                  <Image
                    className="aspect-square object-cover rounded-lg overflow-hidden  transition-transform duration-200 "
                    height="900"
                    src={media}
                    width="900"
                  />
                ) : (
                  <iframe
                    src={media}
                    frameborder="0"
                    className="h-96 w-full flex justify-center items-center"
                    allowFullScreen
                  />
                )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {count > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      {count > 1 && (
        <div className="mt-2 text-center text-sm text-muted-foreground">
          image {current} of {count}
        </div>
      )}

      {fullscreenImage !== null && (
        <div
          onClick={closeFullscreen}
          className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center "
        >
          <Image
            fill
            alt={`Fullscreen Image ${currentIndex + 1}`}
            src={images[currentIndex]}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
