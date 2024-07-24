"use client";
import React, { useEffect, useState } from "react";
import { DepoimentCard } from "../Cards/DepoimentCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IDepoimentData } from "@/types/IDepoimentData";

export const DepoimentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [depoiments, setDepoiments] = useState<IDepoimentData[]>([]);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  const fetchDepoiments = async () => {
    try {
      const response = await fetch("/api");
      const data = await response.json();
      setDepoiments(data.documents);
    } catch (error) {
      console.error("Error fetching depoiments:", error);
    }
  };

  useEffect(() => {
    fetchDepoiments();

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerSlide(3);
      } else if (window.innerWidth >= 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(1);
      }
    };

    handleResize(); // Set initial cards per slide
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    const totalSlides = Math.ceil(depoiments.length / cardsPerSlide);
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    const totalSlides = Math.ceil(depoiments.length / cardsPerSlide);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalSlides - 1);
    }
  };

  return (
    <div className="px-4 md:px-12 lg:px-16 xl:px-20">
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 transform -translate-y-1/2 hover:opacity-80 p-2 rounded-l-md"
          onClick={handlePrev}
          style={{ top: "50%" }}
        >
          <IoIosArrowBack width={9.13} height={18.24} />
        </button>
        <div className="w-full overflow-hidden flex justify-center">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / cardsPerSlide)
              }%)`,
              width: `${100 * (depoiments.length / cardsPerSlide)}%`,
            }}
          >
            {depoiments.map((depoiment) => (
              <div
                key={depoiment.id}
                className={`flex-shrink-0 px-2 ${
                  cardsPerSlide === 3
                    ? "xl:w-1/3"
                    : cardsPerSlide === 2
                    ? "lg:w-1/2"
                    : "w-full"
                } flex justify-center`}
              >
                <DepoimentCard depoiment={depoiment} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 transform -translate-y-1/2 hover:opacity-80 p-2 rounded-r-md"
          onClick={handleNext}
          style={{ top: "50%" }}
        >
          <IoIosArrowForward width={9.13} height={18.24} />
        </button>
      </div>
    </div>
  );
};
