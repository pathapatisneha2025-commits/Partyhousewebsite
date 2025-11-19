import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    navbar: {
      width: "95%",
      padding: shrink ? "10px 20px" : "20px 20px",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(12px)",
      zIndex: 1000,
      borderBottom: "1px solid #e0dede",
      transition: "0.3s ease",
      overflowX: "auto", // allows horizontal scroll if needed
    },
    logoImg: {
      width: shrink ? "90px" : "120px",
      height: shrink ? "45px" : "60px",
      borderRadius: "40px",
      objectFit: "cover",
      transition: "0.3s ease",
      flexShrink: 0,
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
      flexWrap: "nowrap", // keep horizontal
      justifyContent: "flex-end",
      margin: 0,
      padding: 0,
    },
    navLink: {
      fontWeight: 600,
      fontSize: "16px",
      padding: "6px 14px",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#000",
      transition: "0.3s ease",
      whiteSpace: "nowrap", // prevent wrapping
    },
  };

  const hoverStyle = `
    .nav-item:hover {
      background:#000;
      color:#fff !important;
      transform:scale(1.05);
    }

    /* MOBILE RESPONSIVE */
    @media (max-width: 768px) {
      ul.nav-links {
        justify-content: flex-start;
        gap: 15px;
      }
    }
  `;

  return (
    <>
      <style>{hoverStyle}</style>

      <nav style={styles.navbar}>
        <div>
          <img src="/Logoimage.jpeg" alt="Hall Logo" style={styles.logoImg} />
        </div>

        <ul className="nav-links" style={styles.navLinks}>
          <li className="nav-item"><Link to="/" style={styles.navLink}>Home</Link></li>
          <li className="nav-item"><Link to="/about" style={styles.navLink}>About Us</Link></li>
          <li className="nav-item"><Link to="/rooms" style={styles.navLink}>Rooms</Link></li>
          <li className="nav-item"><Link to="/bookingpage" style={styles.navLink}>Bookings</Link></li>
          <li className="nav-item"><Link to="/contact" style={styles.navLink}>Contact</Link></li>
          <li className="nav-item"><Link to="/services" style={styles.navLink}>Services</Link></li>
        </ul>
      </nav>
    </>
  );
}
