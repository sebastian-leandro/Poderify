import Image from "next/image";

const TestimonialCard = ({ text, img, alt, name, index }) => {
  return (
    <div
      className="w-[270px] h-[250px] shadow-sm shadow-zinc-900 rounded-md relative"
    >
      <div className="absolute top-1 left-1 bg-feed-quote"></div>
      <div className="flex w-full h-full flex-col rounded-md">
        <div className="w-full h-full flex items-center">
          <p className="paragraph-v1 text-[#cecece] w-[95%]   text-center">
            {text}
          </p>
        </div>
        <div className="flex items-center gap-x-2 w-full mb-4 justify-center">
          <Image
            src={img}
            alt={alt}
            width={32}
            height={32}
            className="rounded-[50%]"
            loading="lazy"
          />
          <h4 className="subheading">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
