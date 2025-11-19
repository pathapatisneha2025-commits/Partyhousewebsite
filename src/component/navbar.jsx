import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const isMobile = width <= 768;

  const styles = {
    navbar: {
      width: "100%",
      padding: shrink ? "10px 20px" : "20px 30px",
      position: "fixed",
      top: 0,
      left: 0,
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(12px)",
      zIndex: 1000,
      borderBottom: "1px solid #eaeaea",
      transition: "0.3s ease",
    },

    topRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },

    logoImg: {
      width: shrink ? "90px" : "120px",
      height: shrink ? "45px" : "60px",
      borderRadius: "40px",
      objectFit: "cover",
      transition: "0.3s ease",
    },

    menuIcon: {
      fontSize: "28px",
      cursor: "pointer",
      display: isMobile ? "block" : "none",
    },

    navLinks: {
      listStyle: "none",
      display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "100%" : "auto",
      padding: 0,
      marginTop: isMobile ? "15px" : "0",
      gap: isMobile ? "15px" : "30px",
    },

    navLink: {
      textDecoration: "none",
      color: "#000",
      fontWeight: 600,
      padding: "8px 14px",
      borderRadius: "8px",
      transition: "0.3s ease",
    },
  };

  const hoverStyle = `
    a:hover {
      background: #000;
      color: #fff !important;
    }
  `;

  return (
    <>
      <style>{hoverStyle}</style>

      <nav style={styles.navbar}>

        {/* Top Row */}
        <div style={styles.topRow}>
          <img src="/Logoimage.jpeg" alt="Hall Logo" style={styles.logoImg} />

          {/* Mobile Menu ICON */}
          {isMobile && (
            <div onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>
          )}
        </div>

        {/* Nav Links */}
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
