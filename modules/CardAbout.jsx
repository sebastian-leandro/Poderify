"use client"
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Time } from "@/utils";

const CardAbout = ({ img, alt, name, desc, href, index }) => {
  
  const fade = fadeIn("right", "tween", 0.3, 0.75);
  
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      className="w-[230px] relative h-[250px] p-[0.075rem] bg-about"
    >
      <div className="w-full h-full flex flex-col bg-[#090909]">
        <div className="w-full h-full items-center justify-center flex">
          <Image
            src={img}
            alt={alt}
            width={72}
            height={72}
            className="object-contain rounded-full border-card"
            loading="lazy"
          />
        </div>
        <div className="w-full h-full items-center justify-end flex flex-col">
          <h3 className="subheading uppercase h-1/2">{name}</h3>
          <p className="paragraph-v3 h-full text-center">{desc}</p>
        </div>
        <div className="h-1/2 flex items-end gap-x-6 justify-end w-full">
          <Link
            href={href}
            target="_blank"
            className="duration-300 w-10 h-10 icon-links flex items-center justify-center rounded-[50%]"
            passHref
            aria-label={`Link to linkedin of ${name}`}
          >
            <AiFillLinkedin className="w-7 h-7 fill-white duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CardAbout;
