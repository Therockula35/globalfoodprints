"use client"

import Link from 'next/link'
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi'

// Footer bileşeni - Sitenin alt kısmında yer alan footer alanı
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    explore: [
      { title: 'Destinations', path: '/destinations' },
      { title: 'Travel Tips', path: '/tips' },
      { title: 'About Us', path: '/about' },
      { title: 'Contact', path: '/contact' },
    ],
    social: [
      { icon: FiInstagram, path: 'https://instagram.com', label: 'Instagram' },
      { icon: FiTwitter, path: 'https://twitter.com', label: 'Twitter' },
      { icon: FiFacebook, path: 'https://facebook.com', label: 'Facebook' },
      { icon: FiYoutube, path: 'https://youtube.com', label: 'YouTube' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-playfair text-2xl font-bold">
              GlobalFoodPrints
            </Link>
            <p className="font-montserrat mt-4 text-gray-400">
              Exploring the world through food and travel, one destination at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Explore</h3>
            <ul className="font-montserrat space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Contact</h3>
            <ul className="font-montserrat space-y-4 text-gray-400">
              <li>Email: hello@globalfoodprints.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Food Street, Travel City</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="font-montserrat border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} GlobalFoodPrints. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 