import React from 'react'
import { Testimonios } from '../components/testimonios'

export const TestimoniosFull = () => {

    const personas = [
        {
          id: 0,
          url: 'https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcoffePassenger.1ebe5ed8.png&w=64&q=75',
          opinion: '“ Una excelente alternativa para moverme por la ciudad con seguridad “',
          nombre: '—Ana Parra,',
          tipo: 'Pasajera'
        },
        {
          id: 1,
          url: 'https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FblaPassenger.be123948.png&w=64&q=75',
          opinion: '“ La plataforma más justa para operar con aplicaciones “',
          nombre: '—Elena Baes,',
          tipo: 'Conductor'
        },
        {
          id: 2,
          url: 'https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FchiPassenger.b5a61906.png&w=64&q=75',
          opinion: '“ Con Very finalmente tengo acceso al mayor grupo de conductores de la ciudad “',
          nombre: '—Ana Parra,',
          tipo: 'Pasajera'
        },
        {
          id: 3,
          url: 'https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyellowPassenger.cf8c3bef.png&w=64&q=75',
          opinion: '“La herramienta que necesitaba para aumentar mis ingresos “',
          nombre: '—Elena Baes,',
          tipo: '—Carlos Lara,'
        },
      ]
      
  return (
    <section className="w-screen mt-20 lg:mt-40" id="Testimonios">
      <div className="w-[70vw] mx-auto">
        <div className="flex flex-col mb-12 lg:flex-row gap-12 lg:gap-0">
          <Testimonios persona={personas[0]}/>
          <Testimonios persona={personas[1]}/>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          <Testimonios persona={personas[2]}/>
          <Testimonios persona={personas[3]}/>
        </div>
      </div>
    </section>
  )
}
