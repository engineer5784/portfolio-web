'use client';
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Formar la solicitud para enviar datos al servidor.
    const options = {
      // El método es POST porque estamos enviando datos.
      method: "POST",
      // Indicar al servidor que estamos enviando JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // El cuerpo de la solicitud es el JSON que creamos arriba.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Mensaje enviado.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
    id="contact"
    className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Fondo circular */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-1">
        <h5 className="text-xl font-bold text-white my-2">
          Conectémonos
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Actualmente ofrecemos soluciones tecnológicas de vanguardia, nuestra bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haremos todo lo posible por responderte!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Icono de Github" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Icono de Linkedin" />
          </Link>
        </div>
      </div>
      <div>
        {/* Mostrar mensaje de éxito */}
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            ¡Correo electrónico enviado con éxito!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Tu correo electrónico
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="ingenieros5784@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Asunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Sólo para saludar"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hablemos sobre..."
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

