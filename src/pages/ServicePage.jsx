import React from "react";
import { Footer } from "../component/footersection";

const servicesData = [
  {
    id: 1,
    title: "Event Planning",
    description: "Professional event planning to make your celebrations perfect.",
    icon: "🎉",
    details:
      "We handle everything from conceptualization to execution, ensuring your event is seamless and memorable.",
    benefits:
      "Customized themes, timeline management, vendor coordination, stress-free planning.",
  },
  {
    id: 2,
    title: "Catering Services",
    description: "Delicious food and beverages tailored to your event needs.",
    icon: "🍽️",
    details:
      "Our catering team creates a menu suited to your taste and occasion, including dietary preferences.",
    benefits:
      "High-quality ingredients, professional service, buffet or plated options, themed menus.",
  },
  {
    id: 3,
    title: "Decor & Lighting",
    description: "Beautiful decor and lighting to create a stunning ambiance.",
    icon: "💡",
    details:
      "We transform venues with elegant decorations, lighting setups, floral arrangements, and thematic designs.",
    benefits:
      "Custom designs, mood lighting, premium materials, unique setups tailored to your event.",
  },
  {
    id: 4,
    title: "Sound & Music",
    description: "High-quality sound systems and music for any occasion.",
    icon: "🎵",
    details:
      "From DJ setups to live performances, we ensure the perfect sound experience for your guests.",
    benefits:
      "Crystal-clear audio, professional technicians, playlists or live music options, immersive experience.",
  },
  {
    id: 5,
    title: "Photography & Videography",
    description: "Capture memories with professional photography and videography.",
    icon: "📸",
    details:
      "Our photographers and videographers capture every moment creatively, ensuring lasting memories.",
    benefits:
      "High-quality photos/videos, edited content, event coverage, candid and posed shots.",
  },
];

export default function ServicesPage() {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f9f9f9",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          padding: isMobile ? "30px 15px" : "50px 5%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "30px" : "60px",
            fontSize: isMobile ? "1.8rem" : "2.8rem",
            color: "#333",
          }}
        >
          Our Services
        </h1>

        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              style={{
                display: "flex",
                flexDirection: isMobile
                  ? "column"
                  : isEven
                  ? "row"
                  : "row-reverse",
                alignItems: "center",
                gap: "20px",
                marginBottom: "30px",
                background: isEven ? "#fff8f2" : "#fff",
                padding: isMobile ? "20px" : "30px",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              {/* ICON */}
              <div
                style={{
                  fontSize: isMobile ? "3rem" : "4rem",
                  flex: isMobile ? "unset" : "0 0 100px",
                  textAlign: "center",
                }}
              >
                {service.icon}
              </div>

              {/* CONTENT */}
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    fontSize: isMobile ? "1.4rem" : "1.8rem",
                    marginBottom: "10px",
                    color: "#c59d5f",
                  }}
                >
                  {service.title}
                </h2>

                <p
                  style={{
                    fontSize: isMobile ? "0.95rem" : "1.1rem",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "10px",
                  }}
                >
                  {service.description}
                </p>

                <p
                  style={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    color: "#444",
                    marginBottom: "8px",
                  }}
                >
                  <strong>What We Offer:</strong> {service.details}
                </p>

                <p
                  style={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    color: "#444",
                  }}
                >
                  <strong>Benefits:</strong> {service.benefits}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}