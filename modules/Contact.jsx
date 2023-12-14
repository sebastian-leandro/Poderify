'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Poderify',
          from_email: form.email,
          to_email: 'poderify.network@gmail.com',
          message: form.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false)
          setForm({
            name: '',
            email: '',
            message: ''
          })
          formRef.current.reset()
          setError(null)
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 3000)
        },
        (error) => {
          setLoading(false)
          console.error(error)
          setError(error.message || 'An error has ocurred')
          setSuccess(false)
          setTimeout(() => {
            setError(null)
          }, 3000)
        }
      )
  }
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col gap-8 relative"
    >
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Nombre</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium">Mensaje</span>
        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <div className="flex items-center justify-center w-fit">
        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
      <div className="flex w-full h-auto absolute bottom-1 right-1 justify-end">
        {error && (
          <div className="w-auto p-4 h-auto flex items-center justify-center rounded-md gradient-05-v2 sm;gradient-05 shadow-sm shadow-red-600">
            <span className="paragraph-v1 text-white uppercase">
              Algo a salido mal, reintente mas tarde
            </span>
          </div>
        )}
        {success && (
          <div className="w-auto p-4 h-auto flex items-center justify-center rounded-md gradient-05-v2 sm:gradient-05 shadow-sm shadow-green-400">
            <span className="paragraph-v1 text-white text-center">
              Mensaje enviado. En breve estaremos en contacto.
            </span>
          </div>
        )}
      </div>
    </form>
  )
}

export default Contact
