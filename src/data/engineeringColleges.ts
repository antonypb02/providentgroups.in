/**
 * Engineering & professional degree colleges — Karnataka / tie-ups list.
 * Update fees with the institution; engineering rows omit 1st-year fee until confirmed.
 */

export type CourseLine = {
  label: string;
  /** 1st year fee in INR when known */
  feeInr?: number;
};

export type EngineeringCollege = {
  id: string;
  rank: number;
  /** VTU B.E. / B.Tech vs BCA/BBA/B.Com/B.Sc */
  segment: 'engineering' | 'professional';
  name: string;
  city: string;
  state: string;
  affiliation?: string;
  image: string;
  /** Short tags for toolbar filter */
  courseTags: string[];
  /** Flat names for search */
  courses: string[];
  courseLines: CourseLine[];
  primaryCourse: string;
  courseFeeDisplay: string;
  feeAnnualInr: number | null;
  totalFeeDisplay: string;
  totalFeeInr: number;
  accreditation: string;
  avgPackageDisplay: string;
  highestPackageDisplay: string;
  placementScore: number;
  rating: number;
  reviewCount: number;
  reviewHighlight: string;
  rankingSummary: string;
  pgScore: number;
  badge?: string;
};

function linesProfessional(entries: [string, number][]): CourseLine[] {
  return entries.map(([label, feeInr]) => ({ label, feeInr }));
}

function linesEngineering(labels: string[]): CourseLine[] {
  return labels.map((label) => ({ label }));
}

const inr = (n: number) =>
  `₹ ${n.toLocaleString('en-IN')}`;

