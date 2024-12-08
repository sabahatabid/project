"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  // State to handle the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          CarRent
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-primary transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary transition">
            About
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary transition">
            Services
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-primary transition"
        >
          {isMenuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-0 left-0 right-0 z-10">
          <nav className="flex flex-col items-center py-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition py-2">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition py-2">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary transition py-2">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition py-2">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
