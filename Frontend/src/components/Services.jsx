import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="bg-zinc-950 py-16 p-14">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="uppercase text-white font-extrabold mb-8 text-4xl md:text-5xl text-center md:text-left"
        >
          Why hire a <span className="text-red-600">trainer?</span>
        </motion.h3>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            className="w-full md:w-[60%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-white font-bold italic text-lg leading-relaxed">
              Reaching your fitness goals isn’t always easy, but with the right
              support, it becomes achievable, sustainable, and even enjoyable.
              A personal trainer does more than just count reps—they design a
              program tailored to your goals, fitness level, and lifestyle.
              Whether you want to lose weight, build strength, improve
              flexibility, or recover after an injury, a trainer provides expert
              guidance every step of the way. They correct your form, push you
              safely beyond limits, and keep you accountable. With their help,
              you avoid common mistakes, reduce risk of injury, and see better,
              faster results. Hiring a certified personal trainer is one of the
              smartest investments you can make in your health.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-[40%] flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-2xl max-w-full h-auto shadow-lg"
              src="https://t4.ftcdn.net/jpg/03/33/91/97/360_F_333919715_R1mDUWPgwB2CRvSCNnvnmtn64gPY40ZL.jpg"
              alt="Personal Trainer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
