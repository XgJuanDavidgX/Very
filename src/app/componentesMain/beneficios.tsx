import React from 'react'
import Image from 'next/image'

export const Beneficios = () => {
  return (
    <section>
        <div className="flex flex-col w-screen mx-auto lg:flex-row lg:w-[70vw]">
          <div className="w-[90vw] mx-auto lg:w-[40vw] lg:mr-24 mb-8">
            <h1 className="text-[2.5rem]/[1.2] font-extrabold mb-10 lg:text-6xl dark:text-white">¡Beneficios que encuentras en Very!</h1>
            <p className="font-[300] dark:text-gray-300">¿Por qué usar Very como conductor? Porque te brinda la oportunidad de aumentar tus ingresos, conectarte con pasajeros y llevar tu negocio de transporte al siguiente nivel.</p>
            <br></br>
            <h3 className="dark:text-gray-300">Para el conductor</h3>
            <br></br>
            <p className="font-[300] dark:text-gray-300">Very es una oportunidad de aumentar sus ingresos con flexibilidad de horarios y un flujo constante de pasajeros. La seguridad también es una prioridad, ya que tienen acceso a herramientas de comunicación en tiempo real y seguimiento de viajes, brindando tranquilidad mientras trabajan.</p>
            <br></br>
            <h3 className="dark:text-gray-300">Para el pasajero</h3>
            <br></br>
            <p className="font-[300] dark:text-gray-300">De Very experimentan comodidad y transparencia en cada viaje. Pueden solicitar un transporte en segundos, recibir actualizaciones en tiempo real y seguir el estado del viaje. Además, tienen una amplia variedad de opciones de vehículos y conductores para elegir, adaptándose a sus necesidades y preferencias.</p>
          </div>
          <div className="w-[70%] mx-auto lg:w-auto">
            <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftax.6e1c839f.png&w=384&q=75" alt='celular' width='344' height='568'></Image>
          </div>
        </div>
      </section>
  )
}
