import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import TestimonialSection from "../components/Testimonial";
import TrainerRegister from "./TrainerRegister";
import OurTrainers from "../components/OurTrainers";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
    <>

      <Helmet>
        <title>Hire Certified Personal Trainers | Elite Trainers</title>
        <meta name="description" content="Find and hire certified personal trainers for online and onsite sessions. Book your fitness coach now with Elite Trainers." />
        <meta name="keywords" content="personal trainer, hire trainers, fitness coach, online personal training, onsite fitness, Elite Trainers, fitness booking" />
        <meta name="author" content="Elite Trainers" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Hire Certified Personal Trainers | Elite Trainers" />
        <meta property="og:description" content="Discover top personal trainers for both online and onsite sessions. Book today!" />
        <meta property="og:image" content="https://yourdomain.in/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.in" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Certified Personal Trainers | Elite Trainers" />
        <meta name="twitter:description" content="Connect with top personal trainers for online or onsite fitness programs. Book now!" />
        <meta name="twitter:image" content="https://yourdomain.in/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}


      
      <div id="home" className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full z-10 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/bgvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-20 flex items-center justify-center px-4 md:pt-8">
          <div className="md:max-w-6xl  w-full flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left: Text */}
            <motion.div
              className="text-white text-center md:text-left w-full md:w-1/2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <h2 className="font-anton text-4xl sm:text-4xl md:text-5xl font-extrabold mb-6  leading-tight uppercase">
                Improve Yourself with{" "}
                <span className="text-red-600">Elite Trainers</span>
              </h2>
              <p className="text-white italic  text-base md:text-lg mb-6">
                Browse through certified personal trainers and book the best fit
                for you.
              </p>
              <a
                href="#hire"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold mt-14 px-4 py-2 md:px-6 md:py-3 rounded-3xl hover:scale-105 transition-transform duration-300"
              >
                <FaDumbbell /> Book a Free Session
              </a>
            </motion.div>

            {/* Desktop view (static list) */}
            <motion.ul
              className="hidden md:flex flex-col text-white  font-bold md:justify-center md:items-start uppercase italic gap-4 "
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                "Customized Fitness Plans",
                "Nutrition & Meal Guidance",
                "One-on-One Training Sessions",
                "Online Coaching",
                "Specialized Training Options",
                "Best Career Platform for Trainers",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <img src="/check.png" alt="check" className="w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* Mobile view (horizontal continuous scroll) */}

              

            <div className="flex md:hidden overflow-hidden w-full mt-6">
              <motion.div
                className="flex gap-12 whitespace-nowrap text-white text-sm font-bold uppercase italic"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 40, // adjust speed (lower = faster)
                  ease: "linear",
                }}
              >
                {[
                  "Customized Fitness Plans",
                  "Nutrition & Meal Guidance",
                  "One-on-One Training Sessions",
                  "Online Coaching",
                  "Specialized Training Options",
                  "Best Career Platform for Trainers",
                ]
                  .concat(
                    // Duplicate the list to allow seamless looping
                    [
                      "Customized Fitness Plans",
                      "Nutrition & Meal Guidance",
                      "One-on-One Training Sessions",
                      "Online Coaching",
                      "Specialized Training Options",
                      "Best Career Platform for Trainers",
                    ]
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 min-w-max px-4"
                    >
                      <img src="/check.png" alt="check" className="w-4 h-4" />
                      <span>{item}</span>
                    </div>
                  ))}
              </motion.div>
            </div>

            {/* Right: List */}
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <section id="trainers">
        <OurTrainers />
      </section>

      

      {/* Why Trainer */}

      <section id="services">
        <Services />
      </section>

      {/* Pricing */}

      

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="career">
        <TrainerRegister />
      </section>


      <section id="contact">
        <ContactUs />
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-white uppercase font-extrabold text-sm md:text-base">
        &copy; 2023 EliteTrainers. All rights reserved.
      </footer>
    </>
  );
}

export default Home;
