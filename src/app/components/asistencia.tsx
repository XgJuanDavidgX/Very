import React from 'react'
import { useState } from 'react';

type Mensaje = {
    titulo: string;
    texto: string;
    idicon: string;
    dicon: string;
  };
  
  type AsistenciaProps = {
    mensajes: Mensaje[];
    searchTerm?: string;
  };


export const Asistencia: React.FC<AsistenciaProps> = ({mensajes, searchTerm = ''}) => {

    const filteredMensajes = mensajes.filter((mensaje) => {
        return (
          mensaje.titulo.toLowerCase().includes(searchTerm.toLowerCase())/*  ||
          mensaje.texto.toLowerCase().includes(searchTerm.toLowerCase()) */
        );
      });

      const [parrafosVisibles, setParrafosVisibles] = useState<boolean[]>(new Array(mensajes.length).fill(false));

  const toggleParrafoVisibility = (index: number) => {
    setParrafosVisibles((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Cambia el estado del párrafo específico
      return newState;
    });
  };

  return (
    <>
    {filteredMensajes.map((msj, index) => (
    <div className='border shadow w-[90vw] md:w-[75vw] mx-auto my-8 dark:bg-[#18171c] dark:border-black'>
      <div className='flex w-[100%] items-center justify-between px-5 md:px-10 py-10'>
        <div className='flex items-center'>
          <svg className="MuiSvgIcon-root h-[50px] font-semibold fill-gray-800 dark:fill-yellow-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid={msj.idicon}><path d={msj.dicon}></path></svg>
          <h2 className='text-gray-800 text-[1.1rem]/[1.1] md:text-[1.2rem]/[1.1] font-medium md:font-semibold md:text-start p-4 dark:text-gray-400'>{msj.titulo}</h2>
        </div>
        <button onClick={() => toggleParrafoVisibility(index)} className={`text-black dark:text-white transition-all ${parrafosVisibles[index] ? 'rotate-180' : ''}`}><svg className="MuiSvgIcon-root h-[25px] fill-gray-800 dark:fill-yellow-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></button>
      </div>
        <p className={`text-gray-800 text-[1rem]/[1.3] md:text-[1rem]/[1.3] px-10 pb-10 dark:text-gray-400 ${parrafosVisibles[index] ? '' : 'hidden'}`}>{msj.texto}</p>
    </div>
    ))}
    </>
  )
}