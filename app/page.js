import { Hero,Tools,CTA,Services,Testimonials,Works,About } from "@/components"

export default function Home() {
  
  return (
    <>
      <Hero />
      <main className="grid gap-y-20 overflow-x-hidden place-content-center">
        < Tools />
        < CTA />
        < Services />
        < Testimonials />
        < Works />
        < About />
      </main>
    </>
  )
}
