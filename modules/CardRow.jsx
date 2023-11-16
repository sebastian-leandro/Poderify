"use client"
import { zoomIn } from "@/utils/motion"
import { motion } from "framer-motion"
import Image from "next/image"

const CardRow = ({img,alt,title,i}) => {

    const zoom = zoomIn(0.5, i * 0.5);

  return (
    <motion.div 
    variants={zoom}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    className="w-64 md:w-full duration-500 h-[350px] max-w-[1100px] p-[0.1rem] bg-card rounded-2xl">
        <div className="w-full h-full gradient-07 rounded-2xl">
            <div className="w-full flex items-center h-full justify-center flex-col lg:flex-row">
                <div className="w-full h-[75%] md:h-full flex relative">
                    <Image
                    src={img}
                    alt={alt}
                    fill
                    className="block rounded-variant"
                    />
                </div>
                <div className="w-full h-[75%] flex items-center justify-center">
                    <h3 className="subheading">{title}</h3>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default CardRow