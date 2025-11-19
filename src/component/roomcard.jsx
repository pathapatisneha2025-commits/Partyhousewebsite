import React, { useState, useEffect, useMemo } from "react";

export default function RoomsSection() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const responsive = useMemo(() => {
    if (width <= 480) {
      return {
        sectionPadding: "60px 16px",
        titleSize: "1.7rem",
        roomTitleSize: "1.1rem",
        textSize: "13px",
        cardGap: "15px",
        imageHeight: "180px",
        cardPadding: "16px",
      };
    }
    if (width <= 768) {
      return {
        sectionPadding: "80px 24px",
        titleSize: "2rem",
        roomTitleSize: "1.3rem",
        textSize: "14px",
        cardGap: "20px",
        imageHeight: "200px",
        cardPadding: "20px",
      };
    }
    if (width <= 1024) {
      return {
        sectionPadding: "100px 40px",
        titleSize: "2.5rem",
        roomTitleSize: "1.5rem",
        textSize: "15px",
        cardGap: "30px",
        imageHeight: "240px",
        cardPadding: "25px",
      };
    }
    return {
      sectionPadding: "120px 60px",
      titleSize: "3rem",
      roomTitleSize: "1.75rem",
      textSize: "16px",
      cardGap: "40px",
      imageHeight: "280px",
      cardPadding: "25px",
    };
  }, [width]);

  const styles = {
    section: {
      padding: responsive.sectionPadding,
      textAlign: "center",
      background: "#fff8f2",
    },
    title: {
      fontSize: responsive.titleSize,
      fontWeight: 700,
      marginBottom: "50px",
      color: "#222",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: responsive.cardGap,
    },
    card: {
      background: "#fff",
      padding: responsive.cardPadding,
      borderRadius: "25px",
      boxShadow: width > 768 ? "0 12px 30px rgba(0,0,0,0.1)" : "0 5px 15px rgba(0,0,0,0.05)",
      transition: "0.3s",
      cursor: "pointer",
    },
    image: {
      width: "100%",
      height: responsive.imageHeight,
      objectFit: "cover",
      borderRadius: "20px",
      transition: width > 768 ? "transform 0.4s" : "none",
    },
    roomTitle: {
      marginTop: "15px",
      fontSize: responsive.roomTitleSize,
      color: "#222",
    },
    text: {
      color: "#555",
      fontSize: responsive.textSize,
    },
  };

  return (
    <section id="rooms" style={styles.section}>
      <h2 style={styles.title}>Our Premium Party Rooms</h2>

      <div style={styles.container}>
        {/* ROOM CARD 1 */}
        <RoomCard
          styles={styles}
          width={width}
          img="/image2.jpeg"
          title="Grand Celebration Hall"
          capacity="150 Guests"
          details="Stage • AC • Sound • Elegant Lighting"
        />

        {/* ROOM CARD 2 */}
        <RoomCard
          styles={styles}
          width={width}
          img="/minifunction.jpeg"
          title="Mini Function Room"
          capacity="60 Guests"
          details="Birthdays • Baby Showers • Family Events"
        />
      </div>
    </section>
  );
}

function RoomCard({ styles, width, img, title, capacity, details }) {
  return (
    <div
      style={styles.card}
      onMouseOver={(e) => {
        if (width > 768) e.currentTarget.style.transform = "translateY(-10px)";
      }}
      onMouseOut={(e) => {
        if (width > 768) e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={img}
        style={styles.image}
        alt={title}
        onMouseOver={(e) => width > 768 && (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => width > 768 && (e.target.style.transform = "scale(1)")}
      />
      <h3 style={styles.roomTitle}>{title}</h3>
      <p style={styles.text}>Capacity: {capacity}</p>
      <p style={styles.text}>{details}</p>
    </div>
  );
}
