import { BiLogoWhatsapp } from 'react-icons/bi'
import Link from 'next/link'

const WhatsappIcon = () => {
  return (
    <div className='w-14 h-14 fixed right-8 bottom-12 z-40 flex hover:opacity-80 duration-300 shadow-filter items-center justify-center rounded-full bg-[#25D366]'>
        <div className='item'>
          <Link
          aria-label='Enlace fijo al whatsapp de PoderiFy'
          href={'https://api.whatsapp.com/send?phone=5491176108397'} className='whatsapp'>
              <BiLogoWhatsapp className='whatsapp-icon duration-300 text-4xl text-white' />
          </Link>
        </div>
    </div>
  )
}

export default WhatsappIcon
