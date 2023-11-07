import { feature } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex w-full px-8 h-auto flex-wrap items-center relative justify-center gap-x-4">
      {feature.map(({ img, alt }, i) => (
        <div key={i} className="w-[96px] h-[96px]">
          <Image
            src={img}
            alt={alt}
            width={96}
            height={96}
            className="object-cover block "
          />
        </div>
      ))}
    </div>
  );
};

export default Features;
