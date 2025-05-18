"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

// Header bileşeni - Navigasyon menüsü ve logo içerir
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Menü linkleri
  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Destinations', path: '/destinations' },
    { title: 'Travel Tips', path: '/tips' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-playfair text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            GlobalFoodPrints
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="font-montserrat text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-gray-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className={`md:hidden overflow-hidden ${isOpen ? 'border-t border-gray-100' : ''}`}
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="font-montserrat block text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header 