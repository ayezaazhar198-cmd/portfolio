import AboutSection from './components/AboutSection'
import AppsGamesSection from './components/AppsGamesSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import NutriVixeaSection from './components/NutriVixeaSection'
import NutritionServicesSection from './components/NutritionServicesSection'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <NutritionServicesSection />
        <NutriVixeaSection />
        <AppsGamesSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
