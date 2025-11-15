// filepath: d:\skyfly\src\components\flightdeal.jsx
import React from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const sampleDeals = [
  { id: 1, route: "NYC → LON", duration: "7h 10m", price: 329, airline: "Aurora Air", date: "Aug 24" },
  { id: 2, route: "SFO → TYO", duration: "11h 30m", price: 599, airline: "Nimbus", date: "Sep 8" },
  { id: 3, route: "MIA → CDG", duration: "9h 5m", price: 419, airline: "Skyline", date: "Oct 2" },
  { id: 4, route: "LAX → HND", duration: "11h 35m", price: 579, airline: "Pacifica", date: "Nov 12" },
  { id: 5, route: "ORD → FRA", duration: "8h 45m", price: 459, airline: "TransGlobal", date: "Dec 5" },
  { id: 6, route: "BOS → AMS", duration: "7h 20m", price: 389, airline: "AeroLink", date: "Jan 15" },
  { id: 7, route: "DFW → BCN", duration: "9h 15m", price: 429, airline: "JetStream", date: "Feb 20" },
  { id: 8, route: "SEA → SYD", duration: "15h 50m", price: 899, airline: "Oceanic Air", date: "Mar 10" },
];

export default function FlightDeal() {
  useGSAP(() => {
    // horizontal scroll-driven animation for the bottom cloud
    gsap.to('.bottom-cloud', {
      scrollTrigger: {
        trigger: '.sf-page',
        start: "top bottom",     // when .sf-page top hits bottom of viewport
        end: "bottom top",       // when .sf-page bottom hits top of viewport
        scrub: true,
        invalidateOnRefresh: true
      },
      x:-100,
      y:100,
      ease: 'none',
    })
  }, []);

  return (
    <div className="sf-page"> 
      <main className="sf-main">
        <section className="sf-hero">
          <div className="hero-left">
            <h1 className="text-6xl md:text-4xl font-bold text-sky-900">Find great flight deals — <span className="accent">Fly smarter</span></h1>
            <p className="lead">Curated fares, quick booking, no surprises.</p>

            <div className="search">
              <input aria-label="From" placeholder="From" />
              <input aria-label="To" placeholder="To" />
              <button className="btn primary w-20 h-10 rounded-lg">Search</button>
            </div>
          </div>
        </section>

        <section className="deals-section">
          <h2>Top Flight Deals</h2>
          <div className="deals-grid">
            {sampleDeals.map(d => (
              <article key={d.id} className="deal-card" tabIndex="0">
                <div className="deal-row">
                  <div>
                    <div className="route">{d.route}</div>
                    <div className="muted">{d.duration} • {d.date}</div>
                  </div>
                  <div className="price">
                    <div className="muted">From</div>
                    <div className="amount">${d.price}</div>
                  </div>
                </div>
                <div className="meta">
                  <span className="pill">{d.airline}</span>
                  <button className="btn subtle">Book</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <img
        src="/place-img/cloud 6.PNG"
        alt="cloud 6"
        className="bottom-cloud"
      />

      <style>{`
        :root{
          --accent:#2a9df4;
          --muted:#6b7b8c;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }
        *{box-sizing:border-box}
        /* ensure the flight deals page fills the viewport */
        .sf-page{
          min-height:91vh;
          display:flex;
          flex-direction:column;
          background:linear-gradient(180deg,#f6fbff,#eaf6ff);
          color:#043049;
          position:relative;
          overflow:hidden; /* avoid overflow from decorative clouds */
        }
        .sf-header{display:flex;justify-content:space-between;align-items:center;padding:18px 28px}
        .brand{font-weight:700;font-size:18px}
        .sf-header .btn{margin-left:10px;padding:8px 12px;border-radius:10px;border:0;cursor:pointer}
        .btn.primary{background:var(--accent);color:white}
        .btn.ghost{background:transparent;border:1px solid rgba(0,0,0,0.06)}
        .sf-main{max-width:1100px;margin:100px auto;padding:8px;width:92%;flex:1;top:10px}
        .sf-hero{display:flex;gap:12px;align-items:center;padding:12px;border-radius:14px}
        .hero-left{flex:1;min-width:240px}
        h1{font-size:28px;margin:6px 0}
        .accent{color:var(--accent)}
        .lead{color:var(--muted);margin-bottom:12px}
        .search{display:flex;gap:8px;align-items:center}
        .search input{padding:10px 12px;border-radius:10px;border:1px solid rgba(6,22,30,0.06);flex:1;outline:none}
        .hero-right{width:320px;display:flex;justify-content:center;align-items:center}

        .deals-section{margin-top:12px}
        .deals-section h2{margin-bottom:10px}
        .deals-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
        .deal-card{background:white;padding:14px;border-radius:12px;box-shadow:0 8px 24px rgba(10,30,50,0.06);display:flex;flex-direction:column;gap:12px}
        .deal-row{display:flex;justify-content:space-between;align-items:flex-start}
        .route{font-weight:700}
        .muted{color:var(--muted);font-size:13px}
        .price{text-align:right}
        .amount{font-size:20px;font-weight:700}
        .meta{display:flex;justify-content:space-between;align-items:center;gap:8px}
        .pill{background:rgba(42,157,244,0.08);padding:6px 10px;border-radius:999px;color:var(--muted);font-size:13px}
        .btn.subtle{background:transparent;border:1px solid rgba(0,0,0,0.06);padding:8px 10px;border-radius:8px;cursor:pointer}

        /* keep decorative cloud visible but within viewport bounds */
        .bottom-cloud{
          bottom: -50px;
          left: -150px;
          width: 360px;
          position: absolute;
          
        }

        @media (max-width:800px){
          .sf-hero{flex-direction:column-reverse}
          .hero-right{width:100%}
          .plane-svg{width:200px}
        }
      `}</style>
    </div>
  );
}