export const engineeringColleges: EngineeringCollege[] = [
  {
    id: 'de-paul-mysore',
    rank: 1,
    segment: 'professional',
    name: 'De Paul',
    city: 'Mysore',
    state: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    courseTags: ['BCA', 'BBA', 'B.Com'],
    courses: [
      'BCA Ethical Hacking / Cyber Security',
      'BCA with AI & ML',
      'BCA with Data Analytics',
      'B.Com / BBA with Logistics & Supply Chain',
      'BBA with Hospital Administration',
      'BBA / B.Com Aviation',
      'BBA / B.Com Digital Marketing with AI',
      'BBA with Business Intelligence & Data Analytics',
      'B.Com with Business Intelligence & Data Analytics',
    ],
    courseLines: linesProfessional([
      ['BCA — Ethical Hacking / Cyber Security', 190_000],
      ['BCA — AI & ML', 185_000],
      ['BCA — Data Analytics', 185_000],
      ['B.Com / BBA — Logistics & Supply Chain', 192_300],
      ['BBA — Hospital Administration', 192_300],
      ['BBA / B.Com — Aviation', 192_300],
      ['BBA / B.Com — Digital Marketing with AI', 182_300],
      ['BBA — Business Intelligence & Data Analytics', 182_300],
      ['B.Com — Business Intelligence & Data Analytics', 182_300],
    ]),
    primaryCourse: 'BCA / BBA / B.Com',
    courseFeeDisplay: `${inr(182_300)} – ${inr(192_300)} / yr (1st year)`,
    feeAnnualInr: 182_300,
    totalFeeDisplay: 'Varies by program',
    totalFeeInr: 0,
    accreditation: 'Affiliated college — confirm with campus',
    avgPackageDisplay: '₹ —',
    highestPackageDisplay: '₹ —',
    placementScore: 650,
    rating: 4.1,
    reviewCount: 48,
    reviewHighlight: 'Mysore campus',
    rankingSummary: 'Professional UG programs',
    pgScore: 1200,
  },
  {
    id: 'scs-mangalore',
    rank: 2,
    segment: 'professional',
    name: 'SCS Group of Institutions',
    city: 'Mangalore',
    state: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80',
    courseTags: ['BBA', 'B.Com', 'BCA', 'B.Sc'],
    courses: [
      'BBA',
      'BBA Aviation & Logistics',
      'BBA Logistics & Port Management',
      'BBA Aviation & Hospitality Management',
      'BBA Retail & Digital Management',
      'BBA Retail & Tourism',
      'B.Com',
      'B.Com Accounting & Finance',
      'B.Com Aviation & Logistics',
      'B.Com ACCA',
      'B.Com CMA',
      'B.Com Data & Analyst',
      'BCA',
      'BCA Digital & Marketing',
      'BCA AI & Machine Learning',
      'BCA Cloud Computing',
      'BCA Data Analyst / Data Science',
      'BCA Cybersecurity & Blockchain Management',
      'B.Sc Animation & VFX',
      'B.Sc Interior Design',
      'B.Sc Food & Nutrition',
      'B.Sc Fashion Design',
    ],
    courseLines: [
      ...linesProfessional([
        ['BBA — General', 185_000],
        ['BBA — Aviation & Logistics', 185_000],
        ['BBA — Logistics & Port Management', 185_000],
        ['BBA — Aviation & Hospitality Management', 185_000],
        ['BBA — Retail & Digital Management', 185_000],
        ['BBA — Retail & Tourism', 185_000],
        ['B.Com — General', 185_000],
        ['B.Com — Accounting & Finance', 185_000],
        ['B.Com — Aviation & Logistics', 185_000],
        ['B.Com — ACCA', 185_000],
        ['B.Com — CMA', 185_000],
        ['B.Com — Data & Analyst', 185_000],
        ['BCA — General', 185_000],
        ['BCA — Digital & Marketing', 185_000],
        ['BCA — AI & Machine Learning', 185_000],
        ['BCA — Cloud Computing', 185_000],
        ['BCA — Data Analyst / Data Science', 185_000],
        ['BCA — Cybersecurity & Blockchain Management', 185_000],
      ]),
      ...linesProfessional([
        ['B.Sc — Animation & VFX', 130_000],
        ['B.Sc — Interior Design', 130_000],
        ['B.Sc — Food & Nutrition', 125_000],
        ['B.Sc — Fashion Design', 125_000],
      ]),
    ],
    primaryCourse: 'BBA / B.Com / BCA / B.Sc',
    courseFeeDisplay: `${inr(125_000)} – ${inr(185_000)} / yr (1st year)`,
    feeAnnualInr: 125_000,
    totalFeeDisplay: 'Varies by program',
    totalFeeInr: 0,
    accreditation: 'Affiliated college — confirm with campus',
    avgPackageDisplay: '₹ —',
    highestPackageDisplay: '₹ —',
    placementScore: 680,
    rating: 4.0,
    reviewCount: 72,
    reviewHighlight: 'Wide program mix',
    rankingSummary: 'Coastal Karnataka hub',
    pgScore: 1220,
  },
  {
    id: 'ajit-mangalore',
    rank: 3,
    segment: 'engineering',
    name: 'AJ Institute of Technology',
    city: 'Mangalore',
    state: 'Karnataka',
    affiliation: 'VTU',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e66837?w=800&q=80',
    courseTags: ['B.E.', 'B.Tech'],
    courses: [
      'Computer Science & Engineering',
      'CSE (AI & ML)',
      'CSE (ICB)',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electronics & Communication Engineering',
      'Electronics Engineering (VLSI)',
      'Information Science & Engineering',
    ],
    courseLines: linesEngineering([
      'Computer Science & Engineering',
      'CSE (AI & ML)',
      'CSE (ICB)',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electronics & Communication Engineering',
      'Electronics Engineering (VLSI)',
      'Information Science & Engineering',
    ]),
    primaryCourse: 'B.E. / B.Tech (VTU)',
    courseFeeDisplay: 'Contact for 1st year fees',
    feeAnnualInr: null,
    totalFeeDisplay: '—',
    totalFeeInr: 0,
    accreditation: 'VTU-affiliated — confirm approvals',
    avgPackageDisplay: '₹ —',
    highestPackageDisplay: '₹ —',
    placementScore: 700,
    rating: 4.0,
    reviewCount: 55,
    reviewHighlight: 'Mangalore',
    rankingSummary: 'VTU engineering programs',
    pgScore: 1280,
  },
  {
    id: 'yenapoya-moodabidri',
    rank: 4,
    segment: 'engineering',
    name: 'Yenepoya Institute of Technology',
    city: 'Moodabidri, Mangalore',
    state: 'Karnataka',
    affiliation: 'VTU',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    courseTags: ['B.E.', 'B.Tech'],
    courses: [
      'CSE (AI & ML)',
      'Computer Science & Engineering',
      'CSE (Data Science)',
      'CSE (Cyber Security & Blockchain)',
      'Information Science & Engineering',
      'Mechanical Engineering',
      'Electrical & Electronics Engineering',
      'Electronics & Communication Engineering',
    ],
    courseLines: linesEngineering([
      'CSE (AI & ML)',
      'Computer Science & Engineering',
      'CSE (Data Science)',
      'CSE (Cyber Security & Blockchain Technology)',
      'Information Science & Engineering',
      'Mechanical Engineering',
      'Electrical & Electronics Engineering',
      'Electronics & Communication Engineering',
    ]),
    primaryCourse: 'B.E. / B.Tech (VTU)',
    courseFeeDisplay: 'Contact for 1st year fees',
    feeAnnualInr: null,
    totalFeeDisplay: '—',
    totalFeeInr: 0,
    accreditation: 'VTU-affiliated — confirm approvals',
    avgPackageDisplay: '₹ —',
    highestPackageDisplay: '₹ —',
    placementScore: 710,
    rating: 4.1,
    reviewCount: 61,
    reviewHighlight: 'Moodabidri campus',
    rankingSummary: 'VTU engineering programs',
    pgScore: 1300,
  },
  {
    id: 'dayananda-sagar-bangalore',
    rank: 5,
    segment: 'engineering',
    name: 'Dayananda Sagar University',
    city: 'Bangalore',
    state: 'Karnataka',
    affiliation: 'VTU',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    courseTags: ['B.E.', 'B.Tech'],
    courses: [
      'CSE (AI & ML)',
      'CSE (AI & DS)',
      'CSE (Core)',
      'CSE (Data Science)',
      'CSE (Cyber Security)',
      'AI & Robotics',
      'CSE (Medical Engineering)',
      'CSE (Technology)',
      'Mechanical Engineering',
      'Aerospace Engineering',
    ],
    courseLines: linesEngineering([
      'CSE (AI & ML)',
      'CSE (AI & Data Science)',
      'CSE (Core)',
      'CSE (Data Science)',
      'CSE (Cyber Security)',
      'AI & Robotics',
      'CSE (Medical Engineering)',
      'CSE (Technology)',
      'Mechanical Engineering',
      'Aerospace Engineering',
    ]),
    primaryCourse: 'B.E. / B.Tech (VTU)',
    courseFeeDisplay: 'Contact for 1st year fees',
    feeAnnualInr: null,
    totalFeeDisplay: '—',
    totalFeeInr: 0,
    accreditation: 'University — confirm program & intake',
    avgPackageDisplay: '₹ —',
    highestPackageDisplay: '₹ —',
    placementScore: 750,
    rating: 4.3,
    reviewCount: 120,
    reviewHighlight: 'Bangalore',
    rankingSummary: 'Multi-specialisation CSE',
    pgScore: 1380,
    badge: 'University',
  },
];
