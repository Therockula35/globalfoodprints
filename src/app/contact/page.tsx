"use client"

import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FiMail className="text-2xl text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>info@globalfoodprints.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <FiPhone className="text-2xl text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <FiMapPin className="text-2xl text-primary" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Food Street, Cuisine City, FC 12345</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <FiClock className="text-2xl text-primary" />
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="Your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border rounded"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
} 