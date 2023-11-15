"use client";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { LuCircleDot, LuCircle } from "react-icons/lu";

const Slider = () => {
  // Slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const nextSlide = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <div
      className={`max-w-[1200px] relative  w-full h-full md:max-h-[450px] rounded-2xl flex overflow-hidden bg-tertiary duration-700 text-white px-6 py-4`}
    >
      <button onClick={prevSlide} className="btn-arrow duration-500">
        <HiChevronLeft />
      </button>
      <button onClick={nextSlide} className="btn-arrow duration-500">
        <HiChevronRight />
      </button>
      {images.map(({ src, alt, title, subTitle, link, linkTitle }, i) => (
        <div
          className={` flex-col md:flex-row w-full slider h-full p-6 flex items-center justify-between duration-700`}
          style={{ translate: `${-100 * currentIndex}%` }}
          key={i}
        >
          <div className="relative w-full h-[375px]">
            <Image
              src={src}
              alt={alt}
              className="object-cover rounded-2xl w-full h-full"
              fill
              loading="lazy"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center gap-4">
            <h3 className="heading m-auto">{title}</h3>
            <p className="paragraph-v1 m-auto w-[90%] text-center ">{subTitle}</p>
            <Link className="btn-feedback justify-self-end" href={link}>{linkTitle}</Link>
          </div>
        </div>
      ))}
      <div className="absolute flex w-full gap-x-2 bottom-[0.5rem] left-0 right-0 items-center justify-center">
        {images.map((_, index) => (
          <button
            className="btn-icon"
            onClick={() => setCurrentIndex(index)}
            key={index}
          >
            {index === currentIndex ? <LuCircleDot /> : <LuCircle />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
