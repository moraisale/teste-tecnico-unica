'use client'
import React, { useState } from "react";
import { IDepositionData } from "../types/IDepoimentData";
import { DepoimentCard } from "../Cards/DepoimentCard";

export const DepoimentCarousel = () => {
  const depoiments: IDepositionData[] = [
    {
      id: 1,
      googleRating: "/images/person4.svg",
      role: "Teste",
      text: "bla blafdlalf",
      user: "Alexandre",
      imageURL: "/images/person4.svg"
    },
    {
      id: 2,
      googleRating: "/images/person4.svg",
      role: "as",
      text: "bla blafdlalf",
      user: "Morais Alexandre",
      imageURL: "/images/person4.svg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < depoiments.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(depoiments.length - 1);
    }
  };

  return (
    <div className="px-4 md:px-12 lg:px-24 xl:px-32">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex">
            {depoiments.map((depoiment, index) => (
              <div
                key={depoiment.id}
                className={`transform transition-transform duration-300 ${
                  index === currentIndex ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <DepoimentCard depoiment={depoiment} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute inset-y-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l-md"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="absolute inset-y-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
