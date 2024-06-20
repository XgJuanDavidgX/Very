'use client'

import NavMenu from '@/app/tutoriales/navmenu'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { Footer } from "../../componentesMain/footer"
import { counterContext } from '../../context/counterContext'

export default function page() {

    const { imagen } = useContext(counterContext)

  return (
    <>
    <NavMenu/>
    <article className='dark:bg-[#18171c]'>
        <section className='w-[90vw] mx-auto lg:w-[55vw]'>
            <h1 className='text-center text-[3.5rem]/[1.2] font-black pt-12 pb-6 lg:text-start xl:text-[4rem]/[1.2] dark:text-white'>Descubre "Very": La plataforma de transporte diseñada para los pasajeros</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mb-4 text-center lg:text-start'>En un mundo donde la movilidad es esencial, la elección de un servicio de transporte confiable y eficiente se convierte en una prioridad para muchos.</p>
            <div className='flex flex-col justify-between content-center lg:flex-row my-4'>
                <div className='flex items-center justify-center gap-4'>
                    <Link href='#'><Image src='https://taxivery.mx/images/favicon.png' alt='logo' width='30' height='40' className='rounded-[1rem]'></Image></Link>
                    <p className='text-gray-400'><Link href='#'><span className='font-medium text-black hover:text-gray-300 dark:text-white dark:hover:text-gray-400'>Very</span></Link> - Jan 20, 2024</p>
                </div>
                <div className='flex justify-center gap-2 my-4 lg:my-0'>
                <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Transporte</button>
                <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Conductores</button>
                </div>
            </div>
        </section>
        <div className='w-[90vw] mx-auto lg:w-[70vw] flex justify-center'>
            <Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FblogsTwo.png&w=1080&q=75' alt='blog' width='900' height='500' className='lg:w-full'></Image>
        </div>
        <section className='w-[90vw] mx-auto lg:w-[55vw]'>
            <p className='text-gray-400 text-[1.2rem]/[1.3] my-8'>En un mundo donde la movilidad es esencial, la elección de un servicio de transporte confiable y eficiente se convierte en una prioridad para muchos. Aquí es donde "Very" se destaca, ofreciendo a los pasajeros una experiencia de viaje inigualable que combina comodidad, seguridad y eficacia. Esta plataforma innovadora no solo facilita la manera de moverse por la ciudad sino que redefine lo que los usuarios pueden esperar de un servicio de transporte.</p>
            <Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FblogsDise.png&w=828&q=75' alt='foto very' width='750' height='500'></Image>
            <h3 className='text-gray-600 text-[0.9rem]/[1] mt-2 mb-16 text-center dark:text-gray-400'>Foto por Very</h3>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>Viajar con confianza y comodidad</h1>
            <h2 className='text-[1.1rem]/[1.1] font-semibold md:text-start my-4 dark:text-white'>Solicitud simplificada y precisión</h2>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>"Very" ha revolucionado la forma en que los pasajeros solicitan transportes. Con una aplicación intuitiva, los usuarios pueden guardar ubicaciones frecuentes, utilizar un mapa preciso para solicitudes de viaje y disfrutar de un proceso de selección de ubicación que es extremadamente fácil de usar. Estas características aseguran que conseguir un viaje sea rápido, fácil y libre de estrés.</p>
            <h2 className='text-[1.1rem]/[1.1] font-semibold md:text-start my-4 dark:text-white'>Transparencia y comunicación en tiempo real</h2>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>Uno de los pilares de "Very" es su compromiso con la comunicación transparente. La plataforma asegura que los pasajeros estén informados en cada etapa del viaje a través de notificaciones en tiempo real. Este nivel de transparencia elimina incertidumbres y mejora la experiencia general de viaje, permitiendo a los usuarios seguir el estado de su servicio desde el momento de la solicitud hasta la llegada a su destino.</p>
            <h2 className='text-[1.1rem]/[1.1] font-semibold md:text-start my-4 dark:text-white'>Variedad de opciones para cada necesidad</h2>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>"Very" entiende que cada pasajero tiene necesidades únicas. Por ello, ofrece una amplia gama de vehículos y conductores, permitiendo a los usuarios elegir la opción que mejor se adapte a sus preferencias y requisitos. Ya sea un viaje rápido al trabajo o un servicio más espacioso para un grupo, "Very" tiene cubiertas todas las bases.</p>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>La seguridad es nuestra prioridad</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>La seguridad es un aspecto fundamental de la experiencia de "Very". La plataforma garantiza que todos los conductores sean verificados y que los pasajeros tengan acceso a herramientas de seguimiento de viajes y comunicaciones en tiempo real. Esta atención a la seguridad brinda a los usuarios una tranquilidad adicional, sabiendo que su viaje no solo es conveniente sino también seguro.</p>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>Unirse a la revolución del transporte con "Very"</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>Descargar y utilizar "Very" es unirse a una revolución del transporte que pone a los pasajeros en primer lugar. La aplicación es fácil de descargar y usar, lo que significa que acceder a un transporte seguro y confiable nunca ha sido más sencillo. Testimonios de usuarios satisfechos, como Ana Parra, quien menciona a "Very" como "una excelente alternativa para moverme por la ciudad con seguridad", subrayan el impacto positivo que "Very" ha tenido en la experiencia de transporte urbano.</p>
        </section>
        <hr className='w-[90vw] mx-auto lg:w-[70vw] mt-12 lg:mt-16'></hr>
        <Footer imagen={imagen}/>
    </article>
    </>
  )
}
