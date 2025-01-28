import './globals.css'
import { Navbar, Footer } from '@/components'
import { WhatsappIcon } from '@/modules'
import { satoshi } from './fonts'

export const metadata = {
  title: 'PoderiFy',
  description: 'Desde desarrollo web, análisis de datos e IA hasta scraping y automatización de tareas. Hacemos que la tecnología trabaje para vos.',
  keywords: ['Desarrollo Web', 'Datos', 'IA', 'scraping', 'automatización', 'CRM', 'Diseño', 'Web', 'SEM'],
  authorInfo: {
    name: 'PoderiFy',
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
