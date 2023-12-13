'use client'
import React from 'react'
import Image from 'next/image'
import { Direction } from '@/utils'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import PropTypes from 'prop-types'

const CardService = ({ title, img, alt, index }) => {
  const direction = Direction(index)
  const slide = slideIn(direction, 'spring', 0.3 * index, 0.75)

  return (
    <motion.div
    variants={slide}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="cursor-default shadow-feed">
      <div
        className="w-[250px] h-[320px] rounded-2xl  bg-card p-[0.15rem]"
      >
        <div className="flex flex-col w-full h-full bg-dark rounded-2xl items-center justify-center">
          <div className="w-full h-full relative">
            <Image
              src={img}
              alt={alt}
              fill
              loading="eager"
              className="object-contain block rounded-variant"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center text-center">
            <h3 className="subheading txt-shadow uppercase">{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

CardService.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default CardService
