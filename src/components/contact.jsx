// filepath: src/components/Contact.jsx
import React from "react";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default function Contact() {
  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 60%",
      end: "bottom bottom",
      scrub: 10,
    }
  });

  tl.to(".planes",
    {
      x: "-60vw",
      y: "33vh",
      ease: "power1.out",
    },
  )
}, []);
  return (
    <section id="contact" className="contact-section">

      {/* LEFT DECORATION */}
      <img
        src="/asserts/lefttree.png"   // ⬅️ replace with your asset
        alt="left decoration"
        className="contact-left-decor"
      />

      {/* RIGHT DECORATION */}
      <img
        src="/asserts/righttree.png"  // ⬅️ replace with your asset
        alt="right decoration"
        className="contact-right-decor"
      />
        {/* GROUND IMAGE */}
        <img
        src="/asserts/ground.png"  // ⬅️ replace with your asset
        alt="ground decoration"
        className="contact-ground"
      />

      {/* MAIN CONTENT OVERLAY */}
      <div className="contact-overlay">
        <div className="contact-container">

          {/* LEFT CONTENT */}
          <div className="contact-left">
            <h1>Contact</h1>
            <p className="desc">
              We’re here to help with bookings, flight details, or travel assistance.
              Our support team is available 24/7.
            </p>

            <div className="contact-details">
              <p><strong>Email:</strong> support@skyfly.com</p>
              <p><strong>Phone:</strong> +1 800-555-SKYF</p>
              <p><strong>Address:</strong> SkyFly HQ, Dream City, USA</p>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <img
        src="/asserts/plane.png"
        alt="plane"
        className="planes absolute top-1/2 w-36 md:w-48 lg:w-64 z-50 pointer-events-none"
        style={{ right: '-17vw' ,
  transform: 'scaleX(-1)'}}
      />

        </div>
      </div>

      <style>{`
        /* ---- FULL PAGE ---- */
        .contact-section {
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* ---- DECORATION IMAGES ---- */
        .contact-left-decor {
          position: absolute;
          left: 0px;        /* adjust as needed */
          bottom: 0;
          height: 850px;
          width: 500px;
          opacity: 0.9;
          pointer-events: none;
          z-index: 1;
        }

        .contact-right-decor {
          position: absolute;
          right: 0px; 
          top:0px;      /* adjust as needed */
          height: 800px;
          width: 500px;
          
          opacity: 0.9;
          pointer-events: none;
          z-index: 2;
        }
        
        .contact-ground{
          position: absolute;
          bottom: 0;
          width: 100%;
          pointer-events: none;
          z-index: 2;
        }

        /* ---- OVERLAY ---- */
        .contact-overlay {
          height: 100%;
          width: 100%;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }


        .contact-left {
          flex: 1;
          padding-right: 20px;
          text-align: center;
          width: 500px;
        }

        .contact-left h1 {
          font-size: 60px;
          margin-top:0px,
          font-weight: bold;
          color: #043049;
          text-align: center;
        }

        .desc {
          margin-top: 12px;
          font-size: 18px;
          color: #6b7b8c;
          max-width: 420px;
          margin-left: auto;
          text-align: center;
        }

        .contact-details p {
          margin-top: 12px;
          font-size: 16px;
          color: #043049;
        }
        /* ---- RESPONSIVE ---- */
        @media (max-width: 900px) {
          .contact-container {
            flex-direction: column;
            gap: 30px;
          }

          .contact-left-decor,
          .contact-right-decor {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
