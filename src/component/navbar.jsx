import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    navbar: {
      width: "100%",
      padding: shrink ? "10px 20px" : "20px 25px",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column", // mobile default
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(12px)",
      zIndex: 1000,
      borderBottom: "1px solid #e0dede",
      transition: "0.3s ease",
    },

    topRow: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    logoImg: {
      width: shrink ? "90px" : "120px",
      height: shrink ? "45px" : "60px",
      borderRadius: "40px",
      objectFit: "cover",
      transition: "0.3s ease",
    },

    navLinks: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column", // MOBILE BY DEFAULT
      gap: "12px",
      width: "100%",
      padding: "15px 0",
      marginTop: "8px",
    },

    navLink: {
      fontWeight: 600,
      fontSize: "16px",
      padding: "10px",
      borderRadius: "8px",
      textDecoration: "none",
       transition: "0.3s ease",
      textAlign: "center",
    },
  };

  const hoverStyle = `
    .nav-item:hover {
      background:#000;
      color:#fff !important;
      transform:scale(1.05);
    }

    /* DESKTOP */
    @media (min-width: 768px) {
      .navbar {
        flex-direction: row !important;
        align-items: center !important;
      }
      .nav-links {
        flex-direction: row !important;
        justify-content: flex-end !important;
        width: auto !important;
        padding: 0 !important;
        margin: 0 !important;
        gap: 30px !important;
      }
    }
  `;

  return (
    <>
      <style>{hoverStyle}</style>

      <nav className="navbar" style={styles.navbar}>
        <div style={styles.topRow}>
          <img src="/Logoimage.jpeg" alt="Logo" style={styles.logoImg} />
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
