import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${shrink ? "shrink" : ""}`}>
      <div className="logo">
        <img src="/Logoimage.jpeg" alt="Logo" />
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/rooms" onClick={() => setMenuOpen(false)}>Rooms</Link>
        <Link to="/bookingpage" onClick={() => setMenuOpen(false)}>Bookings</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e0dede;
          z-index: 1000;
          transition: 0.3s ease;
        }
        .navbar.shrink { padding: 10px 20px; }
        .logo img { width: 120px; height: 60px; border-radius: 40px; transition: 0.3s ease; }
        .navbar.shrink .logo img { width: 90px; height: 45px; }

        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          text-decoration: none;
          font-weight: 600;
          color: #000;
          padding: 6px 14px;
          border-radius: 8px;
          transition: 0.3s ease;
        }
        .nav-links a:hover {
          background: #000;
          color: #fff;
          transform: scale(1.05);
        }

        .hamburger { display: none; font-size: 24px; cursor: pointer; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            right: -100%;
            background: #fff;
            flex-direction: column;
            gap: 15px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: 0.3s ease;
          }
          .nav-links.active { right: 20px; }

          .hamburger { display: block; }
        }
      `}</style>
    </nav>
  );
}
