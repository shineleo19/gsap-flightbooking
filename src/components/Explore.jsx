import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#explore",
        start,
        end: "bottom center",
        scrub: 1.5,
		pin: true
      }
    });

    // fade other text out while the image expands
    tl.to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
	 .to('.masked-img', { scale: 1.05, maskPosition: 'center', maskSize: '650%', duration: 1, ease: 'power1.inOut '})
	 .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
  }, []);

  return (
    <div id="explore">
      <div className="container mx-auto h-full pt-20">

        {/* LEFT TEXT */}
        <h2 className="text-6xl  text-sky-900 font-bold will-fade text-center">Explore the World</h2>

        <div className="content">
          {/* LEFT DESTINATIONS LIST */}
          <h1 className="will-fade  flex text-center w-0 text-4xl -ml-1 leading-loose font-bold text-sky-800">Your Journey Starts Here</h1>

          {/* IMAGE IN THE MIDDLE (use a background + mask so masking works reliably) */}
          <div
            className="cocktail-img masked-img"
            role="img"
            aria-label="Explore image"
            style={{ backgroundImage: 'url("/explore.jpg")' }}
          />

          {/* RIGHT DESTINATIONS LIST */}
          <h1 className="will-fade  flex text-left w-0 text-4xl mr-32 leading-loose font-bold text-sky-800">NEW HORIZONS TO EXPLORE</h1>
        </div>

        {/* BOTTOM UNMASKED SECTION */}
        <div className="masked-container pt-10">
          <h2 className="will-fade  text-center text-4xl -mt-10 font-bold text-sky-800">Your Next Adventure Awaits</h2>

          <div id="masked-content">
            <h3 className="text-2xl font-semibold">Handpicked • Stunning • Unforgettable</h3>
            <p className="mt-2 text-gray-600">
              Book exclusive flight deals and discover breathtaking destinations curated just for you.
            </p>
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style>{`
        #explore {
          background: linear-gradient(180deg, #f6fbff, #eaf6ff);
          min-height: 100vh;
          padding-bottom: 80px;
        }

        .content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-top: 40px;
        }

        .cocktail-img {
          width: 1080px;
          height: 480px;
          margin-left:100px;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
        }

        /* mask applied to the element using proper URL and vendor prefix */
        .masked-img {
          -webkit-mask-image: url("/image.png");
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
          -webkit-mask-size: 50%;
          mask-image: url("/image.png");
          mask-repeat: no-repeat;
          mask-position: center;
          mask-size: 50%;
        }

        .masked-container {
          text-align: center;
          margin-top: 40px;
        }

        #masked-content {
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        
        #masked-content h3{
          font-size: 32px;
          margin-top:-60px;
          z-index:10;
          font-weight: 700;
          color: #043049;}

        /* NOTE: place the files in public/images:
           - public/images/explore.jpg    (content image)
           - public/images/mask-img.png   (mask PNG with transparency)
         */

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }
          .cocktail-img {
            width: 260px;
            height: 260px;
          }
        }
      `}</style>
    </div>
  );
};

export default Explore;
