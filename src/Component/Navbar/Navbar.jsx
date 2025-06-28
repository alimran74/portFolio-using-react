import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../../context/Button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F9FAFB]/60 backdrop-blur-md shadow-md" // background: soft gray with blur on scroll
          : "bg-[#F9FAFB]" // plain soft gray when on top
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-[#2563EB]"> {/* accent blue */}
              <img
                className="w-10"
                src="https://i.ibb.co/qFmfJC6B/image-modified.png"
                alt="logo"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-[#E5E7EB] rounded-md text-sm font-semibold text-[#1F2937] hover:bg-[#2563EB] hover:text-white transition duration-300 shadow-sm"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <Button />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none"
            >
              {mobileMenuOpen ? (
                <HiX className="w-7 h-7 text-[#1F2937] transition-transform duration-300 rotate-90" />
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                >
                  <HiMenu className="w-7 h-7 text-[#1F2937] transition-transform duration-300" />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-[#F9FAFB]/90 backdrop-blur-md border-t border-[#E5E7EB]"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-center px-4 py-2 border border-[#2563EB] rounded-md text-sm font-medium text-[#1F2937] hover:bg-[#2563EB] hover:text-white transition"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="pt-2 text-center">
              <Button />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
