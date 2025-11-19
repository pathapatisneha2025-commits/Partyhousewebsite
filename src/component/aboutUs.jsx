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
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[#fff8f2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-yellow-100 text-yellow-600 rounded-full font-semibold mb-4">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Creating Unforgettable <br />
            <span className="text-yellow-600">Celebrations Since 2010</span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At Royal Celebration Party Hall, we believe every event deserves to
            be extraordinary. With our elegant venues, exceptional service, and
            attention to detail, we transform your special moments into cherished
            memories that last a lifetime.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-md text-center cursor-pointer transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 hover:bg-yellow-200">
                  <Icon size={32} color="#c59d5f" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
