"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const CardAbout = ({ img, alt, name, desc, href, link, index }) => {
  return (
    <motion.div
      variants={fadeIn("bottom", "spring", 0.5 * index, 0.75)}
      className="w-[230px] relative h-[270px] p-[0.075rem] bg-about"
    >
      <div className="w-full h-full flex flex-col bg-[#090909]">
        <div className="w-full h-full items-center justify-center flex">
          <Image
            src={img}
            alt={alt}
            width={72}
            height={72}
            className="object-cover rounded-[50%] border-card"
          />
        </div>
        <div className="w-full h-full items-center justify-center flex mb-8 flex-col">
          <h3 className="subheading uppercase">{name}</h3>
          <p className="paragraph-v1 text-[#fff]">{desc}</p>
        </div>
        <div className="absolute bottom-3 flex items-center gap-x-6 justify-center w-full">
          <Link
            href={href}
            target="_blank"
            className="duration-300 w-10 h-10 icon-links flex items-center rounded-[50%]"
            passHref
          >
            <AiFillLinkedin className="w-7 h-7 fill-white duration-300 m-auto" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="duration-300 w-10 h-10 icon-links flex items-center rounded-[50%]"
            passHref
          >
            <AiFillGithub className="w-7 h-7 fill-white duration-300 m-auto" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CardAbout;
