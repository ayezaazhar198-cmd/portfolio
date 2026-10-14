import { useState } from 'react'
import './Navbar.css'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Clinical Nutrition', href: '#nutrition' },
  { label: 'NutriVixea Wellness', href: '#nutrivixea' },
  { label: 'DailySpark Apps', href: '#apps-games' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="navbar__brand" href="#home" onClick={closeMenu} aria-label="Ayeza Azhar, home">
          <span>Ayeza</span>
          <span className="navbar__brand-accent">Azhar</span>
          <span className="navbar__brand-mark" aria-hidden="true">.</span>
        </a>

        <button
          className={`navbar__toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar__menu${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          <ul className="navbar__links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
