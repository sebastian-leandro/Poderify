"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const CardTool = ({ img, alt, title, index }) => {
  return (
    <Tilt className="w-full xs:w-[230px] h-[230px] rounded-lg">
      <motion.div
        className="w-full h-full cursor-default"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="w-[99%] h-[99%] rounded-lg bg-card p-[0.05rem]"
        >
          <div className="w-full rounded-lg h-full bg-tertiary">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="w-full h-full items-center justify-center flex">
                <Image src={img} alt={alt} width={40} height={40} />
              </div>
              <div className="w-full h-full items-center flex justify-center">
                <h4 className="subheading">{title}</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default CardTool;
