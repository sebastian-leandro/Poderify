import { Contact } from "@/modules";
import Link from "next/link";
import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { HiChevronDoubleUp } from "react-icons/hi";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact">
      <footer className="px-0 sm:px-2 w-full h-auto overflow-hidden">
        <div className="w-full h-full flex flex-col gap-y-12 justify-center items-center">
          <h2 className="heading txt-shadow uppercase">Contáctanos</h2>
          <div className="min-h-[520px] w-[340px] sm:w-[420px] shadow-md p-4 bg-[#101010] rounded-md shadow-slate-950 flex">
            <Contact />
          </div>
          <div className="w-full flex md:flex-row flex-col h-auto pt-8 justify-center gap-8 px-4 relative">
            <div className="absolute top-0  left-0 right-0 w-full h-[1px] hero-gradient"></div>
            <div className="flex w-fit flex-grow h-auto justify-center m-auto md:justify-start items-end gap-x-8">
              <div className="item">
                <Link
                  aria-label="Linkedin link of poderify"
                  href={"https://www.linkedin.com/company/poderify/"}
                  className="icon-media"
                >
                  <BiLogoLinkedinSquare className="text-black text-3xl icon duration-300" />
                </Link>
              </div>
              <div className="item">
                <Link
                  aria-label="Instagram link of poderify"
                  href={"https://instagram.com/PoderiFy"}
                  className="icon-media"
                >
                  <BiLogoInstagram className="text-black text-3xl icon duration-300" />
                </Link>
              </div>
            </div>
            <div className="flex gap-y-4 md:flex-row flex-col p-1 gap-x-8 items-center flex-wrap justify-center md:justify-end md:items-center ">
              <p className="paragraph-v1 text-white md:text-left text-center">
                Designed by Poderify
              </p>
              <p className="paragraph-v1 text-white md:text-left text-center">
              &copy; {currentYear} Poderify. All rights reserved.
              </p>
              <Link
                aria-label="Scroll to the top"
                href={"#home"}
                className="text-white w-fit text-center text-4xl p-2 rounded-full hover:bg-[rgba(255,255,255,.6)] hover:backdrop-blur-3xl duration-500"
              >
                <HiChevronDoubleUp />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
