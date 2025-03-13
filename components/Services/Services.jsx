'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import style from './Services.module.css'
import { fadeIn } from '@/utils/motion'
import { services } from '@/constants'
import useMouseEffect from '@/utils/MouseEffect'

const Services = () => {
  const BentoItem = ({ img, title, description, index }) => {
    const direction = index % 2 === 0 ? 'left' : 'right'
    const fade = fadeIn(direction, 'spreen', 0.3 * index, 0.5)

    const [hovering, setHovering] = useState(false)
    const containerRef = useRef(null)
    const position = useMouseEffect(hovering, containerRef)

    return (
      <motion.div
      ref={containerRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      initial='hidden'
      whileInView='show'
      variants={fade}
      viewport={{ once: true }}
      className={`${style.item}`}>
        <div className={`w-[40px] h-[40px] rounded-full z-20 ${hovering ? 'mouseEffect' : 'bg-transparent'}`} style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
        <div className={`${style.cover} bg-cover bg-center bg-no-repeat bg-blend-luminosity absolute top-0 left-0 w-full h-full z-0`} style={{ backgroundImage: `url(${img})` }} />
        <div className={style.customCover} />
        <div className={style.background} />
        <div className='z-10 w-full flex flex-col gap-2 pl-2 items-center h-full'>
          <h3 className='text-white text-3xl sm:text-xl font-bold top-8 left-4 absolute'>{title}</h3>
          <p className='absolute left-4 bottom-6 max-w-full sm:max-w-[95%]' style={{ fontSize: '16px', color: '#FFF', fontWeight: 'bolder' }}>{description}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <section id='services' className={style.section}>
      <h2 className='heading'>Nuestros servicios</h2>
      <div className={style.flex}>
      <div className='background-gradient' style={{ top: 0, bottom: 0, left: 0, right: 0, backgroundImage: "url('/gradient_1.png')" }} />
        <div className={style.bentoGrid}>
          {services.map((service, index) => (
            <BentoItem key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
