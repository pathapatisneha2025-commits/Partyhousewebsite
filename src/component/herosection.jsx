import React from "react";

export default function Hero() {
  const styles = {
    hero: {
      minHeight: "100vh", //  important fix
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "120px 20px 60px", // safer than paddingTop only
      backgroundImage: "url('/heroimage.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      boxSizing: "border-box",
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
      maxWidth: "900px",
    },

    title: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)", // responsive text
      fontWeight: 800,
      marginBottom: "20px",
      textShadow: "0 4px 20px rgba(0,0,0,0.6)",
    },

    subtitle: {
      fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
      marginBottom: "30px",
      textShadow: "0 3px 15px rgba(0,0,0,0.5)",
    },

    button: {
      display: "inline-block",
      background: "#c59d5f",
      padding: "14px 32px",
      borderRadius: "50px",
      fontWeight: 700,
      textDecoration: "none",
      color: "#fff",
      fontSize: "16px",
      transition: "0.3s",
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Mobile fix */
        @media (max-width: 768px) {
          section {
            padding: 100px 16px 40px !important;
          }
        }
      `}</style>

      <section id="home" style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.title}>AJ Party House</h1>
          <p style={styles.subtitle}>
            Where celebrations become magical memories
          </p>

          <a
            href="#contact"
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.background = "#a87a3b";
              e.target.style.transform = "scale(1.05)";
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