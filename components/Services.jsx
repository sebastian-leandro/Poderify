"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { servicesRow } from "@/constants";
import { services } from "@/constants";
import { CardService, CardRowService } from "@/modules";

const Services = () => {
  return (
    <section
      id="services"
      className="section w-full h-auto flex flex-col gap-y-24 relative overflow-hidden"
    >
      <div className="gradient-01 w-[250px] h-[250px] bottom-64 left-1"></div>
      <div className="gradient top-36 w-[250px] h-[250px]"></div>
      <h2 className="heading txt-shadow uppercase">Nuestros Servicios</h2>
      <motion.div className="w-full rounded-2xl lg:flex-nowrap flex-wrap justify-center   gap-12  h-full flex md:flex-row flex-col ">
        {servicesRow.map(({ img, alt, title, paragraph }, i) => (
          <CardRowService
            img={img}
            alt={alt}
            title={title}
            paragraph={paragraph}
            key={i}
            index={i}
          />
        ))}
      </motion.div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full h-full gap-6 flex flex-wrap md:flex-row items-center justify-between flex-col"
      >
        {services.map(({ title, img, alt }, i) => (
          <CardService key={i} index={i} title={title} img={img} alt={alt} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
