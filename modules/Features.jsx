"use client"
import { motion } from "framer-motion";

import { feature } from '@/constants'

const Features = () => {
  return (
    <div className="flex w-full h-auto flex-col xs:flex-row flex-wrap items-center relative justify-center gap-x-2 lg:left-16">
      {feature.map(({ icon }, i) => (
        <motion.div
          key={i}
          className="sm:w-[96px] w-[72px] h-[72px] object-center object-contain flex items-center justify-center sm:h-[96px]"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.3, duration: 0.5, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}

export default Features
