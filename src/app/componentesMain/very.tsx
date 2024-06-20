import React from 'react'
import Image from 'next/image'

export const Very = () => {
  return (
    <section>
        <div className="w-[90vw] mx-auto mb-32 lg:w-[50vw]">
          <h1 className="text-[2.5rem]/[1.3] text-center font-extrabold mb-10 lg:text-6xl dark:text-white">¡La plataforma que une a conductores y pasajeros para viajes más simples y convenientes</h1>
        </div>
        <div className="flex flex-col justify-center w-[80vw] m-auto lg:flex-row lg:w-[60vw]">
          <div className="w-[80vw]">
            <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcomputerVery.e15a2910.png&w=384&q=75" alt='computadora y celular' width='344' height='332'></Image>
          </div>
          <div className="w-[90vw]">
            <h3 className="text-[1rem]/[2rem] font-[500] mb-8 dark:text-gray-300">¿Por qué usar Very?</h3>
            <li className="font-[300] dark:text-gray-300">Para usuarios 
              <br/>Very significa viajar con confianza y comodidad. Encuentra un conductor confiable y disfruta de un viaje seguro y sin complicaciones.
            </li>
            <br></br>
            <li className="font-[300] dark:text-gray-300">Para conductores
              <br/>¿Por qué usar Very como conductor? Porque te brinda la oportunidad de aumentar tus ingresos, conectarte con pasajeros y llevar tu negocio de transporte al siguiente nivel.
            </li>
          </div>
        </div>
      </section>
  )
}
