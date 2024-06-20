import Link from 'next/link'
import React from 'react'

export const Contactar = () => {
  return (
    <div className="w-[90vw] h-[30vh] bg-gray-800 m-auto flex justify-center items-center relative lg:w-[75vw]">
        <div className="flex flex-col items-center w-[70%] lg:flex-row lg:w-[90%]">
            <h1 className="text-white text-[2rem]/[1]  font-extrabold z-50 mb-6 lg:text-[2.5rem]/[1.2]  lg:mb-0">Contactar con soporte <span className="text-orange-400">Very</span></h1>
          <div className="flex justify-center w-[50%]">
            <button className="bg-yellow-500 z-50 h-12 px-[30vw] py-2 rounded-md lg:px-8"><Link href="/contactar">Contactar</Link></button>
          </div>
        </div>
        <div className="absolute right-0 z-30"><svg className="h-[30vh] w-[40vw]" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a"><stop stop-color="rgb(234, 177, 72)" offset="0%"></stop><stop stop-color="rgb(234, 177, 72)" stop-opacity="0" offset="100%"></stop></radialGradient><radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b"><stop stop-color="rgb(234, 177, 72)" offset="0%"></stop><stop stop-color="rgb(234, 177, 72)" stop-opacity="0" offset="100%"></stop></radialGradient></defs><g transform="translate(-85 -369)" fill="none" fill-rule="evenodd"><circle fill-opacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240"></circle><circle fill-opacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400"></circle></g></svg></div>
      </div>
  )
}
