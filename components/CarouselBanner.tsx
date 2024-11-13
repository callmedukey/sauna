// components/CarouselDemo.tsx
"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import * as React from "react";


// Define the image paths and alt text
const images = [
  { src: "/MainBG1.png", alt: "Image 1" },
  { src: "/MainBG2.png", alt: "Image 2" },
  { src: "/MainBG3.png", alt: "Image 3" },
  { src: "/MainBG4.png", alt: "Image 4" },
  { src: "/MainBG5.png", alt: "Image 5" },
  { src: "/MainBG6.png", alt: "Image 6" },
  { src: "/MainBG7.png", alt: "Image 7" },
];

const CarouselBanner = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <div className="relative mx-auto h-screen w-full overflow-hidden" ref={emblaRef}>
      <div className=" flex h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className=" relative size-full shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              sizes="100vw" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
