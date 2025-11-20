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
      width: "100%",
      padding: shrink ? "10px 15px" : "15px 20px",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(12px)",
      zIndex: 1000,
      borderBottom: "1px solid #e0dede",
      transition: "0.3s ease",
    },

    logoImg: {
      width: shrink ? "80px" : "100px",
      height: shrink ? "40px" : "50px",
      borderRadius: "40px",
      objectFit: "cover",
      transition: "0.3s ease",
    },

    navLinks: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      listStyle: "none",
      padding: 0,
      margin: 0,
      flexWrap: "nowrap",
      flex: 1, // let links shrink to fit space
      justifyContent: "flex-end",
    },

    navLink: {
      fontWeight: 600,
      fontSize: "14px", // smaller font on mobile
      padding: "8px 10px", // smaller padding
      borderRadius: "8px",
      textDecoration: "none",
      color: "#000",
      transition: "0.3s ease",
      textAlign: "center",
      whiteSpace: "nowrap",
    },
  };

  const hoverStyle = `
    .nav-item:hover {
      background: none !important;
      color: inherit !important;
      transform: none !important;
    }
  `;

  return (
    <>
      <style>{hoverStyle}</style>
      <nav style={styles.navbar}>
        <img src="/Logoimage.jpeg" alt="Logo" style={styles.logoImg} />
        <ul style={styles.navLinks}>
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
