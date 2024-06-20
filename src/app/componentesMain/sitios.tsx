import React from 'react'
import Image from 'next/image'

export const Sitios = () => {
  return (
    <section>
        <div className="w-screen">
          <h1 className="text-[2.5rem] text-center font-extrabold mb-10 lg:text-6xl dark:text-white">Disponible en</h1>
          <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmapVery.6abbbeb7.png&w=828&q=75" alt='mapa' width='800' height='800' className="m-auto"></Image>
        </div>
      </section>
  )
}
