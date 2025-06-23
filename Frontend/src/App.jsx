import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AdminDash from './components/AdminDash'
import TrainerProfile from './components/TrainerProfile'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import OurTrainers from './components/OurTrainers'
import Services from './components/Services'
import TestimonialSection from './components/Testimonial'
import TrainerRegister from './components/TrainerRegister'
import  ContactUs  from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trainers" element={<OurTrainers />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonial" element={<TestimonialSection />} />
      <Route path="/career" element={<TrainerRegister />} />
      <Route path="/hire" element={<ContactUs />} />
      <Route path='/AdminDash' element={<AdminDash />} key='Admin' />
      <Route path='/trainer/:id' element={<TrainerProfile />}  />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App