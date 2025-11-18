import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENT IMPORTS
import Navbar from "./component/navbar";
import Hero from "./component/herosection";
import { AboutSection } from "./component/aboutUs";
import RoomsSection from "./component/roomcard";
import { ServicesSection } from "./component/servicesection";
import { ContactSection } from "./component/contactsection";
import { FAQSection } from "./component/faqssection";
import { Footer } from "./component/footersection";

// IF YOU HAVE A SEPARATE ABOUT PAGE
import About from "./pages/About";
import RoomsPage from "./pages/RoomPage";
import { BookingHall } from "./pages/BookingHall";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicePage";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          {/* HOME PAGE CONTENT */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutSection />
                <RoomsSection />
                <ServicesSection />
                <ContactSection />
                <FAQSection />
                <Footer />
              </>
            }
          />

          {/* ABOUT PAGE */}
          <Route path="/about" element={<About />} />
                    <Route path="/rooms" element={<RoomsPage/>} />
        <Route path="/bookinghall/:id" element={<BookingHall />} />
        <Route path="/bookingpage" element={<BookingPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/services" element={<ServicesPage/>} />




        </Routes>
      </>
    </Router>
  );
}
