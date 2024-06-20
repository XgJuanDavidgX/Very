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
            <h1 className='text-center text-[3.5rem]/[1.2] font-black pt-12 pb-6 lg:text-start xl:text-[4rem]/[1.2] dark:text-white'>Very: La oportunidad definitiva para conductores en el mundo del transporte</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mb-4 text-center lg:text-start'>En el paisaje actual del transporte, donde la tecnología y la conectividad juegan roles fundamentales, surge "Very".</p>
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
            <Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FoportunityOneTwo.png&w=1080&q=75' alt='blog' width='900' height='500' className='lg:w-full'></Image>
        </div>
        <section className='w-[90vw] mx-auto lg:w-[55vw]'>
            <p className='text-gray-400 text-[1.2rem]/[1.3] my-8'>En el paisaje actual del transporte, donde la tecnología y la conectividad juegan roles fundamentales, surge "Very", una plataforma revolucionaria diseñada no solo para mejorar la experiencia de viaje de los pasajeros sino también para empoderar a los conductores. Este innovador servicio se distingue por ofrecer a los conductores una oportunidad única de aumentar sus ingresos, mejorar su seguridad y optimizar su operación mediante una tecnología avanzada y un modelo de negocio justo.</p>
            <Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FverydThird.png&w=828&q=75' alt='foto very' width='828' height='552'></Image>
            <h3 className='text-gray-600 text-[0.9rem]/[1] mt-2 mb-16 text-center dark:text-gray-400'>Foto por Very</h3>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>Unirse a Very: Una decisión inteligente para conductores</h1>
            <h2 className='text-[1.1rem]/[1.1] font-semibold md:text-start my-4 dark:text-white'>Mayor Ingreso y flexibilidad</h2>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>"Very" propone un cambio radical en la forma en que los conductores perciben su actividad. Con un modelo de suscripción único, permite a los conductores mantener hasta un 25% adicional de sus ingresos en comparación con otras plataformas. Esta ventaja económica, combinada con la flexibilidad de horarios, ofrece a los conductores la posibilidad de maximizar su rentabilidad y adaptar su trabajo a sus necesidades y estilo de vida.</p>
            <h2 className='text-[1.1rem]/[1.1] font-semibold md:text-start my-4 dark:text-white'>Tecnología e innovación al servicio del conductor</h2>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>La aplicación "Very" se ha desarrollado con el conductor en mente, desde la solicitud simplificada de viajes hasta un panel de control completo que brinda información en tiempo real. Esta tecnología no solo facilita la conexión con pasajeros sino que también proporciona a los conductores herramientas poderosas para tomar decisiones eficaces y mejorar su rendimiento.</p>
            <h2 className='text-[1.1rem]/[1.1] font-semibold md:text-start my-4 dark:text-white'>Seguridad y tranquilidad</h2>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>La seguridad es una prioridad en "Very". La plataforma ofrece a los conductores acceso a comunicaciones en tiempo real y seguimiento de viajes, garantizando una mayor tranquilidad mientras están en el trabajo. Este enfoque en la seguridad es fundamental para crear un ambiente de trabajo confiable y seguro tanto para conductores como para pasajeros.</p>
            <h1 className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>¿Cómo convertirse en conductor de Very?</h1>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>El proceso para unirse a "Very" es sencillo y está diseñado para incorporar a conductores de manera rápida y eficiente:</p>
            <ul className='list-disc text-gray-700 text-[1.2rem]/[1.3] ml-8 mt-4 mb-8'>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Descarga la Aplicación: Disponible en las tiendas de aplicaciones, es el primer paso para entrar al mundo de "Very".</p></li>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Registro: Proporciona tus datos básicos para comenzar el proceso de afiliación.</p></li>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Entrega de Información: "Very" te contactará para completar el proceso de verificación y entrega de documentos necesarios.</p></li>
                <li><p className='text-gray-400 text-[1.2rem]/[1.3] my-6'>Inicio: Una vez verificado, recibirás tus credenciales para comenzar a operar en la plataforma y conectar con pasajeros.</p></li>
            </ul>
            <p className='text-[1.5rem]/[1.5] font-medium md:text-start dark:text-white'>Más que una plataforma, una comunidad</p>
            <p className='text-gray-400 text-[1.2rem]/[1.3] mt-4 mb-8'>"Very" no solo se presenta como una solución tecnológica avanzada para el transporte sino también como una comunidad donde conductores y pasajeros se unen en un ecosistema de respeto, seguridad y eficiencia. Al unirte a "Very", te conviertes en parte de una revolución en el transporte, una que valora y recompensa tu dedicación y esfuerzo.</p>
        </section>
        <hr className='w-[90vw] mx-auto lg:w-[70vw] mt-12 lg:mt-16'></hr>
        <Footer imagen={imagen}/>
    </article>
    </>
  )
}
