import { CardTool, Features } from "@/modules";
import { tools } from "@/constants";

const Tools = () => {
  return (
    <section className="section w-full flex items-center h-auto gap-y-20 flex-col relative">
      <div className="lg:block hidden gradient bottom-10 right-1"></div>
      <div className="lg:block hidden gradient top-10 left-1"></div>
      <div className="w-full h-auto flex flex-col items-center gap-y-10 justify-center">
        <div className="flex items-center justify-center w-full h-auto gap-y-10 flex-col">
          <p className="paragraph text-center capitalize text-[#618adc]">
            Integra las herramientas más poderosas del mercado a tu negocio.
          </p>
          <div className="flex w-full h-full flex-wrap">
            <Features />
          </div>
        </div>
        <div className="w-full items-center text-center max-w-[600px] justify-center">
          <p className="paragraph-v1 capitalize text-purple-900">
            Soluciones inteligentes
          </p>
          <h2 className="heading uppercase">
            Potencia tu Empresa con Innovación Digital
          </h2>
          <p className="paragraph-v1 text-[#cecece] mx-auto w-[100%]">
            Desbloquea el potencial completo de tu negocio. Transformamos datos
            en decisiones, conectividad en crecimiento, y estrategias en
            resultados.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col h-full flex-wrap items-center gap-y-10">
        <h2 className="heading uppercase txt-shadow">SOMOS EXPERTOS EN:</h2>
        <div
          className="flex w-full h-auto flex-wrap flex-col gap-y-4 sm:flex-row items-center justify-center gap-x-10"
        >
          {tools.map(({ img, alt, title }, i) => (
            <CardTool img={img} alt={alt} title={title} key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
