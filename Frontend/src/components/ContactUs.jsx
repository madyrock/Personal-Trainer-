import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // ✅ Import emailjs

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your EmailJS Template ID
        form,
        import.meta.env.VITE_EMAILJS_USER_ID // Your EmailJS User ID (public key)
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="hire" className="bg-zinc-950 md:min-h-screen py-24 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-center text-white uppercase">
          Get in <span className="text-red-600">Touch</span>
        </h3>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8 bg-zinc-900 w-[80%] md:w-full mx-auto p-6 rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 text-white border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 text-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Requirements"
            rows="4"
            required
            className="w-full px-4 py-2 text-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-all flex items-center gap-2 justify-center"
          >
            <FaEnvelope /> Send Request
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
