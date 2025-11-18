import { useState } from "react"; 
import { useParams } from "react-router-dom";
import { Footer } from "../component/footersection";

const roomsData = [
  { id: 1, name: "Grand Celebration Hall", img: "/image2.jpeg", capacity: "150 Guests", features: "Stage • AC • Sound • Elegant Lighting" },
  { id: 2, name: "Mini Function Room", img: "/minifunction.jpeg", capacity: "60 Guests", features: "Birthdays • Baby Showers • Family Events" },
  { id: 3, name: "Rooftop Lounge", img: "/image4.jpeg", capacity: "80 Guests", features: "Open Air • Sunset View • Music & Lights" },
  { id: 4, name: "Banquet Hall", img: "/image3.jpeg", capacity: "120 Guests", features: "Buffet Setup • Stage • AC • Elegant Décor" },
];

export function BookingHall() {
  const { id } = useParams();
  const room = roomsData.find(r => r.id === Number(id));

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
      alert("Please fill in all required fields");
      return;
    }
    alert(`Booking inquiry submitted for ${room.name}! We'll contact you soon.`);
    setFormData({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>{room.name}</h2>

      <div style={contentWrapperStyle}>
        {/* Left: Room Details */}
        <div style={roomDetailsStyle}>
          <img src={room.img} alt={room.name} style={imageStyle} />
          <div style={roomInfoStyle}>
            <p><strong>Capacity:</strong> {room.capacity}</p>
            <p><strong>Features:</strong> {room.features}</p>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div style={formWrapperStyle}>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input type="text" placeholder="Full Name *" value={formData.name} onChange={e => handleChange("name", e.target.value)} required style={inputStyle} />
            <input type="email" placeholder="Email Address *" value={formData.email} onChange={e => handleChange("email", e.target.value)} required style={inputStyle} />
            <input type="tel" placeholder="Phone Number *" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} required style={inputStyle} />
            <input type="date" value={formData.date} onChange={e => handleChange("date", e.target.value)} min={new Date().toISOString().split("T")[0]} required style={inputStyle} />
            <input type="number" placeholder="Number of Guests" value={formData.guests} onChange={e => handleChange("guests", e.target.value)} min="1" style={inputStyle} />
            <textarea placeholder="Additional Details" value={formData.message} onChange={e => handleChange("message", e.target.value)} rows="5" style={{ ...inputStyle, resize: "vertical" }} />
            <button type="submit" style={buttonStyle}>Submit Booking Inquiry</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// --- Styles ---
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
  flexWrap: "wrap", // responsive: stack on small screens
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
  boxSizing: "border-box",
  transition: "0.3s",
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

