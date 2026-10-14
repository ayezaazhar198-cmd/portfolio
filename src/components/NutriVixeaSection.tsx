import './NutriVixeaSection.css'

const flavours = [
  'Almond Cranberry',
  'Chocolate Hazelnut',
  'Oats & Seeds',
  'Coconut Almond',
  'Dark Chocolate',
]

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
              alt="NutriVixea Wellness Mixed 5 Bars box, showing five flavours"
              loading="lazy"
            />
          </figure>
          <div className="nutrivixea__content">
            <p className="nutrivixea__eyebrow">Product showcase</p>
            <h2 id="nutrivixea-title">NutriVixea Wellness</h2>
            <p className="nutrivixea__subtitle">
              Wholesome Snacking, Made Thoughtful
            </p>
            <p className="nutrivixea__description">
              A mixed box featuring five bar flavours.
            </p>
            <details className="nutrivixea__details">
              <summary>Learn More</summary>
              <ul className="nutrivixea__flavours" aria-label="Five flavours">
                {flavours.map((flavour) => (
                  <li key={flavour}>{flavour}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>

      </div>
    </section>
  )
}

export default NutriVixeaSection
