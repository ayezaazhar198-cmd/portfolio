import './NutritionServicesSection.css'

const services = [
  {
    number: '01',
    title: 'Personalized Nutrition Guidance',
    description:
      'An opportunity to talk through your food preferences, routines, and nutrition goals in a considered, individual way.',
    mark: '✳',
  },
  {
    number: '02',
    title: 'Healthy Eating & Meal Planning',
    description:
      'Explore practical meal-planning ideas and everyday approaches to healthy eating that can fit your life.',
    mark: '◌',
  },
  {
    number: '03',
    title: 'Nutrition Education & Lifestyle Support',
    description:
      'Discuss nutrition concepts and supportive lifestyle habits in a clear, approachable setting.',
    mark: '⌁',
  },
]

function NutritionServicesSection() {
  return (
    <section
      className="nutrition section"
      id="nutrition"
      aria-labelledby="nutrition-title"
    >
      <div className="container">
        <div className="nutrition__heading">
          <p className="nutrition__eyebrow">Clinical nutrition</p>
          <h2 id="nutrition-title">Nutrition That Fits Your Life</h2>
          <p className="nutrition__intro">
            A thoughtful, practical approach to food and nutrition—shaped around
            your questions, preferences, and everyday routine.
          </p>
        </div>

        <div className="nutrition__cards">
          {services.map((service) => (
            <article className="nutrition__card surface-panel" key={service.number}>
              <div className="nutrition__card-top">
                <span className="nutrition__mark" aria-hidden="true">{service.mark}</span>
                <span className="nutrition__number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <details className="nutrition__details">
                <summary>Learn More</summary>
                <p>{service.description}</p>
              </details>
            </article>
          ))}
        </div>

        <div className="nutrition__enquiry surface-panel">
          <h3>Have a nutrition question?</h3>
          <a className="nutrition__cta" href="#contact">
            Discuss Your Nutrition Goals
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NutritionServicesSection
