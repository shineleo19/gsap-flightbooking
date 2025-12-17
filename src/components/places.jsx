import React from "react";

export default function PlacesList() {
  const places = [
    { name: "Santorini", image: "/place-img/santorini.jpeg", country: "Greece", description: "Cliffside sunsets and blue domes." },
    { name: "London Bridge", image: "/place-img/london-bridge.jpeg", country: "UK", description: "Historic bridge with city views." },
    { name: "Christ the Redeemer", image: "/place-img/christ-brazil.jpg", country: "Brazil", description: "Rio’s iconic mountain statue." },
    { name: "Mount Fuji", image: "/place-img/fuji.png", country: "Japan", description: "Japan’s most iconic volcano." },
    { name: "Great Wall", image: "/place-img/image.png", country: "China", description: "Ancient world wonder." },
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <header className="page-header">
          <h1>World Destinations</h1>
          <p>Scroll down to explore</p>
        </header>

        {places.map((place, i) => (
          <div className="place-card" key={i}>
            {/* Image Side */}
            <div className="image-wrapper">
              <img src={place.image} alt={place.name} className="place-img" />
            </div>
            
            {/* Text Side */}
            <div className="text-wrapper">
              <h2 className="country-label">{place.country}</h2>
              <h1 className="place-name">{place.name}</h1>
              <p className="description">{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* Reset */
        body, html { margin: 0; padding: 0; font-family: sans-serif; }

        .page-container {
          min-height: 100vh;
          background: linear-gradient(180deg, #e3f6ff 0%, #ffffff 100%);
          padding: 80px 20px;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          text-align: center;
          margin-bottom: 80px;
          color: #334155;
        }
        .page-header h1 { font-size: 3rem; margin-bottom: 10px; }
        .page-header p { font-size: 1.2rem; color: #64748b; }

        /* Card Styles */
        .place-card {
          display: flex;
          align-items: center;
          gap: 60px;
          margin-bottom: 120px; /* Space between items */
        }

        /* Alternate layout: Even items have image on the right */
        .place-card:nth-child(even) {
          flex-direction: row-reverse;
        }

        .image-wrapper {
          flex: 1;
          height: 400px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover {
          transform: translateY(-10px); /* Subtle hover effect */
        }

        .place-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .text-wrapper {
          flex: 1;
          padding: 20px;
        }

        .country-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #64748b;
          margin-bottom: 10px;
        }

        .place-name {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 20px 0;
          line-height: 1.1;
        }

        .description {
          font-size: 1.25rem;
          color: #475569;
          line-height: 1.6;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .place-card, .place-card:nth-child(even) {
            flex-direction: column; /* Stack vertically on phone */
            gap: 30px;
            margin-bottom: 80px;
          }

          .image-wrapper {
            width: 100%;
            height: 300px;
          }

          .place-name {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}