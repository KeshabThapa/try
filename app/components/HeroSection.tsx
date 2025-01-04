'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
          Hi, I'm{' '}
          <span className="gradient-text gradient-bg-1">
            Keshab Thapa
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">An AI/ML Enthusiast and frontend developer from Kailali.<br/><br/>
        I love exploring artificial intelligence and machine learning to solve real-world problems. I also love creating websites that are not only visually appealing but also easy to use, ensuring a smooth and enjoyable experience for every user.<br/><br/>
        </p>
        
        <motion.div className="flex space-x-4">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn gradient-bg-2 shadow-lg"
            >
              View Projects
            </motion.button>
          </Link>
          <Link href="/cv">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-purple-500 hover:border-purple-600 shadow-lg"
            >
              Download CV
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <div className="relative w-64 h-64 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-spin-slow"></div>
          <Image
            src="/images/pic5.JPG"
            alt="Profile picture"
            width={249}
            height={280}
            className="rounded-full absolute inset-1 object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}

