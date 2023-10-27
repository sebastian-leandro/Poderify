'use client'
import { fadeIn } from "@/utils/motion"
import { motion } from 'framer-motion'
import Image from "next/image"

const TestimonialCard = ({text, img, alt, name, index }) => {
  return (
    <motion.div variants={fadeIn('down','spring', 0.7 * index)} className="w-[270px] h-[250px] shadow-sm shadow-zinc-900 rounded-md relative">
        <div className="absolute top-1 left-1 bg-feed-quote"></div>
        <div className="flex w-full h-full flex-col rounded-md">
            <div className="w-full h-full flex items-center">
                <p className="paragraph-v1 text-[#cecece] w-[95%] txt-shadow text-center">{text}</p>
            </div>
            <div className="flex items-center gap-x-2 w-full mb-4 justify-center">
                < Image src={img} alt={alt} width={32} height={32} className="rounded-[50%]" />
                <h4 className="subheading">{name}</h4>
            </div>
        </div>
    </motion.div>
  )
}

export default TestimonialCard