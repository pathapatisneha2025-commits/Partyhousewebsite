import { motion } from "framer-motion";
import { Sparkles, Users, Award, Heart } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Sparkles, number: "500+", label: "Events Hosted" },
    { icon: Users, number: "10,000+", label: "Happy Guests" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="about-section">

      {/* CSS */}
      <style>{`
        .about-section {
          padding: 96px 0;
          background: linear-gradient(to bottom, white, #fff8f2);
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .badge {
          display: inline-block;
          padding: 8px 24px;
          background: rgba(197, 157, 95, 0.1);
          color: #c59d5f;
          border-radius: 999px;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .heading {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .highlight {
          color: #c59d5f;
        }

        .paragraph {
          color: #555;
          font-size: 18px;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* GRID DEFAULT (DESKTOP) */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .stat-card {
          background: white;
          padding: 32px;
          border-radius: 20px;
          box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
          text-align: center;
          transition: 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 10px 30px rgba(0,0,0,0.15);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          background: rgba(197,157,95,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          transition: 0.3s;
        }

        .stat-card:hover .icon-wrapper {
          background: rgba(197,157,95,0.2);
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          color: #222;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 16px;
          color: #666;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .heading {
            font-size: 34px;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .about-section {
            padding: 60px 0;
          }

          .heading {
            font-size: 26px;
            line-height: 1.3;
          }

          .paragraph {
            font-size: 15px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .stat-card {
            padding: 18px;
          }

          .stat-number {
            font-size: 24px;
          }

          .icon-wrapper {
            width: 50px;
            height: 50px;
          }

          .stat-label {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="badge">About Us</span>

          <h2 className="heading">
            Creating Unforgettable <br />
            <span className="highlight">
              Celebrations Since 2010
            </span>
          </h2>

          <p className="paragraph">
            At Royal Celebration Party Hall, we believe every event deserves to
            be extraordinary. With elegant venues, exceptional service, and
            attention to detail, we create unforgettable memories.
          </p>
        </motion.div>

        {/* STATS (SAME LAYOUT, ONLY RESPONSIVE GRID CHANGES) */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="icon-wrapper">
                  <Icon size={28} color="#c59d5f" />
                </div>

                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}