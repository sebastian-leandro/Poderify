'use client'
import Image from 'next/image'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import useMouseEffect from '@/utils/MouseEffect'

const CardTool = ({ img, alt, title, index }) => {
  const direction = index % 2 === 0 ? 'left' : 'right'
  const fade = fadeIn(direction, 'spring', 0.3 * index, 0.5)

  const [hovering, setHovering] = useState(false)
  const containerRef = useRef(null)
  const position = useMouseEffect(hovering, containerRef)

  return (
    <>
    <Tilt>
      <motion.div
      ref={containerRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-[230px] h-[230px] rounded-lg shadow-feed m-1 relative cursor-default">
        <div
        className={`absolute w-[40px] h-[40px] rounded-full pointer-events-none ${hovering ? 'mouseEffect' : 'bg-transparent'}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        />
            <div className="w-full rounded-lg h-full border border-solid border-[rgba(255,255,255,.08)] bg-[#1d1c20]">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="w-full h-full items-center justify-center flex">
                  <Image
                    src={img}
                    alt={alt}
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </div>
                <div className="w-full h-full items-center flex justify-center">
                  <h3 className="subheading">{title}</h3>
                </div>
              </div>
            </div>
      </motion.div>
      </Tilt>
    </>

  )
}

CardTool.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default CardTool
