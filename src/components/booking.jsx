import React, { useState } from "react";

// ----------------------------------------------------
// LARGE FLIGHT DATA (AUTO LOADED IN PAGE)
// ----------------------------------------------------
const flights = [
  { id: 1, from: "COK", to: "BHO", airline: "IndiGo", stops: "Non-stop", time: "10:35 → 12:45", duration: "2h 10m", price: 4899, date: "2025-11-17" },
  { id: 2, from: "COK", to: "BHO", airline: "Air India Express", stops: "1 Stop", time: "09:20 → 13:55", duration: "4h 35m", price: 5699, date: "2025-11-17" },
  { id: 3, from: "COK", to: "BHO", airline: "AirAsia", stops: "2 Stops", time: "06:10 → 14:20", duration: "8h 10m", price: 4599, date: "2025-11-17" },

  { id: 4, from: "DEL", to: "BOM", airline: "Vistara", stops: "Non-stop", time: "14:15 → 16:30", duration: "2h 15m", price: 6299, date: "2025-11-18" },
  { id: 5, from: "DEL", to: "BOM", airline: "IndiGo", stops: "Non-stop", time: "09:00 → 11:10", duration: "2h 10m", price: 5599, date: "2025-11-18" },
  { id: 6, from: "DEL", to: "BOM", airline: "SpiceJet", stops: "1 Stop", time: "05:40 → 10:25", duration: "4h 45m", price: 4999, date: "2025-11-18" },

  { id: 7, from: "BLR", to: "HYD", airline: "IndiGo", stops: "Non-stop", time: "13:10 → 14:20", duration: "1h 10m", price: 2499, date: "2025-10-24" },
  { id: 8, from: "BLR", to: "HYD", airline: "Akasa Air", stops: "Non-stop", time: "18:40 → 19:50", duration: "1h 10m", price: 2299, date: "2025-10-24" },

  { id: 9, from: "DEL", to: "DXB", airline: "Emirates", stops: "Non-stop", time: "04:15 → 06:20", duration: "3h 35m", price: 15499, date: "2025-12-05" },
  { id: 10, from: "DEL", to: "DXB", airline: "Air India", stops: "1 Stop", time: "07:45 → 12:50", duration: "5h 05m", price: 12999, date: "2025-12-05" },

  { id: 11, from: "MAA", to: "SIN", airline: "Singapore Airlines", stops: "Non-stop", time: "00:40 → 07:10", duration: "4h 30m", price: 18999, date: "2025-10-12" },
  { id: 12, from: "MAA", to: "SIN", airline: "Scoot", stops: "Non-stop", time: "23:50 → 06:00", duration: "4h 10m", price: 11299, date: "2025-10-12" },

  { id: 13, from: "COK", to: "DEL", airline: "IndiGo", stops: "Non-stop", time: "15:10 → 18:00", duration: "2h 50m", price: 3899, date: "2025-11-22" },
  { id: 14, from: "COK", to: "DEL", airline: "Air India Express", stops: "1 Stop", time: "08:20 → 13:40", duration: "5h 20m", price: 3599, date: "2025-11-22" },

  { id: 15, from: "BOM", to: "GOI", airline: "IndiGo", stops: "Non-stop", time: "09:00 → 10:05", duration: "1h 05m", price: 1999, date: "2025-12-10" },
  { id: 16, from: "BOM", to: "GOI", airline: "Vistara", stops: "Non-stop", time: "17:40 → 18:50", duration: "1h 10m", price: 2399, date: "2025-12-10" },

  { id: 17, from: "BOM", to: "LHR", airline: "British Airways", stops: "Non-stop", time: "02:15 → 06:55", duration: "9h 10m", price: 52999, date: "2025-12-20" },
  { id: 18, from: "BOM", to: "LHR", airline: "Air India", stops: "1 Stop", time: "08:00 → 17:40", duration: "13h 40m", price: 43999, date: "2025-12-20" }
];

// ===================================================
//                    COMPONENT
// ===================================================
export default function Booking() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [filterStop, setFilterStop] = useState("All");
  const [filterAirline, setFilterAirline] = useState("All");

  const filteredFlights = flights.filter((f) => {
    return (
      (from ? f.from === from : true) &&
      (to ? f.to === to : true) &&
      (date ? f.date === date : true) &&
      (filterStop === "All" || f.stops === filterStop) &&
      (filterAirline === "All" || f.airline === filterAirline)
    );
  });

  return (
    <div className="booking-page" style={{ padding: "40px", background: "#f1f7ff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>Book Your Flight</h1>

      {/* ---------------- FORM ---------------- */}
      <div className="booking-form" style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
      }}>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <input type="text" placeholder="From (e.g., COK)" value={from}
            onChange={(e) => setFrom(e.target.value.toUpperCase())}
            className="search-input" />

          <input type="text" placeholder="To (e.g., DEL)" value={to}
            onChange={(e) => setTo(e.target.value.toUpperCase())}
            className="search-input" />

          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="search-input" />
        </div>

        {/* ---------------- FILTERS ---------------- */}
        <div style={{ marginTop: "20px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <select onChange={(e) => setFilterStop(e.target.value)} className="search-input">
            <option value="All">All Stops</option>
            <option value="Non-stop">Non-stop</option>
            <option value="1 Stop">1 Stop</option>
            <option value="2 Stops">2 Stops</option>
          </select>

          <select onChange={(e) => setFilterAirline(e.target.value)} className="search-input">
            <option value="All">All Airlines</option>
            <option value="IndiGo">IndiGo</option>
            <option value="Air India">Air India</option>
            <option value="Air India Express">Air India Express</option>
            <option value="Vistara">Vistara</option>
            <option value="SpiceJet">SpiceJet</option>
            <option value="AirAsia">AirAsia</option>
            <option value="Emirates">Emirates</option>
            <option value="Scoot">Scoot</option>
            <option value="Singapore Airlines">Singapore Airlines</option>
            <option value="British Airways">British Airways</option>
          </select>
        </div>
      </div>

      {/* ---------------- RESULT LIST ---------------- */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ marginBottom: "15px", fontSize: "22px" }}>Available Flights</h2>

        {filteredFlights.length === 0 ? (
          <p style={{ color: "#777", marginTop: "20px" }}>❌ No flights found. Try changing filters.</p>
        ) : (
          filteredFlights.map((f) => (
            <div key={f.id} className="flight-card" style={{
              background: "white",
              padding: "18px",
              borderRadius: "10px",
              marginBottom: "15px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)"
            }}>
              <div style={{ fontSize: "18px", fontWeight: "700" }}>
                {f.from} → {f.to}
              </div>

              <div style={{ marginTop: "5px", color: "#555" }}>
                {f.airline} • {f.stops}
              </div>

              <div style={{ marginTop: "5px", fontSize: "14px" }}>
                {f.time} • {f.duration}
              </div>

              <div style={{ marginTop: "10px", fontWeight: "700", fontSize: "20px", color: "#0070f3" }}>
                ₹ {f.price}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
