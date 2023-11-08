import { hero } from "@/constants";
import Link from "next/link";
import { HiChatAlt2 } from "react-icons/hi";

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
          <h1 className="heading uppercase">{title}</h1>
          <p className="paragraph-v1 text-[#cecece] w-full md:w-[90%] text-center">
            {paragraph}
          </p>
          <div className="flex w-full gap-x-8 items-center justify-center flex-col xs:flex-row gap-y-4 xs:gap-y-0">
            <Link href={href} className="btn-classic gap-x-4">
              {link}
              <HiChatAlt2 />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
