import Image from "next/image";

const CardRowService = ({ img, alt, title, paragraph }) => {
  return (
    <div className="sm:w-full w-[250px] h-[320px] md:min-h-[384px] bg-tertiary rounded-2xl flex shadow-md shadow-zinc-950">
      <div className="flex h-full items-center md:flex-row flex-col justify-center gap-y-4 w-full">
        <div className="w-full h-full relative">
          <Image
            src={img}
            alt={alt}
            width={280}
            height={384}
            className="object-cover block rounded-2xl"
          />
        </div>
        <div className="w-full h-full flex flex-col items-center text-center justify-center gap-y-4">
          <h3 className="heading">{title}</h3>
          <p className="paragraph-v1 text-[#cecece]">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRowService;
