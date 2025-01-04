import Navbar from '../components/Navbar'
import CVSection from '../components/CVSection'

export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section id="cv">
          <CVSection />
        </section>
      </main>
    </div>
  )
}

