import React from "react";

export default function App() {
  return (
    <>
      <style>{`
        /* GLOBAL STYLES */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background: #fefefe;
          color: #222;
          overflow-x: hidden;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        /* NAVBAR */
        .navbar {
          width: 100%;
          padding: 20px 60px;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid #e0dede;
          transition: 0.3s;
        }

   .logo img {
  width: 120px;       /* width of the rectangle */
  height: 60px;       /* shorter height for oval effect */
  border-radius: 50px / 50px; /* makes a horizontal capsule */
  object-fit: cover;
  transition: transform 0.3s;
}

.logo img:hover {
  transform: scale(1.05);
}


        .nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
        }

        .nav-links li a {
          font-weight: 600;
          font-size: 16px;
          padding: 6px 12px;
          border-radius: 8px;
          transition: 0.3s;
        }

        .nav-links li a:hover {
          background: #000;
          color: #fff;
          transform: scale(1.05);
        }

        /* HERO */
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 120px;
          background-image: url('/heroimage.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.45);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: #fff;
          animation: fadeIn 1.5s ease forwards;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }

        .hero-content p {
          font-size: 1.5rem;
          margin-bottom: 30px;
          text-shadow: 0 3px 15px rgba(0,0,0,0.5);
        }

        .btn {
          display: inline-block;
          background: #c59d5f; /* gold accent */
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          color: #fff;
          font-size: 18px;
          transition: 0.4s;
        }

        .btn:hover {
          background: #a87a3b;
          transform: scale(1.08);
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px);}
          100% { opacity: 1; transform: translateY(0);}
        }

        /* ROOMS */
        .rooms-section {
          padding: 120px 60px;
          text-align: center;
          background: #fff8f2;
        }

        .rooms-section h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 50px;
          color: #222;
        }

        .rooms-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .room-card {
          background: #fff;
          padding: 25px;
          border-radius: 25px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
          transition: 0.5s;
          border: none;
        }

        .room-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .room-card img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 20px;
          transition: transform 0.4s;
        }

        .room-card img:hover {
          transform: scale(1.05);
        }

        .room-card h3 {
          margin-top: 15px;
          font-size: 1.75rem;
          color: #222;
        }

        .room-card p {
          color: #555;
          font-size: 16px;
          margin-top: 6px;
        }

        /* CONTACT FORM */
        .contact-section {
          padding: 100px 60px;
          background: #fff;
          text-align: center;
        }

        .contact-section h2 {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: #222;
        }

        .contact-form {
          max-width: 720px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-grid .full-width {
          grid-column: 1 / -1;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #ddd;
          font-size: 16px;
          width: 100%;
          background: #fff;
          transition: 0.3s;
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #c59d5f;
          box-shadow: 0 0 10px rgba(197, 157, 95, 0.4);
        }

        .contact-form button {
          background: #c59d5f;
          padding: 16px;
          border-radius: 50px;
          border: none;
          font-weight: bold;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          transition: 0.4s;
        }

        .contact-form button:hover {
          background: #a87a3b;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        /* CONTACT DETAILS */
        .contact-details-section {
          padding: 80px 60px;
          background: #fff8f2;
        }
.details-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.details-card {
  background: #fff;
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.details-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.12);
}

.details-card h3 {
  font-size: 1.5rem;
  color: #222;
}

.details-card p {
  color: #555;
  margin: 6px 0;
}


        /* FOOTER */
        .footer {
          background: #222;
          color: #fff;
          padding: 35px 20px;
          text-align: center;
          font-size: 16px;
          letter-spacing: 0.5px;
        }

      `}</style>

      {/* NAVBAR */}
   <nav className="navbar">
  <div className="logo">
    <img src="/Logoimage.jpeg" alt="Hall Logo" />
  </div>

  <ul className="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#rooms">About Us</a></li>
    <li><a href="#rooms">Rooms</a></li>
    <li><a href="#contact">Bookings</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>


      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Royal Celebration Party Hall</h1>
          <p>Where celebrations become magical memories</p>
          <a href="#contact" className="btn">Book Now</a>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="rooms-section">
        <h2>Our Premium Party Rooms</h2>
        <div className="rooms-container">
          <div className="room-card">
            <img src="/image2.jpeg" alt="Room 1" />
            <h3>Grand Celebration Hall</h3>
            <p>Capacity: 150 Guests</p>
            <p>Stage • AC • Sound • Elegant Lighting</p>
          </div>
          <div className="room-card">
            <img src="/minifunction.jpeg" alt="Room 2" />
            <h3>Mini Function Room</h3>
            <p>Capacity: 60 Guests</p>
            <p>Birthdays • Baby Showers • Family Events</p>
          </div>
        </div>
      </section>


{/* CONTACT SECTION */}
<section id="contact" className="contact-section">
  <h2 style={{ textAlign: "center", fontSize: "2.8rem", marginBottom: "50px" }}>Contact & Booking Inquiry</h2>

  <div className="contact-container" style={{ 
    display: "flex", 
    gap: "40px", 
    flexWrap: "wrap", 
    justifyContent: "center",
    alignItems: "flex-start"
  }}>
    
    {/* Contact Form */}
    <form className="contact-form" style={{ flex: "1 1 400px", maxWidth: "720px" }}>
      <div className="form-grid">
        <input type="text" placeholder="Full Name *" required />
        <input type="email" placeholder="Email Address *" required />
        <input type="tel" placeholder="Phone Number *" required />
        <select required>
          <option>Preferred Venue *</option>
          <option>Grand Celebration Hall</option>
          <option>Mini Function Room</option>
        </select>
        <input type="date" placeholder="Event Date" />
        <input type="number" placeholder="Expected Guests" />
        <textarea rows="4" placeholder="Additional Details" className="full-width"></textarea>
      </div>
      <button type="submit">Submit Inquiry</button>
    </form>

    {/* Contact Details Rectangle */}
    <div style={{ 
      background: "#fff8f2", 
      padding: "40px 30px", 
      borderRadius: "20px", 
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)", 
      flex: "1 1 300px", 
      minWidth: "280px", 
      display: "flex", 
      flexDirection: "column", 
      gap: "25px",
      textAlign: "center"
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span style={{ fontSize: "1.6rem", color: "#c59d5f" }}>📞</span>
        <h3 style={{ margin: 0 }}>Phone</h3>
        <p style={{ margin: 0 }}>+91 98765 43210</p>
        <p style={{ margin: 0, color: "#555" }}>Available: 9 AM – 9 PM</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span style={{ fontSize: "1.6rem", color: "#c59d5f" }}>✉️</span>
        <h3 style={{ margin: 0 }}>Email</h3>
        <p style={{ margin: 0 }}>info@royalhall.com</p>
        <p style={{ margin: 0, color: "#555" }}>We reply within 24 hours</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span style={{ fontSize: "1.6rem", color: "#c59d5f" }}>📍</span>
        <h3 style={{ margin: 0 }}>Location</h3>
        <p style={{ margin: 0 }}>123 Elegant Avenue, Downtown City, India – 600001</p>
      </div>
    </div>

  </div>
</section>

{/* FAQ SECTION */}
<section id="faq" className="faq-section" style={{ padding: "100px 60px", background: "#fff", textAlign: "center" }}>
  <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "50px", color: "#222" }}>Frequently Asked Questions</h2>

  <div className="faq-container" style={{ maxWidth: "900px", margin: "auto", display: "flex", flexDirection: "column", gap: "20px" }}>
    
    {[
      { q: "What is the maximum capacity of the Grand Celebration Hall?", a: "The Grand Celebration Hall can comfortably host up to 150 guests." },
      { q: "Do you provide catering services?", a: "Yes, we offer custom catering services with a wide variety of menu options for your events." },
      { q: "Can I book the hall for half-day events?", a: "Yes, both of our rooms are available for full-day or half-day bookings depending on availability." },
      { q: "Is parking available for guests?", a: "Yes, we provide ample parking space for all guests right beside the hall." }
    ].map((item, index) => (
      <div key={index} className="faq-item" 
        style={{
          background: "#fff8f2",
          padding: "20px 25px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          cursor: "pointer",
          transition: "transform 0.3s, box-shadow 0.3s",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => {
          const answer = e.currentTarget.querySelector(".faq-answer");
          const arrow = e.currentTarget.querySelector(".faq-arrow");
          if(answer.style.display === "block") {
            answer.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
          } else {
            answer.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
          }
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#222" }}>{item.q}</h3>
          <span className="faq-arrow" style={{ fontSize: "1.5rem", transition: "transform 0.3s" }}>▼</span>
        </div>
        <p className="faq-answer" style={{ display: "none", color: "#555", marginTop: "10px" }}>{item.a}</p>
      </div>
    ))}

  </div>
</section>


{/* SERVICES SECTION */}
<section id="services" className="services-section" style={{ padding: "100px 60px", background: "#fff8f2", textAlign: "center" }}>
  <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "50px", color: "#222" }}>Our Services</h2>
  
  <div className="services-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
    
    <div className="service-card" style={{
      background: "#fff",
      padding: "30px 25px",
      borderRadius: "20px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      transition: "transform 0.3s, box-shadow 0.3s",
    }}>
      <span style={{ fontSize: "2rem", color: "#c59d5f" }}>🎉</span>
      <h3 style={{ fontSize: "1.5rem", marginTop: "15px", color: "#222" }}>Event Planning</h3>
      <p style={{ color: "#555", marginTop: "6px" }}>Professional planning for weddings, birthdays, and corporate events.</p>
    </div>

    <div className="service-card" style={{
      background: "#fff",
      padding: "30px 25px",
      borderRadius: "20px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      transition: "transform 0.3s, box-shadow 0.3s",
    }}>
      <span style={{ fontSize: "2rem", color: "#c59d5f" }}>🍽️</span>
      <h3 style={{ fontSize: "1.5rem", marginTop: "15px", color: "#222" }}>Catering</h3>
      <p style={{ color: "#555", marginTop: "6px" }}>Custom menus with delicious food and beverages for any event.</p>
    </div>

    <div className="service-card" style={{
      background: "#fff",
      padding: "30px 25px",
      borderRadius: "20px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      transition: "transform 0.3s, box-shadow 0.3s",
    }}>
      <span style={{ fontSize: "2rem", color: "#c59d5f" }}>🎶</span>
      <h3 style={{ fontSize: "1.5rem", marginTop: "15px", color: "#222" }}>Music & Entertainment</h3>
      <p style={{ color: "#555", marginTop: "6px" }}>Professional DJs, live music, and entertainment services.</p>
    </div>

    <div className="service-card" style={{
      background: "#fff",
      padding: "30px 25px",
      borderRadius: "20px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
      transition: "transform 0.3s, box-shadow 0.3s",
    }}>
      <span style={{ fontSize: "2rem", color: "#c59d5f" }}>💡</span>
      <h3 style={{ fontSize: "1.5rem", marginTop: "15px", color: "#222" }}>Decor & Lighting</h3>
      <p style={{ color: "#555", marginTop: "6px" }}>Elegant decorations and professional lighting for a magical ambiance.</p>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Royal Party Hall. All Rights Reserved.
      </footer>
    </>
  );
}
