"use client";
import { Tilt } from "react-tilt";
import Image from "next/image";

const CardService = ({ index, title, img, alt }) => {
  return (
    <Tilt className="cursor-default">
      <div
        className="w-[250px] h-[320px] rounded-2xl bg-card p-[0.15rem]"
      >
        <div className="flex flex-col w-full h-full gradient-07 rounded-2xl items-center justify-center">
          <div className="w-full h-full relative">
            <Image
              src={img}
              alt={alt}
              fill
              className="object-contain block rounded-variant"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center text-center">
            <h3 className="subheading txt-shadow uppercase">{title}</h3>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default CardService;
