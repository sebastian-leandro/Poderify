'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillLinkedin } from 'react-icons/ai'

import style from './About.module.css'
import { team } from '@/constants'
import { CardAbout } from '@/modules'
import { textVariant, fadeIn } from '@/utils/motion'

const About = () => {
  return (

    <section
      id="about"
      className="section w-full h-auto flex flex-col gap-y-12 relative overflow-hidden"
    >
      <div className="w-full h-auto items-center">
        <h2 className="heading w-fit m-auto">
          Quienes Somos
        </h2>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className=" w-full h-full items-center justify-center gap-4 flex flex-wrap flex-col sm:flex-row ">
          {team.map(({ img, alt, name, desc, link, href }, index) => (
            <CardAbout
              key={index}
              img={img}
              alt={alt}
              name={name}
              desc={desc}
              link={link}
              href={href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/*
const About = () => {
  const Card = ({ img, alt, name, desc, href, index }) => {
    const fade = fadeIn('right', 'tween', 0.3 * index, 0.5)
    return (
      <motion.article
      initial='hidden'
      whileInView='show'
      variants={fade}
      viewport={{ once: true }}
      className={`${style.item}`}
      >
        <div className='flex w-full h-full items-center justify-center'>
          <Image src={img} alt={alt} width={48} height={48} className='object-cover object-center block rounded-full' />
        </div>
        <div className='flex w-full h-full items-center'>
          <div className='flex flex-col max-w-[220px]'>
            <h3 className='subheading' style={{ textAlign: 'left', fontSize: '18px' }}>{name}</h3>
            <p className='paragraph-v1' style={{ fontSize: '16px' }}>{desc}</p>
          </div>
          <div className='absolute right-1 bottom-1'>
            <Link href={href} className='h-fit w-fit text-3xl rounded-full text-white flex items-center justify-center'>
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </motion.article>
    )
  }

  return (

    <section id='about' className='w-full max-w-[1280px] h-auto flex mx-auto flex-col gap-y-12 relative overflow-hidden'>
      <motion.div
      variants={textVariant(0.3)}
      className="w-full h-auto items-center">
        <h2 className="heading w-fit m-auto">
          Quienes Somos
        </h2>
      </motion.div>

      <div className='w-full h-full flex items-center justify-center'>
        <div className={`${style.bentoGrid} gap-x-8 gap-y-4`}>
          {team.map((info, index) => (
            <Card key={index} {...info} index={index} />
          ))}
        </div>
      </div>
    </section>

  )
}
*/
export default About
