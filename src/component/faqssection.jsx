import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the maximum capacity of the Grand Celebration Hall?",
      answer:
        "The Grand Celebration Hall can comfortably host up to 150 guests with ample space for dining, dancing, and entertainment.",
    },
    {
      question: "Do you provide catering services?",
      answer:
        "Yes, we offer custom catering services with a wide variety of menu options.",
    },
    {
      question: "Can I book the hall for half-day events?",
      answer:
        "Yes, both of our rooms are available for full-day or half-day bookings depending on availability.",
    },
    {
      question: "Is parking available for guests?",
      answer:
        "Yes, we provide ample parking space for all guests right beside the hall.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: "80px 16px", // reduced for mobile
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(197,157,95,0.1)",
              color: "#c59d5f",
              borderRadius: "50px",
              marginBottom: "12px",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            FAQ
          </span>

          <h2
            style={{
              fontSize: "32px", // smaller for mobile
              fontWeight: "700",
              marginBottom: "10px",
              color: "#222",
            }}
          >
            Frequently Asked Questions
          </h2>

          <p style={{ color: "#666", fontSize: "16px" }}>
            Got questions? We've got answers.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div
                style={{
                  background: "linear-gradient(to bottom right, #fff, #fff8f2)",
                  borderRadius: "16px", // slightly smaller corners
                  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  border: "1px solid #eee",
                  transition: "0.3s",
                }}
              >
                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    padding: "16px", // smaller padding
                    background: "transparent",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px", // smaller font
                      fontWeight: 600,
                      color: "#222",
                      marginRight: "16px",
                    }}
                  >
                    {faq.question}
                  </h3>

                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(197,157,95,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {openIndex === index ? (
                      <Minus size={20} color="#c59d5f" />
                    ) : (
                      <Plus size={20} color="#c59d5f" />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "0 16px 16px 16px",
                          color: "#555",
                          lineHeight: "1.6",
                          fontSize: "15px",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
