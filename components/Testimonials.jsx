'use client'
import TestimonialCard from "@/modules/TestimonialCard"
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'

const Testimonials = () => {
  return (
    <section className='w-full h-auto flex flex-col gap-y-20 min-h-[100vh] relative overflow-hidden'>
        <div className='gradient-03 right-6 top-52'></div>
        <div className='gradient-04 left-6 top-56'></div>
        <div className='w-full h-auto items-start flex'>
            <h2 className='heading txt-shadow uppercase'>What others says</h2>
        </div>
        <motion.div variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className="w-full h-full flex items-center justify-evenly flex-wrap sm:flex-row flex-col gap-y-10">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </motion.div>
    </section>
  )
}

export default Testimonials