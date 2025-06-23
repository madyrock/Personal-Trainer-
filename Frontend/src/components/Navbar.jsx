import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavClick = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-md shadow-md" : "bg-zinc-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-white h-16">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-extrabold">
            <a
              className="uppercase flex items-center tracking-wide"
              href="#home"
            >
              <img className="w-12 h-10 inline" src="/logo.png" alt="logo" />
              <span className="ml-2 hidden md:inline">Elite Trainers</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 uppercase font-bold">
            <Link to="/" className="hover:text-red-600 transition duration-300">
              Home
            </Link>
            <a
              href="#trainers"
              className="hover:text-red-600 transition duration-300"
            >
              Our Trainers
            </a>
            <a
              href="#career"
              className="hover:text-red-600 transition duration-300"
            >
              Career
            </a>
            <a
              href="#hire"
              className="hover:text-red-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-zinc-950 py-4 font-bold uppercase text-white space-y-4 border-t border-gray-700 px-4"
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleNavClick}
              className="block cursor-pointer hover:text-red-600"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="trainers"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleNavClick}
              className="block cursor-pointer hover:text-red-600"
            >
              Our Trainers
            </ScrollLink>
            <ScrollLink
              to="career"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleNavClick}
              className="block cursor-pointer hover:text-red-600"
            >
              Career
            </ScrollLink>
            <ScrollLink
              to="hire"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={handleNavClick}
              className="block cursor-pointer hover:text-red-600"
            >
              Contact Us
            </ScrollLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
