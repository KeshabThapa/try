'use client'

import { motion } from 'framer-motion'

const achievements = [/*
  { title: 'Best Developer Award', description: 'Awarded for outstanding contributions to open-source projects' },
  { title: 'Hackathon Winner', description: 'First place in the Annual Tech Innovation Hackathon' },
  { title: 'Published Research Paper', description: 'Co-authored a paper on AI applications in healthcare' },
*/]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Achievements & Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-6 rounded-lg backdrop-blur-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{achievement.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

