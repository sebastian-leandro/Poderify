'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Image from 'next/image'
import { Direction } from '@/utils'
import PropTypes from 'prop-types'

const TestimonialCard = ({ text, img, alt, name, index }) => {
  const direction = Direction(index)
  const fadeVariant = fadeIn(direction, 'spring', 0.3, 0.75)

  return (
    <motion.div
      className="w-[270px] h-[250px] shadow-feed bg-[rgba(0,0,0,0.5)] p-3 shadow-lg shadow-zinc-950 rounded-md relative"
      variants={fadeVariant}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true }}
    >
      <div className="absolute top-2 left-6 bg-feed-quote"></div>
      <div className="flex w-full h-full flex-col rounded-md">
        <div className="w-full h-full mt-6 flex items-center">
          <p className="paragraph-v1 w-[95%] text-center">
            {text}
          </p>
        </div>
        <div className="flex items-center gap-x-2 w-full mb-4 justify-center">
          <Image
            src={img}
            alt={alt}
            width={32}
            height={32}
            className="rounded-[50%] object-contain"
          />
          <h3 className="subheading">{name}</h3>
        </div>
      </div>
    </motion.div>
  )
}

TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default TestimonialCard
