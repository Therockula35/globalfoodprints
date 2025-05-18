import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { destinations } from '@/data/destinations'
import { createElement } from 'react'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id)
  const destination = destinations[id]

  if (!destination) {
    return {
      title: 'Destination Not Found | Global Food Prints',
      description: 'The requested destination could not be found.',
    }
  }

  return {
    title: `${destination.title} | Global Food Prints Destinations`,
    description: destination.description,
    openGraph: {
      title: destination.title,
      description: destination.description,
      images: [destination.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: destination.title,
      description: destination.description,
      images: [destination.image],
    },
  }
}

export default async function Destination({ params }: Props) {
  const id = parseInt(params.id)
  const destination = destinations[id]

  if (!destination) {
    notFound()
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
            <Link href="/destinations" className="font-montserrat text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to Destinations
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[60vh] mt-16">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <span className="font-montserrat inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {destination.category}
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {destination.title}
            </h1>
            <p className="font-montserrat text-xl md:text-2xl text-white leading-relaxed">
              {destination.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Quick Info */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h2 className="font-playfair text-2xl font-bold mb-6">Quick Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-3">Best Time to Visit</h3>
                  <p className="font-montserrat text-gray-600">{destination.bestTimeToVisit}</p>
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-3">Must-Try Local Cuisine</h3>
                  <ul className="font-montserrat space-y-2">
                    {destination.localCuisine.map((dish: string) => (
                      <li key={dish} className="text-gray-600">• {dish}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {destination.content.split('\n').map((paragraph: string, index: number) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1
                  const text = paragraph.replace(/^#+\s/, '')
                  return createElement(
                    `h${Math.min(level, 6)}`,
                    { key: index, className: 'font-playfair' },
                    text
                  )
                }
                return (
                  <p key={index} className="font-montserrat mb-4">
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* Highlights */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="font-playfair text-2xl font-bold mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight: string) => (
                  <div
                    key={highlight}
                    className="font-montserrat bg-gray-50 p-4 rounded-lg text-gray-700"
                  >
                    • {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 