import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ images }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      {images.length > 0 ? (
        <Carousel showThumbs={false}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`post image ${index}`}
                className="w-full max-h-96 object-contain"
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
