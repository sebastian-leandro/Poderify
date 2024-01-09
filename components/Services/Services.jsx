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
        <div className={`w-[40px] h-[40px] rounded-full z-20 ${hovering ? 'mouseEffect' : 'bg-transparent'}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        />
        <div className={`${style.cover} bg-cover bg-center bg-no-repeat bg-blend-luminosity absolute top-0 left-0 w-full h-full z-0`} style={{ backgroundImage: `url(${img})` }} />
        <div className='absolute w-full h-full top-0 left-0 z-[1] bg-gradient-to-b from-transparent from-5% via-black/50 to-black/90' />
        <div className='z-10 w-full absolute left-0 bottom-2 pl-2 h-[100px] items-center flex'>
          <div className='flex flex-col w-full h-full'>
            <h3 className='subheading'>{title}</h3>
            <p className='paragraph-v1 lg:inline hidden max-w-[95%]' style={{ fontSize: '16px' }}>{description}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id='services' className={style.section}>
      <h2 className='heading'>Soluciones 360°</h2>
      <div className={style.flex}>
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
