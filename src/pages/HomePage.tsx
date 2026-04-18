import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import '../App.css';

const carouselSlides = [
  {
    title: 'Your pathway to top-ranked colleges and universities',
    subtitle: 'Best consultancy for management, engineering, and medical admissions — with expert, personalised guidance.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
    alt: 'Graduates celebrating',
  },
  {
    title: 'Discover excellence with our leading admission services',
    subtitle: 'Over a decade of trust. Tie-ups with 150+ universities worldwide. Stress-free applications from start to finish.',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80',
    alt: 'University campus',
  },
  {
    title: 'Transform your future with scholarships & support',
    subtitle: 'Attractive scholarships, interview prep, and career guidance so your academic dreams become reality.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80',
    alt: 'Students studying together',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    caption: 'Career mentoring & coaching',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    caption: 'Workshop & skill building',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    caption: 'Team collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    caption: 'Guidance sessions',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    caption: 'Learning & growth',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    caption: 'Student success',
  },
];

function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCarouselIndex((i) => (i + 1) % carouselSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCarouselIndex((i) => (i - 1 + carouselSlides.length) % carouselSlides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(nextSlide, 6000);
    return () => window.clearInterval(id);
  }, [nextSlide]);

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
          <Link to="/" className="logo cursor-pointer text-2xl font-bold bg-clip-text">
            ProvidentGroups
          </Link>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <Link to="/nursing-colleges">Nursing colleges</Link>
            <Link to="/engineering-colleges">Engineering &amp; degrees</Link>
            <a href="#courses">Courses</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <button type="button" className="btn-primary nav-cta" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Now
          </button>
        </div>
      </nav>

      {/* Hero carousel — Hopeson-style full-bleed slides with arrows */}
      <section id="home" className="hero-carousel">
        {carouselSlides.map((slide, i) => (
          <div
            key={slide.title}
            className={`hero-carousel-slide ${i === carouselIndex ? 'hero-carousel-slide--active' : ''}`}
            aria-hidden={i !== carouselIndex}
          >
            <img className="hero-carousel-bg" src={slide.image} alt="" />
            <div className="hero-carousel-overlay" />
            <div className="hero-carousel-content container">
              <span className="badge hero-carousel-badge">Welcome to ProvidentGroups</span>
              <h1 className="hero-carousel-title">{slide.title}</h1>
              <p className="hero-carousel-subtitle">{slide.subtitle}</p>
              <div className="hero-actions">
                <button type="button" className="btn-primary btn-large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Enroll now
                </button>
                <button type="button" className="btn-secondary btn-large" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="hero-carousel-nav hero-carousel-nav--prev" onClick={prevSlide} aria-label="Previous slide">
          ‹
        </button>
        <button type="button" className="hero-carousel-nav hero-carousel-nav--next" onClick={nextSlide} aria-label="Next slide">
          ›
        </button>
        <div className="hero-carousel-dots" role="tablist" aria-label="Carousel slides">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === carouselIndex}
              className={`hero-carousel-dot ${i === carouselIndex ? 'hero-carousel-dot--active' : ''}`}
              onClick={() => setCarouselIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick links — Attractive Scholarships / Top Courses / Best Colleges style */}
      <section className="quick-links-section">
        <div className="container quick-links-grid">
          <Link to="/nursing-colleges" className="quick-link-card">
            <div className="quick-link-icon" aria-hidden>🎓</div>
            <h3>Nursing colleges & courses</h3>
            <span className="quick-link-more">View more →</span>
          </Link>
          <Link to="/engineering-colleges" className="quick-link-card">
            <div className="quick-link-icon" aria-hidden>⚙️</div>
            <h3>Engineering &amp; degree colleges</h3>
            <span className="quick-link-more">View more →</span>
          </Link>
          <a href="#courses" className="quick-link-card">
            <div className="quick-link-icon" aria-hidden>📚</div>
            <h3>Top courses</h3>
            <span className="quick-link-more">View more →</span>
          </a>
          <a href="#courses" className="quick-link-card">
            <div className="quick-link-icon" aria-hidden>🏛️</div>
            <h3>Best colleges</h3>
            <span className="quick-link-more">View more →</span>
          </a>
        </div>
      </section>

      {/* Introduction — Hopeson-style long copy */}
      <section id="about" className="intro-section">
        <div className="container text-center max-w-3xl fade-in-focus">
          <h2 className="section-title">Your pathway to excellence</h2>
          <h3 className="section-subtitle">Best consultancy for management, engineering, and medical courses</h3>
          <p className="section-text text-lg intro-long-copy">
            For over a decade, our educational consultancy has been a trusted partner for students aspiring to excel in management, engineering, and medical fields globally. With tie-ups with more than 150 prestigious universities worldwide, we provide expert guidance and personalised support to help you secure admissions to top-ranked institutions. Our dedicated team ensures a seamless and stress-free application process, making your academic dreams a reality — whether you aim for the best universities locally or internationally, we guide you every step of the way.
          </p>
          <button type="button" className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Read more
          </button>
        </div>
      </section>

      {/* Stats row */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-icon" aria-hidden>📅</div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Years of expertise</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon" aria-hidden>🤝</div>
            <div className="stat-number">150+</div>
            <div className="stat-label">University partnerships</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon" aria-hidden>✅</div>
            <div className="stat-number">5000+</div>
            <div className="stat-label">Successful admissions</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon" aria-hidden>💡</div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Personalized guidance</div>
          </div>
        </div>
      </section>

      {/* Explore diverse courses — Hopeson-style image cards */}
      <section className="course-showcase-section">
        <div className="container">
          <h2 className="section-title text-center">Explore our diverse course offerings</h2>
          <p className="section-text text-center max-w-2xl mx-auto mb-xl">
            Nursing, engineering, management, and more — we help you choose the right path and secure admission.
          </p>
          <div className="course-showcase-grid">
            <article className="course-showcase-card">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Nursing and healthcare" />
              <div className="course-showcase-body">
                <h3>Nursing courses</h3>
                <p>Guidance for top nursing and allied health programs.</p>
                <Link to="/nursing-colleges" className="text-link-green">Browse colleges</Link>
              </div>
            </article>
            <article className="course-showcase-card">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e66837?w=800&q=80" alt="Engineering" />
              <div className="course-showcase-body">
                <h3>Engineering &amp; degree colleges</h3>
                <p>VTU engineering plus BCA, BBA, B.Com and B.Sc — filter, compare, and shortlist.</p>
                <Link to="/engineering-colleges" className="text-link-green">Browse colleges</Link>
              </div>
            </article>
            <article className="course-showcase-card">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" alt="Management and business" />
              <div className="course-showcase-body">
                <h3>Management courses</h3>
                <p>MBA, BBA, and management programs at leading colleges.</p>
                <a href="#contact" className="text-link-green">Enquire now</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="promo-banner-section">
        <div className="container promo-banner-inner">
          <div>
            <h2 className="promo-banner-title">Transform your future with <span className="promo-highlight">25% off</span> on admissions support!</h2>
            <p className="promo-banner-text">
              Limited-time savings on select university admission packages. Apply today and step into a brighter future.
            </p>
          </div>
          <button type="button" className="btn-promo" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Enroll now
          </button>
        </div>
      </section>

      {/* Speak with consultants + search */}
      <section className="consultant-search-section">
        <div className="container consultant-search-inner">
          <h2 className="section-title text-center mb-sm">Unlock opportunities — speak with our consultants today!</h2>
          <form className="course-search-form" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="Search course (e.g. MBA, B.Tech, Nursing…)" aria-label="Search course" />
            <button type="submit" className="btn-primary">Search</button>
          </form>
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

      {/* Gallery — career guidance imagery */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">Career guidance, mentoring & success</p>
            <p className="section-text text-gray max-w-2xl mx-auto">
              Moments from counselling sessions, workshops, and student journeys we are proud to support.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <figure key={item.caption} className="gallery-item">
                <img src={item.src} alt={item.caption} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Top colleges / partners — card strip like Hopeson */}
      <section className="top-colleges-section">
        <div className="container">
          <h2 className="section-title text-center mb-xl">Top colleges in Karnataka</h2>
          <div className="top-colleges-scroll">
            <article className="college-card">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" alt="Campus" />
              <h3>Leading institutions</h3>
              <p>Partner colleges for engineering & management.</p>
            </article>
            <article className="college-card">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80" alt="University building" />
              <h3>Premier campuses</h3>
              <p>Admissions support for ranked universities.</p>
            </article>
            <article className="college-card">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" alt="Students" />
              <h3>Student success</h3>
              <p>Guidance from application to enrollment.</p>
            </article>
            <article className="college-card">
              <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80" alt="Library" />
              <h3>Academic excellence</h3>
              <p>Match your profile with the right college.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section bg-light">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title">Success stories: real students, real results!</h2>
            <p className="section-subtitle">What our students say</p>
            <p className="section-text text-gray">Hear from students we have guided</p>
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

              {/* ✅ ADDED — Google Sheets via Apps Script (see integrations/google-apps-script) */}
              <ContactForm />
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
              <h2 className="logo text-2xl font-bold mb-sm text-white"><Link to="/" className="text-white">ProvidentGroups</Link></h2>
              <p className="text-gray-light italic">Empowering Your Future with ProvidentGroups Education</p>
              <div className="social-links flex gap-md mt-md">
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Instagram</a>
                <a href="https://wa.me/919535712120" target="_blank" rel="noreferrer" className="social-icon">Whatsapp</a>
              </div>
            </div>
            <div className="footer-links">
              <h3 className="font-bold mb-md text-white">Menu</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About Us</a></li>
                <li><Link to="/nursing-colleges">Nursing colleges</Link></li>
                <li><Link to="/engineering-colleges">Engineering &amp; degrees</Link></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
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

export default HomePage;
