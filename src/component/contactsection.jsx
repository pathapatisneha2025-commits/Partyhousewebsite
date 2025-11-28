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
      alert("Please fill in all required fields");
      return;
    }

    alert("Booking inquiry submitted successfully!");
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
        padding: "100px 0",
        background: "linear-gradient(to bottom, #ffffff, #fff5ec)",
      }}
    >
      {/* 2-COLUMN GRID FIX */}
      <style>
  {`
    /* ALWAYS 2 columns */
    .two-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      width: 100%;
    }

    /* Contact form + info layout on desktop */
    @media (min-width: 1024px) {
      .contact-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 48px;
      }
    }

    /* FIX mobile shrinking/overlap */
    @media (max-width: 480px) {
      .form-box {
        padding: 24px !important;
      }
    }
  `}
</style>


      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 22px",
              background: "rgba(197,157,95,0.15)",
              color: "#c59d5f",
              borderRadius: "50px",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            Contact Us
          </span>

          <h2 style={{ fontSize: "40px", fontWeight: 700, marginBottom: "12px" }}>
            Book Your Event With Us
          </h2>

          <p style={{ color: "#666", maxWidth: "650px", margin: "0 auto", fontSize: "18px" }}>
            Have questions or want to book your next event? Fill out the form — we’ll respond soon.
          </p>
        </motion.div>

        {/* Form + Sidebar */}
        <div className="contact-grid">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          <div
  className="form-box"
  style={{
    background: "white",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    boxSizing: "border-box",
    width: "100%",
  }}
>

              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "24px" }}>
                
                {/* Name + Email */}
                <div className="two-grid">
                  <InputField
                    label="Full Name *"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Doe"
                  />

                  <InputField
                    label="Email *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone + Venue */}
                <div className="two-grid">
                  <InputField
                    label="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                  />

                  <div>
                    <label style={labelStyle}>Preferred Venue *</label>
                    <select
                      value={formData.venue}
                      onChange={(e) => handleChange("venue", e.target.value)}
                      style={{ ...inputStyle, background: "white" }}
                    >
                      <option value="">Select Venue</option>
                      <option value="grand">Grand Celebration Hall</option>
                      <option value="mini">Mini Function Room</option>
                    </select>
                  </div>
                </div>

                {/* Date + Guests */}
                <div className="two-grid">
                  <InputField
                    label="Event Date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                  />

                  <InputField
                    label="Expected Guests"
                    type="number"
                    value={formData.guests}
                    placeholder="50"
                    onChange={(e) => handleChange("guests", e.target.value)}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Additional Details</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your event…"
                    rows={4}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                {/* Submit */}
                <button
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "50px",
                    background: "#c59d5f",
                    color: "white",
                    fontSize: "17px",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  Submit Inquiry <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* CONTACT INFORMATION BOX */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: "#fff5ec",
              padding: "40px 30px",
              borderRadius: "22px",
              boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              height: "fit-content",
            }}
          >
            <ContactInfo icon={<Phone />} title="Phone" info="+91 98765 43210" sub="9 AM – 9 PM" />
            <ContactInfo icon={<Mail />} title="Email" info="info@royalhall.com" sub="24-hour reply" />
            <ContactInfo
              icon={<MapPin />}
              title="Location"
              info="123 Elegant Avenue, Downtown City"
              sub="India – 600001"
            />
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
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

/* Contact Info */
function ContactInfo({ icon, title, info, sub }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "34px", color: "#c59d5f", marginBottom: "8px" }}>{icon}</div>
      <h3 style={{ margin: "0 0 6px", fontSize: "20px" }}>{title}</h3>
      <p style={{ margin: 0, fontWeight: 500 }}>{info}</p>
      <p style={{ margin: 0, color: "#777" }}>{sub}</p>
    </div>
  );
}

/* Styles */
const labelStyle = {
  display: "block",
  marginBottom: "6px",
  color: "#444",
  fontWeight: 500,
};

const inputStyle = {
  width: "100%",        // FIXED to prevent overlapping
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "15px",
  transition: "0.2s",
};
