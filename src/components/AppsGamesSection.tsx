import './AppsGamesSection.css'

function AppsGamesSection() {
  return (
    <section
      className="apps-showcase section"
      id="apps-games"
      aria-labelledby="apps-showcase-title"
    >
      <div className="container">
        <div className="work-heading">
          <div>
            <p className="work-heading__eyebrow">Selected work</p>
            <h2 id="apps-showcase-title">
              Thoughtful ideas,
              <br />
              <span className="text-gradient">made digital.</span>
            </h2>
          </div>
          <p className="work-heading__intro">
            Web development and digital products shaped by curiosity, clarity,
            and care.
          </p>
        </div>

        <div className="work-grid">
          <article className="work-card work-card--apps">
            <div className="work-card__top">
              <span className="work-card__icon work-card__icon--apps" aria-hidden="true">✳</span>
              <span className="work-card__index">01 / APPS</span>
            </div>
            <div className="work-card__content">
              <p className="work-card__brand">DailySpark</p>
              <h3>DailySpark Apps</h3>
              <p>Apps, games, and playful digital ideas.</p>
              <div className="work-card__actions">
                <details className="work-card__details">
                  <summary>Learn More</summary>
                  <p>
                    Explore DailySpark Apps updates and releases on Instagram.
                  </p>
                </details>
                <a
                  className="work-card__link"
                  href="https://www.instagram.com/dailysparkapps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Instagram <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <figure className="work-card__image">
              <img
                src="/images/dailyspark-apps-showcase.png"
                alt="Three DailySpark app screens showing a task list, wellness dashboard, and progress chart."
                loading="lazy"
                decoding="async"
              />
            </figure>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AppsGamesSection
