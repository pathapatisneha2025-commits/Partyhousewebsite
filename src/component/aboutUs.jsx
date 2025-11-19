import { motion } from "framer-motion"; 
import { Sparkles, Users, Award, Heart } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Sparkles, number: "500+", label: "Events Hosted" },
    { icon: Users, number: "10,000+", label: "Happy Guests" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" },
  ];

 const styles = {
  section: {
    padding: "64px 16px", // reduced padding for mobile
    background: "linear-gradient(to bottom, white, #fff8f2)",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 16px", // smaller side padding for mobile
  },
  badge: {
    display: "inline-block",
    padding: "6px 20px", // smaller badge
    background: "rgba(197, 157, 95, 0.1)",
    color: "#c59d5f",
    borderRadius: "999px",
    marginBottom: "16px",
    fontWeight: 600,
    fontSize: "14px", // smaller font for mobile
  },
  heading: {
    fontSize: "32px", // reduced for mobile
    fontWeight: 700,
    marginBottom: "24px",
    lineHeight: 1.3,
  },
  headingHighlight: {
    color: "#c59d5f",
  },
  paragraph: {
    color: "#555",
    fontSize: "16px",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // always 2 per row
    gap: "16px", // smaller gap for mobile
    marginTop: "32px",
  },
  statCard: {
    background: "white",
    padding: "24px", // smaller padding for mobile
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  iconWrapper: {
    width: "56px", // slightly smaller on mobile
    height: "56px",
    background: "rgba(197,157,95,0.1)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 12px",
    transition: "background 0.3s ease",
  },
  statNumber: {
    fontSize: "28px", // smaller for mobile
    fontWeight: 700,
    color: "#222",
    marginBottom: "6px",
  },
  statLabel: {
    fontSize: "14px", // smaller for mobile
    color: "#666",
    fontWeight: 500,
  },
};


  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Top text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={styles.badge}>About Us</span>

          <h2 style={styles.heading}>
            Creating Unforgettable <br />
            <span style={styles.headingHighlight}>
              Celebrations Since 2010
            </span>
          </h2>

          <p style={styles.paragraph}>
            At Royal Celebration Party Hall, we believe every event deserves to
            be extraordinary. With our elegant venues, exceptional service, and
            attention to detail, we transform your special moments into cherished
            memories that last a lifetime.
          </p>
        </motion.div>

        {/* Stats */}
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={styles.statCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0px 8px 30px rgba(0,0,0,0.15)";
                  e.currentTarget
                    .querySelector(".icon-wrapper").style.background =
                    "rgba(197,157,95,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0px 4px 20px rgba(0,0,0,0.1)";
                  e.currentTarget
                    .querySelector(".icon-wrapper").style.background =
                    "rgba(197,157,95,0.1)";
                }}
              >
                <div className="icon-wrapper" style={styles.iconWrapper}>
                  <Icon size={32} color="#c59d5f" />
                </div>

                <h3 style={styles.statNumber}>{stat.number}</h3>
                <p style={styles.statLabel}>{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
