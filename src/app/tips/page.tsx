import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { tipCategories } from '@/data/tips'

export const metadata: Metadata = {
  title: 'Travel Tips & Guides | Global Food Prints',
  description: 'Expert travel tips and guides for smarter, safer, and more enjoyable journeys. Learn about packing, safety, budgeting, and photography.',
  openGraph: {
    title: 'Travel Tips & Guides | Global Food Prints',
    description: 'Expert travel tips and guides for smarter, safer, and more enjoyable journeys.',
    images: ['https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Tips & Guides | Global Food Prints',
    description: 'Expert travel tips and guides for smarter, safer, and more enjoyable journeys.',
    images: ['https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81'],
  },
}

export default function TravelTips() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-800">
              GlobalFoodPrints
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] mt-16">
        <Image
          src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81"
          alt="Travel tips and guides for better journeys"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Travel Tips & Guides
            </h1>
            <p className="text-xl text-white">
              Expert advice to help you travel smarter, safer, and better
            </p>
          </div>
        </div>
      </section>

      {/* Tips Categories */}
      <section className="container mx-auto px-4 py-16">
        {/* Packing Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Packing Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tipCategories.packing.map((tip) => (
              <article
                key={tip.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {tip.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <Link
                    href={`/tips/${tip.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Safety Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tipCategories.safety.map((tip) => (
              <article
                key={tip.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {tip.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <Link
                    href={`/tips/${tip.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Budget Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Budget Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tipCategories.budget.map((tip) => (
              <article
                key={tip.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {tip.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <Link
                    href={`/tips/${tip.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Photography Tips */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Photography Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tipCategories.photography.map((tip) => (
              <article
                key={tip.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {tip.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <Link
                    href={`/tips/${tip.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 