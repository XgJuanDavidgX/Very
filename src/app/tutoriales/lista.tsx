'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Lista() {

  const pathname = usePathname()

  return (
    <section>
        <ul className='w-[80vw] mx-auto flex justify-center flex-wrap lg:block lg:w-[25vw] xl:w-[20vw] lg:mr-[3vw]'>
          <Link href="/tutoriales/usuarios"><li className={`bg-[#f9f9f9] shadow-md hover:bg-[#f3f3f3] border border-slate-300 border-opacity-60 rounded-[0.3rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-[#423e4b] dark:hover:bg-[rgb(96,91,109)] dark:border-[#35323c] dark:text-gray-300 ${pathname === "/tutoriales/usuarios" ? 'text-yellow-500 font-medium hover:text-white hover:bg-yellow-500 dark:text-gray-100 dark:bg-yellow-500 dark:bg-opacity-30 dark:hover:bg-yellow-500 dark:hover:bg-opacity-40' : ''}`}><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className={`fill-current text-yellow-500 dark:text-gray-400 ${pathname === "/tutoriales/usuarios" ? 'hover:text-white' : ''}`} d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z"></path></svg>Para usuarios</li></Link>
          <Link href="/tutoriales/conductores"><li className={`bg-[#f9f9f9] shadow-md hover:bg-[#f3f3f3] border border-slate-300 border-opacity-60 rounded-[0.3rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-[#423e4b] dark:hover:bg-[rgb(96,91,109)] dark:border-[#35323c] dark:text-gray-300 ${pathname === "/tutoriales/conductores" ? 'text-yellow-500 font-medium hover:text-white hover:bg-yellow-500 dark:text-gray-100 dark:bg-yellow-500 dark:bg-opacity-30 dark:hover:bg-yellow-500 dark:hover:bg-opacity-40' : ''}`}><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-yellow-500 dark:text-gray-400" d="M8 3l4 4H4zM8 13L4 9h8zM1 0h14v2H1zM1 14h14v2H1z"></path></svg>Para conductores</li></Link>              
          <Link href="/tutoriales/plataforma"><li className={`bg-[#f9f9f9] shadow-md hover:bg-[#f3f3f3] border border-slate-300 border-opacity-60 rounded-[0.3rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-[#423e4b] dark:hover:bg-[rgb(96,91,109)] dark:border-[#35323c] dark:text-gray-300 ${pathname === "/tutoriales/plataforma" ? 'text-yellow-500 font-medium hover:text-white hover:bg-yellow-500 dark:text-gray-100 dark:bg-yellow-500 dark:bg-opacity-30 dark:hover:bg-yellow-500 dark:hover:bg-opacity-40' : ''}`}><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-yellow-500 dark:text-gray-400" d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z"></path></svg>Plataforma</li></Link>
          <Link href="/tutoriales/cancelaciones"><li className={`bg-[#f9f9f9] shadow-md hover:bg-[#f3f3f3] border border-slate-300 border-opacity-60 rounded-[0.3rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-[#423e4b] dark:hover:bg-[rgb(96,91,109)] dark:border-[#35323c] dark:text-gray-300 ${pathname === "/tutoriales/cancelaciones" ? 'text-yellow-500 font-medium hover:text-white hover:bg-yellow-500 dark:text-gray-100 dark:bg-yellow-500 dark:bg-opacity-30 dark:hover:bg-yellow-500 dark:hover:bg-opacity-40' : ''}`}><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-yellow-500 dark:text-gray-400" d="M15.4.6c-.84-.8-2.16-.8-3 0L8.7 4.3c.73.252 1.388.68 1.916 1.244.469.515.83 1.119 1.065 1.775L15.4 3.6c.8-.84.8-2.16 0-3zM4.937 6.9c-1.2 1.2-1.4 5.7-1.4 5.7s4.4-.4 5.6-1.5a2.987 2.987 0 000-4.2 2.9 2.9 0 00-4.2 0z"></path></svg>Cancelaciones</li></Link>
          <Link href="/tutoriales/aclaraciones"><li className={`bg-[#f9f9f9] shadow-md hover:bg-[#f3f3f3] border border-slate-300 border-opacity-60 rounded-[0.3rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-[#423e4b] dark:hover:bg-[rgb(96,91,109)] dark:border-[#35323c] dark:text-gray-300 ${pathname === "/tutoriales/aclaraciones" ? 'text-yellow-500 font-medium hover:text-white hover:bg-yellow-500 dark:text-gray-100 dark:bg-yellow-500 dark:bg-opacity-30 dark:hover:bg-yellow-500 dark:hover:bg-opacity-40' : ''}`}><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-yellow-500 dark:text-gray-400" d="M11 16v-5h5V0H5v5H0v11h11zM2 7h7v7H2V7z"></path></svg>Aclaraciones</li></Link>
        </ul>
    </section>
  )
}