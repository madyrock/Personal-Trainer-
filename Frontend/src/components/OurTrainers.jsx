import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TrainerProfile from "../components/TrainerProfile";
import { Helmet } from "react-helmet";



function OurTrainers() {
  const [searchCity, setSearchCity] = useState("");
  const [filtered, setFiltered] = useState(null);
  const navigate = useNavigate();

  const trainers = [
    {
      id: 1,
      name: "Maddy",
      specialty: ["Strength", "Conditioning", "Weight Loss", "Pre-Competition"],
      image: "/mady.png",
      location: "Mumbai",
      price: "Online Rs.499 per session / On-site Rs.999 per session",
      rating: 4.5,
      certificate: "ACTION | ACE | CPR | CPT",
      stats: [
        { value: 17, label: "Year of Health Coaching Experience" },
        { value: 35, label: "Contest and Workshop attended" },
        { value: "100+", label: "Happy Customer with Reference" },
        { value: 90, label: "Day of a new Superfast Program" },
      ],
      bio: "I’m a certified personal trainer passionate about transforming lives through online fitness coaching. I focus on real results, personalized plans, and your satisfaction because your journey is personal to me.",
      desc: "With 17 years of elite experience in the fitness industry, I specialize in transformative results through evidence-based training programs. From coaching celebrities to guiding everyday individuals, my approach is rooted in discipline, customization, and guaranteed outcomes. I offer expert prep-coaching for competitions, rapid body transformations within months, and highly effective pre- and post-natal exercise programs designed for safety and strength. Whether your goal is fat loss, strength building, or professional bodybuilding, every session is tailored to your unique journey because results aren’t optional, they’re guaranteed.",
      images: [
        "/img1.png",
        "/img2.png",
        "/img3.png",
        "/img4.jpg",
        "/img5.jpg",
        "/img6.jpg",
        "/img7.jpg",
      ],
    },
    {
      id: 2,
      name: "Salman",
      specialty: ["Strength", "Conditioning", "Weight Loss"],
      image: "/salman.png",
      location: "Mumbai",
      price: "Online Rs.499 per session / On-site Rs.999 per session",
      rating: 4.8,
      certificate: "ISSA | CPR ",
      stats: [
        { value: 10, label: "Year of Health Coaching Experience" },
        { value: 20, label: "Contest and Workshop attended" },
        { value: "100+", label: "Happy Customer with Reference" },
        { value: 90, label: "Day of a new Superfast Program" },
      ],
      bio: "Let’s crush your fitness goals together! With personalized online training and full commitment, I guarantee results that leave you feeling stronger, fitter, and more confident every day.",
      desc: "With 10+ years of real-world fitness coaching, I bring a results-driven yet human approach to training. From building lean strength to guiding powerful weight loss transformations, I focus on tailored programs that match your pace and purpose. My sessions blend science-backed methods with motivational coaching, ensuring progress that feels personal not generic. Whether it’s your first workout or your comeback, we’ll build the strongest version of you together.",
    },
    {
      id: 3,
      name: "Niranjan",
      specialty: ["Yoga and Flexibility", "Conditioning", "Weight Loss"],
      image: "/niranjan.png",
      location: "Mumbai",
      price: "Online Rs.499 per session / On-site Rs.999 per session",
      rating: 4.9,
      certificate: "K11 | YOGA | CPR | CPT",
      stats: [
        { value: 12, label: "Year of Health Coaching Experience" },
        { value: 22, label: "Contest and Workshop attended" },
        { value: "100+", label: "Happy Customer with Reference" },
        { value: 90, label: "Day of a new Superfast Program" },
      ],
      bio: "Certified yoga trainer helping you build strength, flexibility, and inner peace through personalized Online/Onsite sessions. Focused on your growth, balance, and lasting wellness with results you can feel. Trainer...",
      desc: `I’m a certified Yoga and Fitness Trainer with a deep passion for holistic wellness, strength, and mindful living. With over 8 years of experience guiding individuals on their fitness journeys, I blend traditional yoga principles with modern strength training techniques to help clients achieve balance, flexibility, and vitality.

My programs are thoughtfully designed to support weight loss, stress relief, mobility, and overall body-mind harmony. Whether you're a beginner exploring yoga or someone aiming to sculpt and strengthen your body, I tailor each session to meet your unique goals and energy.

Beyond the physical postures, I focus on breathwork, posture correction, and building mental resilience—empowering you to feel confident, calm, and in control. I've helped hundreds of clients transform their lifestyles, heal through movement, and discover inner peace.

If you're ready to become the strongest, most mindful version of yourself, I’m here to guide and support you every stretch, squat, and step of the way.`,
      images: [
        "/niranjan1.jpg",
        "/niranjan2.jpg",
        "/niranjan3.jpg",
        "/niranjan4.jpg",
       
      ],
    },
    // {
    //   id: 4,
    //   name: "John Doe",
    //   specialty: ["HIIT & Cardio"],
    //   image: "https://source.unsplash.com/featured/?fitness,man",
    //   location: "Ahmedabad",
    //   price: "from Rs.999 per session",
    //   rating: 4.9,
    // },
    // {
    //   id: 5,
    //   name: "John Doe",
    //   specialty: ["HIIT & Cardio"],
    //   image: "https://source.unsplash.com/featured/?fitness,man",
    //   location: "Jamnagar",
    //   price: "from Rs.999 per session",
    //   rating: 4.9,
    // },
  ];

  const handleFilter = () => {
    setFiltered(
      trainers.filter((trainer) =>
        trainer.location?.toLowerCase().includes(searchCity.toLowerCase())
      )
    );
  };

  const handleShowAll = () => {
    setFiltered(null);
    setSearchCity("");
  };

  const handleTrainerClick = (trainer) => {
    navigate(`/trainer/${trainer.id}`, { state: trainer });
  };

  const trainersToShow = filtered === null ? trainers : filtered;

  return (
    <>

    <Helmet>
        <title>Our Trainers | Elite Trainers</title>
        <meta name="description" content="Browse our team of certified personal trainers available for online and onsite sessions. Choose the right expert to guide your fitness journey." />
        <meta property="og:title" content="Our Trainers | Elite Trainers" />
        <meta property="og:description" content="Meet our professional trainers and find your perfect fitness coach today." />
      </Helmet>
    
    <section
      id="trainers"
      loading="lazy"
      className="py-16 w-full bg-zinc-950 text-white px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-4xl md:text-5xl uppercase font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Meet Our <span className="text-red-600">Elite Trainers</span>
        </motion.h3>

        <motion.p
          className="mb-12 italic w-full md:w-[70%] font-bold text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our expert trainers are internationally certified and specialize in
          fat loss, strength, rehab, and senior/postnatal training.
        </motion.p>

        {/* Filter UI */}
        <div className="mb-10 w-[80%] flex flex-wrap gap-4 items-center">
          <input
            type="text"
            placeholder="Search by city..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="px-4 py-2 rounded border border-gray-400 bg-white text-black w-full sm:w-auto"
          />
          <button
            onClick={handleFilter}
            className="px-4 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition active:bg-white active:text-red-600 active:border active:border-red-600"
          >
            Filter
          </button>
          <button
            onClick={handleShowAll}
            className="px-4 py-2 bg-transparent border border-red-600 text-white font-bold rounded active:bg-white active:text-red-600 transition"
          >
            Show All
          </button>
        </div>

        <p className="text-2xl uppercase font-extrabold text-center mb-6">Choose your trainer</p>

        {/* Trainers Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersToShow.length === 0 ? (
            <p className="col-span-full text-center text-gray-400">
              No trainers found.
            </p>
          ) : (
            trainersToShow.map((trainer, i) => (
              <motion.div
                key={trainer.id}
                className="bg-zinc-900 border border-gray-600 rounded-xl shadow-lg  hover:scale-105 transition cursor-pointer 
              w-full sm:w-full  max-w-[350px] mx-auto relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleTrainerClick(trainer)}
              >
                <button className="absolute top-2 left-2 text-sm font-bold px-4 py-2 bg-transparent border-2 border-red-600 active:text-red-600 hover:active:bg-white  text-white rounded  transition">
                      View
                    </button>
                <img
                  src={trainer.image}
                  alt="Personal Trainer"
                  loading="lazy"
                  className="w-full h-60 object-cover  rounded-t-xl"
                />
                <div className="p-4">
                  <h4 className="text-xl uppercase font-bold mb-2">
                    {trainer.name}
                  </h4>
                  {trainer.certificate && (
                    <p className="text-sm text-gray-300 mb-2">
                      {trainer.certificate}
                    </p>
                  )}
                  <p className="text-red-600 font-bold mb-2">{trainer.price}</p>
                  <div className="flex items-center gap-2 mb-3">
                    
                    <img
                      className="w-4 h-4"
                      src="/placeholder.png"
                      alt="location"
                    />
                    <p className="font-semibold">{trainer.location}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {trainer.specialty.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-bold px-2 py-1 bg-red-700 rounded-full text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>


      
    </section>

    
    </>
  );
}

export default OurTrainers;
