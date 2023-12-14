import { GTMScript, Hero, Tools, CTA, Services, Testimonials, Works, About } from '@/components'

export default function Home () {
  const id = process.env.NEXT_PUBLIC_GA_ID
  console.log(id)
  return (
    <>
      <GTMScript />
      <Hero />
      <main className="grid gap-y-20 overflow-x-hidden place-content-center">
        < Tools />
        < CTA />
        < Services />
        < Works />
        < About />
        < Testimonials />
      </main>

    </>
  )
}
