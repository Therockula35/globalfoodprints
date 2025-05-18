"use client"

import { destinations } from '@/data/destinations'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedPosts() {
  const featuredDestinations = Object.entries(destinations)
    .slice(0, 3)
    .map(([id, destination]) => ({
      id,
      ...destination
    }))

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair text-center mb-12">
          Featured Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
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
                  <span className="text-primary font-semibold">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 