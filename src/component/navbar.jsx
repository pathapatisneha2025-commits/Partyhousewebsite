import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      gap: "30px",
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
    mobileMenu: {
      display: menuOpen ? "flex" : "none",
      position: "absolute",
      top: "70px",
      right: "20px",
      flexDirection: "column",
      gap: "15px",
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    hamburger: {
      display: "none",
      fontSize: "24px",
      cursor: "pointer",
    },
  };

  const hoverStyle = `
    .nav-item:hover {
      background:#000;
      color:#fff !important;
      transform:scale(1.05);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .hamburger {
        display: block;
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

        {/* Desktop Links */}
        <ul className="nav-links" style={styles.navLinks}>
          <li className="nav-item"><Link to="/" style={styles.navLink}>Home</Link></li>
          <li className="nav-item"><Link to="/about" style={styles.navLink}>About Us</Link></li>
          <li className="nav-item"><Link to="/rooms" style={styles.navLink}>Rooms</Link></li>
          <li className="nav-item"><Link to="/bookingpage" style={styles.navLink}>Bookings</Link></li>
          <li className="nav-item"><Link to="/contact" style={styles.navLink}>Contact</Link></li>
          <li className="nav-item"><Link to="/services" style={styles.navLink}>Services</Link></li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger" style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <ul style={styles.mobileMenu}>
          <li><Link to="/" style={styles.navLink} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink} onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/rooms" style={styles.navLink} onClick={() => setMenuOpen(false)}>Rooms</Link></li>
          <li><Link to="/bookingpage" style={styles.navLink} onClick={() => setMenuOpen(false)}>Bookings</Link></li>
          <li><Link to="/contact" style={styles.navLink} onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/services" style={styles.navLink} onClick={() => setMenuOpen(false)}>Services</Link></li>
        </ul>
      </nav>
    </>
  );
}
