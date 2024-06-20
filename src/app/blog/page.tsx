'use client'

import React from 'react'
import NavMenu from '../tutoriales/navmenu'
import Image from 'next/image'
import { useContext } from 'react'
import { useState } from 'react'
import { Footer } from "../componentesMain/footer"
import { counterContext } from '../context/counterContext'
import Link from 'next/link'

export default function page() {

  const { imagen } = useContext(counterContext)

    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(!isHovered);
    };

  return (
    <>
    <NavMenu/>
    <div className='dark:bg-[#18171c]'>
      <div className='w-[75vw] md:w-[60vw] lg:w-[72vw] mx-auto'>
        <article>
          <h1 className='text-center text-[3rem]/[1] md:text-[3.3rem]/[1] font-black py-24 lg:text-[4rem]/[1] md:text-start dark:text-white'>Artículos Very</h1>
          <div className='flex flex-col lg:flex-row lg:gap-12'>
            <div className='w-[100%] lg:w-[100%] relative' onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <div className={`w-[32vw] h-[40vh] bg-gray-800 absolute top-[3rem] right-0 transition-transform duration-500 hidden lg:block ${isHovered && 'translate-y-[-1.5rem] translate-x-[-1.5rem]'}`}></div>
              <Link href='../blog/blog1'><Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FoportunityOneTwo.png&w=640&q=75' alt='blog' width='490' height='300' className={`mb-6 lg:mb-0 lg:w-[32vw] lg:h-[40vh] lg:absolute top-0 right-[3rem] transition-transform duration-500 hover:scale-[1.03] ${isHovered && 'lg:hover:scale-[1] lg:translate-y-[1.5rem] lg:translate-x-[1.5rem]'}`}></Image></Link>
            </div>
            <div className='w-[100%] lg:w-[100%]'>
            <div className='flex gap-2 mb-4'>
              <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Transporte</button>
              <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Conductores</button>
            </div>
              <Link href='./blog/blog1'><h3 className='text-[1.7rem]/[1.3] font-black my-4 hover:opacity-80 lg:text-[2.2rem]/[1.3] xl:lg:text-[2.6rem]/[1.3] dark:text-white'>Very: La oportunidad definitiva para conductores en el mundo del transporte</h3></Link>
              <p className='text-gray-400 text-[1.2rem]/[1.3] my-4'>En el paisaje actual del transporte, donde la tecnología y la conectividad juegan roles fundamentales, surge "Very".</p>
              <div className='flex items-center gap-4 mt-4'>
                <Link href='./blog'><Image src='https://taxivery.mx/images/favicon.png' alt='logo' width='30' height='40' className='rounded-[1rem]'></Image></Link>
                <p className='text-gray-400'><Link href='./blog'><span className='font-medium text-black hover:text-gray-300 dark:text-white dark:hover:text-gray-400'>Very</span></Link> - Jan 20, 2024</p>
              </div>
            </div>
          </div>
        </article>

        <section>
        <h1 className='text-[1.6rem]/[1] font-black py-12 dark:text-white'>Últimos artículos</h1>
        <hr className='mb-12'></hr>
        <div className='flex w-[90%] mx-auto lg:mx-0 flex-col lg:w-[65%] lg:flex-row lg:gap-6 lg:h-[36rem]'>
          <div className='flex flex-col justify-between w-[100%] lg:w-[50%] mb-4 lg:mb-0'>
            <div>
                <div className='w-[100%]'>
                  <Link href='./blog/blog2'><Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FblogsTwo.png&w=384&q=75' alt='blog' width='384' height='213' className='transition transform duration-500 hover:scale-[1.03]'></Image></Link>
                </div>
                <div className='flex gap-2 my-4'>
                  <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Transporte</button>
                  <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Pasajeros</button>
                </div>
                <div className='w-[90%]'>
                  <Link href='./blog/blog2'><h3 className='text-[1.7rem]/[1.3] font-black my-4 hover:opacity-80 dark:text-white'>Descubre "Very": La plataforma de transporte diseñada para los pasajeros</h3></Link>
                  <p className='text-gray-400 text-[1.1rem]/[1.3] my-4 lg:my-0'>En un mundo donde la movilidad es esencial, la elección de un servicio de transporte confiable y eficiente se convierte en una prioridad para muchos.</p>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-4 my-4 lg:my-0'>
                  <Link href='./blog'><Image src='https://taxivery.mx/images/favicon.png' alt='logo' width='30' height='40' className='rounded-[1rem]'></Image></Link>
                  <p className='text-gray-400'><Link href='./blog'><span className='font-medium text-black hover:text-gray-300 dark:text-white dark:hover:text-gray-400'>Very</span></Link> - Jan 10, 2024</p>
                </div>
            </div>
          </div>

          <div className='flex flex-col justify-between w-[100%] lg:w-[50%]'>
            <div>
                <div>
                  <Link href='./blog/blog3'><Image src='https://taxivery.mx/_next/image?url=%2Fimages%2FblogsTwo.png&w=384&q=75' alt='blog' width='384' height='213' className='transition transform duration-500 hover:scale-[1.03]'></Image></Link>
                </div>
                <div>
                  <div className='flex gap-2 my-4'>
                    <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Transporte</button>
                    <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Conductores</button>
                    <button className='text-white text-xs font-medium bg-purple-500 rounded-xl px-4 h-6 hover:bg-purple-600'>Pasajeros</button>
                  </div>
                  <div className='w-[90%]'>
                    <Link href='./blog/blog3'><h3 className='text-[1.7rem]/[1.3] font-black my-4 hover:opacity-80 dark:text-white'>Very: La revolución del transporte que conecta pasajeros y conductores</h3></Link>
                    <p className='text-gray-400 text-[1.1rem]/[1.3] my-4 lg:my-0'>En el mundo en constante movimiento de hoy, la necesidad de soluciones de transporte seguras, eficientes y confiables nunca ha sido más crítica.</p>
                  </div>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-4 my-4 lg:my-0'>
                    <Link href='./blog'><Image src='https://taxivery.mx/images/favicon.png' alt='logo' width='30' height='40' className='rounded-[1rem]'></Image></Link>
                    <Link href='./blog'><p className='text-gray-400'><Link href='./blog'><span className='font-medium text-black hover:text-gray-300 dark:text-white dark:hover:text-gray-400'>Very</span></Link> - Jan 5, 2024</p></Link>
                </div>
            </div>
          </div>
        </div>
        </section>
        <hr className='mt-16'></hr>
        <Footer imagen={imagen}/>
      </div>
    </div>
    </>
  )
}
