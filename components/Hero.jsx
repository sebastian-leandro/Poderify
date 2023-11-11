import { hero } from "@/constants";
import Link from "next/link";
import { HiChatAlt2,HiChevronDoubleDown } from "react-icons/hi";

const Hero = () => {



  return (
    <section
      id="home"
      className="section flex w-full flex-col min-h-[100vh] bg-image justify-center relative items-center"
    >
      {hero.map(({ title, paragraph, href, link }, i) => (
        <div
          className="flex flex-col max-w-[620px] items-center  gap-y-6"
          key={i}
        >
          <h1 className="heading capitalize sm:uppercase">{title}</h1>
          <p className="paragraph-v1 text-[#cecece] w-full md:w-[90%] text-center">
            {paragraph}
          </p>
          <div className="flex w-full gap-x-8 items-center justify-center flex-col gap-y-6">
            <Link href={href} className="btn-classic gap-x-4">
              {link}
              <HiChatAlt2 />
            </Link>
            <Link href={'#tools'} className="text-white cursor-pointer text-4xl p-2 rounded-full hover:bg-[rgba(255,255,255,.6)] hover:backdrop-blur-3xl duration-500">
              <HiChevronDoubleDown/>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
