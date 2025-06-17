import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AdminDash from './components/AdminDash'
import TrainerProfile from './components/TrainerProfile'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/AdminDash' element={<AdminDash />} key='Admin' />
      <Route path='/trainer/:id' element={<TrainerProfile />}  />
    </Routes>
    </BrowserRouter>
  )
}

export default App