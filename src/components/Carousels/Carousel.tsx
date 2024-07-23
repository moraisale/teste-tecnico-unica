"use client";
import React, { useState } from "react";
import "../../app/globals.css";
import Image from "next/image";
import { carouselImages } from "@/helpers/carouselImages";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length / 2 - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length / 2 - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-[384px] mx-auto pt-8">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-1/2 px-2">
              <Image
                src={image}
                className="h-full w-full object-cover"
                alt={`Slide ${index + 1}`}
                width={154}
                height={189.25}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(carouselImages.length / 2) }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer w-2 h-2 mx-1 rounded-full ${
                index === currentSlide ? "bg-[#7500FF]" : "bg-gray-500"
              }`}
            ></div>
          )
        )}
      </div>
    </div>
  );
};
