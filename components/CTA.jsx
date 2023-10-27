import {HiChatAlt2} from 'react-icons/hi'
import Link from 'next/link'
import { cta } from '@/constants'
import { Model } from '@/modules'

const CTA = () => {
  return (
    <section className="section flex w-full h-auto justify-center relative">
        <div className='absolute top-[-50%] md:top-[-20%]  h-[280px] w-[280px] overflow-x-hidden'>
          < Model />
        </div>
            {cta.map(({title,paragraph,link}, i) => (
              <div key={i} className="w-full h-72 flex md:flex-row flex-col shadow-sm shadow-zinc-950 rounded-2xl px-6 bg-gradient-to-l from-[#151030] to-[#090909]">
                  <div  className="flex flex-col w-full h-full items-center md:items-start justify-center">
                    <h3 className="heading uppercase">{title}</h3>
                    <p className="paragraph-v1 text-center md:text-left text-[#cecece]">{paragraph}</p>
                  </div>
                  <div className="flex w-full h-full items-center justify-center md:justify-end">
                    <Link href='https://google.com' className="btn-classic gap-x-4">{link}< HiChatAlt2 /></Link>
                  </div>
              </div>
            ))}
    </section>
  )
}

export default CTA