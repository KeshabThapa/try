'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [/*
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: '/images/E-commerce Platform.jpeg',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A React Native mobile app for efficient task management and collaboration.',
    image: '/images/Task Management App.jpeg',
    link: '#',
  },
  {
    title: 'AI-powered Chatbot',
    description: 'An intelligent chatbot using natural language processing and machine learning.',
    image: '/images/AI-powered Chatbot.jpeg',
    link: '#',
  },
*/]
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-serif">
        <span className="gradient-text gradient-bg-3">Featured Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block gradient-bg-2 text-white font-bold py-2 px-4 rounded hover:opacity-90 transition duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

