'use client'
import { motion } from 'framer-motion'

import { Slider } from '@/modules'
import { slideIn } from '@/utils/motion'

const Works = () => {
  const slide = slideIn('right', 'spring', 0.3, 0.5)
  return (
    <section className="section flex w-full h-auto flex-col gap-y-12 overflow-x-hidden relative">
      <div className="w-full h-auto flex justify-center">
        <h2 className="heading">Ultimos Proyectos</h2>
      </div>
      <motion.div
      initial='hidden'
      whileInView='show'
      variants={slide}
      viewport={{ once: true }}
      className="flex w-full h-full items-center justify-center sm:px-0 px-2">
        <Slider />
      </motion.div>
      <div className="w-full flex items-center justify-center h-auto">
        <div className="absolute bg-wrapper w-[240px] sm:w-[500px] bottom-10"></div>
        <div className="absolute bg-wrapper w-[200px] sm:w-[400px] bottom-6"></div>
      </div>
    </section>
  )
}

export default Works
