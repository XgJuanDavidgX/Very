'use client'

import React from 'react'
import NavMenu from '../tutoriales/navmenu'
import Image from 'next/image'
import { useContext } from 'react'
import { counterContext } from '../context/counterContext'
import { Contactar } from '../componentesMain/contactar'
import { Footer } from '../componentesMain/footer'
import Link from 'next/link'

export default function Registrate() {

  const { imagen } = useContext(counterContext)

  return (
    <>
    <NavMenu/>
    <div className='pt-12 dark:bg-[#18171c]'>
      <div className='relative'>
        <Image src='https://taxivery.mx/_next/image?url=%2Fimages%2Fwhitecon.png&w=1080&q=75' alt='conductor' width='1080' height='607' className='w-screen dark:opacity-50'></Image>
        <div className='h-[50%] my-auto absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-around items-center'>
          <h3 className='font-bold dark:text-white lg:text-4xl'>Conviértete en conductor <span className='dark:text-yellow-400'>Very</span></h3>
          <button className='font-bold bg-black text-white w-[110px] py-2 rounded-md dark:text-black dark:bg-yellow-400'><Link href="/contactar">Contactar</Link></button>
        </div>
      </div>

      <section className='bg-yellow-500 mx-[5%] my-[10%] rounded-lg py-[5vh] lg:flex items-center'>
        <h1 className='text-center mb-[3vh] text-[2.5rem]/[3rem] font-black lg:ml-[1%]'>Descarga nuestra aplicación <span className='text-white'>gratuita</span></h1>
        <div className='flex justify-around lg:w-[60%]'>
          <div className='flex items-center'><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv w-[25px] h-[25px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AppleIcon"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg><Image src='https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FiosRegisterQr.df9d5b62.png&w=128&q=75' alt='qras' width='128' height='128'></Image></div>
          <div className='flex items-center'><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv w-[25px] h-[25px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AndroidIcon"><path d="m17.6 9.48 1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52M7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25"></path></svg><Image src='https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FiosRegisterQr.df9d5b62.png&w=128&q=75' alt='qrps' width='128' height='128'></Image></div>
        </div>
      </section>

      <section className='w-[90vw] mx-auto mb-[8vh] lg:flex'>
        <div className='lg:w-[60%]'>
          <h1 className='mb-[3vh] text-[2.5rem]/[3rem] text-b font-black dark:text-white'>¿Cómo comenzar?</h1>
          <h3 className='text-gray-700 my-6 dark:text-gray-300'>1. Descarga la aplicación de very</h3>
          <p className='text-gray-700 my-6 dark:text-gray-300'>Descarga la aplicación Very.- Ve a la tienda de aplicaciones correspondiente a tu sistema operativo, descarga e instala la aplicación en tu equipo.</p>
          <h3 className='text-gray-700 my-6 dark:text-gray-300'>2. Regístrate</h3>
          <p className='text-gray-700 my-6 dark:text-gray-300'>Proporciona tus datos básicos, correo y teléfono celular.</p>
          <h3 className='text-gray-700 my-6 dark:text-gray-300'>3. Entrega de información</h3>
          <p className='text-gray-700 my-6 dark:text-gray-300'>Te contactaremos por correo y/o mensajería de texto para darte las instrucciones para entregar copia de los documentos de identidad y de tu licencia de conductor.</p>
          <h3 className='text-gray-700 my-6 dark:text-gray-300'>4. Inicia en Very</h3>
          <p className='text-gray-700 my-6 dark:text-gray-300'>Te daremos tus credenciales para iniciar a operar en very. Abre la aplicación y deja que te encuentren tus pasajeros.</p>
        </div>
        <Image src='https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FveryCel.3f189be5.png&w=384&q=75' alt='celular' width='370' height='600' className='mx-auto'></Image>
      </section>

      <Contactar/>

      <Footer imagen={imagen}/>
    </div>
    </>
  )
}
