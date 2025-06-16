// Same imports
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TrainerRegister = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [trainerData, setTrainerData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    city: '',
    certificate: '',
    document: null,
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleFormToggle = () => setFormVisible((prev) => !prev);

  const handleInputChange = (e) => {
    setTrainerData({ ...trainerData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setTrainerData({ ...trainerData, document: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uniqueId = Date.now().toString();
    const formData = new FormData();
    formData.append('id', uniqueId);
    formData.append('name', trainerData.name);
    formData.append('email', trainerData.email);
    formData.append('phone', trainerData.phone);
    formData.append('city', trainerData.city);
    formData.append('certificate', trainerData.certificate);
    formData.append('document', trainerData.document);

    try {
      setRegistrationStatus('loading');
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setRegistrationStatus('success');
        setTrainerData({
          id: '',
          name: '',
          email: '',
          phone: '',
          city: '',
          certificate: '',
          document: null,
        });
      } else {
        setRegistrationStatus('error');
        alert(data.error);
      }
    } catch (error) {
      setRegistrationStatus('error');
      alert(error.message);
    }

    const existingTrainers = JSON.parse(localStorage.getItem('trainers')) || [];
    const updatedTrainers = [...existingTrainers, trainerData];
    localStorage.setItem('trainers', JSON.stringify(updatedTrainers));
  };

  return (
    <section id="career" className=" bg-zinc-950 py-16 p-14">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-white font-extrabold mb-8 text-3xl md:text-5xl text-center md:text-left">
          career as an <span className="text-red-600">elite trainer</span>
        </h3>
        <p className="text-white font-bold  text-center md:text-left w-full md:w-[70%]">
          <span className="text-red-600 text-xl uppercase font-extrabold">apply as a trainer</span><span className='italic font-bold'> and Join a team that values passion, professionalism, and purpose. We're on a mission to empower individuals to achieve their fitness goals and lead healthier lives.</span> 
        </p>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-10">
          {/* Image */}
          <motion.div
            className="w-full md:w-auto flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
            viewport={{ once: true }}
          >
            <img
              className="h-[250px] md:h-[400px] object-contain"
              src="/pt.png"
              alt="trainer"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            className="w-full md:w-[40%] px-4 md:px-7 text-white font-bold text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
            viewport={{ once: true }}
          >
            <ul className="italic space-y-6">
              {[
                'HIGH % OF TRAINING PAYMENTS',
                'BEST CAREER PLATFORM FOR TRAINERS',
                'A STRONG CLIENT NETWORK',
                'FLEXIBLE SCHEDULE & COMPETITIVE PAY',
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <img src="/check.png" className="w-6 h-6" alt="check" />
                  {text}
                </li>
              ))}
            </ul>

            <motion.button
              onClick={handleFormToggle}
              className="bg-red-600 font-bold text-white px-6 py-3 cursor-pointer rounded-3xl hover:bg-red-900 mt-10"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              JOIN US
            </motion.button>
          </motion.div>
        </div>
      </div>

      /* Modal */
        <AnimatePresence>
          {formVisible && (
            <motion.div
          className="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-70 backdrop-blur flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
            >
          <motion.div
            className="bg-zinc-900 w-full max-w-4xl rounded-xl p-6 md:p-10 relative flex flex-col md:flex-row gap-6 overflow-y-auto max-h-[90vh] scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.4, type: 'spring' }}
          >
            <style>
              {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
              `}
            </style>
            <button
              onClick={handleFormToggle}
              className="md:absolute fixed right-8 cursor-pointer md:top-4 md:right-4 text-red-600"
            >
              <X size={30} />
            </button>

            {/* Left */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-2xl md:text-4xl uppercase text-white font-extrabold text-left">
                  Start your career with <br />
                  <span className="text-red-600">Elite Trainers</span>
                </h1>
                <img
                  className="h-[180px] md:h-[280px] mt-6"
                  src="/pt2.png"
                  alt="trainer 2"
                />
              </div>

              {/* Right - Form */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                {registrationStatus && (
                  <motion.p
                    className={`mb-4 ${
                      registrationStatus === 'success'
                        ? 'text-green-600'
                        : 'text-red-500'
                    } text-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {registrationStatus === 'success'
                      ? 'Registration successful!'
                      : registrationStatus}
                  </motion.p>
                )}
                <form
  onSubmit={handleSubmit}
  className="w-full flex flex-col text-white items-center"
>
  {/* Text Inputs */}
  {['name', 'email', 'phone', 'city'].map((field, i) => (
    <motion.input
      key={field}
      type={field === 'email' ? 'email' : 'text'}
      name={field}
      value={trainerData[field]}
      onChange={handleInputChange}
      required
      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
      className="w-[90%] px-4 py-2 mt-4 border-b-2 focus:outline-none bg-transparent placeholder-white"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + i * 0.05 }}
    />
  ))}

  {/* 📄 File Input */}
  <motion.input
    key="document"
    type="file"
    name="document"
    accept=".pdf,.jpg,.jpeg,.png"
    onChange={handleFileChange}
    required
    className="w-[90%] mt-4 text-white file:bg-red-600 file:border-none file:rounded-full file:px-4 file:py-1 file:text-white file:cursor-pointer"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
  />

  {/* Submit Button */}
  <motion.button
    type="submit"
    className="bg-red-600 text-white px-6 py-3 rounded-3xl hover:bg-red-900 mt-6"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.45 }}
  >
    Submit
  </motion.button>
</form>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrainerRegister;
