'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiMenuAlt2, HiX } from 'react-icons/hi'
import { nav } from '@/constants'
import style from './Navbar.module.css'
import { throttle } from '@/utils/throttle'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [move, setMove] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      window.scrollY > 144 ? setMove(true) : setMove(false)
    }, 100)
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <div className={`${style.wrapper} ${move ? 'backdrop-blur' : 'backdrop-blur-0'}`} >
      <nav className={`${style.nav} ${move ? 'px-6' : 'px-4'} duration-300 py-4`} >
        <div
          className="flex gap-x-0 m-0 w-fit cursor-pointer h-full items-center"
          onClick={() => { window.scrollTo(0, 0) }}
        >
          <Image
            src={'/logos/logo_pagina/logo_pagina/redondo2.png'}
            alt="logo de PoderiFy"
            width={56}
            height={56}
            className="object-contain block object-center"
          />
        </div>
        <ul className="md:flex hidden gap-x-4 list-none">
          {nav.map(({ id, title }, index) => (
            <li key={index}>
              <Link
                aria-label={`Enlace a la sección ${title}`}
                className={style.link}
                href={`${id}`}>
                {title}
              </Link>
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
            className={`absolute top-[72px] right-0 py-6 ${
              toggle ? 'w-full opacity-100 visible z-50' : 'opacity-0 invisible -z-10 w-0'
            } flex items-center justify-center gap-x-4 bg-[#1d1c20] border-t border-solid border-[rgba(255,255,255,.08)] backdrop-blur-3xl duration-500`}
          >
            {nav.map(({ id, title }, index) => (
              <li key={index}>
                <Link
                  aria-label={`Enlace a la sección ${title}`}
                  className={`${style.link}`}
                  href={`${id}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
