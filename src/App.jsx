import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Clouds from './components/Clouds'
import FlightDeal from './components/flightdeal'
import Section from './components/Section'

export default function App() {
  return (
    <div className="modern-scrollbar">
      <Navbar />
      <Clouds />
      <Hero />

      <div id="deals">
        <FlightDeal />
      </div>
      <div id="explore">
        <Section title="Explore" bgClass="slide-bg-3" />
      </div>
    </div>
  )
}
