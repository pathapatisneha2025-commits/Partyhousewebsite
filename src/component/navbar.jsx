import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // MOBILE = column layout
  const isMobile = width <= 768;

  const styles = {
    navbar: {
      width: "100%",
      padding: shrink ? "10px 20px" : "20px 30px",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "flex-start" : "center",
      background: "rgba(255, 255, 255, 0.9)",
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
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "100%" : "auto",
      gap: isMobile ? "10px" : "30px",
      marginTop: isMobile ? "15px" : "0",
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
    },
  };

  const hoverStyle = `
    a:hover {
      background:#000;
      color:#fff !important;
      transform:scale(1.05);
    }
  `;

  return (
    <>
      <style>{hoverStyle}</style>

      <nav style={styles.navbar}>
        
        <div style={styles.topRow}>
          <img src="/Logoimage.jpeg" alt="Hall Logo" style={styles.logoImg} />
        </div>

        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About Us</Link></li>
          <li><Link to="/rooms" style={styles.navLink}>Rooms</Link></li>
          <li><Link to="/bookingpage" style={styles.navLink}>Bookings</Link></li>
          <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
          <li><Link to="/services" style={styles.navLink}>Services</Link></li>
        </ul>

      </nav>
    </>
  );
}
