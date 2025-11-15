import React, { useRef } from 'react'
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { Timeline } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default function Hero() {
  const heroRef = useRef(null)

  useGSAP(() => {
    // dynamically import SplitText (avoids bundler errors if plugin isn't available)
    import('gsap/SplitText')
      .then(({ SplitText }) => {
        gsap.registerPlugin(SplitText)

        const heroSplit = new SplitText(".title", { type: "chars, words" })
        const paragraphSplit = new SplitText(".subtitle", { type: "lines" })

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"))

        gsap.from(heroSplit.chars, {
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.03,
        })

        gsap.from(paragraphSplit.lines, {
          opacity: 0,
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
          delay: 1,
        })
      })
      .catch(() => {
        console.warn('gsap/SplitText not available — skipping split text animations.')
      })

    
    gsap.timeline({ 
      scrollTrigger: {
        trigger: ".plane ",
        start: "top 40%",
        end: "bottom top",
        scrub: true,
      },
    })

    .to('.plane', {
      x: "110vw",
      duration: 0.1,
    },0)
    
  }, [])

  return (
    
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/mist2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <img
        src="/asserts/plane.png"
        alt="plane"
        className="plane absolute top-1/2 transform -translate-y-1/2 w-36 md:w-48 lg:w-64 z-50 pointer-events-none"
        style={{ left: '-17vw' }}
      />
      {/* optional color overlay (keeps previous blue overlay effect) */}
      <div className="absolute inset-0 bg-opacity-40 pointer-events-none" />
       <div className="max-w-4xl text-center z-10">
        <h1 className="title text-6xl md:text-7xl font-bold text-sky-900">Book Your Next Journey</h1>
        <p className="subtitle mt-6 text-2xl text-sky-700">Find flights, compare prices and fly with confidence.</p>
        <button className="mt-6 px-6 py-3 bg-sky-600 text-white rounded-full shadow-lg">Start Booking</button>
      </div>
    </section>
  )
}
