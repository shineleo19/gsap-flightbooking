import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function places() {
  const componentRef = useRef(null); // Scope for the whole component
  const sliderRef = useRef(null);    // The track that moves horizontally

  const places = [
    { name: "Santorini", image: "/place-img/santorini.jpeg", country: "Greece", description: "Cliffside sunsets and blue domes." },
    { name: "London Bridge", image: "/place-img/london-bridge.jpeg", country: "UK", description: "Historic bridge with city views." },
    { name: "Christ the Redeemer", image: "/place-img/christ- brazil.jpg", country: "Brazil", description: "Rio’s iconic mountain statue." },
    { name: "Mount Fuji", image: "/place-img/fuji.png", country: "Japan", description: "Japan’s most iconic volcano." },
    { name: "Great Wall", image: "/place-img/image.png", country: "China", description: "Ancient world wonder." },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Get the total width of the content to scroll
      const panels = gsap.utils.toArray(".slide-panel");
      const totalWidth = 100 * (panels.length - 1); // Width in percentage
      
      // 2. Create the Main Horizontal Scroll Tweet
      const scrollTween = gsap.to(sliderRef.current, {
        xPercent: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          scrub: 1,
          // Adjust 'end' to control how fast the user scrolls through (e.g., +=3000)
          end: () => "+=" + sliderRef.current.offsetWidth, 
         // Optional: Snaps to panels
        }
      });

      // 3. Parallax/Inner Animations (Linked to the scrollTween)
      panels.forEach((panel) => {
        const img = panel.querySelector(".slide-img");
        const txt = panel.querySelector(".slide-text");

        // Animate Image (Scale effect)
        gsap.from(img, {
          scale: 1.3,
          ease: "none",
          scrollTrigger: { 
            trigger: panel,
            containerAnimation: scrollTween, // Link to horizontal movement
            start: "left right", // When panel left edge hits viewport right
            end: "right left",   // When panel right edge hits viewport left
            scrub: true,
          }
        });

        // Animate Text (Fade in/out)
        gsap.fromTo(txt, 
          { opacity: 0, x: 100 },
          { 
            opacity: 1, 
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left center",
              end: "center center",
              scrub: true,
            }
          }
        );
      });

    }, componentRef); // <- Scopes all selectors to this component

    return () => ctx.revert(); // <- CLEANUP: Essential for React
  }, []);

  return (
    <div ref={componentRef} className="scroll-container">
      {/* The Track that moves */}
      <div ref={sliderRef} className="scroll-track">
        
        {places.map((place, i) => (
          <div className="slide-panel" key={i}>
            <div className="image-wrapper">
              <img src={place.image} alt={place.name} className="slide-img" />
            </div>
            <div className="slide-text">
              <h2 className="text-lg tracking-widest uppercase text-gray-500">{place.country}</h2>
              <h1 className="text-6xl font-bold mb-4 text-gray-800">{place.name}</h1>
              <p className="text-xl text-gray-600 max-w-md">{place.description}</p>
            </div>
          </div>
        ))}

      </div>

      <style>{`
        .scroll-container {
          width: 100%;
          height: 100vh;
          overflow: hidden; /* Hide the scrollbar */
          background: linear-gradient(180deg, #e3f6ff, #f5fcff);
        }

        .scroll-track {
          display: flex;
          height: 100%;
          width: fit-content; /* Important: lets the track grow based on content */
        }

        .slide-panel {
          width: 100vw; /* Each panel takes full viewport width */
          height: 100vh;
          display: flex;
          justify-content: space-around; /* Space between text and image */
          align-items: center;
          padding: 0 5vw;
          box-sizing: border-box;
          position: relative;
          flex-shrink: 0; /* Prevent panels from squishing */
        }

        .image-wrapper {
          width: 50%;
          height: 70%;
          overflow: hidden; /* Needed for the internal image scale effect */
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-text {
          width: 40%;
        }
        
        /* Typography utility mimics (if you don't have Tailwind) */
        h1 { margin: 0; line-height: 1.1; }
        h2 { margin: 0 0 10px 0; }
      `}</style>
    </div>
  );
}