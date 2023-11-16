"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { nav } from "@/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [move, setMove] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMove(true);
      } else {
        setMove(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex fixed top-0 px-4 md:px-12 left-0 w-full h-[64px] justify-between z-[999] items-center duration-300 ${
        move ? "bg-[rgba(0,0,0,.75)]" : ""
      }`}
    >
      <div
        className="flex gap-x-0 m-0 w-fit cursor-pointer h-full items-center"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Image
          src={"/logos/logo_pagina/logo_pagina/1.png"}
          alt="logo poderify"
          width={180}
          height={56}
          className="object-contain p-0 m-0"
          loading="eager"
        />
      </div>
      <ul className="md:flex hidden gap-x-4 list-none">
        {nav.map(({ id, title }, i) => (
          <li
            key={i}
            className="link-paragraph p-2 rounded-md hover:bg-[rgba(255,255,255,0.3)] hover:backdrop-blur-3xl duration-300 "
          >
            <Link href={`#${id}`}>{title}</Link>
          </li>
        ))}
      </ul>

      <div className="flex md:hidden justify-center items-center">
        <div
          className="text-3xl text-white"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          {toggle ? <HiX /> : <HiMenuAlt2 />}
        </div>
        <ul
          className={`absolute top-[64px] right-1 px-3 py-2 ${
            toggle ? "flex" : "hidden"
          } gap-y-2 items-center flex-col rounded-md bg-slate-900 justify-center`}
        >
          {nav.map(({ id, title }, i) => (
            <li key={i} className="link-paragraph">
              <Link href={`#${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
