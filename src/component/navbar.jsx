import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* INLINE CSS OBJECTS */
  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      width: "100%",
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #eaeaea",
      padding: shrink ? "10px 20px" : "20px 30px",
      transition: "0.3s ease",
      zIndex: 1000,
    },

    spacer: {
      height: shrink ? "70px" : "110px",
      width: "100%",
    },

    navTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    logo: {
      width: shrink ? "90px" : "120px",
      height: shrink ? "45px" : "60px",
      borderRadius: "40px",
      objectFit: "cover",
      transition: "0.3s ease",
    },

    menuIcon: {
      cursor: "pointer",
      display: "none", // will show via media-query
    },

    navLinks: {
      listStyle: "none",
      display: menuOpen ? "flex" : "none",
      flexDirection: "column",
      gap: "15px",
      marginTop: "15px",
      padding: 0,
    },

    navLink: {
      textDecoration: "none",
      fontWeight: 600,
      padding: "8px 14px",
      borderRadius: "8px",
      color: "#000",
      transition: "0.3s ease",
    },
  };

  return (
    <>
      {/* Embedded CSS for hover + media queries */}
      <style>
        {`
          a:hover {
            background: #000;
            color: #fff !important;
          }

          /* Desktop styles */
          @media (min-width: 769px) {
            .nav-links-inline {
              display: flex !important;
              flex-direction: row !important;
              gap: 30px !important;
              margin-top: 0 !important;
            }

            .menu-icon-inline {
              display: none !important;
            }
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .menu-icon-inline {
              display: block !important;
            }
          }
        `}
      </style>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navTop}>
          <img src="/Logoimage.jpeg" alt="Hall Logo" style={styles.logo} />

          <div
            className="menu-icon-inline"
            style={styles.menuIcon}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>

        <ul
          className="nav-links-inline"
          style={styles.navLinks}
        >
          <li><Link style={styles.navLink} to="/">Home</Link></li>
          <li><Link style={styles.navLink} to="/about">About Us</Link></li>
          <li><Link style={styles.navLink} to="/rooms">Rooms</Link></li>
          <li><Link style={styles.navLink} to="/bookingpage">Bookings</Link></li>
          <li><Link style={styles.navLink} to="/contact">Contact</Link></li>
          <li><Link style={styles.navLink} to="/services">Services</Link></li>
        </ul>
      </nav>

      {/* Anti-overlap spacer */}
      <div style={styles.spacer}></div>
    </>
  );
}
