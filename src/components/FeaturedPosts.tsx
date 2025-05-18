"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Örnek veri
const posts = [
  {
    id: 1,
    title: 'Street Food Paradise in Bangkok: A Local\'s Guide to Authentic Thai Cuisine',
    excerpt: 'Explore Bangkok\'s vibrant street food scene with our comprehensive guide to the best local dishes, markets, and hidden gems',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    category: 'Food Guide',
    date: 'March 15, 2024',
  },
  {
    id: 2,
    title: 'Istanbul\'s Hidden Food Treasures: From Ancient Bazaars to Modern Eateries',
    excerpt: 'Discover the rich culinary heritage of Istanbul through its traditional markets, local specialties, and best-kept secret restaurants',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa',
    category: 'Travel & Food',
    date: 'March 10, 2024',
    destinationId: 3,
  },
  {
    id: 3,
    title: 'Authentic Pasta Making in Florence: A Hands-on Culinary Experience',
    excerpt: 'Learn the secrets of traditional Italian pasta making from Florence\'s expert chefs, from fresh ingredients to perfect techniques',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    category: 'Culinary Workshop',
    date: 'March 5, 2024',
  },
  {
    id: 4,
    title: 'Ultimate Tokyo Ramen Guide: From Traditional to Modern Bowls',
    excerpt: 'Navigate Tokyo\'s diverse ramen scene with our expert guide to the best shops, styles, and secret spots for authentic Japanese ramen',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e',
    category: 'Food Guide',
    date: 'March 1, 2024',
  },
  {
    id: 5,
    title: 'Wine Tasting in Bordeaux: A Journey Through France\'s Premier Wine Region',
    excerpt: 'Experience the finest wines of Bordeaux with our comprehensive guide to top châteaux, tasting techniques, and wine pairing tips',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb',
    category: 'Wine & Culture',
    date: 'February 28, 2024',
  },
  {
    id: 6,
    title: 'Mexican Street Tacos: The Ultimate Guide to Authentic Flavors',
    excerpt: 'Master the art of Mexican street tacos with our detailed guide to traditional recipes, best ingredients, and top taco spots across Mexico',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47',
    category: 'Food Guide',
    date: 'February 25, 2024',
  }
]

// Animasyon varyantları
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

// FeaturedPosts bileşeni - Ana sayfadaki öne çıkan blog yazıları
const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Link
                    href={post.destinationId ? `/destinations/${post.destinationId}` : `/post/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts 