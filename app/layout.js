import { Nunito } from 'next/font/google'
import './globals.css'
import { Navbar, Footer } from '@/components'
import { WhatsappIcon } from '@/modules'

const nunito = Nunito({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800','900','1000'], style: 'normal' })

export const metadata = {
  title: 'PoderiFy',
  description: 'Desde desarrollo web, análisis de datos e IA hasta scraping y automatización de tareas. Hacemos que la tecnología trabaje para vos.',
  keywords: ['Desarrollo Web', 'Datos', 'IA', 'scraping', 'automatización', 'CRM', 'Diseño', 'Web', 'SEM'],
  url: 'https://poderify.com',
  authorInfo: {
    name: 'Poderify',
    url: 'https://poderify.com'
  },
  creator: 'Sebastian Leandro',
  publisher: 'Santiago Cànepa',
  type: 'website',
  icons: {
    icon: '/favi/favicon.ico?v=4',
    apple: '/favi/apple-touch.png',
    shortcut: '/favi/apple-touch.png'
  },
  manifest: '/favi/site.webmanifest',
  opengraph: {
    title: 'PoderiFy',
    description: 'Desde desarrollo web, análisis de datos e IA hasta scraping y automatización de tareas. Hacemos que la tecnología trabaje para vos.',
    icons: {
      icon: '/favi/favicon.ico?v=4',
      apple: '/favi/apple-touch.png',
      shortcut: '/favi/apple-touch.png'
    },
    manifest: '/favi/site.webmanifest',
    url: 'https://poderify.com',
    type: 'website',
    siteName: 'PoderiFy',
  },
  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${nunito.className} bg-body-gradient`}>
        < Navbar />
        {children}
        <div className='mt-12'>
          < Footer />
        </div>
        <WhatsappIcon />
      </body>
    </html>
  )
}
