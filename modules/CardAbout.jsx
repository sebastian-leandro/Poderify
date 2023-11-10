import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";

const CardAbout = ({ img, alt, name, desc, href }) => {
  return (
    <div
      className="w-[230px] relative h-[250px] p-[0.075rem] bg-about"
    >
      <div className="w-full h-full flex flex-col bg-[#090909]">
        <div className="w-full h-full items-center justify-center flex">
          <Image
            src={img}
            alt={alt}
            width={72}
            height={72}
            className="object-contain rounded-full border-card"
            loading="eager"
          />
        </div>
        <div className="w-full h-full items-center justify-end flex flex-col">
          <h3 className="subheading uppercase h-1/2">{name}</h3>
          <p className="paragraph-v1 text-[#fff] h-full text-center whitespace-break-spaces">{desc}</p>
        </div>
        <div className="h-1/2 flex items-end gap-x-6 justify-end w-full">
          <Link
            href={href}
            target="_blank"
            className="duration-300 w-10 h-10 icon-links flex items-center justify-center rounded-[50%]"
            passHref
          >
            <AiFillLinkedin className="w-7 h-7 fill-white duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
