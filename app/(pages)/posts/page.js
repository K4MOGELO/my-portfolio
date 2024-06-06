"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const author = {
    name: "Kamogelo Sithole",
    profession: "Software Engineer",
    avatarUrl:
      "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710747521/MY%20WEBSITE/Home/myimage_ookcyh.jpg",
  };

  const posts = [
    {
      type: "status",

      date: "7d ago",
      content: ["testing...posts works?"],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710748477/MY%20WEBSITE/posts/Highlights/csir_is50mw.jpg",
      ],
    },
    {
      type: "status",
      date: "7d ago",
      content: ["caption will be here"],
      imageUrls: [
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710751658/MY%20WEBSITE/posts/talkchpc1_nfonfc.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710751880/MY%20WEBSITE/posts/talkchpc4_qnt1bc.jpg",
        "https://res.cloudinary.com/dnp6z6i4u/image/upload/v1710751671/MY%20WEBSITE/posts/talkchpc2_zzfz5p.jpg",
      ],
    },
  ];
  return (
    <div className="  flex flex-col items-center   ">
      {posts.map((post, index) => (
        <Card key={index} className="w-full max-w-xl m-4">
          <CardHeader>
            <div className="flex items-center justify-between space-x-4 ">
              <div className="flex items-center space-x-2">
                <Image
                  height={300}
                  width={300}
                  src={author.avatarUrl}
                  alt="highlight"
                  className="h-16 w-16 rounded-full border-2 border-double "
                />
                <div>
                  <h1 className="text-md font-semibold">{author.name}</h1>
                  <h2 className="text-sm text-gray-600">{author.profession}</h2>
                  <h2 className="text-sm text-gray-600">dddd</h2>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-base leading-relaxed p-2">
              {post.content
                .slice(0, expanded ? post.content.length : 1)
                .map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              {post.content.length > 1 && (
                <button
                  onClick={toggleExpanded}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            <div className="w-full">
              <ImageCarousel images={post.imageUrls} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function ImageCarousel({ images }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
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

  return (
    <div>
      <Carousel setApi={setApi} className="w-full ">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} onClick={() => openFullscreen(index)}>
              <Card>
                <Image
                  className="aspect-square object-cover rounded-lg overflow-hidden  transition-transform duration-200 "
                  height="900"
                  src={image}
                  width="900"
                />
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
      <div className="py-2 text-center text-sm text-muted-foreground">
        image {current} of {count}
      </div>
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
