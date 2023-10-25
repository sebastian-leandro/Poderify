'use client'
import { staggerContainer } from "@/utils/motion"
import { fadeIn } from "@/utils/motion"
import { motion } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"

const TestimonialCard = ({testimonial, img, alt, name, link }) => {
  return (
    <motion.div className="w-[270px] h-[250px] shadow-sm shadow-zinc-900 rounded-md relative" variants={staggerContainer()}>
        <div className="absolute top-1 left-1 bg-feed-quote"></div>
        <div className="flex w-full h-full flex-col rounded-md">
            <div className="w-full h-full flex items-center">
                <p className="paragraph-v1 text-[#cecece] w-[95%] txt-shadow text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem distinctio deserunt doloribus itaque</p>
            </div>
            <div className="flex items-center gap-x-2 w-full mb-4 justify-evenly">
                < Image src={'/equipo/1.jpeg'} alt="micaela" width={32} height={32} className="rounded-[50%]" />
                <h4 className="subheading">Micaela</h4>
                <Link className="btn-feedback cursor-pointer" href={'https://google.com'}>Profile</Link>
            </div>
        </div>
    </motion.div>
  )
}

export default TestimonialCard