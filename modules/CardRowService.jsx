"use client"
import Image from "next/image";
import { zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";

const CardRowService = ({ img, alt, title, paragraph }) => {
  return (
    <motion.div initial="hidden" whileInView="show" variants={zoomIn(0.3, 0.5)} className="lg:w-1/2 w-full min-h-[512px] md:min-h-[384px] bg-tertiary rounded-2xl flex shadow-md shadow-zinc-950">
      <div className="flex h-full items-center md:flex-row flex-col justify-center gap-y-4 w-full">
        <div className="w-full h-full relative">
          <Image
            src={img}
            alt={alt}
            fill
            className="object-cover block rounded-2xl"
          />
        </div>
        <div className="w-full h-full flex flex-col items-center text-center justify-center gap-y-4">
          <h3 className="heading">{title}</h3>
          <p className="paragraph-v1 text-[#cecece]">{paragraph}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CardRowService;