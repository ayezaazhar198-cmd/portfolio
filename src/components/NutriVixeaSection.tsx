import './NutriVixeaSection.css'

function NutriVixeaSection() {
  return (
    <section
      className="nutrivixea section"
      id="nutrivixea"
      aria-labelledby="nutrivixea-title"
    >
      <div className="container nutrivixea__layout">
        <div className="nutrivixea__showcase">
          <figure className="nutrivixea__photo">
            <img
              src="/images/nutrivixea-wellness-mixed-5-bars.png"
              alt="NutriVixea Wellness Mixed 5 Bars product box showing its five flavours"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="nutrivixea__content">
            <p className="nutrivixea__eyebrow">NUTRIVIXEA WELLNESS</p>
            <h2 id="nutrivixea-title">Nourishment, Made Naturally.</h2>
            <p className="nutrivixea__subtitle">
              Thoughtfully crafted snack bars that bring wholesome ingredients,
              nourishing goodness, and everyday convenience together. A
              wellness-focused brand inspired by making mindful snacking a
              little more enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NutriVixeaSection
