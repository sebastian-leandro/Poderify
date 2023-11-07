import { Contact } from "@/modules";
import Link from "next/link";
import {BiLogoFacebookSquare, BiLogoInstagram, BiLogoLinkedinSquare} from 'react-icons/bi'


const Footer = () => {
  return (
    <section id="contact">
      <footer className="px-0 sm:px-2 w-full h-auto overflow-hidden">
        <div className="w-full h-full flex flex-col gap-y-12 justify-center items-center">
          <h2 className="heading txt-shadow uppercase">Contactanos</h2>
          <div className="min-h-[520px] w-[250px] sm:w-[420px] shadow-md py-4 px-8 bg-[#101010] rounded-md shadow-slate-950 flex">
            <Contact />
          </div>
          <div className="w-full flex md:flex-row flex-col h-auto pt-8 justify-center gap-8 px-4 relative">
            <div className="absolute top-0  left-0 right-0 w-full h-[1px] hero-gradient"></div>
            <div className="flex w-fit flex-grow h-auto justify-center m-auto md:justify-start items-end gap-x-8">
              <Link href={'https://facebook.com'} className="text-3xl text-white">
                <BiLogoFacebookSquare/>
              </Link>
              <Link href={'https://linkedin.com'} className="text-3xl text-white">
                <BiLogoLinkedinSquare/>
              </Link>
              <Link href={'https://instagram.com'} className="text-3xl text-white">
                <BiLogoInstagram/>
              </Link>
            </div>
            <div className="flex gap-y-4 gap-x-8 flex-wrap justify-center md:justify-end md:items-end ">
              <p className="paragraph-v1 text-white md:text-left text-center">Designed by Poderify</p>
              <p className="paragraph-v1 text-white md:text-left text-center">All rights reserved.</p>
            </div>
          </div>

        </div>
      </footer>
    </section>
  );
};

export default Footer;
