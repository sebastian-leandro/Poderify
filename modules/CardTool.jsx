"use client";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useState, useEffect } from "react";

const CardTool = ({ img, alt, title, index }) => {

  return (
    <Tilt>
      <div 
      className="w-[230px] h-[230px] rounded-lg">
        <div className="w-full h-full cursor-default">
          <div className="w-[99%] h-[99%] rounded-lg bg-card p-[0.05rem]">
            <div className="w-full rounded-lg h-full bg-tertiary">
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
                  <h4 className="subheading">{title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default CardTool;
