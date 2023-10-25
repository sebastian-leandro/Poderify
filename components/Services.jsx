'use client'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { zoomIn } from "@/utils/motion"
import Image from 'next/image'
import { servicesRow } from '@/constants'
import { services } from '@/constants'
import { CardService } from '@/modules'


const Services = () => {
  return (
    <section id='services' className='w-full h-auto flex flex-col gap-y-24 relative overflow-hidden'>
      <div className="gradient-01 w-[250px] h-[250px] bottom-64 left-1"></div>
      <div className="gradient top-36 w-[250px] h-[250px]"></div>
      <h2 className='heading txt-shadow uppercase'>Our Services</h2>
      <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}}  className='w-full rounded-2xl min-h-[512px] gap-y-12 md:min-h-[384px] h-full flex md:flex-row flex-col bg-tertiary'>
        {servicesRow.map(({img,alt,title,paragraph}, i) => (
              <motion.div variants={zoomIn(0.3,0.7)} key={i} className="w-full h-full rounded-2xl flex shadow-md shadow-zinc-950">
                  <div className="flex h-full items-center md:flex-row flex-col justify-center gap-y-4 w-full">
                      <div className="w-full h-full relative">
                          < Image src={img} alt={alt} fill className="object-cover block rounded-2xl" />
                      </div>
                      <div className="w-full h-full flex flex-col items-center text-center justify-center gap-y-4">
                          <h3 className="heading">{title}</h3>
                          <p className="paragraph-v1 text-[#cecece]">{paragraph}</p>
                      </div>
                  </div>
              </motion.div>
          ))}
      </motion.div>
      <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className='w-full h-full gap-6 flex flex-wrap md:flex-row items-center justify-between flex-col'>
          {services.map(({title,img,alt}, i) => (
            <CardService key={i} index={i} title={title} img={img} alt={alt} />
          ))}
      </motion.div>
    </section>
  )
}

export default Services