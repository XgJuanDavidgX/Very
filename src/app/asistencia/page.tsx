'use client'

import React from 'react'
import NavMenu from '../tutoriales/navmenu'
import { Asistencia } from '../components/asistencia'
import { useState } from 'react'
import { useContext } from 'react'
import { Footer } from "../componentesMain/footer"
import { counterContext } from '../context/counterContext'
import { Contactar } from '../componentesMain/contactar'

export default function page() {

  enum FilterType {
    All = 'all',
    Pasajeros = 'pasajeros',
    Conductores = 'conductores',
    Administrativas = 'administrativas',
    Otras = 'otras',
  }

  const { imagen } = useContext(counterContext)

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const mensajes = [
    {
      "titulo": "¿Cómo puedo descargar e instalar la aplicación 'Very' para PASAJEROS en mi teléfono?",
      "texto": "Para usuarios de iOS (App Store): 1. Abrir la app store: En tu dispositivo iOS, encuentra y abre la App Store. 2. Buscar la aplicación: Utiliza la barra de búsqueda en la parte superior de la pantalla y escribe 'Very taxi'. Pulsa 'Buscar' en el teclado. 3. Seleccionar la aplicación: Busca la aplicación 'Very taxi' en los resultados de búsqueda. Asegúrate de seleccionar la aplicación correcta revisando el nombre del desarrollador y las imágenes de la aplicación. 4. Descargar e Instalar: Pulsa el botón 'Obtener' o el icono de la nube con una flecha hacia abajo si ya has descargado la aplicación anteriormente. Es posible que debas autenticarte con tu ID de Apple o utilizar Face ID o Touch ID para comenzar la descarga. 5. Abrir la Aplicación: Una vez instalada, puedes abrir 'Very taxi' directamente desde la App Store o encontrar el icono de la aplicación en la pantalla de inicio de tu dispositivo. Para Usuarios de Android (Google Play Store) 1. Abrir Google Play Store: En tu dispositivo Android, encuentra y abre Google Play Store. 2. Buscar la Aplicación: Utiliza la barra de búsqueda en la parte superior de la pantalla y escribe 'Very taxi'. Pulsa el icono de la lupa para buscar. 3. Seleccionar la Aplicación: Identifica la aplicación 'Very taxi' en los resultados de búsqueda. Confirma que es la aplicación correcta verificando el nombre del desarrollador y las capturas de pantalla. 4. Descargar e Instalar: Pulsa el botón 'Instalar' para comenzar la descarga de la aplicación en tu dispositivo. La instalación comenzará automáticamente después de la descarga. 5. Abrir la Aplicación: Una vez que la instalación haya finalizado, puedes abrir 'Very taxi' directamente desde Google Play Store o encontrar el icono de la aplicación en el menú de aplicaciones de tu dispositivo. Siguiendo estos pasos, podrás descargar y empezar a utilizar 'Very taxi' para tus necesidades de transporte, ya sea como pasajero buscando un viaje seguro y cómodo o como conductor deseando ofrecer tus servicios en la plataforma.",
      "idicon": "DownloadIcon",
      "dicon": "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
    },
    {
      "titulo": "¿Cómo puedo descargar e instalar la aplicación 'Very' para CONDUCTORES en mi teléfono?",
      "texto": "Para usuarios de iOS (App Store): 1. Abrir la app store: En tu dispositivo iOS, encuentra y abre la App Store. 2. Buscar la aplicación: Utiliza la barra de búsqueda en la parte superior de la pantalla y escribe 'Very taxi'. Pulsa 'Buscar' en el teclado. 3. Seleccionar la aplicación: Busca la aplicación 'Very taxi' en los resultados de búsqueda. Asegúrate de seleccionar la aplicación correcta revisando el nombre del desarrollador y las imágenes de la aplicación. 4. Descargar e Instalar: Pulsa el botón 'Obtener' o el icono de la nube con una flecha hacia abajo si ya has descargado la aplicación anteriormente. Es posible que debas autenticarte con tu ID de Apple o utilizar Face ID o Touch ID para comenzar la descarga. 5. Abrir la Aplicación: Una vez instalada, puedes abrir 'Very taxi' directamente desde la App Store o encontrar el icono de la aplicación en la pantalla de inicio de tu dispositivo. Para Usuarios de Android (Google Play Store) 1. Abrir Google Play Store: En tu dispositivo Android, encuentra y abre Google Play Store. 2. Buscar la Aplicación: Utiliza la barra de búsqueda en la parte superior de la pantalla y escribe 'Very taxi'. Pulsa el icono de la lupa para buscar. 3. Seleccionar la Aplicación: Identifica la aplicación 'Very taxi' en los resultados de búsqueda. Confirma que es la aplicación correcta verificando el nombre del desarrollador y las capturas de pantalla. 4. Descargar e Instalar: Pulsa el botón 'Instalar' para comenzar la descarga de la aplicación en tu dispositivo. La instalación comenzará automáticamente después de la descarga. 5. Abrir la Aplicación: Una vez que la instalación haya finalizado, puedes abrir 'Very taxi' directamente desde Google Play Store o encontrar el icono de la aplicación en el menú de aplicaciones de tu dispositivo. Siguiendo estos pasos, podrás descargar y empezar a utilizar 'Very taxi' para tus necesidades de transporte, ya sea como pasajero buscando un viaje seguro y cómodo o como conductor deseando ofrecer tus servicios en la plataforma.",
      "idicon": "ArrowCircleDownIcon",
      "dicon": "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4 4-4z"
    },
    {
      "titulo": "¿Qué métodos de pago acepta 'Very'?",
      "texto": "Proceso de pago en efectivo con tarifa preestablecida en 'Very' se distingue por ofrecer una experiencia de pago transparente y conveniente, tanto para pasajeros como para conductores, mediante el cálculo anticipado de la tarifa del viaje. Este enfoque asegura que todas las partes conozcan el costo exacto del servicio desde el inicio, eliminando sorpresas y facilitando un proceso de pago fluido. A continuación, se detallan los pasos de este proceso: 1. Establecimiento de la tarifa: Inmediatamente después de que el pasajero ingresa los puntos de partida y destino en la aplicación, 'Very' calcula y muestra la tarifa exacta del viaje. Este cálculo se basa en una combinación de factores, incluyendo distancia, tarifas estándar y condiciones del tráfico estimadas, asegurando transparencia total desde el principio. 2. Aceptación del viaje: Tanto el pasajero como el conductor pueden ver la tarifa preestablecida antes de aceptar el viaje. Esto permite que el pasajero decida si desea proceder con el servicio y que el conductor conozca el monto exacto que recibirá por el viaje. 3. Realización del viaje: Una vez aceptado el viaje por ambas partes, el conductor recoge al pasajero y realiza el viaje hasta el destino especificado, siguiendo la ruta más óptima sugerida por la aplicación para evitar desviaciones innecesarias y asegurar la eficiencia del servicio. 4. Pago en efectivo al finalizar el viaje: Al llegar al destino, el pasajero realiza el pago en efectivo directamente al conductor, basándose en la tarifa preestablecida mostrada anteriormente en la aplicación. Es recomendable que los conductores lleven suficiente cambio para facilitar esta transacción. 5. Confirmación de pago y calificaciones: Después de recibir el pago, el conductor confirma en la aplicación que el viaje ha sido pagado. Ambas partes tienen la oportunidad de calificar el servicio, lo cual contribuye a mantener altos estándares de calidad y seguridad en la comunidad de 'Very'. Este proceso de pago en efectivo con tarifa preestablecida no solo simplifica las transacciones entre pasajeros y conductores, sino que también fomenta una atmósfera de confianza y transparencia. 'Very' se compromete a ofrecer un servicio accesible y justo, donde los pasajeros pueden disfrutar de una experiencia de viaje sin complicaciones y los conductores tienen la seguridad de recibir el pago acordado por sus servicios.",
      "idicon": "AttachMoneyIcon",
      "dicon": "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4"
    },
    {
      "titulo": "¿Cómo puedo solicitar un viaje en 'Very' y seleccionar mi ubicación de recogida?",
      "texto": "Para solicitar un viaje en la aplicación, primero inicia sesión y asegúrate de estar en una zona con servicio disponible. La pantalla principal mostrará tu ubicación actual. Puedes establecer tu destino manualmente, seleccionar uno de tus últimos destinos, o usar una ubicación frecuente desde 'Mi cuenta/Pasajero'. La aplicación determinará automáticamente tu origen si no lo has configurado, basándose en tu ubicación actual, y trazará la ruta en el mapa, mostrando el costo y la posición de los conductores cercanos. Solicita el taxi con el botón correspondiente, con opciones para editar o cancelar si la información o el viaje ya no son necesarios",
      "idicon": "DriveEtaIcon",
      "dicon": "M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M5 10l1.5-4.5h11L19 10z"
    },
    {
      "titulo": "¿Qué requisitos debo cumplir para registrarme como conductor en 'Very'?",
      "texto": "1. Cumple con los Requisitos Básicos: - Ser mayor de edad. - Poseer una licencia de conducir válida. - Tener documentos de identidad y comprobante de domicilio actualizados. - Disponer de un teléfono celular inteligente con servicio de datos activo. 2. Descarga e Instala la Aplicación 'Very': - Busca la aplicación 'Very' en la App Store o Google Play Store. - Descárgala e instálala en tu teléfono celular. 3. Regístrate como Conductor: - Abre la aplicación 'Very' y selecciona la opción para registrarte como conductor. - Completa el formulario de registro con tu información personal, datos de contacto y detalles específicos solicitados por la plataforma. 4. Sube la Documentación Requerida: - Utiliza la aplicación para subir copias claras y legibles de tu licencia de conducir, documentos de identidad y comprobante de domicilio. - Asegúrate de que todos los documentos estén vigentes y correspondan a la información que proporcionaste durante el registro. 5. Completa el Proceso de Verificación: - Sigue las instrucciones de 'Very' para completar el proceso de verificación. Esto puede incluir verificaciones de antecedentes, revisión de documentos y posiblemente una entrevista o evaluación en línea. 6. Espera la Aprobación: - Una vez enviado tu registro y documentos, 'Very' revisará tu solicitud. - Espera la notificación de aprobación por parte de 'Very'. Este proceso puede variar en tiempo dependiendo de la demanda y los procedimientos internos de verificación. 7. Inicia como Conductor de 'Very': - Tras recibir la confirmación de aprobación, podrás comenzar a aceptar viajes y trabajar como conductor de 'Very'.",
      "idicon": "PermIdentityIcon",
      "dicon": "M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"
    },
    {
      "titulo": "¿Cómo funciona el sistema de calificaciones y comentarios en 'Very'?",
      "texto": "El sistema de calificaciones de 'Very' permite a pasajeros y conductores asignarse mutuamente puntuaciones de 1 a 5 estrellas tras cada viaje, siendo opcional esta valoración. En viajes cancelados, solo quien cancela puede calificar. Las calificaciones individuales no son visibles públicamente; los usuarios solo pueden ver su promedio general y el número de viajes evaluados en la sección 'calificación'. No existe un sistema de comentarios, limitándose la interacción a las estrellas. El promedio de calificaciones refleja la percepción general sin afectarse por abstenciones, fomentando así un ambiente de confianza y seguridad en la plataforma.",
      "idicon": "ThumbUpIcon",
      "dicon": "M1 21h4V9H1zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73z"
    },
    {
      "titulo": "¿Qué hago si tengo un problema o emergencia durante un viaje?",
      "texto": "Si tienes un problema o emergencia durante un viaje en 'Very', es importante saber cómo obtener ayuda de manera rápida y eficiente. 'Very' ofrece dos medios directos de comunicación para enfrentar estas situaciones: 1. Llamada telefónica para EMERGENCIAS: - En caso de emergencia, puedes llamar al número proporcionado por 'Very': 800 333 33 33. Este número está destinado a ofrecer asistencia inmediata para situaciones urgentes, asegurando que recibas el apoyo necesario lo más pronto posible. 2. Correo electrónico para problemas no urgentes: - Si te encuentras con un problema que no requiere atención inmediata, envía un correo electrónico a contacto@taxivery.mx. Asegúrate de incluir todos los detalles relevantes sobre tu viaje y la naturaleza del problema. 'Very' se compromete a proporcionar una solución eficaz tras recibir tu mensaje. Recuerda tener a mano tu información de usuario y los detalles del viaje al momento de contactar a 'Very' por cualquiera de estos medios. Esto facilitará el proceso de asistencia y permitirá una resolución más rápida de tu situación.",
      "idicon": "ReportProblemIcon",
      "dicon": "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"
    },
]


const handleFilterChange = (filterType: FilterType) => {
  setFilter(filterType);
};

// Filtrar mensajes según el filtro seleccionado
let filteredMensajes = mensajes;
  switch (filter) {
    case FilterType.Pasajeros:
      filteredMensajes = [mensajes[0], mensajes[3]];
      break;
    case FilterType.Conductores:
      filteredMensajes = [mensajes[1], mensajes[4]];
      break;
    case FilterType.Administrativas:
      filteredMensajes = [mensajes[2]];
      break;
    case FilterType.Otras:
      filteredMensajes = [mensajes[5], mensajes[6]];
      break;
    default:
      filteredMensajes = mensajes;
      break;
  }
  
  return (
    <>
    <NavMenu/>
    <section className='bg-gray-100 dark:bg-[#18171c]'>
      <div className='w-[80vw] m-auto lg:w-[50vw]'>
        <h1 className='text-center text-[4rem]/[1.2] font-black pt-12 pb-6 xl:text-[4rem]/[1.2] dark:text-white'>¿Cómo podemos ayudarte?</h1>
        <p className='text-gray-800 text-[1.2rem]/[1.3] mb-4 text-center dark:text-gray-400'>En Very, brindamos asistencia y soporte para conductores y pasajeros, incluyendo temas administrativos y dudas sobre nuestras plataformas.</p>
        <div className='lg:w-[70%] mx-auto flex relative'>
          <button><svg className="w-4 h-4 absolute left-0 z-40 ml-4 bottom-[3.2rem]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current dark:text-black-50" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"></path></svg></button>
          <input value={searchTerm} onChange={handleSearch} className='my-10 w-full py-2 pl-10 border-gray-500 border rounded-md dark:bg-yellow-600 dark:text-black dark:placeholder-black' placeholder='Escribe una palabra clave relacionada con tu duda'></input>
        </div>
      </div>
    </section>
    <section className='pt-10 dark:bg-[#121215]'>
      <section>
      <ul className='w-[90vw] md:w-[80vw] mx-auto flex justify-center flex-wrap gap-4'>
        <button onClick={() => handleFilterChange(FilterType.All)}><li className='bg-[#f9f9f9] shadow-md hover:bg-yellow-500 border border-slate-300 border-opacity-60 rounded-[1rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:border-[#35323c] dark:text-gray-300'><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-black-50 dark:text-black-50" d="M11 7H1a1 1 0 000 2h10v3l5-4-5-4v3zM8 3H1a1 1 0 010-2h7a1 1 0 010 2zM8 15H1a1 1 0 010-2h7a1 1 0 010 2z"></path></svg>Ver todo</li></button>
        <button onClick={() => handleFilterChange(FilterType.Pasajeros)}><li className='bg-[#f9f9f9] shadow-md hover:bg-yellow-500 border border-slate-300 border-opacity-60 rounded-[1rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:border-[#35323c] dark:text-gray-300'><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-black-50" d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z"></path></svg>Pasajeros</li></button>        
        <button onClick={() => handleFilterChange(FilterType.Conductores)}><li className='bg-[#f9f9f9] shadow-md hover:bg-yellow-500 border border-slate-300 border-opacity-60 rounded-[1rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:border-[#35323c] dark:text-gray-300'><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-black-50" d="M12.071 0L15 2.929v4.142L12.071 10H12V7.101L7.9 3H5v-.071L7.929 0h4.142zm-5 5L10 7.929v4.142L7.071 15H2.929L0 12.071V7.929L2.929 5h4.142z"></path></svg>Conductores</li></button>
        <button onClick={() => handleFilterChange(FilterType.Administrativas)}><li className='bg-[#f9f9f9] shadow-md hover:bg-yellow-500 border border-slate-300 border-opacity-60 rounded-[1rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:border-[#35323c] dark:text-gray-300'><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-black-50" d="M1 0h8a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm14.124 4.085v-.001a1 1 0 01.868 1.116l-1.243 9.932a1 1 0 01-1.117.868l-7.938-1 .248-1.988 6.946.871.995-7.938-2.007-.251.248-1.984 3 .375z"></path></svg>Administrativas</li></button>
        <button onClick={() => handleFilterChange(FilterType.Otras)}><li className='bg-[#f9f9f9] shadow-md hover:bg-yellow-500 border border-slate-300 border-opacity-60 rounded-[1rem] m-1 w-[12rem] lg:w-full py-1 flex items-center justify-center lg:justify-start lg:pl-4 lg:py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:border-[#35323c] dark:text-gray-300'><svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="fill-current text-black-50" d="M13.172 5.178l-2.39-2.39 2.39-2.39C12.674.1 12.076 0 11.479 0a4.462 4.462 0 00-4.481 4.48c0 .499.1.897.199 1.395l-6.572 4.88c-.797.597-.797 1.692-.2 2.389l2.291 2.39c.697.697 1.792.597 2.39-.2l4.88-6.571c.497.1.995.199 1.493.199 2.49 0 4.48-1.992 4.48-4.481 0-.598-.099-1.195-.298-1.693l-2.49 2.39z"></path></svg>Otras</li></button>
      </ul>
      </section>
      <section>
        <Asistencia mensajes={filteredMensajes} searchTerm={searchTerm}/>
      </section>
      <Contactar />
      <Footer imagen={imagen}/>
    </section>
    </>
  )
}
