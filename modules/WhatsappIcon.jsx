import {BiLogoWhatsapp} from 'react-icons/bi'
import Link from 'next/link'

const WhatsappIcon = () => {
  return (
    <div className='w-14 h-14 fixed right-8 bottom-6 z-40 flex hover:opacity-80 duration-300 items-center justify-center rounded-full bg-[rgba(0,0,0,.75)]'>
        <Link 
        aria-label='Whatsapp link'
        href={'https://api.whatsapp.com/send?phone=5491176108397'} className='text-5xl text-white'>
            <BiLogoWhatsapp />
        </Link>
    </div>
  )
}

export default WhatsappIcon