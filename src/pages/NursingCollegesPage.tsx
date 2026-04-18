import { useMemo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { nursingColleges, type NursingCollege } from '../data/nursingColleges';
import '../App.css';
import './NursingCollegesPage.css';

type SortKey = 'popularity' | 'rating' | 'feesHigh' | 'feesLow';

const MAX_COMPARE = 4;

const courseFilters = ['All', 'B.Sc Nursing', 'GNM', 'Post Basic B.Sc Nursing', 'M.Sc Nursing'] as const;

function nursingFirstYearFeeDisplay(c: NursingCollege): string {
  if (c.courseFeeDisplay) return c.courseFeeDisplay;
  return `₹ ${c.feeAnnualInr.toLocaleString('en-IN')}`;
}

function sortColleges(list: NursingCollege[], sort: SortKey): NursingCollege[] {
  const copy = [...list];
  switch (sort) {
    case 'rating':
      return copy.sort((a, b) => b.rating - a.rating);
    case 'feesHigh':
      return copy.sort((a, b) => b.feeAnnualInr - a.feeAnnualInr);
    case 'feesLow':
      return copy.sort((a, b) => a.feeAnnualInr - b.feeAnnualInr);
    case 'popularity':
    default:
      return copy.sort((a, b) => a.rank - b.rank);
  }
}

export default function NursingCollegesPage() {
  const [sortBy, setSortBy] = useState<SortKey>('popularity');
  const [search, setSearch] = useState('');
  const [courseFilter, setCourseFilter] = useState<(typeof courseFilters)[number]>('All');
  const [compareIds, setCompareIds] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    let rows = nursingColleges;
    const q = search.trim().toLowerCase();
    if (q) {
      rows = rows.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q) ||
          c.courses.some((co) => co.toLowerCase().includes(q))
      );
    }
    if (courseFilter !== 'All') {
      rows = rows.filter((c) => c.courses.includes(courseFilter));
    }
    return sortColleges(rows, sortBy);
  }, [search, courseFilter, sortBy]);

  const toggleCompare = useCallback((id: string) => {
    setCompareIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < MAX_COMPARE) next.add(id);
      return next;
    });
  }, []);

  const compareList = useMemo(
    () => nursingColleges.filter((c) => compareIds.has(c.id)),
    [compareIds]
  );

  return (
    <div className="nc-page">
      <nav className="navbar glass-nav nc-nav">
        <div className="nav-container">
          <Link to="/" className="logo text-2xl font-bold bg-clip-text">
            ProvidentGroups
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/#about">About us</Link>
            <Link to="/nursing-colleges" className="nc-nav-active">
              Nursing colleges
            </Link>
            <Link to="/engineering-colleges">Engineering &amp; degrees</Link>
            <Link to="/#courses">Courses</Link>
            <Link to="/#contact">Contact</Link>
          </div>
          <Link to="/#contact" className="btn-primary nav-cta">
            Enquire
          </Link>
        </div>
      </nav>

      <header className="nc-hero">
        <div className="container">
          <p className="nc-breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden> / </span>
            <span>Nursing colleges &amp; courses</span>
          </p>
          <h1 className="nc-hero-title">Nursing colleges in Karnataka</h1>
          
        </div>
      </header>

      {/* Horizontal carousel — "Colleges Application Forms" style */}
      <section className="nc-apps-strip" aria-label="Featured colleges and tools">
        <div className="container">
          <h2 className="nc-strip-title">Colleges application forms 2026</h2>
        </div>
        <div className="nc-apps-scroll">
          {nursingColleges.slice(0, 6).map((c) => (
            <article key={c.id} className="nc-app-card">
              <div className="nc-app-card-image-wrap">
                <img src={c.image} alt="" className="nc-app-card-img" />
                <span className="nc-app-rating">★ {c.rating.toFixed(1)}</span>
                {c.badge && <span className="nc-app-badge">{c.badge}</span>}
              </div>
              <div className="nc-app-card-body">
                <h3 className="nc-app-name">{c.name}</h3>
                <p className="nc-app-loc">
                  {c.city}, {c.state}
                </p>
                <p className="nc-app-fee">{nursingFirstYearFeeDisplay(c)} · 1st year · {c.primaryCourse}</p>
                <button type="button" className="nc-apply-link">
                  Apply now →
                </button>
              </div>
            </article>
          ))}
          <article className="nc-app-card nc-app-card--cta">
            <div className="nc-cta-inner">
              <strong>Know your admission chances</strong>
              <p>Speak with our counsellors for a profile review.</p>
              <Link to="/#contact" className="nc-apply-link">
                Book counselling →
              </Link>
            </div>
          </article>
          <article className="nc-app-card nc-app-card--cta nc-app-card--cta2">
            <div className="nc-cta-inner">
              <strong>Course shortlist</strong>
              <p>GNM, B.Sc, Post Basic &amp; M.Sc — we help you pick.</p>
              <a href="#nc-listing" className="nc-apply-link">
                View all colleges →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Toolbar + listing */}
      <section id="nc-listing" className="nc-listing-section">
        <div className="container">
          <div className="nc-toolbar">
            <p className="nc-found">
              Found <strong>{filtered.length}</strong> colleges
            </p>
            <div className="nc-search-row">
              <input
                type="search"
                className="nc-search-input"
                placeholder="Search college, city, or course…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search colleges"
              />
              <select
                className="nc-course-select"
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value as (typeof courseFilters)[number])}
                aria-label="Filter by course"
              >
                {courseFilters.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === 'All' ? 'All courses' : opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="nc-sort-row">
              <span className="nc-sort-label">Sort by</span>
              <label className="nc-radio">
                <input type="radio" name="sort" checked={sortBy === 'popularity'} onChange={() => setSortBy('popularity')} />
                Popularity
              </label>
              <label className="nc-radio">
                <input type="radio" name="sort" checked={sortBy === 'rating'} onChange={() => setSortBy('rating')} />
                Rating
              </label>
              <label className="nc-radio">
                <input type="radio" name="sort" checked={sortBy === 'feesHigh'} onChange={() => setSortBy('feesHigh')} />
                Highest fees
              </label>
              <label className="nc-radio">
                <input type="radio" name="sort" checked={sortBy === 'feesLow'} onChange={() => setSortBy('feesLow')} />
                Lowest fees
              </label>
            </div>
          </div>

          <div className="nc-grid-view">
            {filtered.map((c) => (
              <article key={c.id} className="nc-grid-card">
                <img src={c.image} alt="" className="nc-grid-img" />
                <div className="nc-grid-body">
                  <h3 className="nc-grid-title">{c.name}</h3>
                  <p className="nc-grid-loc">
                    {c.city}, {c.state}
                  </p>
                  <p className="nc-grid-course">{c.primaryCourse}</p>
                  <p className="nc-grid-courses-sm">{c.courses.join(' · ')}</p>
                  <label className="nc-compare-label">
                    <input
                      type="checkbox"
                      checked={compareIds.has(c.id)}
                      onChange={() => toggleCompare(c.id)}
                      disabled={!compareIds.has(c.id) && compareIds.size >= MAX_COMPARE}
                    />
                    Compare
                  </label>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {compareIds.size > 0 && (
        <aside className="nc-compare-bar" aria-live="polite">
          <div className="container nc-compare-inner">
            <span>
              <strong>{compareIds.size}</strong> selected (max {MAX_COMPARE})
            </span>
            <ul className="nc-compare-names">
              {compareList.map((c) => (
                <li key={c.id}>
                  {c.name}
                  <button type="button" className="nc-compare-remove" onClick={() => toggleCompare(c.id)} aria-label={`Remove ${c.name}`}>
                    ×
                  </button>
                </li>
              ))}
            </ul>
            <button type="button" className="btn-primary nc-compare-btn">
              Compare selection
            </button>
          </div>
        </aside>
      )}

      <footer className="footer-section nc-footer">
        <div className="container">
          <p className="text-sm text-gray" style={{ textAlign: 'center', padding: '1rem 0' }}>
            <Link to="/">← Back to home</Link>
            {' · '}
            Fees and approvals shown for guidance only — always confirm with the institution. Update listings in{' '}
            <span className="font-bold">src/data/nursingColleges.ts</span> to match your document.
          </p>
        </div>
      </footer>
    </div>
  );
}
