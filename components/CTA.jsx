import { HiChatAlt2 } from 'react-icons/hi'
import Link from 'next/link'
import { cta } from '@/constants'

const CTA = () => {
  return (
    <section className="section flex w-full h-auto justify-center relative">
      {cta.map(({ title, paragraph, link }, i) => (
        <div
          key={i}
          className="w-full pt-4 md:pt-0 h-72 max-w-[1280px] flex md:flex-row flex-col  rounded-2xl border border-solid border-[rgba(255,255,255,.08)] px-6 bg-gradient-to-l from-[#151030] to-[#1b1622]"
        >
          <div className="flex flex-col w-full h-full items-center md:items-start justify-center">
            <h3 className="heading uppercase">{title}</h3>
            <p className="paragraph-v1 text-center md:text-left text-[#cecece]">
              {paragraph}
            </p>
          </div>
          <div className="flex w-full h-full items-center justify-center md:justify-end">
            <Link
              aria-label='Enlace al whatsapp de PoderiFy'
              href="https://api.whatsapp.com/send?phone=5491176108397"
              className="btn-classic gap-x-4"
            >
              {link}
              <HiChatAlt2 />
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CTA
