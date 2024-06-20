'use client'

import React, { useState, useEffect } from 'react'
import { counterContext } from './counterContext'

export const StateCompo = ({children}) => {

  const [tema, setTema] = useState('light')
  const [menu, setMenu] = useState('desactivado')
  const [boton, setBoton] = useState({
    icono: <svg xmlns="http://www.w3.org/2000/svg" className="fill-black dark:fill-white" x="0px" y="0px" width="1.5rem" height="1.5rem" viewBox="0 0 50 50"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path></svg>,
    estilo: 'translate-x-[-400px]'
  })
  const [imagen, setImagen] = useState({
    logo: 'https://taxivery.mx/_next/image?url=%2Fimages%2Fdarkvery.png&w=128&q=75',
    playstore: 'https://taxivery.mx/_next/image?url=%2Fimages%2FandroidDark.png&w=128&q=75',
    appstore: 'https://taxivery.mx/_next/image?url=%2Fimages%2FappleDark.png&w=128&q=75',
  })

  const cambiarTema = () => {
    setTema(temaPrevio => temaPrevio == 'light' ? 'dark' : 'light')
  }

  const cambiarMenu = () => {
    setMenu(menuPrevio => menuPrevio == 'desactivado' ? 'activado' : 'desactivado')
  }

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (tema === 'dark') {
        body.classList.add('dark');
        setImagen({
          logo: 'https://taxivery.mx/_next/image?url=%2Fimages%2Ficonwhite.png&w=128&q=75',
          playstore: 'https://taxivery.mx/_next/image?url=%2Fimages%2FiconAndroid.png&w=128&q=75',
          appstore: 'https://taxivery.mx/_next/image?url=%2Fimages%2FiconApple.png&w=128&q=75',
        })
      } else {
        body.classList.remove('dark');
        setImagen({
          logo: 'https://taxivery.mx/_next/image?url=%2Fimages%2Fdarkvery.png&w=128&q=75',
          playstore: 'https://taxivery.mx/_next/image?url=%2Fimages%2FandroidDark.png&w=128&q=75',
          appstore: 'https://taxivery.mx/_next/image?url=%2Fimages%2FappleDark.png&w=128&q=75',
        })
      }
    }
  }, [tema])

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

  return (
    <counterContext.Provider 
    value={{
        tema,
        cambiarTema,
        menu,
        cambiarMenu,
        boton,
        setBoton,
        imagen,
        setImagen
    }}>
        { children }
    </counterContext.Provider>
  )
}
