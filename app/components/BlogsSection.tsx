'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const blogPosts = [/*
  {
    title: 'The Future of AI in Web Development',
    date: '2023-05-15',
    excerpt: 'Exploring how AI is shaping the future of web development and its potential impact on developers.',
    image: '/images/Future of AI in Web Development.jpeg',
  },
  {
    title: 'Mastering React Hooks',
    date: '2023-04-22',
    excerpt: 'A comprehensive guide to using React Hooks effectively in your projects.',
    image: '/images/Mastering React Hooks.jpeg',
  },
  {
    title: 'Building Scalable Node.js Applications',
    date: '2023-03-10',
    excerpt: 'Best practices and techniques for creating scalable and maintainable Node.js applications.',
    image: '/images/Building Scalable Node.js Applications.jpeg',
  },
*/]

export default function BlogsSection() {
  return (
    <section id="blogs" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-serif">
        <span className="gradient-text gradient-bg-1">Latest Blog Posts</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <motion.a
                href="#"
                className="inline-block text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-800 dark:hover:text-purple-300"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Read more →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

