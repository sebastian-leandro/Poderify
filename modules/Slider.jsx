'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/constants'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { LuDot } from 'react-icons/lu'

const Slider = () => {
  // Slider
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  const nextSlide = () => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)

  return (
    <div
      className={'max-w-[1200px] relative  w-full h-full md:max-h-[450px] rounded-2xl flex overflow-hidden bg-[#1d1c20] border-solid border border-[rgba(255,255,255,.08)] duration-700 text-white px-6 py-4'}
    >
      <button onClick={prevSlide} aria-label="Previous Slide" className="btn-arrow duration-500">
        <HiChevronLeft />
      </button>
      <button onClick={nextSlide} aria-label="Next Slide" className="btn-arrow duration-500">
        <HiChevronRight />
      </button>
      {images.map(({ src, alt, title, subTitle, link, linkTitle }, i) => (
        <div
          className={' flex-col md:flex-row w-full slider h-full p-6 flex items-center justify-between duration-700'}
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
            <Link className="btn-feedback justify-self-end" aria-label={linkTitle} href={link}>{linkTitle}</Link>
          </div>
        </div>
      ))}
      <div className="absolute flex w-full gap-x-2 bottom-[0.1rem] z-40 left-0 right-0 items-end justify-center">
        {images.map((_, index) => (
          <button
            className="btn-icon"
            onClick={() => setCurrentIndex(index)}
            key={index}
            aria-label={`Slide ${index + 1}`}
          >
            {index === currentIndex ? <LuDot style={{ stroke: '#fff' }} /> : <LuDot style={{ stroke: '#090909' }} />}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Slider
