'use client'

import React from 'react'
import NavMenu from '../tutoriales/navmenu'
import { useContext } from 'react'
import { Footer } from "../componentesMain/footer"
import { counterContext } from '../context/counterContext'

export default function page() {

    const { imagen } = useContext(counterContext)

  return (
    <>
    <NavMenu />
    <section className='dark:bg-[#18171c]'>
      <div className='w-[95vw] m-auto md:w-[80vw] lg:w-[50vw]'>
        <h1 className='text-center text-[3.5rem]/[1.2] font-black pt-12 pb-6 md:text-[4rem]/[1.2] dark:text-white'>¿Cómo podemos ayudarte?</h1>
        <p className='text-gray-800 text-[1.2rem]/[1.4] mb-4 text-center dark:text-gray-400'>¡No dudes en contactarnos! Estamos aquí para ayudarte en cualquier momento. Escríbenos a nuestro equipo de soporte.</p>
        <form action="https://formsubmit.co/juandavidgarciagonzalez1@gmail.com" method="POST" className='w-[90%] md:w-[80%] m-auto'>
            <div className='md:flex md:justify-between'>
                <input type='text' name='Nombre' id='Nombre' className='w-[100%] md:w-[48%] my-3 py-3 pl-5 border-gray-400 border rounded-md dark:bg-[#292929] dark:text-white dark:placeholder-gray-200 dark:border-gray-600' placeholder='Nombre'></input>
                <input type='text' name='Apellidos' id='Apellidos' className='w-[100%] md:w-[48%] my-3 py-3 pl-5 border-gray-400 border rounded-md dark:bg-[#292929] dark:text-white dark:placeholder-gray-200 dark:border-gray-600' placeholder='Apellidos'></input>
            </div>
            <div className='flex flex-col'>
                <input type='email' name='Correo' id='Correo' className='my-3 py-3 pl-5 border-gray-400 border rounded-md dark:bg-[#292929] dark:text-white dark:placeholder-gray-200 dark:border-gray-600' placeholder='Correo electrónico'></input>
                <input type='text' name='Asunto' id='Asunto' className='my-3 py-3 pl-5 border-gray-400 border rounded-md dark:bg-[#292929] dark:text-white dark:placeholder-gray-200 dark:border-gray-600' placeholder='Asunto'></input>
                <textarea name='Mensaje' id='Mensaje' className='my-3 py-3 pl-5 border-gray-400 border rounded-md dark:bg-[#292929] dark:text-white dark:placeholder-gray-200 dark:border-gray-600' placeholder='Mensaje'></textarea>
                <input type='submit' value="Enviar" className='my-3 py-3 rounded-md text-white bg-black cursor-pointer dark:text-black dark:bg-yellow-400'></input>
                <input type="hidden" name="_next" value="http://localhost:3000/contactar"></input>
                <input type='hidden' name='_captcha' value="false"></input>
            </div>
            <hr className="my-[5vh]"></hr>
        </form>
      </div>
      <Footer imagen={imagen}/>
    </section>
    </>
  )
}
