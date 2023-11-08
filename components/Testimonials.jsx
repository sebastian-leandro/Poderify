import TestimonialCard from "@/modules/TestimonialCard";
import { feedback } from "@/constants";

const Testimonials = () => {
  return (
    <section className="section w-full h-auto flex flex-col gap-y-20 min-h-[100vh] relative overflow-hidden">
      <div className="gradient-03 right-6 top-52"></div>
      <div className="gradient-04 left-6 top-56"></div>
      <div className="w-full h-auto items-start flex">
        <h2 className="heading txt-shadow uppercase">
          Que dicen nuestros clientes
        </h2>
      </div>
      <div
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
      </div>
    </section>
  );
};

export default Testimonials;
