'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function CVSection() {
  const handleDownload = () => {
    // Replace 'your-cv.pdf' with the actual filename of your CV
    const link = document.createElement('a')
    link.href = '/your-cv.pdf'
    link.download = 'Your_Name_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="cv" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-serif">
          <span className="gradient-text gradient-bg-2">My CV</span>
        </h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Download My CV</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get a comprehensive overview of my skills, experience, and achievements by downloading my CV.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="btn gradient-bg-2 shadow-lg flex items-center justify-center"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </motion.button>
        </div>
      </div>
    </section>
  )
}

