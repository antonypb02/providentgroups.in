import { useState } from 'react';
import './App.css';

function App() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    "What services does ProvidentGroups Consultants offer?",
    "What courses does ProvidentGroups Consultants offer admissions for?",
    "What makes ProvidentGroups Consultants unique?",
    "How many students have ProvidentGroups Consultants helped?",
    "Can I trust ProvidentGroups Consultants for reliable information?",
    "Do you offer any scholarships or financial aid options?"
  ];

  const testimonials = [
    {
      name: "DEEPIKA",
      course: "BBA",
      review: "I thoroughly enjoyed courses from here and hope to expand on my gained knowledge about making apps. The courses as well as the examples are well presented, easy to follow and engaging"
    },
    {
      name: "Naveen",
      course: "B.Com",
      review: "I’m so thankful for ProvidentGroups Consultants’ help in securing a scholarship. They guided me through the entire application process and provided invaluable advice. I couldn’t have done it without them."
    },
    {
      name: "RAJESH",
      course: "Computer Science Engineer",
      review: "I’m glad I chose ProvidentGroups Consultants; they helped me secure a scholarship at a top university, setting me up for a bright future. They guided me every step of the way, I’m so grateful."
    },
    {
      name: "Md Arwaz",
      course: "MBA",
      review: "The courses at ProvidentGroups Consultants were fantastic! The content was well-structured, easy to follow, and the examples provided were extremely helpful. I highly recommend these courses to anyone looking to learn new skills."
    }
  ];

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar glass-nav">
        <div className="nav-container">
          <div className="logo cursor-pointer text-2xl font-bold bg-clip-text">
            ProvidentGroups
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#blog">Blog</a>
            <a href="#courses">Courses</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </div>
          <button className="btn-primary nav-cta">Explore Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content fade-in-up">
          <span className="badge">Welcome to ProvidentGroups</span>
          <h1 className="hero-title">Empower Your Future with ProvidentGroups Consultants</h1>
          <p className="hero-subtitle">One stop solution for all your educational needs</p>
          <div className="hero-actions">
            <button className="btn-primary btn-large">Explore Now</button>
            <button className="btn-secondary btn-large">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="about" className="intro-section">
        <div className="container text-center max-w-3xl fade-in-focus">
          <h2 className="section-title">Transforming Lives Through Education</h2>
          <h3 className="section-subtitle">Personalized Expert Guidance for Your Bright Future</h3>
          <p className="section-text text-lg">
            Empowering dreams for over 7 years! ProvidentGroups Consultants has proudly guided thousands of students toward their higher education goals. Your success is our greatest achievement.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section glass-panel">
        <div className="container">
          <div className="grid-split items-center">
            <div className="content-side">
              <h2 className="section-title text-left">Why Choose ProvidentGroups Consultants?</h2>
              <p className="section-text text-left">Choose ProvidentGroups Consultants for a successful education journey.</p>
              <ul className="feature-list mt-lg">
                <li className="feature-item">
                  <div className="icon">✓</div>
                  <div>
                    <h4>Comprehensive Educational Support</h4>
                    <p>Free expert counseling for personalized career paths.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="icon">✓</div>
                  <div>
                    <h4>Attractive scholarships</h4>
                    <p>For top universities worldwide.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="icon">✓</div>
                  <div>
                    <h4>Guaranteed interviews</h4>
                    <p>With high-paying job offers.</p>
                  </div>
                </li>
              </ul>
              <button className="btn-primary mt-lg">Get Early Access</button>
            </div>
            <div className="image-side relative">
              <div className="gradient-blob"></div>
              <div className="glass-card overlay-card">
                <h3>Global Opportunities</h3>
                <p>Unlock your global potential with our tailored admission guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="how-we-help-section">
        <div className="container text-center">
          <h2 className="section-title">How We Help You Succeed</h2>
          <p className="section-subtitle">Our Educational Solutions Empower Students</p>
          <p className="section-text max-w-2xl mx-auto mb-xl">
            Tailored support to achieve your academic and career goals.
          </p>

          <div className="grid-cards-3">
            <div className="benefit-card">
              <div className="card-icon">🎓</div>
              <h3>5,000+ Students Counselled, Free of Charge</h3>
              <p>Leverage our experience in guiding thousands of students to their ideal colleges, all at no cost.</p>
            </div>
            <div className="benefit-card">
              <div className="card-icon">🎯</div>
              <h3>Expert College Guidance</h3>
              <p>Our team helps you find the best college that aligns with your goals and aspirations.</p>
            </div>
            <div className="benefit-card">
              <div className="card-icon">💻</div>
              <h3>Fully Online Admission Process</h3>
              <p>Secure your college seat from the comfort of your home, with a completely online process.</p>
            </div>
            <div className="benefit-card">
              <div className="card-icon">🤝</div>
              <h3>Personalized Support Throughout</h3>
              <p>We’re with you every step of the way, offering tailored assistance from start to finish.</p>
            </div>
            <div className="benefit-card">
              <div className="card-icon">🏢</div>
              <h3>Job Placement Assistance</h3>
              <p>Prepare for the workforce with interview training and support for lucrative job opportunities.</p>
            </div>
            <div className="benefit-card">
              <div className="card-icon">🔒</div>
              <h3>Privacy Protection—No Unwanted Calls</h3>
              <p>Your information is safe with us; no unsolicited third-party calls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Admissions */}
      <section id="courses" className="admissions-section gradient-bg text-white text-center">
        <div className="container">
          <h2 className="section-title">Trust in ProvidentGroups Consultants</h2>
          <p className="section-subtitle text-white-80">Your Partner in Education Excellence</p>
          <p className="section-text max-w-2xl mx-auto mb-md">Join hands with us for a successful academic journey and a brighter future ahead.</p>

          <div className="glass-box max-w-3xl mx-auto mt-xl text-left">
            <h3 className="mb-sm text-2xl font-bold">Admission to Top Colleges in Bangalore</h3>
            <p className="mb-md">Get admission in TOP Colleges for Engineering, Management, Commerce, Law and Medical Courses.</p>
            <button className="btn-secondary">Explore Now</button>
          </div>
        </div>
      </section>

      {/* Global & Unique */}
      <section className="global-section">
        <div className="container">
          <div className="grid-split gap-xl items-center">
            <div className="global-card glass-card">
              <span className="badge mb-md">Prefix introducing a product feature</span>
              <h3 className="text-3xl font-bold mb-sm">Global Admissions Support</h3>
              <p className="text-gray mb-md">Study at top universities worldwide with ProvidentGroups Consultants’ comprehensive abroad study services.</p>
              <p className="text-gray mb-lg">We guide you through the entire process, including applications, SOP preparation, visa assistance, and more.</p>
              <button className="btn-primary">Explore Now</button>
            </div>
            <div className="global-card glass-card">
              <h3 className="text-3xl font-bold mb-sm">Stand Out with Our Unique Offerings</h3>
              <p className="text-gray mb-md">At ProvidentGroups Consultants, we stand out with free counseling for successful futures, attractive scholarships for top universities, and a unique guarantee of interviews for high-paying jobs to ensure your career success.</p>
              <button className="btn-primary mt-auto">Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section bg-light">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title">Client Reviews</h2>
            <p className="section-subtitle">What Our Students Say</p>
            <p className="section-text text-gray">Hear from our satisfied students</p>
          </div>
          <div className="grid-cards-2">
            {testimonials.map((t, index) => (
              <div key={index} className="review-card glass-card hover-lift">
                <div className="stars mb-sm text-yellow">★★★★★</div>
                <p className="review-text italic text-gray-dark">"{t.review}"</p>
                <div className="review-author mt-md border-t pt-sm">
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray">{t.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Contact */}
      <section className="faq-contact-section">
        <div className="container">
          <div className="grid-split gap-xl">
            {/* FAQ */}
            <div className="faq-container">
              <h2 className="section-title text-left mb-sm">Questions Answered</h2>
              <p className="section-text mb-lg">Get answers to common queries</p>
              <div className="accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className={`accordion-item ${activeFAQ === index ? 'active' : ''}`}>
                    <button className="accordion-header" onClick={() => toggleFAQ(index)}>
                      {faq}
                      <span className="icon">{activeFAQ === index ? '-' : '+'}</span>
                    </button>
                    <div className="accordion-body">
                      {/* Fake placeholder content for accordion body */}
                      <p>Our experts will be happy to explain this during your free counseling session. Please reach out to us for more detailed information tailored to your specific needs.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Details */}
            <div id="contact" className="contact-container glass-card bg-opacity-90">
              <h2 className="section-title text-left text-2xl mb-sm">Take Control of Your Future Today</h2>
              <p className="section-text mb-md">Contact ProvidentGroups Consultants now for personalized assistance.</p>
              <a href="mailto:example@mail.com" className="email-link text-primary font-bold block mb-xl">example@mail.com</a>

              <form className="contact-form mt-lg" onSubmit={e => e.preventDefault()}>
                <h3 className="text-xl font-bold mb-md">Contact Form</h3>
                <div className="form-group">
                  <label htmlFor="name">Name*</label>
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone*</label>
                  <input type="tel" id="phone" placeholder="Your Phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your Message" rows={4}></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Submit</button>
              </form>
              <div className="newsletter-box mt-lg pt-lg border-t">
                <h4 className="font-bold mb-xs">Get Early Access</h4>
                <p className="text-xs text-gray mb-sm">By clicking Sign Up you are confirming that you agree with our Terms and Conditions.</p>
                <div className="flex gap-sm">
                  <input type="email" placeholder="Email Address" className="flex-1 input-sm" />
                  <button className="btn-primary btn-sm">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand max-w-sm">
              <h2 className="logo text-2xl font-bold mb-sm text-white">ProvidentGroups</h2>
              <p className="text-gray-light italic">Empowering Your Future with ProvidentGroups Education</p>
              <div className="social-links flex gap-md mt-md">
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Instagram</a>
                <a href="https://wa.me/919535712120" target="_blank" rel="noreferrer" className="social-icon">Whatsapp</a>
              </div>
            </div>
            <div className="footer-links">
              <h3 className="font-bold mb-md text-white">Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3 className="font-bold mb-md text-white">Contact</h3>
              <ul>
                <li>ProvidentGroups Consultants, Akshaya Building, 1st Cross, G Block, Sahakarnagar, Bangalore -560092</li>
                <li><a href="tel:+919535712120" className="hover-text-primary">+91 95357 12120</a></li>
                <li><a href="mailto:info@providentgroups.in" className="hover-text-primary">info@providentgroups.in</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-xl pt-lg border-t text-sm text-gray flex justify-between items-center">
            <p>Copyright © 2026 ProvidentGroups Consultants | Powered by ProvidentGroups Consultants</p>
            <button className="scroll-to-top text-primary font-bold hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Scroll to Top ↑
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919535712120?text=Hi%2C%20I%20am%20enquiring%20about%20career%20guidance%20from%20your%20website"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float bg-green text-white"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
