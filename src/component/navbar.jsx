import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShrink(true);
      else setShrink(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    navbar: {
      width: "95%",
      padding: shrink ? "10px 50px" : "20px 60px",
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
  };

  const hoverStyle = `
    .nav-item:hover {
      background:#000;
      color:#fff !important;
      transform:scale(1.05);
    }
  `;

  return (
    <>
      <style>{hoverStyle}</style>

      <nav style={styles.navbar}>
        {/* LOGO */}
        <div>
          <img src="/Logoimage.jpeg" alt="Hall Logo" style={styles.logoImg} />
        </div>

        {/* NAV LINKS (NORMAL — NO MAP) */}
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
