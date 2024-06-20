import React from 'react'

type Imagen = {
    logo: string;
    playstore: string;
    appstore: string;
  };
  
  type FooterProps = {
    imagen: Imagen;
  };

export const Footer: React.FC<FooterProps> = ({imagen}) => {
  return (
    <footer>
        <div className="w-[90vw] mx-auto py-16 lg:w-[70vw]">
          <div className="flex mb-8 gap-10 lg:gap-0">
            <div className="w-[60%] lg:w-[40%]">
              <img src={imagen.logo} className="mb-8"></img>
              <div className="flex flex-col h-[50%] justify-center lg:flex-row lg:justify-between lg:h-auto">
                <a href="https://play.google.com/store/apps/details?id=com.very.pasajeros&pli=1" target="_blank"><img src={imagen.playstore} className="cursor-pointer"></img></a>
                <a href="https://apps.apple.com/mx/app/very-taxi/id6472556733" target="_blank"><img src={imagen.appstore} className="cursor-pointer"></img></a>
              </div>
            </div>
            <div className="flex w-full gap-8 flex-wrap lg:justify-center">
              <div>
                <h3 className="text-[0.9rem]/[1] font-medium dark:text-white">COMPAÑIA</h3>
                <ul className="text-[0.9rem]/[1] text-gray-500 dark:text-gray-300">
                  <li className="my-2"><a href="#" className="hover:underline">¿Quiénes somos?</a></li>
                  <li className="my-2"><a href="#" className="hover:underline">Beneficios</a></li>
                  <li className="my-2"><a href="#" className="hover:underline">Blog</a></li>
                  <li className="my-2"><a href="#" className="hover:underline">Asistencia</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-[0.9rem]/[1] font-medium dark:text-white">PRODUCTOS</h3>
                <ul className="text-[0.9rem]/[1] text-gray-500 dark:text-gray-300">
                  <li className="my-2"><a href="#" className="hover:underline">Cupones</a></li>
                  <li className="my-2"><a href="#" className="hover:underline">Guía del conductor</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-[0.9rem]/[1] font-medium dark:text-white">DISPONIBLE EN</h3>
                <ul className="text-[0.9rem]/[1] text-gray-500 dark:text-gray-300">
                  <li className="my-2"><a href="#" className="hover:underline">Nayarit</a></li>
                  <li className="my-2"><a href="#" className="hover:underline">Nuevo León</a></li>
                  <li className="my-2"><a href="#" className="hover:underline">Baja California</a></li>
                  <li className="my-2"><a href="#" className="hover:underline">Oaxaca</a></li>
                  <li className="my-2"><a href="#" className="hover:underline">Tamaulipas</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-4 justify-between text-[0.9rem]/[1] text-gray-600 lg:flex-reverse lg:flex-row lg:gap-0 dark:text-gray-300">
            <p>© Very. Todos los derechos reservados.</p>
            <div className="flex gap-2 text-gray-600 dark:text-gray-300">
              <a href="#" className="hover:underline">Términos y condiciones</a>
              <p> · </p>
              <a href="#" className="hover:underline">Política de privacidad</a>
            </div>
            <div className="flex gap-4">
              <a href="#"><svg className="w-8 h-8 fill-white bg-black rounded-full hover:bg-orange-400 transition-colors dark:bg-gray-800 dark:fill-yellow-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path></svg></a>
              <a href="#"><svg className="w-8 h-8 fill-white bg-black rounded-full hover:bg-orange-400 transition-colors dark:bg-gray-800 dark:fill-yellow-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"></path></svg></a>
              <a href="#"><svg className="w-8 h-8 fill-white bg-black rounded-full hover:bg-orange-400 transition-colors dark:bg-gray-800 dark:fill-yellow-500" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="20.145" cy="11.892" r="1"></circle><path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path><path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"></path></svg></a>
            </div>
          </div>
        </div>
      </footer>
  )
}
