import { GTMScript, Hero, Tools, CTA, Services, Works, About } from '@/components'

export default function Home () {
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
      </main>

    </>
  )
}
