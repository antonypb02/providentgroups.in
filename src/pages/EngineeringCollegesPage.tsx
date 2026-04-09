import { useMemo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { engineeringColleges, type EngineeringCollege } from '../data/engineeringColleges';
import '../App.css';
import './NursingCollegesPage.css';
import './EngineeringCollegesPage.css';

type SortKey = 'popularity' | 'rating' | 'feesHigh' | 'feesLow';

const MAX_COMPARE = 4;

const segmentOptions = [
  { value: 'all' as const, label: 'All types' },
  { value: 'engineering' as const, label: 'Engineering (VTU)' },
  { value: 'professional' as const, label: 'BCA / BBA / B.Com / B.Sc' },
];

const tagFilters = [
  'All',
  ...Array.from(new Set(engineeringColleges.flatMap((c) => c.courseTags))).sort(),
] as const;

function sortColleges(list: EngineeringCollege[], sort: SortKey): EngineeringCollege[] {
  const copy = [...list];
  switch (sort) {
    case 'rating':
      return copy.sort((a, b) => b.rating - a.rating);
    case 'feesHigh':
      return copy.sort((a, b) => {
        const fa = a.feeAnnualInr ?? -1;
        const fb = b.feeAnnualInr ?? -1;
        return fb - fa;
      });
    case 'feesLow':
      return copy.sort((a, b) => {
        const fa = a.feeAnnualInr ?? Number.MAX_SAFE_INTEGER;
        const fb = b.feeAnnualInr ?? Number.MAX_SAFE_INTEGER;
        return fa - fb;
      });
    case 'popularity':
    default:
      return copy.sort((a, b) => a.rank - b.rank);
  }
}

function formatLine(line: { label: string; feeInr?: number }): string {
  if (line.feeInr != null) return `${line.label} — ₹ ${line.feeInr.toLocaleString('en-IN')} / yr`;
  return line.label;
}

export default function EngineeringCollegesPage() {
  const [sortBy, setSortBy] = useState<SortKey>('popularity');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [search, setSearch] = useState('');
  const [segment, setSegment] = useState<(typeof segmentOptions)[number]['value']>('all');
  const [tagFilter, setTagFilter] = useState<(typeof tagFilters)[number]>('All');
  const [compareIds, setCompareIds] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let rows = engineeringColleges;
    const q = search.trim().toLowerCase();
    if (q) {
      rows = rows.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q) ||
          c.courses.some((co) => co.toLowerCase().includes(q)) ||
          (c.affiliation && c.affiliation.toLowerCase().includes(q))
      );
    }
    if (segment !== 'all') {
      rows = rows.filter((c) => c.segment === segment);
    }
    if (tagFilter !== 'All') {
      rows = rows.filter((c) => c.courseTags.includes(tagFilter));
    }
    return sortColleges(rows, sortBy);
  }, [search, segment, tagFilter, sortBy]);

  const toggleCompare = useCallback((id: string) => {
    setCompareIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < MAX_COMPARE) next.add(id);
      return next;
    });
  }, []);

  const compareList = useMemo(
    () => engineeringColleges.filter((c) => compareIds.has(c.id)),
    [compareIds]
  );

  const toggleExpanded = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

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
            <Link to="/nursing-colleges">Nursing colleges</Link>
            <Link to="/engineering-colleges" className="nc-nav-active">
              Engineering &amp; degrees
            </Link>
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
            <span>Engineering &amp; professional colleges</span>
          </p>
          <h1 className="nc-hero-title">Engineering &amp; degree colleges</h1>
          <p className="nc-hero-desc">
            VTU-affiliated engineering programs plus BCA, BBA, B.Com and B.Sc offerings. Search, filter by stream, shortlist colleges for comparison, and expand any row for the full course list with fees where available.
          </p>
        </div>
      </header>

      <section className="nc-apps-strip" aria-label="Featured colleges">
        <div className="container">
          <h2 className="nc-strip-title">Featured colleges 2026</h2>
        </div>
        <div className="nc-apps-scroll">
          {engineeringColleges.slice(0, 5).map((c) => (
            <article key={c.id} className="nc-app-card">
              <div className="nc-app-card-image-wrap">
                <img src={c.image} alt="" className="nc-app-card-img" />
                <span className="nc-app-rating">★ {c.rating.toFixed(1)}</span>
                {c.badge && <span className="nc-app-badge">{c.badge}</span>}
                <span className="ec-segment-pill">
                  {c.segment === 'engineering' ? 'VTU engineering' : 'UG degrees'}
                </span>
              </div>
              <div className="nc-app-card-body">
                <h3 className="nc-app-name">{c.name}</h3>
                <p className="nc-app-loc">
                  {c.city}, {c.state}
                </p>
                <p className="nc-app-fee">
                  {c.courseFeeDisplay} · {c.primaryCourse}
                </p>
                <button type="button" className="nc-apply-link" onClick={() => document.getElementById('ec-listing')?.scrollIntoView({ behavior: 'smooth' })}>
                  View in list →
                </button>
              </div>
            </article>
          ))}
          <article className="nc-app-card nc-app-card--cta">
            <div className="nc-cta-inner">
              <strong>Not sure which stream?</strong>
              <p>We match your profile to engineering vs BCA/BBA/B.Com options.</p>
              <Link to="/#contact" className="nc-apply-link">
                Book counselling →
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="ec-listing" className="nc-listing-section">
        <div className="container">
          <div className="nc-toolbar">
            <p className="nc-found">
              Found <strong>{filtered.length}</strong> colleges
            </p>
            <div className="nc-search-row">
              <input
                type="search"
                className="nc-search-input"
                placeholder="Search college, city, branch, or course…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search colleges"
              />
              <select
                className="nc-course-select"
                value={segment}
                onChange={(e) => setSegment(e.target.value as (typeof segmentOptions)[number]['value'])}
                aria-label="Filter by college type"
              >
                {segmentOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <select
                className="nc-course-select"
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value as (typeof tagFilters)[number])}
                aria-label="Filter by course tag"
              >
                {tagFilters.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === 'All' ? 'All streams' : opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="nc-sort-row">
              <span className="nc-sort-label">Sort by</span>
              <label className="nc-radio">
                <input type="radio" name="sort-ec" checked={sortBy === 'popularity'} onChange={() => setSortBy('popularity')} />
                Popularity
              </label>
              <label className="nc-radio">
                <input type="radio" name="sort-ec" checked={sortBy === 'rating'} onChange={() => setSortBy('rating')} />
                Rating
              </label>
              <label className="nc-radio">
                <input type="radio" name="sort-ec" checked={sortBy === 'feesHigh'} onChange={() => setSortBy('feesHigh')} />
                Highest fees
              </label>
              <label className="nc-radio">
                <input type="radio" name="sort-ec" checked={sortBy === 'feesLow'} onChange={() => setSortBy('feesLow')} />
                Lowest fees
              </label>
            </div>
            <div className="nc-view-toggle" role="group" aria-label="View mode">
              <button
                type="button"
                className={viewMode === 'list' ? 'nc-view-btn nc-view-btn--on' : 'nc-view-btn'}
                onClick={() => setViewMode('list')}
              >
                List
              </button>
              <button
                type="button"
                className={viewMode === 'grid' ? 'nc-view-btn nc-view-btn--on' : 'nc-view-btn'}
                onClick={() => setViewMode('grid')}
              >
                Grid
              </button>
            </div>
          </div>

          {viewMode === 'list' ? (
            <div className="nc-table-wrap">
              <table className="nc-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Colleges</th>
                    <th>Course fees</th>
                    <th>Placement</th>
                    <th>Reviews</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr key={c.id}>
                      <td className="nc-td-rank">#{c.rank}</td>
                      <td className="nc-td-college">
                        <div className="nc-college-row">
                          <img className="nc-college-thumb" src={c.image} alt="" width={56} height={56} />
                          <div>
                            <button
                              type="button"
                              className="nc-college-name ec-college-name-btn"
                              onClick={() => toggleExpanded(c.id)}
                              aria-expanded={expandedId === c.id}
                            >
                              {c.name}
                              <span className="ec-expand-hint">{expandedId === c.id ? ' ▲' : ' ▼'}</span>
                            </button>
                            <p className="nc-college-meta">
                              {c.city}, {c.state}
                              {c.affiliation && (
                                <>
                                  {' '}
                                  · <span className="ec-affil">{c.affiliation}</span>
                                </>
                              )}
                            </p>
                            <p className="nc-accred">{c.accreditation}</p>
                            <p className="nc-courses-line">
                              <strong>Streams:</strong> {c.courseTags.join(' · ')}
                            </p>
                            <p className="nc-courses-line ec-courses-preview">
                              <strong>Courses:</strong> {c.courses.slice(0, 4).join(' · ')}
                              {c.courses.length > 4 ? '…' : ''}
                            </p>
                            {expandedId === c.id && (
                              <ul className="ec-course-detail-list">
                                {c.courseLines.map((line, i) => (
                                  <li key={i}>{formatLine(line)}</li>
                                ))}
                              </ul>
                            )}
                            <div className="nc-actions">
                              <Link to="/#contact" className="nc-link-apply">
                                Enquire →
                              </Link>
                              <button type="button" className="nc-link-brochure">
                                Brochure
                              </button>
                            </div>
                            <label className="nc-compare-label">
                              <input
                                type="checkbox"
                                checked={compareIds.has(c.id)}
                                onChange={() => toggleCompare(c.id)}
                                disabled={!compareIds.has(c.id) && compareIds.size >= MAX_COMPARE}
                              />
                              Add to compare
                            </label>
                            <p className="nc-pg-score">Score: {c.pgScore} / 2000</p>
                          </div>
                        </div>
                      </td>
                      <td className="nc-td-fees">
                        <span className="nc-fee-amount">{c.courseFeeDisplay}</span>
                        <span className="nc-fee-course">{c.primaryCourse}</span>
                        <button type="button" className="nc-link-subtle" onClick={() => toggleExpanded(c.id)}>
                          {expandedId === c.id ? 'Hide fee breakdown' : 'Show fee breakdown'}
                        </button>
                      </td>
                      <td className="nc-td-place">
                        <p>
                          Avg <span className="nc-teal">{c.avgPackageDisplay}</span>
                        </p>
                        <p>
                          High <span className="nc-teal">{c.highestPackageDisplay}</span>
                        </p>
                        <p className="nc-sub">Score {c.placementScore} / 1000</p>
                      </td>
                      <td className="nc-td-reviews">
                        <p className="nc-stars">★ {c.rating.toFixed(1)} / 5</p>
                        <p className="nc-review-count">Based on {c.reviewCount} reviews</p>
                        {c.reviewHighlight && <span className="nc-pill">{c.reviewHighlight}</span>}
                      </td>
                      <td className="nc-td-ranking">
                        <p>{c.rankingSummary}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="nc-grid-view">
              {filtered.map((c) => (
                <article key={c.id} className="nc-grid-card">
                  <img src={c.image} alt="" className="nc-grid-img" />
                  <div className="nc-grid-body">
                    <span className="ec-segment-pill ec-segment-pill--inline">
                      {c.segment === 'engineering' ? 'Engineering' : 'UG degrees'}
                    </span>
                    <h3 className="nc-grid-title">{c.name}</h3>
                    <p className="nc-grid-loc">
                      {c.city}, {c.state}
                    </p>
                    <p className="nc-grid-fee">{c.courseFeeDisplay}</p>
                    <p className="nc-grid-course">{c.primaryCourse}</p>
                    <p className="nc-grid-courses-sm">{c.courses.slice(0, 3).join(' · ')}…</p>
                    <div className="ec-grid-actions">
                      <button type="button" className="nc-link-subtle" onClick={() => toggleExpanded(c.id)}>
                        {expandedId === c.id ? 'Hide courses' : 'All courses'}
                      </button>
                    </div>
                    {expandedId === c.id && (
                      <ul className="ec-course-detail-list ec-course-detail-list--compact">
                        {c.courseLines.map((line, i) => (
                          <li key={i}>{formatLine(line)}</li>
                        ))}
                      </ul>
                    )}
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
          )}
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
            <Link to="/#contact" className="btn-primary nc-compare-btn">
              Enquire on selection
            </Link>
          </div>
        </aside>
      )}

      <footer className="footer-section nc-footer">
        <div className="container">
          <p className="text-sm text-gray" style={{ textAlign: 'center', padding: '1rem 0' }}>
            <Link to="/">← Back to home</Link>
            {' · '}
            <Link to="/nursing-colleges">Nursing colleges</Link>
            {' · '}
            Fees and affiliations are for guidance — confirm with the institution. Edit listings in{' '}
            <span className="font-bold">src/data/engineeringColleges.ts</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
