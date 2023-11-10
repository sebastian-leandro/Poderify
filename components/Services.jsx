import { servicesRow } from "@/constants";
import { services } from "@/constants";
import { CardService, CardRow } from "@/modules";

const Services = () => {
  return (
    <section
      id="services"
      className="section w-full h-auto flex flex-col gap-y-24 relative justify-between overflow-hidden"
    >
      <h2 className="heading txt-shadow uppercase">Nuestros Servicios</h2>
      <div
      className="w-full flex flex-col h-auto gap-y-4 justify-center items-center"
      >
        {servicesRow.map(({img,alt,title}, i) => (
          <CardRow
          img={img}
          alt={alt}
          title={title}
          i={i}
          key={i}
          />
        ))}
      </div>
      <div
        className="w-full h-full gap-6 flex flex-wrap md:flex-row items-center justify-center flex-col"
      >
        {services.map(({ title, img, alt }, i) => (
          <CardService key={i} i={i} title={title} img={img} alt={alt} />
        ))}
      </div>
    </section>
  );
};

export default Services;
