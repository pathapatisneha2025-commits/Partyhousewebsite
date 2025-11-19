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
      background: "white",
      backdropFilter: "blur(12px)",
      zIndex: 9999,
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

    navLinks: {
      listStyle: "none",
      display: isMobile ? "block" : "flex",
      flexDirection: isMobile ? "column" : "row",
      width: "100%",
      padding: 0,
      marginTop: isMobile ? (menuOpen ? "15px" : "0") : 0,
      maxHeight: isMobile ? (menuOpen ? "300px" : "0px") : "none",
      overflow: "hidden",
      transition: "0.3s ease",
      background: isMobile ? "#fff" : "transparent",
      borderTop: isMobile ? "1px solid #eaeaea" : "none",
    },

    navLink: {
      padding: "12px 14px",
      textDecoration: "none",
      color: "#000",
      fontWeight: 600,
      display: "block",
      borderRadius: "8px",
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
        
        {/* HEADER */}
        <div style={styles.topRow}>
          <img src="/Logoimage.jpeg" alt="Hall Logo" style={styles.logoImg} />

          {/* MOBILE MENU ICON */}
          {isMobile && (
            <div onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>
          )}
        </div>

        {/* DROPDOWN MENU */}
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
