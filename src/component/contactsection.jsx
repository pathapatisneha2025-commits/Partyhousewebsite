import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    venue: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.venue) {
      alert.error("Please fill in all required fields");
      return;
    }

    alert.success("Booking inquiry submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      venue: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      style={{
        padding: "60px 16px",
        background: "linear-gradient(to bottom, #ffffff, #fff5ec)",
      }}
    >
      <style>
        {`
        .contact-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .contact-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 32px;
          }
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 480px) {
          .form-grid.two-cols {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }

        input, select, textarea {
          width: 100%;
          box-sizing: border-box;
        }

        button {
          transition: 0.3s;
        }

        button:hover {
          background: #b38b4c;
        }
      `}
      </style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 20px",
              background: "rgba(197,157,95,0.15)",
              color: "#c59d5f",
              borderRadius: "50px",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Contact Us
          </span>

          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "12px" }}>
            Book Your Event With Us
          </h2>

          <p style={{ color: "#666", maxWidth: "500px", margin: "0 auto", fontSize: "15px" }}>
            Have questions or want to book your next event? Fill out the form — we’ll respond soon.
          </p>
        </motion.div>

        {/* Form + Info Box */}
        <div className="contact-grid">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              }}
            >
              <form onSubmit={handleSubmit} className="form-grid" style={{ gap: "16px" }}>
                {/* Name + Email */}
                <div className="form-grid two-cols">
                  <InputField label="Full Name *" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="John Doe" />
                  <InputField label="Email *" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="john@example.com" />
                </div>

                {/* Phone + Venue */}
                <div className="form-grid two-cols">
                  <InputField label="Phone Number *" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+91 98765 43210" />
                  <div>
                    <label style={labelStyle}>Preferred Venue *</label>
                    <select value={formData.venue} onChange={(e) => handleChange("venue", e.target.value)} style={{ ...inputStyle, background: "white" }}>
                      <option value="">Select Venue</option>
                      <option value="grand">Grand Celebration Hall</option>
                      <option value="mini">Mini Function Room</option>
                    </select>
                  </div>
                </div>

                {/* Date + Guests */}
                <div className="form-grid two-cols">
                  <InputField label="Event Date" type="date" value={formData.date} onChange={(e) => handleChange("date", e.target.value)} />
                  <InputField label="Expected Guests" type="number" value={formData.guests} placeholder="50" onChange={(e) => handleChange("guests", e.target.value)} />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Additional Details</label>
                  <textarea value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Tell us about your event…" rows={4} style={{ ...inputStyle, resize: "none" }} />
                </div>

                {/* Submit */}
                <button style={submitButtonStyle}>
                  Submit Inquiry <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: "#fff5ec",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "fit-content",
            }}
          >
            <ContactInfo icon={<Phone />} title="Phone" info="+91 98765 43210" sub="9 AM – 9 PM" />
            <ContactInfo icon={<Mail />} title="Email" info="info@royalhall.com" sub="24-hour reply" />
            <ContactInfo icon={<MapPin />} title="Location" info="123 Elegant Avenue, Downtown City" sub="India – 600001" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Input Field Component */
function InputField({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}

/* Contact Info Box */
function ContactInfo({ icon, title, info, sub }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "28px", color: "#c59d5f", marginBottom: "6px" }}>{icon}</div>
      <h3 style={{ margin: "0 0 4px", fontSize: "18px" }}>{title}</h3>
      <p style={{ margin: 0, fontWeight: 500 }}>{info}</p>
      <p style={{ margin: 0, color: "#777", fontSize: "14px" }}>{sub}</p>
    </div>
  );
}

const labelStyle = { display: "block", marginBottom: "4px", color: "#444", fontWeight: 500 };
const inputStyle = { width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #ccc", outline: "none", fontSize: "14px", transition: "0.2s" };
const submitButtonStyle = { width: "100%", padding: "14px", borderRadius: "50px", background: "#c59d5f", color: "white", fontSize: "16px", border: "none", cursor: "pointer", display: "flex", justifyContent: "center", gap: "8px", alignItems: "center", fontWeight: 600 };
