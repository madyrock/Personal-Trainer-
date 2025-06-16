import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const testimonials = [
  {
    name: "Aarav Sharma",
    message:
      "My elite personal trainer helped me lose 10 kg in 3 months! The sessions were fun, motivating, and tailored exactly to my goals.",
    image: "https://randomuser.me/api/portraits/men/69.jpg",
  },
  {
    name: "Sneha Kapoor",
    message:
      "After my pregnancy, I was looking for guidance to get back in shape. The postnatal training was safe and effective!",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Rajiv Menon",
    message:
      "As a senior citizen, I needed low-impact fitness support. My trainer was knowledgeable and supportive at every step.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialSection = () => {
  return (
    <Parallax
      bgImage="https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg"
      strength={400}
      bgImageAlt="Fitness background"
    >
      <section className="bg-black/70 py-16 px-4 sm:px-6 md:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold text-white mb-10 md:mb-14 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our <span className="text-red-600">Clients Say</span>
        </motion.h2>

        <p className="w-full max-w-3xl mx-auto text-white italic font-bold text-center mb-10 md:mb-16 text-sm md:text-base leading-relaxed">
          Discover how our certified personal trainers have helped individuals
          achieve their fitness goals from weight loss and postnatal recovery to
          senior fitness support. Our clients' success stories are the true
          reflection of our commitment and expertise.
        </p>

        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border mb-4"
              />
              <h4 className="font-semibold text-lg mb-2">{t.name}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">"{t.message}"</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Parallax>
  );
};

export default TestimonialSection;
