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
      padding: shrink ? "10px 20px" : "20px 25px",
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
      flexWrap: "wrap", // allows links to wrap on very small screens
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
      flexDirection: "row",
      gap: "20px",
      padding: 0,
      margin: 0,
      flexWrap: "wrap", // ensures links don't overflow on tiny screens
    },

    navLink: {
      fontWeight: 600,
      fontSize: "16px",
      padding: "10px",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#000",
      transition: "0.3s ease",
      textAlign: "center",
      whiteSpace: "nowrap", // prevents wrapping of individual links
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
