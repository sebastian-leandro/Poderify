"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Poderify",
          from_email: form.email,
          to_email: "poderify.network@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          formRef.current.reset();
          setError(null);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setError(error.message || "An error has ocurred");
          setSuccess(false);
          setTimeout(() => {
            setError(null);
          }, 3000);
        }
      );
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col gap-8 relative"
    >
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your good name?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium">Your email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your web address?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium">Your Message</span>
        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What you want to say?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <div className="flex items-center justify-center w-fit">
        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
      <div className="flex w-full h-auto absolute bottom-1 right-1 justify-end">
        {error && (
          <div className="w-[220px] h-[40px] flex items-center justify-center rounded-md gradient-05-v2 sm;gradient-05 shadow-sm shadow-red-600">
            <span className="paragraph-v1 text-white uppercase">
              Something went wrong try again later
            </span>
          </div>
        )}
        {success && (
          <div className="w-[220px] h-[40px] flex items-center justify-center rounded-md gradient-05-v2 sm:gradient-05 shadow-sm shadow-green-400">
            <span className="paragraph-v1 text-white text-center">
              Succesfully send
            </span>
          </div>
        )}
      </div>
    </form>
  );
};

export default Contact;
