"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/Woman1.png",
  "/Woman2.png",
  "/Woman3.png",
  "/Woman4.png",
  "/Woman5.png",
];

export default function CarouselWomen() {
  const [carouselApi, setCarouselApi] = useState<any>(null);

  const goToSlide = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  useEffect(() => {
    if (carouselApi) {
      carouselApi.on("select", () => {

      });
    }
  }, [carouselApi]);

  return (
    <div className="flex flex-col items-center">

      <Carousel
        opts={{ loop: true }}
        setApi={setCarouselApi}
        className="carouselContainer"
      >
        <CarouselContent className="-ml-4 flex">
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex-col pl-4">
              <div className="carouselMain">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white">
          &#10094;
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
          &#10095;
        </CarouselNext>
      </Carousel>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {images.map((src, index) => (
          <button
            key={index}
            className="thumbButton"
            onClick={() => goToSlide(index)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={64}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
