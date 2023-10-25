'use client'
import { staggerContainer } from "@/utils/motion"
import { motion } from "framer-motion"
import { team } from "@/constants"
import { CardAbout } from "@/modules"


const About = () => {
  return (
    <section id="about" className="w-full h-auto flex flex-col gap-y-12 relative">
        <div className="gradient-01 right-0 left-[30%] bottom-32 w-[500px] h-[500px]"></div>
        <div className="gradient top-36"></div>
        <div className="gradient right-0 bottom-36"></div>
        <div className="w-full h-auto items-center">
            <h2 className="heading txt-shadow border-b-2 border-orange-600 w-fit m-auto">Our team</h2>
        </div>
        <div className="w-full h-full flex items-center justify-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className=" w-full h-full items-center justify-center gap-4 flex flex-wrap flex-col sm:flex-row ">
              {team.map(({img,alt,name,desc,link,href}, index) => (
                <CardAbout key={index} img={img} alt={alt} name={name} desc={desc} link={link} href={href} index={index} /> 
              ))}
            </motion.div>
        </div>
    </section>
  )
}

export default About