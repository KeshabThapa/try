'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeSwitch } from './ThemeSwitch'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Projects', path: '/projects' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'CV', path: '/cv' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sections = ['home', 'skills', 'contact']
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && scrollPosition >= section.offsetTop - windowHeight / 2) {
          setActiveIndex(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const index = navItems.findIndex(item => 
      pathname === item.path || (pathname === '/' && item.path.startsWith('/#'))
    )
    setActiveIndex(index !== -1 ? index : 0)
  }, [pathname])

  const getGradientStyle = () => {
    const progress = activeIndex / (navItems.length - 1)
    return {
      background: `linear-gradient(90deg, hsl(240, 100%, 50%) ${progress * 100}%, hsl(300, 100%, 50%) ${progress * 100}%)`,
      transition: 'background 0.3s ease-out',
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    if (path.startsWith('/#')) {
      const targetId = path.substring(2)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (path !== pathname) {
      router.push(path)
    }
  }

  return (
    <nav className="bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md fixed w-full z-10 shadow-md" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative ${
                    index === activeIndex ? 'text-gray-900 dark:text-white' : ''
                  }`}
                >
                  {item.name}
                  {index === activeIndex && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 w-full rounded-full"
                      layoutId="activeSection"
                      style={getGradientStyle()}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center ml-4">
            <ThemeSwitch />
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  handleNavClick(e, item.path)
                  setIsOpen(false)
                }}
                className={`text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  index === activeIndex ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
      <div
        className="absolute bottom-0 left-0 h-1 w-full transition-all duration-300 ease-out"
        style={getGradientStyle()}
      />
    </nav>
  )
}

