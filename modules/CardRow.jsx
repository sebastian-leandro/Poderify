'use client'
import React from 'react'
import { zoomIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PropTypes from 'prop-types'

const CardRow = ({ img, alt, title, index }) => {
  const zoom = zoomIn(0.3 * index, 0.5)

  return (
    <motion.div
    variants={zoom}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="w-64 md:w-full h-[350px] max-w-[1100px] p-[0.1rem] bg-card rounded-2xl">
        <div className="w-full h-full bg-dark rounded-2xl">
            <div className="w-full flex items-center h-full justify-center flex-col lg:flex-row">
                <div className="w-full h-[75%] md:h-full flex relative">
                    <Image
                    src={img}
                    alt={alt}
                    fill
                    className="block rounded-variant"
                    />
                </div>
                <div className="w-full h-[75%] flex items-center justify-center">
                    <h3 className="subheading">{title}</h3>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

CardRow.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default CardRow
