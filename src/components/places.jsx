import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const places = [
  {
    name: "santorini",
    country: "Greece",
    description:
      "Iconic white-washed buildings with blue domes, stunning sunsets, and crystal-clear waters.",
    image: "/place-img/santorini.jpeg",
  },
  {
    name: "london brige",
    country: "United Kingdom",
    description:
      " Historic bridge over the River Thames, known for its iconic towers and panoramic city views.",
    image: "/place-img/london-bridge.jpeg",
  },
  {
    name: "christ the redeemer",
    country: "Brazil",
    description:
      "Famous statue overlooking Rio de Janeiro, offering panoramic city and beach views.",
    image: "/place-img/christ- brazil.jpg",
  },
  {
    name: "Mount fuji",
    country: "Japan",
    description:
      "Iconic snow-capped volcano, a symbol of Japan, popular for hiking and photography.",
    image: "/place-img/fuji.png",
  },
  {
    name: "Great Wall Of China",
    country: "China",
    description:
      "Ancient fortification stretching thousands of miles, showcasing China's rich history and architectural marvels.",
    image: "/place-img/image.png",
  },
];

export default function DestinationSlider() {
  const [index, setIndex] = useState(0);
  const imageRef = useRef(null);
  const detailRef = useRef(null);

  const nextSlide = () => {
    animateOut(() => {
      setIndex((prev) => (prev + 1) % places.length);
      animateIn();
    });
  };

  const prevSlide = () => {
    animateOut(() => {
      setIndex((prev) =>
        prev === 0 ? places.length - 1 : prev - 1
      );
      animateIn();
    });
  };

  const animateIn = () => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      detailRef.current,
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    );
  };

  const animateOut = (onComplete) => {
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.4,
      ease: "power3.in",
      onComplete,
    });
    gsap.to(detailRef.current, {
      opacity: 0,
      x: -80,
      duration: 0.4,
      ease: "power3.in",
    });
  };

  return (
    <section id="places"className="destination-slider bg-sky-100">
      {/* LEFT ARROW + NAME */}
      <div className="side-control left">
        <h3>{places[(index - 1 + places.length) % places.length].name}</h3>
      </div>
      <button onClick={prevSlide} className="rarrow-btn"><img src="/asserts/arrow.PNG" alt="" srcset="" /></button>
      {/* MAIN IMAGE */}
      <div className="center-img">
        <img
          ref={imageRef}
          key={places[index].image}
          src={places[index].image}
          alt={places[index].name}
        />
      </div>

      {/* RIGHT ARROW + NAME */}
      <div className="side-control right">
        <h3>{places[(index + 1) % places.length].name}</h3>
        
      </div>
            <button onClick={nextSlide} className="larrow-btn"><img src="/asserts/rarrow.PNG" alt="" srcset="" /></button>

      {/* DETAIL PANEL */}
      <div className="detail-panel" ref={detailRef}>
        <h1>{places[index].name}</h1>
        <h2>{places[index].country}</h2>
        <p>{places[index].description}</p>
      </div>

      {/* STYLES */}
      <style>{`
        .destination-slider {
          height: 100vh;
          width: 100%;
          margin-left:0px;
          color: #000;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .center-img img {
          width: 850px;
          height: 520px;
          margin-left:-130px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .side-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
        }

        .side-control.left {
          left: 40px;
        }

        .side-control.right {
          right: 40px;
        }

        .side-control h3 {
          font-size: 22px;
          margin-bottom: 10px;
          margin-top: -60px;
        }

        .rarrow-btn {
          font-size: 50px;
          position: absolute;
          margin-top: 40px;
          left: 15px;
          color: grey;
          width:150px;
        }

        .larrow-btn {
          font-size: 50px;
          position: absolute;
          margin-top: 40px;
          right: 10px;
          color: grey;
          width:150px;
        }

        .detail-panel {
          position: absolute;
          right: 80px;
          width: 380px;
          margin-right:55px;
        }

        .detail-panel h1 {
        font-family: 'Arial Black', sans-serif;
          font-size: 40px;
          font-weight: bold;
          margin-top: -10px;
          width: 450px;
          color: #222;
        }

        .detail-panel h2 {
          margin-top: 20px;
          font-size: 22px;
          color: #555;
        }

        .detail-panel p {
          margin-top: 20px;
          font-size: 18px;
          color: #333;
          line-height: 1.5;
          font-weight: bold;
          width: 370px;
        }
      `}</style>
    </section>
  );
}
