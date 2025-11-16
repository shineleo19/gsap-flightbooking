import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Clouds from "./components/Clouds";
import FlightDeal from "./components/flightdeal";
import Explore from "./components/Explore";
import Places from "./components/places";
import Booking from "./components/booking";

export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>

        {/* HOME PAGE (scroll sections) */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Clouds />

              <div id="deals"><FlightDeal /></div>
              <div id="explore"><Explore /></div>
              <div id="discover"><Places /></div>
            </>
          }
        />

        {/* SEPARATE FULL PAGES */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/deals" element={<FlightDeal />} />
        <Route path="/places" element={<Places />} />

      </Routes>
    </HashRouter>
  );
}
