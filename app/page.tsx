import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import PageTransition from './components/PageTransition'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <PageTransition>
        <main className="container mx-auto px-4 py-8">
          <section id="home">
            <HeroSection />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </main>
      </PageTransition>
    </div>
  )
}

