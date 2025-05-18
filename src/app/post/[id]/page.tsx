import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Post, posts } from '@/data/posts'
import { Metadata } from 'next'
import { createElement } from 'react'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id)
  const post = posts.find((p: Post) => p.id === id)

  if (!post) {
    return {
      title: 'Post Not Found | Global Food Prints',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | Global Food Prints Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const id = parseInt(params.id)
  const post = posts.find((p: Post) => p.id === id)

  if (!post) {
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
            <Link href="/" className="font-montserrat text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[60vh] mt-16">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-white font-montserrat">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {post.content.split('\n').map((paragraph: string, index: number) => {
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

            {/* Share and Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex space-x-4 font-montserrat">
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
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-montserrat">
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}