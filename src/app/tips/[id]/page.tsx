import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { tips } from '@/data/tips'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Wait for params to be available
  await new Promise(resolve => setTimeout(resolve, 0))
  
  const id = parseInt(params.id)
  const tip = tips[id]

  if (!tip) {
    return {
      title: 'Tip Not Found | Global Food Prints',
      description: 'The requested travel tip could not be found.',
    }
  }

  return {
    title: `${tip.title} | Global Food Prints Travel Tips`,
    description: tip.description,
    openGraph: {
      title: tip.title,
      description: tip.description,
      images: [tip.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: tip.title,
      description: tip.description,
      images: [tip.image],
    },
  }
}

export default async function TipDetail({ params }: Props) {
  // Wait for params to be available
  await new Promise(resolve => setTimeout(resolve, 0))
  
  const id = parseInt(params.id)
  const tip = tips[id]

  if (!tip) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-playfair text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              GlobalFoodPrints
            </Link>
            <Link href="/tips" className="font-montserrat text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to Tips
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[50vh] mt-16">
        <Image
          src={tip.image}
          alt={tip.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {tip.title}
            </h1>
            <p className="text-xl text-white">{tip.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="flex items-center space-x-4 mb-8">
            <div>
              <p className="text-gray-900 font-medium">{tip.author}</p>
              <p className="text-gray-500 text-sm">
                {tip.date} • {tip.readTime}
              </p>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold mb-4">Quick Tips</h3>
            <ul className="space-y-2">
              {tip.tips.map((item, index) => (
                <li key={index} className="text-gray-600">• {item}</li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {tip.content.split('\n').map((line, index) => {
              if (line.startsWith('#')) {
                const level = (line.match(/^#+/) || ['#'])[0].length
                const text = line.replace(/^#+\s*/, '')
                const Heading = ({ children }: { children: React.ReactNode }) => {
                  switch (level) {
                    case 1:
                      return <h1 className="text-3xl font-bold mb-6">{children}</h1>
                    case 2:
                      return <h2 className="text-2xl font-bold mb-4 mt-8">{children}</h2>
                    case 3:
                      return <h3 className="text-xl font-bold mb-3 mt-6">{children}</h3>
                    default:
                      return <h4 className="text-lg font-bold mb-2 mt-4">{children}</h4>
                  }
                }
                return <Heading key={index}>{text}</Heading>
              }
              if (line.startsWith('•')) {
                return (
                  <li key={index} className="list-none text-gray-700 mb-2">
                    {line}
                  </li>
                )
              }
              return line.trim() && <p key={index} className="text-gray-700 mb-4">{line}</p>
            })}
          </div>

          {/* Related Topics */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {tip.relatedTopics.map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Share:</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 