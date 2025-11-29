import { useState } from "react";
import { Footer } from "../component/footersection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all required fields!");
      return;
    }
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
    <div style={{
      width: "100%",
      minHeight: "100vh",
      padding: "50px 5%",
      background: "#f9f9f9",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px", color: "#333", fontSize: "2.8rem" }}>
        Contact Us
      </h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center",
      }}>
        {/* Contact Info */}
        <div style={{
          flex: "1 1 300px",
          maxWidth: "400px",
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ marginBottom: "20px", color: "#c59d5f" }}>Get in Touch</h2>
          <p><strong>Phone:</strong> +91 1234567890</p>
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>

        {/* Contact Form */}
        <div style={{
          flex: "1 1 400px",
          maxWidth: "500px",
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={e => handleChange("name", e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={e => handleChange("email", e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Subject *"
              value={formData.subject}
              onChange={e => handleChange("subject", e.target.value)}
              required
              style={inputStyle}
            />
            <textarea
              placeholder="Your Message *"
              value={formData.message}
              onChange={e => handleChange("message", e.target.value)}
              rows="5"
              required
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        </div>
      </div>
      
    </div>
    <Footer></Footer>
    </>
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
