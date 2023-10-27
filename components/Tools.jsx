'use client'
import { CardTool, Features } from "@/modules"
import { tools } from "@/constants"
import { staggerContainer } from "@/utils/motion"
import { motion } from "framer-motion"

const Tools = () => {
  return (
    <section className='section w-full flex items-center h-auto gap-y-20 flex-col relative'>
      <div className="gradient bottom-10 right-1"></div>
      <div className="gradient top-10 left-1"></div>
        <div className='w-full h-auto flex flex-col items-center gap-y-10 justify-center'>
            <div className="flex items-center justify-center w-full h-auto gap-y-10 flex-col">
              <p className="paragraph text-center capitalize text-[#618adc]">Powering tools and integrations from companies all around the world</p>
              <div className="flex w-full h-full flex-wrap">
                < Features />
              </div>
            </div>
            <div className="w-full items-center text-center max-w-[600px] justify-center">
                <p className="paragraph-v1 capitalize text-purple-900">the glossary of telescope</p>
                <h2 className="heading uppercase">Experience the extraordinary</h2>
                <p className="paragraph-v1 text-[#cecece] mx-auto w-[100%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non nesciunt id eius laudantium nam animi officiis saepe dolorem consequuntur!</p>
            </div>
        </div>
        <div className="flex w-full flex-col h-full flex-wrap items-center gap-y-10">
          <h2 className="heading uppercase txt-shadow">Our tools</h2>
          <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className="flex w-full h-auto flex-wrap flex-col gap-y-4 sm:flex-row items-center justify-center gap-x-10">
            {tools.map(({img,alt,title}, i) => (
              < CardTool img={img} alt={alt} title={title} key={i} index={i}/>
            ))}
          </motion.div>
        </div>
    </section>
  )
}

export default Tools