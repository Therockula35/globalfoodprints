"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

// Hero bileşeni - Ana sayfanın üst kısmında yer alan tanıtım bölümü
const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Arka plan görseli */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Discover world cuisines and travel experiences with Global Food Prints"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Hero içeriği */}
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-4"
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the World Through Food
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Join us on a culinary journey across the globe, exploring local cuisines and cultural experiences
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-montserrat bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-2 h-2 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero 