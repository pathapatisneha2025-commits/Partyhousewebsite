import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../component/footersection";

const BASE_URL = "https://partyhousedatabase-rpft.onrender.com";

export function BookingHall() {
  const { id } = useParams();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        guests: formData.guests,
        message: formData.message,
        room: id,
        service: room?.name || "Hall Booking",
      };

      const response = await fetch(`${BASE_URL}/bookings/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking created successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          guests: "",
          message: "",
        });
      } else {
        alert(data?.error || "Booking failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  if (loading) {
    return <h2 style={{ padding: 50, textAlign: "center" }}>Loading Room...</h2>;
  }

  if (!room) {
    return <h2 style={{ padding: 50, textAlign: "center", color: "red" }}>Room not found</h2>;
  }

  return (
    <div style={wrapperStyle}>
      <div style={pageStyle}>
        <h2 style={headingStyle}>{room.name}</h2>

        <div style={contentWrapperStyle}>
          {/* LEFT SIDE */}
          <div style={roomDetailsStyle}>
            <img src={room.image_url} alt={room.name} style={imageStyle} />

            <div style={roomInfoStyle}>
              <p><strong>Capacity:</strong> {room.capacity} Guests</p>
              <p><strong>Features:</strong> {room.description?.replace(/"/g, "")}</p>
              <p><strong>Price:</strong> ₹{room.price}</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div style={formWrapperStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
              <input
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                style={inputStyle}
              />

              <input
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                style={inputStyle}
              />

              <input
                placeholder="Phone *"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                style={inputStyle}
              />

              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                style={inputStyle}
              />

              <input
                type="number"
                placeholder="Guests"
                value={formData.guests}
                onChange={(e) => handleChange("guests", e.target.value)}
                style={inputStyle}
              />

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows="5"
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <button type="submit" style={buttonStyle}>
                Submit Booking Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ================= WRAPPER ================= */
const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

/* ================= PAGE ================= */
const pageStyle = {
  flex: 1,
  width: "100%",
  padding: "50px 5%",
  background: "#fff8f2",
  boxSizing: "border-box",
};

/* ================= TITLE ================= */
const headingStyle = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "2.5rem",
  color: "#333",
};

/* ================= FIXED LAYOUT (IMPORTANT) ================= */
const contentWrapperStyle = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
  justifyContent: "space-between",   // FIX
  alignItems: "flex-start",          // FIX
};

/* LEFT */
const roomDetailsStyle = {
  flex: "1 1 55%",
  minWidth: "280px",
  maxWidth: "650px",
};

/* IMAGE */
const imageStyle = {
  width: "100%",
  borderRadius: "20px",
  display: "block",
};

/* TEXT */
const roomInfoStyle = {
  fontSize: "1.1rem",
  color: "#555",
  marginTop: "10px",
};

/* RIGHT FORM */
const formWrapperStyle = {
  flex: "1 1 40%",
  minWidth: "280px",
  maxWidth: "520px",
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  boxSizing: "border-box",
};

/* FORM */
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "100%",
};

/* INPUT FIX */
const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  boxSizing: "border-box",
};

/* BUTTON */
const buttonStyle = {
  padding: "15px",
  borderRadius: "50px",
  background: "#c59d5f",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};