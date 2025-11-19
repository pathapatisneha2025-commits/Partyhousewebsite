import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Link } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(to bottom right, #1f1f1f, #2a2a2a, #1f1f1f)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 16px", // smaller padding for mobile
          width: "100%",
        }}
      >
        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          {/* LEFT SECTION */}
          <div style={{ gridColumn: "span 2" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: "20px" }}
            >
              <h3
                style={{
                  fontSize: "22px", // smaller for mobile
                  marginBottom: "10px",
                  color: "#c59d5f",
                }}
              >
                Royal Celebration Party Hall
              </h3>

              <p
                style={{
                  maxWidth: "100%",
                  color: "#bfbfbf",
                  lineHeight: "1.6",
                  fontSize: "14px",
                }}
              >
                Creating unforgettable memories since 2010. Let us make your
                special day truly extraordinary.
              </p>
            </motion.div>

            {/* SOCIAL ICONS */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    aria-label={s.label}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.12)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                  >
                    <Icon size={20} color="white" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontSize: "16px", marginBottom: "16px" }}>Quick Links</h4>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {quickLinks.map((l, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>
                  <a
                    href={l.href}
                    style={{
                      color: "#bfbfbf",
                      textDecoration: "none",
                      transition: "0.3s",
                      fontSize: "14px",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#c59d5f")}
                    onMouseLeave={(e) => (e.target.style.color = "#bfbfbf")}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontSize: "16px", marginBottom: "16px" }}>Contact Info</h4>

            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              <li style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                <Phone size={18} color="#c59d5f" />
                <div>
                  <p>+91 98765 43210</p>
                  <p style={{ fontSize: "12px", color: "#bfbfbf" }}>9 AM – 9 PM</p>
                </div>
              </li>

              <li style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                <Mail size={18} color="#c59d5f" />
                <p>info@royalhall.com</p>
              </li>

              <li style={{ display: "flex", gap: "10px" }}>
                <MapPin size={18} color="#c59d5f" />
                <p>
                  123 Elegant Avenue,
                  <br />
                  Downtown City, India
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "30px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#bfbfbf",
              fontSize: "13px",
              gap: "12px",
            }}
          >
            <p>© {currentYear} Royal Celebration Party Hall. All Rights Reserved.</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <Link
                href="#"
                style={{ color: "#bfbfbf", textDecoration: "none", fontSize: "13px" }}
                onMouseEnter={(e) => (e.target.style.color = "#c59d5f")}
                onMouseLeave={(e) => (e.target.style.color = "#bfbfbf")}
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                style={{ color: "#bfbfbf", textDecoration: "none", fontSize: "13px" }}
                onMouseEnter={(e) => (e.target.style.color = "#c59d5f")}
                onMouseLeave={(e) => (e.target.style.color = "#bfbfbf")}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
