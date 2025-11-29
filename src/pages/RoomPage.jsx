import React, { useEffect, useState } from "react";
import { Footer } from "../component/footersection";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://partyhousedatabase.onrender.com";

export default function RoomsPage() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${BASE_URL}/rooms/all`);
        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.log("Error fetching rooms:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <h2 style={{ padding: 100, textAlign: "center" }}>Loading rooms...</h2>;
  }

  return (
    <>
    <section id="rooms" className="rooms-section">
      <h2>Our Premium Party Rooms</h2>

      <div className="rooms-container">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image_url} alt={room.name} />
            <h3>{room.name}</h3>
            <p>Capacity: {room.capacity} Guests</p>
            <p>{room.description.replace(/"/g, "")}</p>

            <button onClick={() => navigate(`/bookinghall/${room.id}`)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

     

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
          transition: 0.4s;
        }

        .room-card img:hover {
          transform: scale(1.05);
        }

        .room-card h3 {
          font-size: 1.75rem;
          color: #222;
        }

        .room-card p {
          color: #555;
          font-size: 16px;
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

        /* ⬇ Responsive: Tablets */
        @media (max-width: 1024px) {
          .rooms-section {
            padding: 100px 40px;
          }

          .rooms-container {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }

          .rooms-section h2 {
            font-size: 2.5rem;
          }
        }

        /* ⬇ Responsive: Mobile (768px) */
        @media (max-width: 768px) {
          .rooms-section {
            padding: 80px 20px;
          }

          .rooms-section h2 {
            font-size: 2rem;
            margin-bottom: 40px;
          }

          .rooms-container {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .room-card {
            padding: 22px;
            border-radius: 18px;
          }

          .room-card img {
            height: 220px;
            border-radius: 15px;
          }

          .room-card h3 {
            font-size: 1.4rem;
          }

          .room-card p {
            font-size: 14px;
          }

          .room-card button {
            font-size: 14px;
            padding: 10px 22px;
          }
        }

        /* ⬇ Extra Small Mobile (under 480px) */
        @media (max-width: 480px) {
          .rooms-section {
            padding: 70px 15px;
          }

          .rooms-section h2 {
            font-size: 1.8rem;
          }

          .room-card {
            padding: 18px;
          }

          .room-card img {
            height: 180px;
          }

          .room-card h3 {
            font-size: 1.2rem;
          }

          .room-card p {
            font-size: 13px;
          }

          .room-card button {
            font-size: 13px;
            padding: 8px 20px;
          }
        }
      `}</style>
    </section>
     <Footer />
    </>
  );
}
