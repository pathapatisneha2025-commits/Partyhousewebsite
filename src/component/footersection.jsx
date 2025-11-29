import { motion} from "framer-motion";
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
          padding: "70px 24px",
        }}
      >
        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {/* Left 2 Columns on Desktop */}
          <div style={{ gridColumn: "span 2" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: "24px" }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "12px",
                  color: "#c59d5f",
                }}
              >
                Royal Celebration Party Hall
              </h3>

              <p
                style={{
                  maxWidth: "450px",
                  color: "#bfbfbf",
                  lineHeight: "1.6",
                }}
              >
                Creating unforgettable memories since 2010. Let us make your
                special day truly extraordinary.
              </p>
            </motion.div>

            {/* SOCIAL ICONS */}
            <div style={{ display: "flex", gap: "16px" }}>
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
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.12)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                  >
                    <Icon size={22} color="white" />
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
            <h4 style={{ fontSize: "18px", marginBottom: "20px" }}>
              Quick Links
            </h4>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {quickLinks.map((l, i) => (
                <li key={i} style={{ marginBottom: "12px" }}>
                  <a
                    href={l.href}
                    style={{
                      color: "#bfbfbf",
                      textDecoration: "none",
                      transition: "0.3s",
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
         {/* CONTACT INFO */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h4 style={{ fontSize: "18px", marginBottom: "20px" }}>
    Contact Info
  </h4>

  <ul style={{ listStyle: "none", padding: 0 }}>

    {/* Phone */}
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px"
      }}
    >
      <Phone size={22} color="#c59d5f" />
      <div style={{ lineHeight: "1.4" }}>
        <p style={{ margin: 0 }}>+91 7893420321</p>
        <p style={{ fontSize: "13px", color: "#bfbfbf", margin: 0 }}>
          9 AM – 9 PM
        </p>
      </div>
    </li>

    {/* Email */}
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px"
      }}
    >
      <Mail size={22} color="#c59d5f" />
      <p style={{ margin: 0 }}>Ajpartyhouse0205@gmail.com</p>
    </li>

    {/* Address */}
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px"
      }}
    >
      <MapPin size={22} color="#c59d5f" />
      <p style={{ margin: 0, lineHeight: "1.5" }}>
        New City Colony, Opp. HP Petrol Bunk, Shadnagar
        India
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
            marginTop: "40px",
            paddingTop: "24px",
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
              fontSize: "14px",
              gap: "16px",
            }}
          >
            <p>© {currentYear} Royal Celebration Party Hall. All Rights Reserved.</p>

            <div style={{ display: "flex", gap: "20px" }}>
              <Link
                href="#"
                style={{
                  color: "#bfbfbf",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#c59d5f")}
                onMouseLeave={(e) => (e.target.style.color = "#bfbfbf")}
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                style={{
                  color: "#bfbfbf",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
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
