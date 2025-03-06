'use client'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillLinkedin } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import PropTypes from 'prop-types'

const CardAbout = ({ img, alt, name, desc, href, index }) => {
  const direction = index % 2 === 0 ? 'right' : 'left'
  const fade = fadeIn(direction, 'tween', 0.3 * index, 0.5)

  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-[230px] relative h-[250px] rounded-md border border-solid border-[rgba(255,255,255,.08)]"
    >
      <div className="w-full h-full flex flex-col rounded-md bg-[#1d1c20]">
        <div className="w-full h-full items-center justify-center flex">
          <Image
            src={img}
            alt={alt}
            width={72}
            height={72}
            className="object-contain rounded-full border-card"
            loading="lazy"
          />
        </div>
        <div className="w-full h-full items-center justify-end flex flex-col">
          <h3 className="subheading uppercase h-1/2">{name}</h3>
          <p className="paragraph-v3 h-full text-center">{desc}</p>
        </div>
        <div className="h-1/2 flex items-end gap-x-6 justify-end w-full">
          <Link
            href={href}
            target="_blank"
            className="duration-300 w-10 h-10 icon-links flex items-center justify-center rounded-[50%]"
            passHref
            aria-label={`Link to linkedin of ${name}`}
          >
            <AiFillLinkedin className="w-7 h-7 fill-white duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

CardAbout.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default CardAbout
