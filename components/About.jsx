import { team } from "@/constants";
import { CardAbout } from "@/modules";

const About = () => {
  return (
    <section
      id="about"
      className="section w-full h-auto flex flex-col gap-y-12 relative overflow-hidden"
    >
      <div className="gradient left-0 top-36"></div>
      <div className="gradient-01 w-42 h-42"></div>
      <div className="gradient right-0 bottom-28"></div>
      <div></div>
      <div className="w-full h-auto items-center">
        <h2 className="heading txt-shadow border-b-2 border-[#a400b8] w-fit m-auto">
          Quienes Somos
        </h2>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div
          className=" w-full h-full items-center justify-center gap-4 flex flex-wrap flex-col sm:flex-row "
        >
          {team.map(({ img, alt, name, desc, link, href }, index) => (
            <CardAbout
              key={index}
              img={img}
              alt={alt}
              name={name}
              desc={desc}
              link={link}
              href={href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
