import React, { useState, useEffect } from "react";

export default function RoomsSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive adjustments
  const getResponsiveStyles = () => {
    let sectionPadding = "120px 60px";
    let titleFontSize = "3rem";
    let roomTitleFontSize = "1.75rem";
    let textFontSize = "16px";
    let cardPadding = "25px";
    let cardGap = "40px";
    let imageHeight = "280px";

    if (windowWidth <= 1024) {
      sectionPadding = "100px 40px";
      titleFontSize = "2.5rem";
      roomTitleFontSize = "1.5rem";
      textFontSize = "15px";
      cardGap = "30px";
      imageHeight = "240px";
    }
    if (windowWidth <= 768) {
      sectionPadding = "80px 24px";
      titleFontSize = "2rem";
      roomTitleFontSize = "1.3rem";
      textFontSize = "14px";
      cardGap = "20px";
      imageHeight = "200px";
      cardPadding = "20px";
    }
    if (windowWidth <= 480) {
      sectionPadding = "60px 16px";
      titleFontSize = "1.7rem";
      roomTitleFontSize = "1.1rem";
      textFontSize = "13px";
      cardGap = "15px";
      imageHeight = "180px";
      cardPadding = "16px";
    }

    return { sectionPadding, titleFontSize, roomTitleFontSize, textFontSize, cardPadding, cardGap, imageHeight };
  };

  const { sectionPadding, titleFontSize, roomTitleFontSize, textFontSize, cardPadding, cardGap, imageHeight } =
    getResponsiveStyles();

  const styles = {
    section: {
      padding: sectionPadding,
      textAlign: "center",
      background: "#fff8f2",
    },
    title: {
      fontSize: titleFontSize,
      fontWeight: 700,
      marginBottom: "50px",
      color: "#222",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: cardGap,
    },
    card: {
      background: "#fff",
      padding: cardPadding,
      borderRadius: "25px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
      transition: "0.5s",
      border: "none",
      cursor: "pointer",
    },
    image: {
      width: "100%",
      height: imageHeight,
      objectFit: "cover",
      borderRadius: "20px",
      transition: "transform 0.4s",
    },
    roomTitle: {
      marginTop: "15px",
      fontSize: roomTitleFontSize,
      color: "#222",
    },
    text: {
      color: "#555",
      fontSize: textFontSize,
      marginTop: "6px",
    },
  };

  return (
    <section id="rooms" style={styles.section}>
      <h2 style={styles.title}>Our Premium Party Rooms</h2>

      <div style={styles.container}>
        {/* ROOM CARD 1 */}
        <div
          style={styles.card}
          onMouseOver={(e) => {
            if (windowWidth > 768) {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
            }
          }}
          onMouseOut={(e) => {
            if (windowWidth > 768) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
            }
          }}
        >
          <img
            src="/image2.jpeg"
            alt="Room 1"
            style={styles.image}
            onMouseOver={(e) => {
              if (windowWidth > 768) e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              if (windowWidth > 768) e.target.style.transform = "scale(1)";
            }}
          />
          <h3 style={styles.roomTitle}>Grand Celebration Hall</h3>
          <p style={styles.text}>Capacity: 150 Guests</p>
          <p style={styles.text}>Stage • AC • Sound • Elegant Lighting</p>
        </div>

        {/* ROOM CARD 2 */}
        <div
          style={styles.card}
          onMouseOver={(e) => {
            if (windowWidth > 768) {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
            }
          }}
          onMouseOut={(e) => {
            if (windowWidth > 768) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
            }
          }}
        >
          <img
            src="/minifunction.jpeg"
            alt="Room 2"
            style={styles.image}
            onMouseOver={(e) => {
              if (windowWidth > 768) e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              if (windowWidth > 768) e.target.style.transform = "scale(1)";
            }}
          />
          <h3 style={styles.roomTitle}>Mini Function Room</h3>
          <p style={styles.text}>Capacity: 60 Guests</p>
          <p style={styles.text}>Birthdays • Baby Showers • Family Events</p>
        </div>
      </div>
    </section>
  );
}
