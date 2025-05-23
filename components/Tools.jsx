'use client'

import { CardTool, Features } from '@/modules'
import { tools } from '@/constants'
import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

const Tools = () => {
  return (
    <section className="section px-8 w-full flex items-center h-auto gap-y-20 flex-col relative">
      <motion.div
      variants={textVariant(0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full h-auto flex flex-col items-center gap-y-10 py-2 justify-center">
        <div className="flex items-center justify-center w-full h-auto gap-y-10 flex-col">
          <p className="paragraph text-center text-[#618adc] max-w-[320px] sm:max-w-[600px] lg:max-w-[900px]">
          Incorpora IA en las herramientas más poderosas del mercado, en un único servicio.
          </p>
          <div className="flex w-full h-full flex-wrap">
            <Features />
          </div>
        </div>
        <div className="w-full items-center text-center max-w-[600px] justify-center">
          <p className="paragraph-v2 capitalize text-gradient-v2">
            Soluciones Integrales.
          </p>
          <h2 id="tools" className="heading" style={{ lineHeight: '64px' }}>
          Potencia a tu equipo con IA: Entrenamiento a medida.
          </h2>
          <p className="paragraph-v1 mx-auto w-[80%] md:w-[100%]">
          Transformamos a tu equipo y líderes con entrenamientos innovadores en IA, diseñados para potenciar habilidades, impulsar el crecimiento y lograr resultados extraordinarios.
          </p>
        </div>
      </motion.div>
      <div
      className="flex w-full flex-col h-full flex-wrap items-center gap-y-10">
        <h2 className="heading uppercase">ESPECIALISTAS EN</h2>
        <div
          className="flex w-full h-auto flex-wrap flex-col gap-y-4 sm:flex-row items-center justify-center gap-x-10"
        >
          {tools.map(({ img, alt, title }, index) => (
              <CardTool img={img} alt={alt} title={title} index={index} key={alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
