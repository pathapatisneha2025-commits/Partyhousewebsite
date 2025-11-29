import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../component/footersection";

const BASE_URL = "https://partyhousedatabase.onrender.com";

export function BookingHall() {
  const { id } = useParams();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch room by ID
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(`${BASE_URL}/rooms/${id}`);
        const data = await response.json();
        setRoom(data);
      } catch (err) {
        console.error("Error fetching room:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert("Please fill all required fields");
      return;
    }

    alert(`Booking inquiry submitted for ${room.name}!`);
  };

  if (loading) {
    return <h2 style={{ padding: 50, textAlign: "center" }}>Loading Room...</h2>;
  }

  if (!room) {
    return <h2 style={{ padding: 50, textAlign: "center", color: "red" }}>Room not found</h2>;
  }

  return (
    <>
    <div style={pageStyle}>
      <h2 style={headingStyle}>{room.name}</h2>

      <div style={contentWrapperStyle}>
        {/* Left: Room Details */}
        <div style={roomDetailsStyle}>
          <img src={room.image_url} alt={room.name} style={imageStyle} />

          <div style={roomInfoStyle}>
            <p><strong>Capacity:</strong> {room.capacity} Guests</p>

            <p>
              <strong>Features:</strong>{" "}
              {room.description?.replace(/"/g, "")}
            </p>

            <p>
              <strong>Price:</strong> ₹{room.price}
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div style={formWrapperStyle}>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              required
              style={inputStyle}
            />

            <input
              type="number"
              placeholder="Number of Guests"
              value={formData.guests}
              onChange={(e) => handleChange("guests", e.target.value)}
              min="1"
              style={inputStyle}
            />

            <textarea
              placeholder="Additional Details"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows="5"
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button type="submit" style={buttonStyle}>Submit Booking Inquiry</button>
          </form>
        </div>
      </div>

      
    </div>
    <Footer />
    </>
  );
}

// --- Styles (same as before) ---
const pageStyle = {
  width: "100%",
  minHeight: "100vh",
  padding: "50px 5%",
  background: "#fff8f2",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "2.8rem",
  color: "#333",
};

const contentWrapperStyle = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const roomDetailsStyle = {
  flex: "1 1 400px",
  maxWidth: "600px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "20px",
  objectFit: "cover",
  marginBottom: "20px",
};

const roomInfoStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.6",
  color: "#555",
};

const formWrapperStyle = {
  flex: "1 1 350px",
  maxWidth: "500px",
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outline: "none",
  transition: "0.3s",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "50px",
  background: "#c59d5f",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};

