'use client'
import { motion } from 'framer-motion'
import { hero } from '@/constants'
import Link from 'next/link'
import { HiChatAlt2 } from 'react-icons/hi'

const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden flex w-full flex-col min-h-[100vh] justify-center relative items-center"
    >
      <div className='bg-gradient'>
        <div className='hero-bg'>
          <div className='bg-image' />
        </div>
      </div>
      {hero.map(({ title, paragraph, href, link }, i) => (
        <div
          className="flex flex-col max-w-[620px] items-center  gap-y-6"
          key={i}
        >
          <h1 className="heading capitalize sm:uppercase">{title}</h1>
          <p className="paragraph-v4 text-[#ffffff] w-[95%]  md:w-[90%] text-center">
            {paragraph}
          </p>
          <div className="flex w-full gap-x-8 items-center justify-center flex-col gap-y-6">
            <Link href={href} className="btn-classic gap-x-4">
              {link}
              <HiChatAlt2 />
            </Link>
            <div className="absolute xs:bottom-2 bottom-8 w-full flex justify-center items-center">
              <Link aria-label="Scroll down" href={'#tools'}>
                <div className="w-[32px] h-16 rounded-3xl border-2 border-slate-300 flex justify-center items-start p-2 hover:border-slate-950 duration-300">
                  <motion.div
                    animate={{
                      y: [0, 35, 0]
                    }}
                    transition={{
                      duration: 2.3,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                    className="w-2.5 h-2.5 rounded-full mb-1 bg-slate-300"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Hero
