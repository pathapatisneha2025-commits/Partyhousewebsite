import React from "react";
import { Footer } from "../component/footersection";
import { useNavigate } from "react-router-dom";

export default function RoomsPage() {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      name: "Grand Celebration Hall",
      img: "/image2.jpeg",
      capacity: "150 Guests",
      features: "Stage • AC • Sound • Elegant Lighting",
    },
    {
      id: 2,
      name: "Mini Function Room",
      img: "/minifunction.jpeg",
      capacity: "60 Guests",
      features: "Birthdays • Baby Showers • Family Events",
    },
    {
      id: 3,
      name: "Rooftop Lounge",
      img: "/image4.jpeg",
      capacity: "80 Guests",
      features: "Open Air • Sunset View • Music & Lights",
    },
    {
      id: 4,
      name: "Banquet Hall",
      img: "/image3.jpeg",
      capacity: "120 Guests",
      features: "Buffet Setup • Stage • AC • Elegant Décor",
    },
  ];

  return (
    <section id="rooms" className="rooms-section">
      <h2>Our Premium Party Rooms</h2>

      <div className="rooms-container">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.img} alt={room.name} />
            <h3>{room.name}</h3>
            <p>Capacity: {room.capacity}</p>
            <p>{room.features}</p>
            <button onClick={() => navigate(`/bookinghall/${room.id}`)}>Book Now</button>
          </div>
        ))}
      </div>

      <Footer />

      <style>{`
        .rooms-section {
          padding: 120px 60px;
          text-align: center;
          background: #fff8f2;
        }

        .rooms-section h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 60px;
          color: #222;
        }

        .rooms-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .room-card {
          background: #fff;
          padding: 30px;
          border-radius: 25px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
          transition: 0.5s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          width: 100%;
          box-sizing: border-box;
        }

        .room-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .room-card img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 20px;
          transition: transform 0.4s;
        }

        .room-card img:hover {
          transform: scale(1.05);
        }

        .room-card h3 {
          font-size: 1.75rem;
          color: #222;
          margin: 10px 0 5px 0;
        }

        .room-card p {
          color: #555;
          font-size: 16px;
          margin: 2px 0;
        }

        .room-card button {
          margin-top: 15px;
          background: #c59d5f;
          padding: 12px 30px;
          border-radius: 50px;
          border: none;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.4s;
        }

        .room-card button:hover {
          background: #a87a3b;
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .rooms-container {
            grid-template-columns: 1fr 1fr;
          }
        }

       @media (max-width: 768px) {
  .rooms-container {
    grid-template-columns: 1fr 1fr;
  }
}

      `}</style>
    </section>
  );
}
