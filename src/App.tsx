import './App.css'

function App() {
  return (
    <div className="pg-page">
      <header className="pg-header">
        <div className="pg-header-inner">
          <div className="pg-logo">
            <span className="pg-logo-mark">PG</span>
            <div className="pg-logo-text">
              <span className="pg-logo-title">Provident Career</span>
              <span className="pg-logo-subtitle">No worker left behind</span>
            </div>
          </div>
          <nav className="pg-nav">
            <a href="#assessment">Assessment</a>
            <a href="#profile">Profile</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Stories</a>
          </nav>
          <a href="#assessment" className="pg-nav-cta">
            Start free
          </a>
        </div>
      </header>

      <main>
        <section id="assessment" className="pg-hero">
          <div className="pg-hero-badge">
            Career Guidance • Free • 3 Minutes • Privacy-First
          </div>
          <div className="pg-hero-grid">
            <div className="pg-hero-copy">
              <h1>Discover how you execute — then use it.</h1>
              <p className="pg-hero-lead">
                A 3-minute career guidance assessment that reveals how you
                handle change, teams, and growth. No personality labels. No
                fluff. Just clarity on what to do next.
              </p>
              <div className="pg-hero-actions">
                <a
                  className="pg-btn pg-btn-primary"
                  href="#assessment-form"
                >
                  Take the free assessment
                </a>
                <a className="pg-btn pg-btn-ghost" href="#sample-results">
                  See sample results first
                </a>
              </div>
              <p className="pg-hero-subcopy">
                “How did it know that about me?” — the most common reaction.
              </p>
              <p className="pg-hero-note">
                Powered by a simple, transparent scoring model. Your answers
                stay in your browser.
              </p>
            </div>

            <div className="pg-hero-card">
              <div className="pg-hero-card-header">
                <span className="pg-pill">Preview</span>
                <span className="pg-hero-card-title">
                  Career Execution Snapshot
                </span>
              </div>
              <div className="pg-hero-metrics">
                <div className="pg-metric">
                  <div className="pg-metric-label">Clarity</div>
                  <div className="pg-metric-bar">
                    <div className="pg-metric-fill pg-metric-fill-1" />
                  </div>
                  <div className="pg-metric-score">82nd percentile</div>
                </div>
                <div className="pg-metric">
                  <div className="pg-metric-label">Adaptability</div>
                  <div className="pg-metric-bar">
                    <div className="pg-metric-fill pg-metric-fill-2" />
                  </div>
                  <div className="pg-metric-score">76th percentile</div>
                </div>
                <div className="pg-metric">
                  <div className="pg-metric-label">Growth Momentum</div>
                  <div className="pg-metric-bar">
                    <div className="pg-metric-fill pg-metric-fill-3" />
                  </div>
                  <div className="pg-metric-score">69th percentile</div>
                </div>
              </div>
              <div className="pg-hero-card-footer">
                <div>
                  <div className="pg-hero-card-footer-label">
                    Highest‑leverage path
                  </div>
                  <div className="pg-hero-card-footer-value">
                    Senior IC → People leadership
                  </div>
                </div>
                <div>
                  <div className="pg-hero-card-footer-label">
                    Primary bottleneck
                  </div>
                  <div className="pg-hero-card-footer-value">
                    Saying “no” to low‑leverage work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="pg-section pg-section-muted">
          <div className="pg-section-header">
            <h2>Your career execution profile</h2>
            <p>
              We look at how you respond to real career challenges across five
              key dimensions of adaptability.
            </p>
          </div>
          <div className="pg-grid pg-grid-5">
            <article className="pg-dimension-card">
              <div className="pg-dimension-code">CA</div>
              <h3>Cognitive Adaptability</h3>
              <p>
                How quickly you understand unfamiliar problems, pick up new
                domains, and connect patterns others miss.
              </p>
            </article>
            <article className="pg-dimension-card">
              <div className="pg-dimension-code">EA</div>
              <h3>Emotional Adaptability</h3>
              <p>
                How you perform when the stakes are high — deadlines, conflict,
                and fast decisions that actually matter.
              </p>
            </article>
            <article className="pg-dimension-card">
              <div className="pg-dimension-code">BA</div>
              <h3>Behavioral Adaptability</h3>
              <p>
                How readily you change your approach when something is not
                working instead of just pushing harder.
              </p>
            </article>
            <article className="pg-dimension-card">
              <div className="pg-dimension-code">SA</div>
              <h3>Social Adaptability</h3>
              <p>
                How effectively you build new relationships, navigate teams, and
                turn networks into real opportunities.
              </p>
            </article>
            <article className="pg-dimension-card">
              <div className="pg-dimension-code">GP</div>
              <h3>Growth Potential</h3>
              <p>
                Your trajectory ceiling based on how you learn, adapt, and
                execute over time — not just today’s title.
              </p>
            </article>
          </div>
        </section>

        <section id="sample-results" className="pg-section">
          <div className="pg-section-header">
            <h2>What you get, for real</h2>
            <p>
              No vague “follow your passion” advice. You get a focused snapshot
              of where you are and what to do next.
            </p>
          </div>
          <div className="pg-grid pg-grid-2">
            <div className="pg-list-card">
              <h3>Execution profile (free)</h3>
              <ul>
                <li>5 adaptability scores with simple explanations</li>
                <li>Percentile rankings so you know where you stand</li>
                <li>
                  One highest‑leverage direction to focus your next moves
                </li>
                <li>
                  The single pattern most likely to limit your trajectory
                </li>
                <li>
                  A 30‑day focus map that fits into a real schedule, not a
                  fantasy one
                </li>
              </ul>
            </div>
            <div className="pg-list-card" id="assessment-form">
              <h3>Start your 3‑minute assessment</h3>
              <p className="pg-muted">
                This is a lightweight preview form. In a real product, this
                would launch the full assessment flow.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="pg-form"
              >
                <label className="pg-field">
                  <span>What best describes your current role?</span>
                  <select required>
                    <option value="">Select one</option>
                    <option>Student / Early career</option>
                    <option>Individual contributor</option>
                    <option>People manager</option>
                    <option>Director / VP / C‑level</option>
                    <option>Career transition / Returning to work</option>
                  </select>
                </label>
                <label className="pg-field">
                  <span>
                    What’s your biggest career question in one sentence?
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. “Do I stay on this track or pivot?”"
                  />
                </label>
                <label className="pg-field">
                  <span>Where should we email your results?</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <p className="pg-privacy">
                  We only use this to send your results. No spam, no sharing, no
                  surprises.
                </p>
                <button className="pg-btn pg-btn-primary" type="submit">
                  Start free assessment
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="pg-section pg-section-muted">
          <div className="pg-section-header">
            <h2>Math, not magic</h2>
            <p>
              Simple questions, transparent scoring, and recommendations you can
              actually verify.
            </p>
          </div>
          <div className="pg-steps">
            <article className="pg-step">
              <div className="pg-step-number">1</div>
              <h3>Answer 30 questions</h3>
              <p>
                Sliders instead of labels. We care about how you respond, not
                what “type” you are.
              </p>
            </article>
            <article className="pg-step">
              <div className="pg-step-number">2</div>
              <h3>We calculate your scores</h3>
              <p>
                Deterministic formulas that stay the same every time. No black
                box, no mood‑based scoring.
              </p>
            </article>
            <article className="pg-step">
              <div className="pg-step-number">3</div>
              <h3>See your execution profile</h3>
              <p>
                Five core scores plus a clear triage of what to double down on
                and what to fix first.
              </p>
            </article>
            <article className="pg-step">
              <div className="pg-step-number">4</div>
              <h3>Get your 30‑day map</h3>
              <p>
                A focused plan that fits around your current life instead of
                demanding you change everything overnight.
              </p>
            </article>
          </div>
        </section>

        <section id="testimonials" className="pg-section">
          <div className="pg-section-header">
            <h2>Real reactions</h2>
            <p>
              People at different stages of their careers using the same
              guidance system.
            </p>
          </div>
          <div className="pg-grid pg-grid-3">
            <article className="pg-quote-card">
              <p>
                “I’ve paid for career coaching that gave me less clarity than
                this free assessment. The difference is the focus on execution
                instead of personality.”
              </p>
              <span className="pg-quote-meta">
                VP of Product, growth‑stage startup
              </span>
            </article>
            <article className="pg-quote-card">
              <p>
                “The 30‑day map felt like something I could actually do between
                work, kids, and life. Most career advice assumes I have unlimited
                time. This didn’t.”
              </p>
              <span className="pg-quote-meta">
                Engineering Manager, remote‑first team
              </span>
            </article>
            <article className="pg-quote-card">
              <p>
                “Seeing the scoring formulas made me trust the results. It was
                the first time a ‘career test’ felt like a strategy tool rather
                than a horoscope.”
              </p>
              <span className="pg-quote-meta">
                Senior Designer, transitioning to leadership
              </span>
            </article>
          </div>
        </section>

        <section id="pricing" className="pg-section pg-section-muted">
          <div className="pg-section-header">
            <h2>Three ways to use Provident Career</h2>
            <p>
              Start free. Upgrade only if the plan and clarity are worth it to
              you.
            </p>
          </div>
          <div className="pg-grid pg-grid-3">
            <article className="pg-pricing-card">
              <div className="pg-pricing-label">Free</div>
              <div className="pg-pricing-price">$0</div>
              <p className="pg-pricing-tagline">Career Snapshot</p>
              <ul>
                <li>5 adaptability scores</li>
                <li>Percentile rankings</li>
                <li>30‑day action outline</li>
                <li>What’s working vs. what’s blocking</li>
                <li>Downloadable PDF summary</li>
              </ul>
              <a href="#assessment" className="pg-btn pg-btn-outline">
                Start free
              </a>
            </article>

            <article className="pg-pricing-card pg-pricing-card-featured">
              <div className="pg-pricing-label">Most popular</div>
              <div className="pg-pricing-price">$10</div>
              <p className="pg-pricing-tagline">Transformation Plan</p>
              <ul>
                <li>Everything in Free</li>
                <li>AI‑assisted coaching prompts</li>
                <li>Weekly action templates</li>
                <li>Role shortlist + “ignore list”</li>
                <li>Full 30‑60‑90 day roadmap</li>
              </ul>
              <a href="#assessment" className="pg-btn pg-btn-primary">
                Start free, upgrade later
              </a>
            </article>

            <article className="pg-pricing-card">
              <div className="pg-pricing-label">Career Club</div>
              <div className="pg-pricing-price">$50/yr</div>
              <p className="pg-pricing-tagline">Ongoing guidance</p>
              <ul>
                <li>Everything in Transformation Plan</li>
                <li>Monthly reassessment</li>
                <li>Invite tokens to share with others</li>
                <li>Optional mentor matching</li>
                <li>Early access to new tools</li>
              </ul>
              <a href="#assessment" className="pg-btn pg-btn-outline">
                Start free first
              </a>
            </article>
          </div>
        </section>

        <section className="pg-section pg-section-cta">
          <div className="pg-section-header">
            <h2>Ready to discover your execution pattern?</h2>
            <p>
              Get a clear, honest picture of how you work — and a practical way
              to move forward.
            </p>
          </div>
          <div className="pg-cta-actions">
            <a href="#assessment" className="pg-btn pg-btn-primary">
              Start free career assessment
            </a>
            <div className="pg-this-is">
              <div>
                <h3>This is</h3>
                <ul>
                  <li>A career strategy tool</li>
                  <li>Built on scoring you can understand</li>
                  <li>Designed to help you execute better</li>
                  <li>Based on well‑known research frameworks</li>
                </ul>
              </div>
              <div>
                <h3>This is not</h3>
                <ul>
                  <li>A personality test that tells you “who you are”</li>
                  <li>A replacement for therapy or counseling</li>
                  <li>A guarantee of job placement</li>
                  <li>A clinical psychological assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pg-footer">
        <p>© {new Date().getFullYear()} Provident Groups • Career guidance with no worker left behind.</p>
      </footer>
    </div>
  )
}

export default App
