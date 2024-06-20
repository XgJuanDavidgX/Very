import React from 'react'
import Image from 'next/image'

export const Apps = () => {
  return (
    <section>
        <h1 className="text-[2.7rem] lg:text-6xl text-center font-extrabold mb-10 dark:text-white">Descarga la app</h1>
        <p className="text-[1.2rem]/[2rem] w-[90%] mx-auto text-center font-[350] mb-10 dark:text-gray-300">¡Únete a la revolución del transporte con "Very"! Descarga la aplicación ahora para <br/> una experiencia de viaje más fácil, segura y eficiente.</p>
        <div className="flex flex-col justify-center items-center lg:flex-row w-screen">

          <div className="flex flex-col items-center mb-20 lg:mb-0 lg:mr-8">
            <div className="w-[9vw] h-[6vh] bg-black rounded-full flex justify-center items-center mb-10 lg:w-[3vw] dark:bg-yellow-800">
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv fill-white w-[50%] dark:fill-yellow-300" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AppleIcon"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg>
            </div>
            <div className="relative w-[100%]">
                <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiosqr.454ceba8.png&w=384&q=75" alt='fotocelular' width='320' height='608' className="rounded-[4rem] w-[90%] m-auto h-[608px]"></Image>
              <div className="absolute w-[100%] top-0">
                <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiphone-mockup.1daaa06f.png&w=750&q=75" alt='celular' width='320' height='608' className="z-30 h-[608px]"></Image>
              </div>
            </div>
          </div>
          
          {/*<hr className="w-[30vw] mx-10"></hr>*/}

          <div className="flex flex-col items-center lg:ml-8 mb-10 lg:mb-0">
            <div className="w-[9vw] h-[6vh] bg-black rounded-full flex justify-center items-center mb-10 lg:w-[3vw] dark:bg-yellow-800">
              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv fill-white w-[50%] dark:fill-yellow-300" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AndroidIcon"><path d="m17.6 9.48 1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52M7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25"></path></svg>
            </div>
            <div className="relative w-[100%]">
                <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fandroqr.c997a75b.png&w=384&q=75" alt='fotocelular' width='320' height='608' className="rounded-[4rem] w-[90%] m-auto h-[608px]"></Image>
              <div className="absolute w-[100%] top-0">
                <Image src="https://taxivery.mx/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiphone-mockup.1daaa06f.png&w=750&q=75" alt='celular' width='320' height='608' className="z-30 m-auto h-[608px]"></Image>
              </div>
            </div>
          </div>
          </div>
      </section>
  )
}
