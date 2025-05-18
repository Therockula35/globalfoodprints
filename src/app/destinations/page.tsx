import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { destinations } from '@/data/destinations'

export const metadata: Metadata = {
  title: 'Food Travel Destinations | Global Food Prints',
  description: 'Explore our curated collection of food travel destinations around the world. From street food to fine dining, discover the best culinary experiences each location has to offer.',
  openGraph: {
    title: 'Food Travel Destinations | Global Food Prints',
    description: 'Discover amazing food destinations around the world',
    images: ['/images/destinations-hero.jpg'],
  },
}

export default function Destinations() {
  const destinationsList = Object.entries(destinations).map(([id, destination]) => ({
    id,
    ...destination
  }))

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
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Food travel destinations around the world"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Food Travel Destinations
            </h1>
            <p className="font-montserrat text-xl md:text-2xl text-white leading-relaxed">
              Discover the world's most amazing culinary experiences
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair mb-8">Explore Destinations</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsList.map((destination) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair mb-2">
                      {destination.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {destination.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="font-montserrat text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest food travel guides and destination updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="font-montserrat flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="font-montserrat bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 