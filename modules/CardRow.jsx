"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "@/utils/motion"


const CardRow = ({img,alt,title,i}) => {


  return (
    <motion.div initial="hidden" whileInView="show" variants={fadeIn(i === 0 ? 'left' : 'right', 'spring', 0.4, 0.75 )} className="w-full h-[380px] p-[0.1rem] bg-card rounded-2xl">
        <div className="w-full h-full gradient-07 rounded-2xl">
            <div className="w-full flex items-center h-full justify-center flex-col lg:flex-row">
                <div className="w-full h-full flex relative">
                    <Image
                    src={img}
                    alt={alt}
                    fill
                    className="block rounded-2xl"
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