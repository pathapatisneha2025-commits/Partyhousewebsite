import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  // Auto close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Shrink navbar on scroll
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

        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMobileOpen(false)}>
          <img src="/Logoimage.jpeg" alt="Logo" />
        </Link>

        {/* Hamburger Icon */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link></li>
          <li><Link to="/rooms" onClick={() => setMobileOpen(false)}>Rooms</Link></li>
          <li><Link to="/bookingpage" onClick={() => setMobileOpen(false)}>Bookings</Link></li>
          <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
          <li><Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link></li>
        </ul>

      </div>

      {/* Styles */}
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
          position: relative;
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
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: #000;
          font-weight: 600;
          padding: 10px;
          border-radius: 8px;
          transition: 0.3s ease;
        }

        /* Mobile View */
        .mobile-menu-icon {
          display: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mobile-menu-icon {
            display: block;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1100;
            background: white;
            border-radius: 8px;
            padding: 4px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          }

          .nav-links {
            flex-direction: column;
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.4s ease;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            width: 100%;
            position: absolute;
            top: 70px;
            left: 0;
            gap: 12px;
          }

          .nav-links.open {
            max-height: 500px;
          }

          .nav-links li a {
            text-align: center;
            padding: 15px 0;
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
