import React from 'react'
import Image from 'next/image';

type Persona = {
    id: number;
    url: string;
    opinion: string;
    nombre: string;
    tipo: string;
  };
  
  type TestimoniosProps = {
    persona: Persona;
  };

export const Testimonios: React.FC<TestimoniosProps> = ({persona}) => {
  return (
    <div className='flex flex-col items-center text-center'>
        <Image src={persona.url} alt='iconoPersona' width='56' height='56' className='rounded-full mb-4'></Image>
        <p className='text-xl text-gray-700 mb-2 dark:text-gray-300'>{persona.opinion}</p>
        <h3 className='font-bold mb-1 dark:text-white'>{persona.nombre}</h3>
        <h3 className='text-orange-700 opacity-70 font-semibold dark:text-yellow-400'>{persona.tipo}</h3>
    </div>
  )
}
