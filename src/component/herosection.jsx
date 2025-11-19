import React, { useEffect, useState } from "react";

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive font sizes based on window width
  const getResponsiveStyles = () => {
    let titleSize = "3.5rem";
    let subtitleSize = "1.5rem";
    let buttonPadding = "16px 40px";
    let buttonFontSize = "18px";
    let sectionPadding = "120px 20px";

    if (windowWidth <= 1024) {
      titleSize = "3rem";
      subtitleSize = "1.3rem";
      buttonPadding = "14px 32px";
      buttonFontSize = "16px";
    }
    if (windowWidth <= 768) {
      titleSize = "2.2rem";
      subtitleSize = "1.1rem";
      buttonPadding = "12px 28px";
      buttonFontSize = "15px";
      sectionPadding = "80px 16px";
    }
    if (windowWidth <= 480) {
      titleSize = "1.8rem";
      subtitleSize = "1rem";
      buttonPadding = "10px 24px";
      buttonFontSize = "14px";
      sectionPadding = "60px 12px";
    }

    return { titleSize, subtitleSize, buttonPadding, buttonFontSize, sectionPadding };
  };

  const { titleSize, subtitleSize, buttonPadding, buttonFontSize, sectionPadding } = getResponsiveStyles();

  const styles = {
    hero: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: sectionPadding,
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
      maxWidth: "900px",
      margin: "0 auto",
    },
    title: {
      fontSize: titleSize,
      fontWeight: 800,
      marginBottom: "20px",
      textShadow: "0 4px 20px rgba(0,0,0,0.6)",
    },
    subtitle: {
      fontSize: subtitleSize,
      marginBottom: "30px",
      textShadow: "0 3px 15px rgba(0,0,0,0.5)",
    },
    button: {
      display: "inline-block",
      background: "#c59d5f",
      padding: buttonPadding,
      borderRadius: "50px",
      fontWeight: 700,
      textDecoration: "none",
      color: "#fff",
      fontSize: buttonFontSize,
      transition: "0.4s",
    },
  };

  return (
    <>
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
