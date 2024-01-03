'use client'
import { motion } from 'framer-motion'

import { services } from '@/constants'
import style from './Services.module.css'
import { fadeIn } from '@/utils/motion'

/*
const Services = () => {
  return (
    <section
      id="services"
      className="section w-full h-auto flex flex-col md:gap-y-24 relative justify-between overflow-hidden"
    >
      <h2 className="heading txt-shadow uppercase mb-16">Nuestros Servicios</h2>
      <div className="w-full flex flex-col h-auto gap-y-4 mb-4 justify-center items-center">
        {servicesRow.map(({ img, alt, title }, i) => (
          <CardRow img={img} alt={alt} title={title} index={i} key={i} />
        ))}
      </div>
      <div className="w-full h-full gap-6 gap-y-4 flex flex-wrap md:flex-row items-center justify-center flex-col">
        {services.map(({ title, img, alt }, i) => (
          <CardService key={i} i={i} title={title} img={img} alt={alt} />
        ))}
      </div>
    </section>
  )
}
*/

const Services = () => {
  const BentoItem = ({ img, title, description, index }) => {
    const fade = fadeIn('left', 'spreen', 0.3 * index, 0.5)
    return (
      <motion.div
      initial='hidden'
      whileInView='show'
      variants={fade}
      viewport={{ once: true }}
      className={`${style.item}`}>
        <div className={`${style.cover} bg-cover bg-center bg-no-repeat bg-blend-luminosity absolute top-0 left-0 w-full h-full z-0`} style={{ backgroundImage: `url(${img})` }} />
        <div className='absolute w-full h-full top-0 left-0 z-[1] bg-gradient-to-b from-transparent from-10% via-black/40 to-black/80' />
        <div className='z-10 w-full h-full items-end justify-start flex'>
          <h3 className='text-2xl text-white font-bold'>{title}</h3>
          <p>{description}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <section className={style.section}>
      <h2 className='heading'>Nuestros Servicios</h2>
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