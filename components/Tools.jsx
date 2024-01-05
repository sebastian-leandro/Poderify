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
          <p className="paragraph text-center capitalize text-[#618adc]">
            Integra las herramientas más poderosas del mercado a tu negocio.
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
           ¿Cansado coordinar múltiples proveedores y tecnologías? 
          </h2>
          <p className="paragraph-v1 mx-auto w-[100%]">
            Maximiza eficiencia y coherencia en tu branding con una estrategia digital unificada, moldeada a la medida de tu negocio.
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
