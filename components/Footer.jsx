import { Contact } from "@/modules"

const Footer = () => {
  return (
    <section id="contact">
          <footer  className='px-0 sm:px-2 w-full h-auto'>
        <div className='w-full h-full flex flex-col gap-y-12 justify-center items-center'>
          <h2 className="heading txt-shadow uppercase">Contactanos</h2>
          <div className="min-h-[520px] w-[250px] sm:w-[420px] shadow-md py-4 px-8 bg-[#101010] rounded-md shadow-slate-950 flex">
            <Contact />
          </div>
          <div className="w-full flex h-auto justify-center sm:justify-end gap-x-8">
            <p className="paragraph-v1 text-white">Designed by Poderify</p>
            <p className="paragraph-v1 text-white">all rights reserved.</p>
          </div>
        </div>
    </footer>
    </section>
  )
}

export default Footer