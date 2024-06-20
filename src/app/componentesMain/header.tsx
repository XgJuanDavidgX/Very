'use client'

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { counterContext } from '../context/counterContext'

export default function Header() {

const { cambiarTema, imagen } = useContext(counterContext)
  
  const [EsHover, setEsHover] = useState(false);
  const [menu, setMenu] = useState('desactivado')
  const [boton, setBoton] = useState({
    icono: <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white" x="0px" y="0px" width="1.5rem" height="1.5rem" viewBox="0 0 50 50"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path></svg>,
    estilo: 'translate-x-[-400px]'
  })

  const cambiarMenu = () => {
    setMenu(menuPrevio => menuPrevio == 'desactivado' ? 'activado' : 'desactivado')
  }

  useEffect(() => {
    if (menu === 'activado') {
      setBoton({
        icono: <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white" x="0px" y="0px" width="1.5rem" height="1.5rem" viewBox="0 0 50 50"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path></svg>,
        estilo: 'translate-x-[0px]'
      })
    } else {
      setBoton({
        icono: <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white" x="0px" y="0px" width="1.5rem" height="1.5rem" viewBox="0 0 50 50"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path></svg>,
        estilo: 'translate-x-[-400px]'
      })
    }
  }, [menu])
  
    const administrarHover = () => {
      setEsHover(!EsHover);
    };

  return (
    <>
    <div className={`w-[300px] h-[100vh] fixed bg-white z-[100] shadow dark:bg-gray-800 ${boton.estilo} transition-transform duration-500 ease-in-out min-[800px]:hidden`}>
        <Link href="/"><Image src={imagen.logo} width="120" height="52" alt="logoVery" className="ml-2 my-6"></Image></Link>
        <div className="flex flex-col gap-4">
          <Link href="/#Apps" className="text-gray-500 px-4 font-medium hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-100">Apps</Link>
          <Link href="/#Very" className="text-gray-500 px-4 font-medium hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-100">Very</Link>
          <Link href="/#Beneficios" className="text-gray-500 px-4 font-medium hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-100">Beneficios</Link>
          <Link href="/#Testimonios" className="text-gray-500 px-4 font-medium hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-100">Testimonios</Link>
          <Link href="/#Sitios" className="text-gray-500 px-4 font-medium hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-100">Sitios</Link>
          <hr className="mx-4"></hr>
          <Link href="/tutoriales/usuarios" className="text-gray-500 px-6 font-medium hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-100">Tutoriales</Link>
          <Link href="/blog" className="text-gray-500 px-6 font-medium hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-100">Blogs</Link>
          <Link href="/asistencia" className="text-gray-500 px-6 font-medium hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-100">Asistencia</Link>
          <hr className="mx-4"></hr>
          <button className="bg-black text-white mx-4 py-2 rounded-md dark:text-black dark:bg-yellow-400"><Link href='/registrate'>Regístrate</Link></button>
        </div>
      </div>

      <header className="flex pt-4">
        <div className="flex w-[90vw] mx-auto justify-between min-[800px]:justify-around min-[800px]:w-[100vw]">
          <div className="flex">
            <div className="mr-8">
              <Link href='/'><Image src={imagen.logo} width="120" height="52" alt="logoVery"></Image></Link>
            </div>
              <div className="hidden min-[800px]:flex items-center justify-center flex-wrap">
                <Link href="/" className="px-4 font-medium dark:text-white">Inicio</Link>
                <Link href="/#Apps" className="px-4 font-medium dark:text-white">Apps</Link>
                <Link href="/#Very" className="px-4 font-medium dark:text-white">Very</Link>
                <Link href="/#Beneficios" className="px-4 font-medium dark:text-white">Beneficios</Link>
                <Link href="/#Testimonios" className="px-4 font-medium dark:text-white">Testimonios</Link>
                <Link href="/#Sitios" className="px-4 font-medium dark:text-white">Sitios</Link>
                <div className='relative cursor-pointer'>
                  <h1 className='px-4 font-medium dark:text-white' onMouseEnter={administrarHover}>Más <span className='font-black'>⌵</span></h1>
                  <div className={`bg-white w-[10rem] z-[200] shadow-md border border-slate-200 border-opacity-60 rounded-[0.3rem] absolute top-10 left-0 shadow-slate-200 dark:bg-gray-700 dark:border-0 dark:shadow-none ${EsHover ? 'flex flex-col' : 'hidden'}`} onMouseLeave={administrarHover}>
                    <Link href='/tutoriales/usuarios' className='px-4 font-medium opacity-70 my-2 hover:text-orange-500 dark:text-white dark:hover:text-yellow-400'>Tutoriales</Link>
                    <Link href='blog' className='px-4 font-medium opacity-70 my-2 hover:text-orange-500 dark:text-white dark:hover:text-yellow-400'>Blog</Link>
                    <Link href='asistencia' className='px-4 font-medium opacity-70 my-2 hover:text-orange-500 dark:text-white dark:hover:text-yellow-400'>Asistencia</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-white items-center">
              <div className="flex relative bg-black w-10 h-6 rounded-full justify-around items-center mr-8 px-6 cursor-pointer dark:bg-yellow-400" onClick={cambiarTema}>
                <div className="absolute left-[2px] z-30 bg-white rounded-full w-5 h-5 transition-transform dark:translate-x-[1.5rem] dark:bg-black"></div>
                <p className='absolute left-[2px]'>🌑</p>
                <p className='absolute right-[2px]'>🔅</p>
              </div>
              <button className="hidden bg-black text-white px-4 py-2 rounded-md min-[800px]:block dark:text-black dark:bg-yellow-400"><Link href='/registrate'>Regístrate</Link></button>
              <button className="block bg-transparent min-[800px]:hidden" onClick={cambiarMenu}>{boton.icono}</button>
            </div>
        </div>
        </header>
    </>
  )
}
