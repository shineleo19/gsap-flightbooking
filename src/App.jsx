import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Clouds from './components/Clouds'
import FlightDeal from './components/flightdeal'
import Explore from './components/Explore'
import Places from './components/places'

export default function App() {
  return (
    <div className="modern-scrollbar">
      <Navbar />
      <Hero />
      <Clouds />
      <div id="deals">
        <FlightDeal />
      </div>
      <div id="explore">
        <Explore />
      </div>
      <div id="discover">
        <Places />
      </div>
    </div>
  )
}
