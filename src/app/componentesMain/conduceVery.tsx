import React from 'react'
import Image from 'next/image'

export const ConduceVery = () => {
  return (
    <section className="flex flex-col items-center mb-[10vh] w-[80vw] text-center m-auto mt-20 justify-around lg:flex-row lg:text-left">
        <div className="flex flex-col items-center justify-center lg:w-[45vw] lg:items-start mb-10 lg:mb-0">
          <h1 className="text-[3.5rem]/[1] lg:text-[5.5rem]/[1] font-extrabold mb-10 dark:text-white">Conduce <span className="dark:text-yellow-400">Very</span></h1>
          <p className="text-[1.2rem]/[2rem] font-[350] mb-5 lg:mb-10 dark:text-gray-300">"Very" destaca por su fácil solicitud de transporte, comunicación en tiempo real y un completo panel de control para conductores.</p>
          <ul>
            <li className="flex items-center font-[350] my-2 dark:text-gray-300"><svg className="w-3 h-3 fill-current text-teal-1300 mr-6 lg:mr-2 shrink-0 text-orange-300" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path></svg>Solicitud simplificada: Guarda ubicaciones y utiliza un mapa preciso.</li>
            <li className="flex items-center font-[350] my-2 dark:text-gray-300"><svg className="w-3 h-3 fill-current text-teal-1300 mr-6 lg:mr-2 shrink-0 text-orange-300" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path></svg>Comunicación transparente: Notificaciones en tiempo real para seguimiento constante.</li>
            <li className="flex items-center font-[350] my-2 dark:text-gray-300"><svg className="w-3 h-3 fill-current text-teal-1300 mr-6 lg:mr-2 shrink-0 text-orange-300" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path></svg>Panel de control completo para conductores: Datos en tiempo real para decisiones eficaces.</li>
          </ul>
        </div>
        <div>
          <div className="w-[100%] relative">
              <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwomanVeryCar.8bf72c6a.png&w=384&q=75" alt='fotocelular' width='300' height='608' className="rounded-[4rem] w-[90%] m-auto h-[608px]"></Image>
            <div className="absolute w-[100%] top-0">
              <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiphone-mockup.1daaa06f.png&w=750&q=75" alt='celular' width='320' height='608' className="z-30 m-auto h-[608px]"></Image>
            </div>
            <a href="https://taxivery.mx/videos/video.mp4" target="_blank"><img src="https://taxivery.mx/_next/static/media/play-button.a936e120.svg" className="absolute m-auto top-0 bottom-0 left-0 right-0 z-50"></img></a>
          </div>
        </div>
      </section>
  )
}
