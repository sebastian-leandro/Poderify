import Script from 'next/script'
import { Hero, Tools, CTA, Services, Testimonials, Works, About } from '@/components'

export default function Home () {
  const id = process.env.NEXT_PUBLIC_GA_ID
  return (
    <>
      <Hero />
      <main className="grid gap-y-20 overflow-x-hidden place-content-center">
        < Tools />
        < CTA />
        < Services />
        < Works />
        < About />
        < Testimonials />
      </main>

      <Script
      strategy='afterInteractive'
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />

      <Script id='google-analytics' strategy='afterInteractive' >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>

    </>
  )
}
