import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ images }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      {images.length > 0 ? (
        <Carousel showThumbs={false} swipeable={false}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <Image
                alt={`Gallery Image ${index + 1}`}
                className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 transition-transform duration-200 "
                height="600"
                src={imageUrl}
                width="600"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <p className="text-center text-gray-500">No images available</p>
      )}
    </div>
  );
};

export default ImageSlider;
