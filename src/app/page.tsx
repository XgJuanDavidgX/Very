'use client'

import { useContext } from "react";
import { ConduceVery } from "./componentesMain/conduceVery";
import { Apps } from "./componentesMain/apps";
import { Very } from "./componentesMain/very";
import { Beneficios } from "./componentesMain/beneficios";
import { TestimoniosFull } from "./componentesMain/testimoniosFull";
import { Sitios } from "./componentesMain/sitios";
import { Contactar } from "./componentesMain/contactar";
import { Footer } from "./componentesMain/footer";
import { counterContext } from './context/counterContext'
import Header from "./componentesMain/header";

export default function Home() {

  const { imagen } = useContext(counterContext)
  
  return (
    <div className="dark:bg-[#18171c]">
      <Header/>

      <ConduceVery/>

      <hr className="mx-[15vw] my-[5vh] lg:my-[15vh]" id="Apps"></hr>

      <Apps/>

      <hr className="mx-[15vw] my-[5vh] lg:my-[15vh]" id="Very"></hr>

      <Very/>

      <hr className="mx-[5vw] my-[5vh] lg:mx-[5vw] lg:my-[15vh]" id="Beneficios"></hr>

      <Beneficios/>

      <TestimoniosFull/>

      <hr className="mx-[15vw] my-[5vh] lg:my-[15vh]" id="Sitios"></hr>

      <Sitios/>

      <Contactar/>

      <Footer imagen={imagen}/>
    </div>
  );
}