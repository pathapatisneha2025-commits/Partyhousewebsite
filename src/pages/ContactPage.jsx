import { useState } from "react";
import { Footer } from "../component/footersection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isMobile = window.innerWidth < 768;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const response = await fetch(
        "https://api.ajpartyhouse.in/contact/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Server not reachable");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f9f9f9",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          padding: isMobile ? "30px 15px" : "50px 5%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#333",
            fontSize: isMobile ? "1.8rem" : "2.5rem",
          }}
        >
          Contact Us
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "30px",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          {/* CONTACT INFO */}
          <div
            style={{
              width: isMobile ? "100%" : "400px",
              background: "#fff",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginBottom: "20px", color: "#c59d5f" }}>
              Get in Touch
            </h2>

            <p><strong>Phone:</strong> +91 7893420321</p>
            <p><strong>Email:</strong> Ajpartyhouse0205@gmail.com</p>
            <p>
              <strong>Address:</strong> New City Colony, Shadnagar
            </p>
          </div>

          {/* FORM */}
          <div
            style={{
              width: isMobile ? "100%" : "500px",
              background: "#fff",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <input
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                style={inputStyle}
              />

              <input
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                style={inputStyle}
              />

              <input
                placeholder="Subject *"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                style={inputStyle}
              />

              <textarea
                placeholder="Your Message *"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows="5"
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <button type="submit" style={buttonStyle}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// STYLES
const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "50px",
  border: "none",
  background: "#c59d5f",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};