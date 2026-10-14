import './AboutSection.css'

const focusCards = [
  {
    number: '01',
    title: 'Nutrition & Wellbeing',
    description: 'Making nutrition knowledge practical for everyday life.',
  },
  {
    number: '02',
    title: 'Health-Focused Digital Solutions',
    description: 'Exploring useful apps and tools that support healthier habits and wellness.',
  },
  {
    number: '03',
    title: 'Creative Development',
    description: 'Turning meaningful ideas into thoughtful, user-friendly digital experiences.',
  },
]

function AboutSection() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__layout">
          <figure className="about__visual">
            <img
              className="about__visual-image"
              src="/images/ayeza-nutrition-technology-office.png"
              alt="A bright clinical nutrition and technology workspace with a desk, laptop, nutrition books, and a sign for Dr. Ayeza Azhar."
              loading="lazy"
              decoding="async"
            />
            <figcaption className="about__visual-note">
              A thoughtful meeting of disciplines
            </figcaption>
          </figure>

          <div className="about__content">
            <p className="about__eyebrow">A little about me</p>
            <h2 id="about-title">
              A curious mind,
              <br />
              <span className="text-gradient">creating healthier possibilities.</span>
            </h2>
            <p className="about__lead">
              Clinical nutritionist exploring thoughtful ways to connect
              wellbeing and technology.
            </p>
            <details className="about__details">
              <summary>Learn More</summary>
              <div className="about__details-content">
                <p className="about__body">
                  My interest in health goes beyond nutrition advice — it inspires
                  me to explore how technology can turn everyday health challenges
                  into useful digital solutions.
                </p>
                <p className="about__body">
                  That is why I started creating apps: to bring health knowledge,
                  thoughtful design, and technology together to make everyday
                  wellness easier to understand and practice.
                </p>
                <h3 className="about__journey-label">
                  Where Health Meets Technology
                </h3>
                <div className="about__cards">
                  {focusCards.map((card) => (
                    <article className="about__card surface-panel" key={card.number}>
                      <span className="about__card-number" aria-hidden="true">{card.number}</span>
                      <div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </details>
            <a className="about__contact-link" href="#contact">
              Get in touch
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
