import './globals.css'
import { Navbar, Footer } from '@/components'
import { WhatsappIcon } from '@/modules'
import Satoshi from 'next/font/local'

const satoshi = Satoshi(
  {
    src: [
      {
        path: '../font/satoshi/Satoshi-Regular.otf',
        weight: '400',
        style: 'normal'
      },
      {
        path: '../font/satoshi/Satoshi-Light.otf',
        weight: '300',
        style: 'normal'
      },
      {
        path: '../font/satoshi/Satoshi-Bold.otf',
        weight: '700',
        style: 'normal'
      },
      {
        path: '../font/satoshi/Satoshi-Medium.otf',
        weight: '500',
        style: 'normal'
      },
      {
        path: '../font/satoshi/Satoshi-Black.otf',
        weight: '900',
        style: 'normal'
      }
    ]
  }
)

export const metadata = {
  title: 'PoderiFy',
  description: 'Desde desarrollo web, análisis de datos e IA hasta scraping y automatización de tareas. Hacemos que la tecnología trabaje para vos.',
  keywords: ['Desarrollo Web', 'Datos', 'IA', 'scraping', 'automatización', 'CRM', 'Diseño', 'Web', 'SEM'],
  authorInfo: {
    name: 'Poderify',
    url: 'https://poderify.com'
  },
  creator: 'Sebastian Leandro',
  publisher: 'Santiago Cànepa',
  type: 'website',
  icons: {
    icon: ['/favi/favicon.ico?v=1'],
    apple: ['/favi/apple-touch-icon.png'],
    shortcut: ['/favi/apple-touch-icon.png']
  },
  manifest: '/favi/site.webmanifest',
  opengraph: {
    icons: {
      icon: ['/favi/favicon.ico?v=1'],
      apple: ['/favi/apple-touch-icon.png'],
      shortcut: ['/favi/apple-touch-icon.png']
    },
    type: 'website',
    siteName: 'PoderiFy'
  },
  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={`${satoshi.className}`}>
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
