import { useState, useEffect } from "react"; 
import { Footer } from "../component/footersection";
import RoomsSection from "../component/roomcard";

const BASE_URL = "https://partyhousedatabase.onrender.com";

export default function BookingPage() {

  return (
    <>
      {/* GLOBAL FIX FOR SIDE SCROLL */}
      <style>{`
        html, body {
          overflow-x: hidden !important;
          width: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

      <MainBookingPage />
    </>
  );
}

function MainBookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
    service: "",
    roomId: "",
  });

  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  const services = [
    "Cold Fire 2 - 499/-",
    "Cold Fire 4 - 799/-",
    "Balloons - 499/-",
    "Candle Entry - 499/-",
    "Name Board - 99/-",
    "Age Board - 99/-",
    "Light Effect - 499/-",
    "Fire Gun - 499/-",
    "Fog Entry - 499/-",
    "Photography Add-on - 3000/-"
  ];

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${BASE_URL}/rooms/all`);
        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.error("Failed to fetch rooms:", err);
      }
    };

    const fetchBookings = async () => {
      try {
        const res = await fetch(`${BASE_URL}/bookings/all`);
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      }
    };

    fetchRooms();
    fetchBookings();
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateChange = (value) => {
    setFormData((prev) => ({ ...prev, date: value, roomId: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.roomId) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/bookings/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, room: formData.roomId }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Booking submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          guests: "",
          message: "",
          service: "",
          roomId: "",
        });

        const bookingsRes = await fetch(`${BASE_URL}/bookings/all`);
        const bookingsData = await bookingsRes.json();
        setBookings(bookingsData);
      } else {
        alert(result.error || "Failed to submit booking.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
      console.error("Booking Error:", error);
    }

    setLoading(false);
  };

  return (
    <>
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "50px 5%",
        background: "#fdf6f0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <RoomsSection />

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.8rem",
          color: "#333",
        }}
      >
        Event Booking
      </h1>

      <div
        className="booking-container"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        {/* FORM */}
        <form onSubmit={handleSubmit} className="form" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          
          <input type="text" placeholder="Full Name *"
            value={formData.name} onChange={(e) => handleChange("name", e.target.value)}
            style={inputStyle}
          />

          <input type="email" placeholder="Email Address *"
            value={formData.email} onChange={(e) => handleChange("email", e.target.value)}
            style={inputStyle}
          />

          <input type="tel" placeholder="Phone Number *"
            value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)}
            style={inputStyle}
          />

          <input type="date"
            value={formData.date} onChange={(e) => handleDateChange(e.target.value)}
            required min={new Date().toISOString().split("T")[0]}
            style={inputStyle}
          />

          <input type="number" placeholder="Number of Guests"
            value={formData.guests} onChange={(e) => handleChange("guests", e.target.value)}
            min="1" style={inputStyle}
          />

          <select value={formData.roomId}
            onChange={(e) => handleChange("roomId", e.target.value)}
            style={inputStyle} required
          >
            <option value="">Select a Room *</option>
            {rooms.map((room) => {
              const isBooked = bookings.some(
                (b) => b.roomid === room.id && b.event_date === formData.date
              );
              return (
                <option key={room.id} value={room.id} disabled={isBooked}>
                  {room.name} - Capacity: {room.capacity}, Price: ₹{room.price}
                  {isBooked ? " (Already booked)" : ""}
                </option>
              );
            })}
          </select>

          <select
            value={formData.service}
            onChange={(e) => handleChange("service", e.target.value)}
            style={inputStyle}
          >
            <option value="">Select a Service (Optional)</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <textarea
            placeholder="Additional Details"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows="5"
            style={{ ...inputStyle, resize: "vertical" }}
          />

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .booking-container {
            padding: 25px;
            border-radius: 15px;
          }

          h1 {
            font-size: 2rem !important;
          }

          .form {
            gap: 15px;
          }

          .form input,
          .form select,
          .form textarea {
            font-size: 15px !important;
            padding: 12px !important;
          }

          button {
            font-size: 16px !important;
            padding: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .booking-container {
            padding: 20px !important;
          }

          h1 {
            font-size: 1.7rem !important;
          }

          .form {
            gap: 12px;
          }

          .form input,
          .form select,
          .form textarea {
            font-size: 14px !important;
            padding: 10px !important;
            border-radius: 10px !important;
          }

          button {
            padding: 10px !important;
            font-size: 15px !important;
            border-radius: 40px !important;
          }
        }
      `}</style>

     
    </div>
     <Footer />
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "50px",
  border: "none",
  background: "#c59d5f",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};
