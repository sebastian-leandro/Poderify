'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { HiMenuAlt2, HiX } from 'react-icons/hi'
import { nav } from "@/constants"




const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        })
      },
      {threshold: 0.25}
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section))
    }

  },[])




  return (
    <nav className={`flex fixed top-0 px-4 md:px-12 left-0 w-full h-[64px] justify-between z-[999] items-center`}>
      <div className="flex gap-x-0 m-0 w-fit cursor-pointer h-full items-center" onClick={() => {window.location.reload()}}>
        < Image src={'/logos/logo.png'} alt="logo poderify" width={48} height={48} className="object-contain p-0 m-0" />
        <span className="text-3xl uppercase text-gradient">oderify</span>
      </div>
      <ul className='md:flex hidden gap-x-4 list-none'>
        {nav.map(({id,title}, i) => (
          <li key={i} className="link-paragraph">
            <Link href={`#${id}`} className={id === activeSection ? 'active' : ''}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex md:hidden justify-center items-center">
        <div className="text-3xl text-[#888] font-medium" onClick={() => setToggle(prevToggle => !prevToggle)}>
           {toggle ? < HiX /> : < HiMenuAlt2 />}
        </div>
        <ul className={`absolute top-[64px] right-1 px-3 py-2 ${toggle ? 'flex' : 'hidden'} gap-y-2 items-center flex-col rounded-md bg-slate-900 justify-center`}>
          {nav.map(({id,title}, i) => (
            <li key={i} className="link-paragraph">
              <Link href={`#${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar