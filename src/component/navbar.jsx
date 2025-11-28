import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${shrink ? "shrink" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/Logoimage.jpeg" alt="Logo" />
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="mobile-menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/bookingpage">Bookings</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </div>

      <style jsx="true">{`
        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e0dede;
          transition: 0.3s ease;
          z-index: 1000;
        }

        .navbar.shrink .logo img {
          width: 90px;
          height: 45px;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
        }

        .logo img {
          width: 120px;
          height: 60px;
          border-radius: 40px;
          transition: 0.3s ease;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links li a {
          text-decoration: none;
          color: #000;
          font-weight: 600;
          padding: 10px;
          border-radius: 8px;
          transition: 0.3s ease;
        }

        /* Mobile styles */
        .mobile-menu-icon {
          display: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mobile-menu-icon {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            flex-direction: column;
            padding: 15px 0;
            margin: 0;
            gap: 12px;
            display: none;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links li a {
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
}
