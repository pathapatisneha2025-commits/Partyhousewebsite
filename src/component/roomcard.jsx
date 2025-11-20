import React from "react";
import { motion } from "framer-motion";

export default function RoomsSection() {
  const rooms = [
    {
      image: "/image2.jpeg",
      title: "Grand Celebration Hall",
      capacity: "150 Guests",
      features: "Stage • AC • Sound • Elegant Lighting",
    },
    {
      image: "/minifunction.jpeg",
      title: "Mini Function Room",
      capacity: "60 Guests",
      features: "Birthdays • Baby Showers • Family Events",
    },
  ];

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
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // 2 columns always, including mobile
      gap: "24px",
      marginTop: "48px",
    },
    statCard: {
      background: "white",
      padding: "32px",
      borderRadius: "20px",
      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "all 0.3s ease",
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

      <div style={styles.statsGrid}>
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            style={styles.statCard}
            whileHover={{ y: -10, boxShadow: "0px 8px 30px rgba(0,0,0,0.15)" }}
          >
            <img
              src={room.image}
              alt={room.title}
              style={styles.image}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <h3 style={styles.roomTitle}>{room.title}</h3>
            <p style={styles.text}>Capacity: {room.capacity}</p>
            <p style={styles.text}>{room.features}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
