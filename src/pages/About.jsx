import React from "react";
import { Footer } from "../component/footersection";
import { AboutSection } from "../component/aboutUs";

export default function About() {
  const sectionStyle = {
    width: "100%",
    padding: "80px 60px",
    background: "#f9f9f9",
    marginTop: "80px",
  };

  const container = {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    gap: "50px",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const textBox = {
    flex: 1,
    minWidth: "300px",
  };

  const title = {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#222",
  };

  const subtitle = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#444",
    marginBottom: "15px",
  };

  const imageStyle = {
    flex: 1,
    minWidth: "300px",
    width: "100%",
    borderRadius: "20px",
    objectFit: "cover",
  };

  return (
    <section id="aboutus" style={sectionStyle}>
      <div style={container}>
        {/* LEFT TEXT SECTION */}
        <div style={textBox}>
          <h2 style={title}>About Our Party Hall</h2>
          <p style={subtitle}>
            Welcome to our premium Party Hall — the perfect destination for
            celebrations, family gatherings, corporate events, birthdays,
            engagements, and more. We are committed to offering a luxurious and
            comfortable environment that ensures every event becomes memorable.
          </p>

          <p style={subtitle}>
            Our hall includes two beautifully designed rooms that can be booked
            according to your event size and theme. Whether it's an intimate
            gathering or a grand celebration, our spaces are built to fit your
            needs.
          </p>

          <p style={subtitle}>
            With top-quality amenities, elegant interiors, and a dedicated
            support team, we strive to make your event seamless and joyful.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="/image3.jpeg" // replace with your actual image path
          alt="Party Hall"
          style={imageStyle}
        />
      </div>
      <AboutSection></AboutSection>
      <Footer></Footer>
    </section>
  );
}
