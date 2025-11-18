import { useState } from "react";
import { Footer } from "../component/footersection";
import RoomsPage from "./RoomPage";
import RoomsSection from "../component/roomcard";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert("Please fill all required fields!");
      return;
    }
    alert("Booking submitted successfully!");
    setFormData({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
  };

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      padding: "50px 5%",
      background: "#fdf6f0",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
        <RoomsSection></RoomsSection>
      <h1 style={{ textAlign: "center", marginBottom: "50px", fontSize: "2.8rem", color: "#333" }}>
        Event Booking
      </h1>

      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        background: "#fff",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="text"
            placeholder="Full Name *"
            value={formData.name}
            onChange={e => handleChange("name", e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={e => handleChange("email", e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={e => handleChange("phone", e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="date"
            value={formData.date}
            onChange={e => handleChange("date", e.target.value)}
            required
            min={new Date().toISOString().split("T")[0]}
            style={inputStyle}
          />
          <input
            type="number"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={e => handleChange("guests", e.target.value)}
            min="1"
            style={inputStyle}
          />
          <textarea
            placeholder="Additional Details"
            value={formData.message}
            onChange={e => handleChange("message", e.target.value)}
            rows="5"
            style={{ ...inputStyle, resize: "vertical" }}
          />
          <button type="submit" style={buttonStyle}>Submit Booking</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

// --- Inline Styles ---
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
