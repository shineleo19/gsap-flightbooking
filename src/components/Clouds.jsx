import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Clouds() {
  
  useGSAP(() => {
    // vertical parallax for the side clouds (scroll-driven)
    const tl = gsap.timeline({ 
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    tl.to('.left-cloud', { y: -200 }, 0)
      .to('.right-cloud', { y: 200 }, 0)
      .to('.move-cloud', { y: 150 }, 0)
  }, []);

  return (
    <>
      <section id="hero">
        <h1 className="title"></h1>
        <img
          src="/cloud-img/cloud 4.PNG"
          alt="cloud 4 "
          className="move-cloud absolute left-0 top-10 w-48 md:w-72 lg:w-96 z-50 pointer-events-none"
          style={{ left: '-10vw' }}
        />  
        <img
          src="/cloud-img/cloud 6.PNG"
          alt="cloud 6 "
          className="move-cloud absolute left-4 bottom-9 w-42 md:w-72 lg:w-96 z-50 pointer-events-none"
          style={{ left: '-10vw' }}
        /> 
        <img
          src="/cloud-img/cloud 5.PNG"
          alt="cloud 5"
          className="move-cloud absolute right-0 bottom-10 transform -translate-x--1/2 w-48 md:w-72 lg:w-98 z-50 pointer-events-none"
          
        />
        <img
          src="/cloud-img/cloud 1.png"
          alt="cloud 1"
          className="right-cloud absolute right-4 top-4 md:top-12 lg:top-12 w-40 md:w-72 lg:w-96 z-50 pointer-events-none"
        />
        <img
          src="/cloud-img/cloud 2.png"
          alt="cloud 2"
          className="left-cloud absolute left-0  bottom-8 md:bottom-12 lg:bottom-20 w-40 md:w-96 lg:w-[350px] z-50 pointer-events-none"
        />
      </section>
    </>
  )
}
