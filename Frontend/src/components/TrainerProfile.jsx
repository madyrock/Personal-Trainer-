import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Trophy } from "lucide-react";



const TrainerProfile = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
  const [trainer, setTrainer] = useState(null);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % (trainer?.images?.length || 1));
  const prev = () => setIndex((prev) => (prev - 1 + (trainer?.images?.length || 1)) % (trainer?.images?.length || 1));

  useEffect(() => {
    if (trainer?.images?.length > 1) {
      const interval = setInterval(next, 4000);
      return () => clearInterval(interval);
    }
  }, [trainer]);

  useEffect(() => {
    if (state) {
      setTrainer(state);
    }
  }, [state]);

  if (!trainer) {
    return (
      <div className="text-white h-screen flex items-center justify-center">
        <div>
          <p className="mb-4">No trainer data found.</p>
          <button
            onClick={() => navigate("/")}
            className="text-red-500 underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const text = `Hello! I'm interested in booking a session with ${trainer.name}, located in ${trainer.location}. Please provide more details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="bg-zinc-950 min-h-screen mt-8 px-4 py-10">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-red-600 text-white font-bold hover:bg-gray-600 transition-all duration-200 rounded-full mb-6"
        >
          Back
        </button>

        <motion.div
          className=" mx-auto flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="max-w-6xl w-full md:w-[40%] relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={trainer.image}
              alt="Trainer"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          <div className="w-full md:w-[60%] text-white text-center md:text-left">
            <h2 className="text-4xl md:text-6xl uppercase font-extrabold mb-8">
              {trainer.name}
            </h2>
            <p className="mb-8 uppercase font-extrabold">{trainer.location}</p>
            <p className="mb-8">Certificate: {trainer.certificate}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
              {trainer?.specialty?.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-red-600 rounded-full text-sm font-semibold"
                >
                  {specialty}
                </span>
              ))}
            </div>

            <p className="mb-8 italic font-bold">{trainer.bio}</p>

            <motion.button
              onClick={handleWhatsApp}
              className="px-8 py-3 bg-red-600 text-white font-bold uppercase hover:bg-red-800 transition-all duration-300 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Book a Free Session Now!
            </motion.button>
          </div>
        </motion.div>

        <hr className="my-8 border-gray-800" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-xl text-center uppercase font-extrabold mb-4 text-white">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row bg-zinc-900 rounded-tl-3xl rounded-br-3xl items-center justify-center gap-10 p-4">
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-6 relative">
                {trainer.stats && Array.isArray(trainer.stats) && trainer.stats.length > 0 &&
                  trainer?.stats?.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center p-6"
                    >
                      <h2 className="text-5xl font-extrabold text-red-500">
                        {stat.value}
                      </h2>
                      <p className="mt-2 italic font-bold text-white text-sm md:text-base">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-zinc-900 p-4 md:p-6 rounded-full z-10">
                    <Trophy className="w-8 h-8 text-red-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 h-[400px] md:h-[500px] flex justify-center items-center relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                {trainer.images && Array.isArray(trainer.images) && trainer.images.length > 0 && (
                  <motion.img
                    key={trainer.images[index]}
                    src={trainer.images[index]}
                    alt={`Trainer ${index}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                )}
              </AnimatePresence>
              
            </div>
          </div>

          <h1 className="text-2xl text-center uppercase font-extrabold mb-4 text-white pt-6">
            Introduction
          </h1>
          <p className="w-full md:w-[80%] text-center mx-auto text-white font-semibold tracking-wide leading-relaxed">
            {trainer.desc}
          </p>
        </div>
      </section>

      <footer className="bg-black py-6 text-center text-white uppercase font-extrabold">
        &copy; 2023 EliteTrainers. All rights reserved.
      </footer>
    </>
  );
};

export default TrainerProfile;
