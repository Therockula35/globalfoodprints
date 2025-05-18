import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FiInstagram, FiYoutube, FiTwitter, FiFacebook } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'About Us | Global Food Prints',
  description: 'Learn about our mission to explore and share authentic food experiences and cultural insights from around the world.',
  openGraph: {
    title: 'About Global Food Prints',
    description: 'Discover the story behind our food and travel blog',
    images: ['/images/about-hero.jpg'],
  },
}

// Takım üyeleri verisi
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Food Explorer',
    bio: 'Passionate about discovering authentic local cuisines and sharing cultural stories through food.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Michael Chen',
    role: 'Travel Writer',
    bio: 'Expert in Asian cuisine and culture, with a focus on street food and traditional cooking methods.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Isabella Romano',
    role: 'Culinary Director',
    bio: 'Professional chef turned food journalist, specializing in Mediterranean and European cuisines.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    name: 'Carlos Ramirez',
    role: 'Photography Director',
    bio: 'Award-winning food photographer capturing the beauty of global cuisines and cultures.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
]

export default function About() {
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
      <section className="relative h-[60vh] mt-16">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt="Our team exploring global cuisines and cultures"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Story
            </h1>
            <p className="font-montserrat text-xl md:text-2xl text-white leading-relaxed">
              Exploring the world through food, one destination at a time
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold mb-8">Our Mission</h2>
            <p className="font-montserrat text-lg text-gray-600 mb-12 leading-relaxed">
              At GlobalFoodPrints, we believe that food is the universal language that connects people across cultures. Our mission is to inspire travelers to explore the world through authentic culinary experiences, fostering cultural understanding and appreciation one meal at a time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-playfair text-2xl font-semibold mb-6">What We Do</h3>
                <ul className="font-montserrat text-gray-600 space-y-3">
                  <li>• Share authentic food experiences</li>
                  <li>• Document cultural traditions</li>
                  <li>• Connect travelers with local cuisine</li>
                  <li>• Promote sustainable tourism</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-playfair text-2xl font-semibold mb-6">Our Values</h3>
                <ul className="font-montserrat text-gray-600 space-y-3">
                  <li>• Authenticity in storytelling</li>
                  <li>• Respect for local cultures</li>
                  <li>• Sustainable travel practices</li>
                  <li>• Community engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="font-montserrat text-blue-600 mb-3">{member.role}</p>
                <p className="font-montserrat text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have a question or want to collaborate? We'd love to hear from you!
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FiYoutube size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FiFacebook size={24} />
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 