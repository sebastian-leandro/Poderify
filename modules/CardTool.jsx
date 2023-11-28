"use client";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Direction } from "@/utils";

const CardTool = ({ img, alt, title, index }) => {

  const direction = Direction(index);
  const fade = fadeIn(direction, "spring", 0.3, 0.5 );

  return (
    <Tilt>
      <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      className="w-[230px] h-[230px] rounded-lg shadow-feed m-1">
        <div className="w-full h-full cursor-default">
          <div className="w-[99%] h-[99%] rounded-lg bg-card p-[0.05rem]">
            <div className="w-full rounded-lg h-full bg-dark">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="w-full h-full items-center justify-center flex">
                  <Image
                    src={img}
                    alt={alt}
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className="w-full h-full items-center flex justify-center">
                  <h3 className="subheading">{title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default CardTool;
