import './TestimonialsSection.css'

const testimonials = [
  {
    number: '01',
    tone: 'rose',
    name: 'Alex Bennett',
    country: 'United States',
    image: '/images/testimonial-samples/olivia-bennett.jpg',
    feedback:
      'The thoughtful, practical guidance made it easier to bring more intention to my everyday food choices.',
  },
  {
    number: '02',
    tone: 'violet',
    name: 'Aisha Rahman',
    country: 'United Kingdom',
    image: '/images/testimonial-samples/aisha-rahman.jpg',
    feedback:
      'The meal-planning ideas felt clear, flexible, and much easier to adapt to a busy week.',
  },
  {
    number: '03',
    tone: 'plum',
    name: 'Maya Chen',
    country: 'Canada',
    image: '/images/testimonial-samples/ethan-walker.jpg',
    feedback:
      'I appreciated how complex nutrition topics were made approachable and easy to understand.',
  },
  {
    number: '04',
    tone: 'violet',
    name: 'Ethan Walker',
    country: 'Australia',
    image: '/images/testimonial-samples/maya-chen.jpg',
    feedback:
      'The process felt collaborative from start to finish, with thoughtful attention to every detail.',
  },
  {
    number: '05',
    tone: 'plum',
    name: 'Sam Alvarez',
    country: 'Spain',
    image: '/images/testimonial-samples/sofia-alvarez.jpg',
    feedback:
      'A creative and considered approach made the project feel both polished and personal.',
  },
  {
    number: '06',
    tone: 'rose',
    name: 'Nia Okafor',
    country: 'Nigeria',
    image: '/images/testimonial-samples/noah-okafor.jpg',
    feedback:
      'The supportive conversations and practical ideas offered a helpful starting point for my goals.',
  },
]

function TestimonialsSection() {
  return (
    <section
      className="testimonials section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <header className="testimonials__heading">
          <p className="testimonials__eyebrow">Kind Words</p>
          <h2 id="testimonials-title">Experiences That Matter</h2>
          <p className="testimonials__intro">
            Building trust through thoughtful nutrition guidance, meaningful
            collaboration, and digital creativity.
          </p>
          <p className="testimonials__disclosure">
            These fictional profiles and illustrative comments are design
            examples, not real client endorsements.
          </p>
        </header>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article
              className={`testimonials__card testimonials__card--${testimonial.tone} surface-panel`}
              key={testimonial.number}
            >
              <div className="testimonials__card-header">
                <div className="testimonials__avatar">
                  <img
                    src={testimonial.image}
                    alt="Illustrative profile portrait"
                    loading="lazy"
                    width="80"
                    height="80"
                  />
                </div>
                <span className="testimonials__number">{testimonial.number}</span>
              </div>

              <div className="testimonials__card-top">
                <svg
                  className="testimonials__quote-icon"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M13.5 7.5H6.75A2.75 2.75 0 0 0 4 10.25v6.5A2.75 2.75 0 0 0 6.75 19.5h4.5v1a4 4 0 0 1-4 4H6.5v2h.75a6 6 0 0 0 6-6V7.5Zm14.5 0h-6.75a2.75 2.75 0 0 0-2.75 2.75v6.5a2.75 2.75 0 0 0 2.75 2.75h4.5v1a4 4 0 0 1-4 4H21v2h.75a6 6 0 0 0 6-6V7.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <blockquote className="testimonials__quote">
                “{testimonial.feedback}”
              </blockquote>

              <footer className="testimonials__attribution">
                <p className="testimonials__name">{testimonial.name}</p>
                <p className="testimonials__country">{testimonial.country}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
