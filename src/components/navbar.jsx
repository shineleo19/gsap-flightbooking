import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    // account for fixed navbar height so target isn't hidden behind it
    const nav = document.querySelector('nav')
    const navHeight = nav ? nav.offsetHeight : 72
    const extraOffset = 0 // small gap
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - extraOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? 'navbar-scrolled'
          : 'navbar-top'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-sky-600">SkyFly</div>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sky-900 hover:text-sky-600 transition-colors font-medium"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('deals')}
              className="text-sky-900 hover:text-sky-600 transition-colors font-medium"
            >
              deals
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('explore')}
              className="text-sky-900 hover:text-sky-600 transition-colors font-medium"
            >
              Explore
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('places')}
              className="text-sky-900 hover:text-sky-600 transition-colors font-medium"
            >
              Discover
            </button>
          </li>
          
        </ul>

        <button className="px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors font-medium">
          Book Now
        </button>
      </div>

      <style>{`
        nav {
          backdrop-filter: blur(0px);
          background-color: rgba(255, 255, 255, 0);
          box-shadow: none;
        }

        nav.navbar-top {
          animation: slideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        nav.navbar-scrolled {
          backdrop-filter: blur(16px);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.08) 100%
          );
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Liquid glass morphism effect */
        nav::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            ellipse at top left,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0)
          );
          pointer-events: none;
          z-index: -1;
        }

        @media (max-width: 768px) {
          nav {
            padding: 12px 16px;
          }

          ul {
            display: none;
          }
        }

        :root{
          --nav-height: 72px; /* match navbar height; adjust if needed */
        }

        /* Optional: make sections transparent so background shows through */
        section {
          background: transparent;
          /* ensures anchor/scrollIntoView leaves the section visible below the fixed navbar */
          scroll-margin-top: var(--nav-height);
        }
      `}</style>
    </nav>
  )
}