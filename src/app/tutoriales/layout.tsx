'use client'

import React from 'react'
import NavMenu from './navmenu'
import Lista from './lista'
import { useContext } from 'react'
import { counterContext } from '../context/counterContext'
import { Footer } from '../componentesMain/footer'

export default function Layout(
    {children} : {children: React.ReactNode}
)
{
    const { imagen } = useContext(counterContext)

  return (
    <div className='bg-gray-100 dark:bg-[#18171c]'>
        <NavMenu/>
        <div className='w-[90vw] mx-auto lg:w-[95%] xl:w-[80%]'>
            <div className='pt-14 pb-7 lg:pt-20'>
                <h1 className='text-[2.5rem]/[3rem] font-bold lg:text-[3.5rem]/[4rem] lg:font-extrabold dark:text-gray-200'>¡Conoce todas las funcionalidades y herramientas de very!</h1>
            </div>
            <p className='text-[1.2rem]/[1.5rem] font-[400] text-gray-700 dark:text-gray-400'>Descubre una experiencia aún más enriquecedora al explorar una amplia variedad de guías instructivas que te ayudarán a familiarizarte con todas las funcionalidades que Very tiene para ofrecer.</p>
            <div className='flex flex-col pt-10 lg:flex-row lg:pt-16'>
                <Lista/>
                <div className='flex flex-wrap justify-center lg:justify-start gap-8 pt-10 lg:pt-0'>
                {children}
                </div>
            </div>

            <hr className="my-[5vh] lg:my-[15vh]"></hr>

            <Footer imagen={imagen}/>
        </div>
    </div>
  )
}
