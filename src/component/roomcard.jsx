import React from "react";

export default function RoomsSection() {
  const styles = {
    section: {
      padding: "120px 60px",
      textAlign: "center",
      background: "#fff8f2",
    },

    title: {
      fontSize: "3rem",
      fontWeight: 700,
      marginBottom: "50px",
      color: "#222",
    },

    container: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "18px",
    },

    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "25px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
      transition: "0.5s",
      border: "none",
      cursor: "pointer",
    },

    image: {
      width: "100%",
      height: "280px",
      objectFit: "cover",
      borderRadius: "20px",
      transition: "transform 0.4s",
    },

    roomTitle: {
      marginTop: "15px",
      fontSize: "1.75rem",
      color: "#222",
    },

    text: {
      color: "#555",
      fontSize: "16px",
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
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src="/image2.jpeg"
            alt="Room 1"
            style={styles.image}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />

          <h3 style={styles.roomTitle}>Grand Celebration Hall</h3>
          <p style={styles.text}>Capacity: 150 Guests</p>
          <p style={styles.text}>Stage • AC • Sound • Elegant Lighting</p>
        </div>

        {/* ROOM CARD 2 */}
        <div
          style={styles.card}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src="/minifunction.jpeg"
            alt="Room 2"
            style={styles.image}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />

          <h3 style={styles.roomTitle}>Mini Function Room</h3>
          <p style={styles.text}>Capacity: 60 Guests</p>
          <p style={styles.text}>Birthdays • Baby Showers • Family Events</p>
        </div>
      </div>
    </section>
  );
}
