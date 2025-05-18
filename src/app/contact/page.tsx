"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Global Food Prints',
  description: 'Get in touch with the Global Food Prints team. We\'d love to hear from you about collaborations, questions, or just to share your food travel stories.',
  openGraph: {
    title: 'Contact Global Food Prints',
    description: 'Connect with us to share your food travel experiences',
    images: ['/images/contact-hero.jpg'],
  },
}

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    details: 'hello@globalfoodprints.com',
    link: 'mailto:hello@globalfoodprints.com',
  },
  {
    icon: FiPhone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: FiMapPin,
    title: 'Address',
    details: '123 Food Street, Travel City, TC 12345',
    link: 'https://maps.google.com',
  },
  {
    icon: FiClock,
    title: 'Office Hours',
    details: 'Monday - Friday: 9AM - 5PM EST',
    link: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-playfair text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              GlobalFoodPrints
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[40vh] mt-16">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a"
          alt="Contact us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-600 text-white rounded-full">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="font-montserrat text-gray-600 hover:text-blue-600 transition-colors"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83"
          alt="Location map"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20" />
      </section>
    </main>
  )
} 