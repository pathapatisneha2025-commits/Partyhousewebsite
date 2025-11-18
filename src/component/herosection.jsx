import React from "react";

export default function Hero() {
  const styles = {
    hero: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      paddingTop: "120px",
      backgroundImage: "url('/heroimage.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.45)",
      zIndex: 1,
    },

    heroContent: {
      position: "relative",
      zIndex: 2,
      color: "#fff",
      animation: "fadeIn 1.5s ease forwards",
    },

    title: {
      fontSize: "3.5rem",
      fontWeight: 800,
      marginBottom: "20px",
      textShadow: "0 4px 20px rgba(0,0,0,0.6)",
    },

    subtitle: {
      fontSize: "1.5rem",
      marginBottom: "30px",
      textShadow: "0 3px 15px rgba(0,0,0,0.5)",
    },

    button: {
      display: "inline-block",
      background: "#c59d5f",
      padding: "16px 40px",
      borderRadius: "50px",
      fontWeight: 700,
      textDecoration: "none",
      color: "#fff",
      fontSize: "18px",
      transition: "0.4s",
    },
  };

  return (
    <>
      {/* Inline keyframes animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section id="home" style={styles.hero}>
        {/* Overlay */}
        <div style={styles.overlay}></div>

        {/* Content */}
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Royal Celebration Party Hall</h1>
          <p style={styles.subtitle}>Where celebrations become magical memories</p>

          <a
            href="#contact"
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.background = "#a87a3b";
              e.target.style.transform = "scale(1.08)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "#c59d5f";
              e.target.style.transform = "scale(1)";
            }}
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
