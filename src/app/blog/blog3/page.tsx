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
            <h1 className='text-center text-[3.5rem]/[1.2] font-black pt-12 pb-6 lg:text-start xl:text-[4rem]/[1.2] dark:text-white'>Very: La revolución del transporte que conecta pasajeros y conductores</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mb-4 text-center lg:text-start'>En el mundo en constante movimiento de hoy, la necesidad de soluciones de transporte seguras, eficientes y confiables nunca ha sido más crítica.</p>
            <div className='flex flex-col justify-between content-center lg:flex-row my-4'>
                <div className='flex items-center justify-center gap-4'>
                    <Link href='#'><Image src='https://taxivery.mx/images/favicon.png' alt='logo' width='30' height='40' className='rounded-[1rem]'></Image></Link>
                    <p className='text-gray-400'><Link href='#'><span className='font-medium text-black hover:text-gray-300 dark:text-white dark:hover:text-gray-400'>Very</span></Link> - Jan 20, 2024</p>
                </div>
                <div className='flex justify-center gap-2 my-4 lg:my-0'>
                <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Transporte</button>
                <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Conductores</button>
                <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Pasajeros</button>
                </div>
            </div>
        </section>
        <div className='w-[90vw] mx-auto lg:w-[70vw] flex justify-center'>
            <Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FoportunityOneTwo.png&w=1080&q=75' alt='blog' width='900' height='500' className='lg:w-full'></Image>
        </div>
        <section className='w-[90vw] mx-auto lg:w-[55vw]'>
            <p className='text-gray-400 text-[1.2rem]/[1.3] my-8'>En el mundo en constante movimiento de hoy, la necesidad de soluciones de transporte seguras, eficientes y confiables nunca ha sido más crítica. "Very" emerge como una respuesta innovadora a esta demanda, redefiniendo la experiencia de viaje para pasajeros y conductores por igual. Esta plataforma no solo facilita la conexión entre quienes buscan un medio de transporte y los conductores dispuestos a proporcionarlo, sino que también promete transformar el mercado con su modelo de suscripción único y su enfoque en la satisfacción de todas las partes involucradas.</p>
            <Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FblogsDise.png&w=828&q=75' alt='foto very' width='750' height='500'></Image>
            <h3 className='text-gray-600 text-[0.9rem]/[1] mt-2 mb-16 text-center dark:text-gray-400'>Foto por Very</h3>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>¿Qué es "Very"?</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>"Very" es una plataforma de transporte que destaca por su interfaz intuitiva y su compromiso con la comodidad y seguridad de sus usuarios. Ha sido diseñada para superar las expectativas en el ámbito del transporte. En menos de un año, pretende posicionarse como la aplicación de transporte más innovadora del país, gracias a su fácil solicitud de transporte, comunicación en tiempo real y un completo panel de control para conductores.</p>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>Beneficios para pasajeros y conductores</h1>
            <h2 className='text-[1.1rem]/[1.1] font-semibold md:text-start my-4 dark:text-white'>Para pasajeros:</h2>
            <ul className='list-disc text-gray-700 text-[1.2rem]/[1.3] ml-8 mt-4 mb-8'>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Viajes seguros y cómodos: Encuentra conductores confiables y disfruta de viajes sin complicaciones.</p></li>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Solicitud de transporte simplificada: Guarda ubicaciones frecuentes y utiliza un mapa preciso para solicitar viajes fácilmente.</p></li>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Comunicación transparente: Recibe notificaciones en tiempo real para seguir el estado del viaje.</p></li>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Variedad de opciones: Elige entre una amplia gama de vehículos y conductores según tus necesidades y preferencias.</p></li>
            </ul>
            <h2 className='text-[1.1rem]/[1.1] font-semibold md:text-start my-4 dark:text-white'>Para conductores:</h2>
            <ul className='list-disc text-gray-700 text-[1.2rem]/[1.3] ml-8 mt-4 mb-8'>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Aumento de ingresos: Mantén hasta un 25% adicional de tus ingresos gracias a su modelo de suscripción único.</p></li>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Flexibilidad y seguridad: Disfruta de horarios flexibles y acceso a herramientas de comunicación y seguimiento en tiempo real.</p></li>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Flujo constante de pasajeros: Conecta fácilmente con pasajeros y lleva tu negocio de transporte al siguiente nivel.</p></li>
            </ul>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>La tecnología detrás de Very</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>"Very" se apoya en un marco tecnológico robusto, que ha permitido desarrollar una app no solo funcional sino altamente intuitiva y estéticamente atractiva. La plataforma se beneficia de iteraciones constantes y una estrecha colaboración con usuarios finales para asegurar que cada funcionalidad responda efectivamente a sus necesidades. Desde la selección de ubicación en el mapa hasta un panel de control completo para los conductores, "Very" se ha diseñado con un enfoque en la facilidad de uso y la eficiencia operativa.</p>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>Transformación y futuro del transporte en México</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>La historia de "Very" es una de innovación y compromiso con la excelencia. Al redefinir la economía del transporte para conductores y pasajeros, "Very" no solo ofrece una alternativa más justa y conveniente sino que también está marcando el comienzo de una nueva era en el transporte mexicano. Con un año espectacular detrás, "Very" se prepara para no solo ser un jugador dominante en el mercado sino también para reescribir el futuro del transporte en México.</p>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>Al descargar y utilizar "Very", tanto pasajeros como conductores se unen a una revolución que promete viajes más simples, seguros y eficientes. Cada viaje es un paso hacia adelante en la transformación de cómo nos movemos, ofreciendo una experiencia sin precedentes que está al alcance de todos.</p>
        </section>
        <hr className='w-[90vw] mx-auto lg:w-[70vw] mt-12 lg:mt-16'></hr>
        <Footer imagen={imagen}/>
    </article>
    </>
  )
}
