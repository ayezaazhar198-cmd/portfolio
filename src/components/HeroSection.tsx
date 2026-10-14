import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-mark" aria-hidden="true" />
            Clinical insight · Digital creativity · Web development
          </p>
          <h1 className="hero__title" id="hero-title">
            Science,
            <br />
            <span className="text-gradient">Nutrition &amp; Technology.</span>
          </h1>

          <p className="hero__intro">
            Clinical Nutritionist and Web Developer creating thoughtful
            experiences for wellbeing and beyond.
          </p>

          <ul className="hero__focus" aria-label="Professional focus areas">
            <li>Clinical Nutrition</li>
            <li>Web Development</li>
            <li>Digital Products</li>
          </ul>

          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#about">
              Explore My Work
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="hero__button hero__button--secondary"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-glow" />
          <div className="hero__orbit hero__orbit--outer" />
          <div className="hero__orbit hero__orbit--inner" />
          <div className="hero__orb hero__orb--large" />
          <div className="hero__orb hero__orb--small" />
          <div className="hero__visual-core">
            <span className="hero__core-caption">A meeting of</span>
            <span className="hero__core-title">Science</span>
            <span className="hero__core-divider" />
            <span className="hero__core-title hero__core-title--accent">
              Imagination
            </span>
          </div>
          <div className="hero__glass hero__glass--top">
            <span className="hero__glass-dot" />
            HEALTH
          </div>
          <div className="hero__glass hero__glass--bottom">
            <span className="hero__glass-dot" />
            TECHNOLOGY
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
