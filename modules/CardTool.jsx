"use client"
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useState, useEffect } from "react";

const CardTool = ({ img, alt, title, index }) => {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobileWidth = 1024;

    const checkMobile = () => {
      if(window.innerWidth < mobileWidth){
        setIsMobile(true);
      }else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [])

  function direction() {
    switch(index) {
      case 0:
        return "right";
      case 1:
        return "down";
      case 2:
        return "up";
      default:
        return "left";
    }
  }
  const fadeInVariants = fadeIn(direction(), "spring", 0.3, index * 0.75);

  return (
    <Tilt>
      <motion.div  
      initial={isMobile ? {} : fadeInVariants.hidden}
      animate={isMobile ? {} : fadeInVariants.show} 
      className="w-full xs:w-[230px] h-[230px] rounded-lg">
        <div
          className="w-full h-full cursor-default"
        >
          <div
            className="w-[99%] h-[99%] rounded-lg bg-card p-[0.05rem]"
          >
            <div className="w-full rounded-lg h-full bg-tertiary">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="w-full h-full items-center justify-center flex">
                  <Image src={img} alt={alt} width={40} height={40} loading="eager" />
                </div>
                <div className="w-full h-full items-center flex justify-center">
                  <h4 className="subheading">{title}</h4>
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
