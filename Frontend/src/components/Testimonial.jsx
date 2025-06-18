import React , { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";
import { ChevronLeft, ChevronRight } from "lucide-react";

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



const TestimonialSection = () => {
const [index, setIndex] = useState(0);

 const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [index]);

  const current = testimonials[index];


  return (
    <Parallax
      bgImage="https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg"
      strength={300}
      bgImageAlt="Fitness background"
      bgImageStyle={{ objectFit: 'cover', objectPosition: 'center' }}
      
    >
      <section className="bg-black/65 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-12">
          What Our <span className="text-red-600">Clients Say</span>
        </h2>
        <p className="font-bold italic">Our clients share their success stories—proof that with the right trainer, anything is possible.</p>

        <div className="relative  p-8 md:p-12 md:pt-32 mt-24 md:mt-0 rounded-2xl shadow-xl overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <img
                src={current.image}
                alt={current.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-red-600 mb-6"
              />
              <p className="italic text-md md:text-lg max-w-2xl mb-14">"{current.message}"</p>
              <h4 className="text-xl font-semibold">{current.name}</h4>
              <p className="text-red-500 text-sm">{current.title}</p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            {/* <button onClick={prevSlide} className="p-2 md:p-3 rounded-full bg-red-600 hover:bg-red-800 transition">
              <ChevronLeft className="text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button onClick={nextSlide} className="p-2 md:p-3 rounded-full bg-red-600 hover:bg-red-800 transition">
              <ChevronRight className="text-white" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
    </Parallax>
  );
};

export default TestimonialSection;
