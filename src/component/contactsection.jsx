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
      alert("Please fill required fields");
      return;
    }

    alert("Submitted Successfully!");

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
    <section className="contact-section">

      <style>{`
        .contact-section {
          padding: 100px 0;
          background: linear-gradient(to bottom, #ffffff, #fff5ec);
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 24px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
        }

        /* FORM CARD */
        .form-card {
          background: white;
          padding: 48px;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        /* GRID ROWS */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #444;
        }

        input, select, textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #ccc;
          font-size: 15px;
          outline: none;
          box-sizing: border-box;
        }

        /* BUTTON */
        .btn {
          width: 100%;
          padding: 16px;
          border-radius: 50px;
          background: #c59d5f;
          color: white;
          font-size: 16px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }

        /* INFO BOX */
        .info-box {
          background: #fff5ec;
          padding: 40px 30px;
          border-radius: 22px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          height: fit-content;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .form-card {
            padding: 32px;
          }
        }

        /* MOBILE */
        /* MOBILE */
@media (max-width: 600px) {
  .contact-section {
    padding: 60px 0;
  }

  .container {
    padding: 0 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-card {
    padding: 22px;
  }

  input,
  select,
  textarea {
    font-size: 14px;
  }

  .info-box {
    margin-left: 12px;
    margin-right: 40px;
    padding: 28px 40px;
    width: calc(100% - 24px);
    box-sizing: border-box;
    align-items: center;
    text-align: center;
  }
}
        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span style={{
            padding: "8px 20px",
            background: "rgba(197,157,95,0.15)",
            borderRadius: "50px",
            color: "#c59d5f",
            fontWeight: 600
          }}>
            Contact Us
          </span>

          <h2 style={{ fontSize: "36px", marginTop: "15px" }}>
            Book Your Event
          </h2>

          <p style={{ color: "#666", maxWidth: "600px", margin: "10px auto" }}>
            Fill the form and we will contact you shortly.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="contact-grid">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="form-card"
          >
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>

              <div className="form-row">
                <Input label="Name *" value={formData.name} onChange={handleChange} field="name" />
                <Input label="Email *" value={formData.email} onChange={handleChange} field="email" />
              </div>

              <div className="form-row">
                <Input label="Phone *" value={formData.phone} onChange={handleChange} field="phone" />
                <select
                  value={formData.venue}
                  onChange={(e) => handleChange("venue", e.target.value)}
                >
                  <option value="">Select Venue</option>
                  <option value="hall">Main Hall</option>
                  <option value="mini">Mini Hall</option>
                </select>
              </div>

              <div className="form-row">
                <Input label="Date" type="date" value={formData.date} onChange={handleChange} field="date" />
                <Input label="Guests" type="number" value={formData.guests} onChange={handleChange} field="guests" />
              </div>

              <div>
                <label>Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>

              <button className="btn">
                Submit <Send size={18} />
              </button>

            </form>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="info-box"
          >
            <Info icon={<Phone />} title="Phone" text="+91 7893420321" />
            <Info icon={<Mail />} title="Email" text="Ajpartyhouse0205@gmail.com" />
            <Info icon={<MapPin />} title="Location" text="Shadnagar, India" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* INPUT */
function Input({ label, type = "text", value, onChange, field }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
      />
    </div>
  );
}

/* INFO */
function Info({ icon, title, text }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "30px", color: "#c59d5f" }}>{icon}</div>
      <h3>{title}</h3>
      <p style={{ color: "#666" }}>{text}</p>
    </div>
  );
}