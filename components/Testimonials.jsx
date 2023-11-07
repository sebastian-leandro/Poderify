"use client";
import TestimonialCard from "@/modules/TestimonialCard";
import { feedback } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const Testimonials = () => {
  return (
    <section className="section w-full h-auto flex flex-col gap-y-20 min-h-[100vh] relative overflow-hidden">
      <div className="gradient-03 right-6 top-52"></div>
      <div className="gradient-04 left-6 top-56"></div>
      <div className="w-full h-auto items-start flex">
        <h2 className="heading txt-shadow uppercase">
          QUE DICEN NUESTROS CLIENTES
        </h2>
      </div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full h-full flex items-center justify-evenly flex-wrap sm:flex-row flex-col gap-y-10"
      >
        {feedback.map(({ img, alt, text, title }, index) => (
          <TestimonialCard
            key={index}
            img={img}
            alt={alt}
            text={text}
            name={title}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
