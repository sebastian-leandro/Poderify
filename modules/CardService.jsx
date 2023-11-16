"use client"
import Image from "next/image";
import { Direction } from "@/utils";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const CardService = ({title, img, alt, i }) => {

  const direction = Direction(i)
  const slide = slideIn(direction, 'spring', 0.3, i * 0.5);

  return (
    <motion.div 
    variants={slide}
    initial="hidden"
    whileInView="show"
    viewport={{once: true}}
    className="cursor-default shadow-feed duration-500">
      <div
        className="w-[250px] h-[320px] rounded-2xl  bg-card p-[0.15rem]"
      >
        <div className="flex flex-col w-full h-full gradient-07 rounded-2xl items-center justify-center">
          <div className="w-full h-full relative">
            <Image
              src={img}
              alt={alt}
              fill
              loading="eager"
              className="object-contain block rounded-variant"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center text-center">
            <h3 className="subheading txt-shadow uppercase">{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardService;
