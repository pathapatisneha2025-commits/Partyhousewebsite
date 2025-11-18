import { motion } from "framer-motion";
import { PartyPopper, Utensils, Music, Lightbulb } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: PartyPopper,
      title: "Event Planning",
      description: "Professional planning for weddings, birthdays, and corporate events.",
      gradient: "linear-gradient(to bottom right, rgba(168,85,247,0.1), rgba(236,72,153,0.1))"
    },
    {
      icon: Utensils,
      title: "Catering",
      description: "Custom menus with delicious food and beverages for any event.",
      gradient: "linear-gradient(to bottom right, rgba(249,115,22,0.1), rgba(239,68,68,0.1))"
    },
    {
      icon: Music,
      title: "Music & Entertainment",
      description: "Professional DJs, live music, and entertainment services.",
      gradient: "linear-gradient(to bottom right, rgba(59,130,246,0.1), rgba(34,211,238,0.1))"
    },
    {
      icon: Lightbulb,
      title: "Decor & Lighting",
      description: "Elegant decorations and professional lighting for a magical ambiance.",
      gradient: "linear-gradient(to bottom right, rgba(234,179,8,0.1), rgba(245,158,11,0.1))"
    }
  ];

  return (
    <section
      id="services"
      style={{
        padding: "96px 0",
        background: "linear-gradient(to bottom, #fff8f2, white)"
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px"
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            marginBottom: "64px"
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 24px",
              background: "rgba(197,157,95,0.1)",
              color: "#c59d5f",
              borderRadius: "999px",
              marginBottom: "16px"
            }}
          >
            What We Offer
          </span>

          <h2 style={{ fontSize: "40px", marginBottom: "24px" }}>
            Our Premium Services
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
              maxWidth: "680px",
              margin: "0 auto"
            }}
          >
            Everything you need for a perfect celebration, all under one roof
          </p>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px"
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  position: "relative",
                  transition: "all 0.3s ease"
                }}
              >
                <div
                  style={{
                    background: "white",
                    padding: "32px",
                    borderRadius: "20px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                    height: "100%",
                    transition: "all 0.5s ease"
                  }}
                >
                  {/* Icon box */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: service.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "20px",
                      marginBottom: "24px",
                      transition: "transform 0.3s ease"
                    }}
                  >
                    <Icon size={32} color="#c59d5f" />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "20px",
                      marginBottom: "12px",
                      color: "#111827"
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "#6b7280",
                      lineHeight: "1.6"
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Decorative blur element */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      width: "80px",
                      height: "80px",
                      background: "rgba(197,157,95,0.05)",
                      borderRadius: "999px",
                      filter: "blur(24px)",
                      transition: "all 0.5s ease"
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
