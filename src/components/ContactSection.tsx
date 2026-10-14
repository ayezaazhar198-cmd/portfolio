import './ContactSection.css'

function ContactSection() {
  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__panel">
          <div className="contact__glow" aria-hidden="true" />
          <div className="contact__content">
            <p className="contact__eyebrow">Get in touch</p>
            <h2 id="contact-title">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="contact__intro">
              Questions or ideas? Let&apos;s connect.
            </p>

            <div className="contact__actions">
              <a
                className="contact__button contact__button--primary"
                href="https://www.instagram.com/getfitwithayeza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle className="contact__icon-dot" cx="18" cy="6" r="1" />
                </svg>
                Connect on Instagram
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="contact__button contact__button--secondary"
                href="mailto:dn.ayezazhar@gmail.com"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                Email Me
              </a>
            </div>

            <details className="contact__more">
              <summary>Learn More</summary>
              <div className="contact__details">
                <a
                  className="contact__detail"
                  href="https://www.instagram.com/getfitwithayeza/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__detail-label">Instagram</span>
                  <span>@getfitwithayeza</span>
                </a>
                <a
                  className="contact__detail"
                  href="mailto:dn.ayezazhar@gmail.com"
                >
                  <span className="contact__detail-label">Email</span>
                  <span>dn.ayezazhar@gmail.com</span>
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
