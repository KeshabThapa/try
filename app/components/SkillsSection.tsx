'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  /*{ name: 'HTML', level: 90, icon: '/images/logo/html-icon.png' },
  { name: 'CSS', level: 85, icon: '/images/logo/css-icon.png' },
  { name: 'Javascript', level: 80, icon: '/images/logo/javascript-icon.png' },*/
  { name: 'Typescript', level: 80, icon: '/images/logo/typescript-icon.png' },
  { name: 'React.js', level: 55, icon: '/images/logo/reactjs-icon.png' },
  { name: 'Next.js', level: 65, icon: '/images/logo/nextjs-icon.png' },
  { name: 'Node.js', level: 40, icon: '/images/logo/nodejs-icon.png' },
  /*{ name: 'Java', level: 80, icon: '/images/logo/java-icon.png' },
  { name: 'Python', level: 75, icon: '/images/logo/python-icon.png' },
  { name: 'C', level: 85, icon: '/images/logo/c-icon.png' },
  { name: 'C++', level: 70, icon: '/images/logo/c++-icon.png' },
  { name: 'Numpy', level: 70, icon: '/images/logo/numpy-icon.png' },
  { name: 'Pandas', level: 80, icon: '/images/logo/pandas-icon.png' },
  { name: 'Matplotlib', level: 75, icon: '/images/logo/matplotlib-icon.png' },
  { name: 'Seaborn', level: 85, icon: '/images/logo/seaborn-icon.png' },
  { name: 'Tableau', level: 70, icon: '/images/logo/tableau-icon.png' },
  { name: 'MySQL', level: 80, icon: '/images/logo/mysql-icon.png' },*/
  { name: 'OpenCV', level: 80, icon: '/images/logo/opencv-icon.png' },
  { name: 'OpenNLP', level: 60, icon: '/images/logo/opennlp-icon.png' },
  { name: 'Tensorflow', level: 90, icon: '/images/logo/tensorflow-icon.png' }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-serif">
        <span className="gradient-text gradient-bg-2">My Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center"
          >
            {/*<Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={48}
              height={48}
              className="mr-4"
            />*/}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-4 rounded-full gradient-bg-1"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

