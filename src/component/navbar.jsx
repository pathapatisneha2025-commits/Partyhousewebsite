import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStyle = ({ isActive }) => ({
    color: isActive ? "#c59d5f" : "#000",
    borderBottom: isActive ? "2px solid #c59d5f" : "none",
    paddingBottom: "5px",
  });

  return (
    <>
      <nav className={`navbar ${shrink ? "shrink" : ""}`}>
        <div className="nav-container">

          {/* Logo */}
          <NavLink to="/" className="logo">
            <img src="/Logoimage.jpeg" alt="Logo" />
          </NavLink>


          {/* Mobile Menu Icon */}
          <div
            className="mobile-menu-icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>


          {/* Links */}
          <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>

            <li>
              <NavLink to="/" style={activeStyle}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" style={activeStyle}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/rooms" style={activeStyle}>
                Rooms
              </NavLink>
            </li>

            <li>
              <NavLink to="/bookingpage" style={activeStyle}>
                Bookings
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" style={activeStyle}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" style={activeStyle}>
                Contact
              </NavLink>
            </li>

          </ul>

        </div>
      </nav>


      <style jsx="true">{`

        /* FIXED HEADER */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255,255,255,0.95);
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
          display:flex;
          gap:30px;
          list-style:none;
          padding:0;
          margin:0;
        }


        .nav-links li a {
          text-decoration:none;
          font-weight:600;
          padding:10px;
          border-radius:8px;
          transition:0.3s ease;
        }


        /* Mobile Icon */
        .mobile-menu-icon {
          display:none;
          cursor:pointer;
        }



        /* MOBILE */
        @media(max-width:768px){

          .nav-container{
            padding:15px 20px;
          }


          .logo img{
            width:90px;
            height:45px;
          }


          .mobile-menu-icon{
            display:block;
            position:absolute;
            right:20px;
            top:50%;
            transform:translateY(-50%);
            background:white;
            border-radius:8px;
            padding:5px;
            box-shadow:0 2px 8px rgba(0,0,0,0.15);
            z-index:1200;
          }



          .nav-links{
            position:absolute;
            top:75px;
            left:0;
            width:100%;
            flex-direction:column;
            gap:0;
            background:white;
            overflow:hidden;
            max-height:0;
            transition:max-height .4s ease;
            box-shadow:0 8px 20px rgba(0,0,0,0.1);
          }


          .nav-links.open{
            max-height:500px;
          }


          .nav-links li a{
            display:block;
            text-align:center;
            padding:16px 0;
          }

        }

      `}</style>
    </>
  );
}