/**
 * Karnataka Colleges & Courses — sourced from COLLEGE_LIST 2026.
 * Four categories: Nursing | Arts / Commerce / Science | Engineering | Diploma
 *
 * Sync with resources/COLLEGE_LIST__2026.pdf when updated.
 */

// ─── NURSING ──────────────────────────────────────────────────────────────────

export type NursingCollege = {
  id: string;
  rank: number;
  name: string;
  city: string;
  state: string;
  accreditation: string;
  image: string;
  courses: string[];
  primaryCourse: string;
  /** 1st year fee display (use '₹ —' if not itemised in source) */
  courseFeeDisplay: string;
  feeAnnualInr: number;
  /** Total 4-year fee */
  totalFeeDisplay: string;
  totalFeeInr: number;
  /** Male-candidate total fee where it differs */
  maleTotalFeeDisplay?: string;
  maleTotalFeeInr?: number;
  remarks?: string;
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

export const nursingColleges: NursingCollege[] = [
  {
    id: 'subbaiah-shimoga',
    rank: 1,
    name: 'Subbaiah Medical College',
    city: 'Shimoga',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ —',
    feeAnnualInr: 237500,
    totalFeeDisplay: '₹ 9,50,000',
    totalFeeInr: 950000,
    maleTotalFeeDisplay: '₹ 10,50,000',
    maleTotalFeeInr: 1050000,
    remarks: 'Exam fee, uniform & books extra',
    avgPackageDisplay: '₹ 3.5 LPA',
    highestPackageDisplay: '₹ 8 LPA',
    placementScore: 820,
    rating: 4.0,
    reviewCount: 95,
    reviewHighlight: 'Clinical Training',
    rankingSummary: 'Top Nursing College in Shimoga',
    pgScore: 1580,
  },
  {
    id: 'subhadra-shimoga',
    rank: 2,
    name: 'Subhadra College of Nursing',
    city: 'Shimoga',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ —',
    feeAnnualInr: 237500,
    totalFeeDisplay: '₹ 9,50,000',
    totalFeeInr: 950000,
    maleTotalFeeDisplay: '₹ 10,50,000',
    maleTotalFeeInr: 1050000,
    remarks: 'Exam fee, uniform & books extra',
    avgPackageDisplay: '₹ 3.4 LPA',
    highestPackageDisplay: '₹ 7.5 LPA',
    placementScore: 800,
    rating: 3.9,
    reviewCount: 82,
    reviewHighlight: 'Affordable Quality',
    rankingSummary: 'Leading Nursing College in Shimoga',
    pgScore: 1540,
  },
  {
    id: 'fortune-udupi',
    rank: 3,
    name: 'Fortune College of Nursing',
    city: 'Udupi (Bhrammavara)',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ —',
    feeAnnualInr: 212500,
    totalFeeDisplay: '₹ 8,50,000',
    totalFeeInr: 850000,
    remarks: 'Only Karnataka students',
    avgPackageDisplay: '₹ 3.3 LPA',
    highestPackageDisplay: '₹ 7 LPA',
    placementScore: 790,
    rating: 3.8,
    reviewCount: 67,
    reviewHighlight: 'Coastal Campus',
    rankingSummary: 'Top Nursing College in Udupi',
    pgScore: 1510,
  },
  {
    id: 'indiana-mangalore',
    rank: 4,
    name: 'Indiana Group of Institutions',
    city: 'Mangalore',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ 3,12,500',
    feeAnnualInr: 312500,
    totalFeeDisplay: '₹ 10,25,000',
    totalFeeInr: 1025000,
    remarks: 'Food & accommodation extra',
    avgPackageDisplay: '₹ 3.8 LPA',
    highestPackageDisplay: '₹ 9 LPA',
    placementScore: 840,
    rating: 4.1,
    reviewCount: 110,
    reviewHighlight: 'City Campus',
    rankingSummary: 'Top Nursing College in Mangalore',
    pgScore: 1620,
  },
  {
    id: 'sapthagiri-bangalore',
    rank: 5,
    name: 'Sapthagiri Institute of Medical Science',
    city: 'Bangalore',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774518?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ 2,50,000',
    feeAnnualInr: 250000,
    totalFeeDisplay: '₹ 7,00,000',
    totalFeeInr: 700000,
    remarks: 'Books & uniform ₹15,000 extra',
    avgPackageDisplay: '₹ 4.0 LPA',
    highestPackageDisplay: '₹ 10 LPA',
    placementScore: 870,
    rating: 4.2,
    reviewCount: 143,
    reviewHighlight: 'Bangalore Location',
    rankingSummary: 'Top Nursing College in Bangalore',
    pgScore: 1650,
  },
  {
    id: 'zulekha-mangalore',
    rank: 6,
    name: 'Zulekha Nursing College',
    city: 'Mangalore',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ 1,76,000',
    feeAnnualInr: 176000,
    totalFeeDisplay: '₹ 6,26,000',
    totalFeeInr: 626000,
    remarks: 'Food & accommodation extra',
    avgPackageDisplay: '₹ 3.6 LPA',
    highestPackageDisplay: '₹ 8.5 LPA',
    placementScore: 830,
    rating: 4.0,
    reviewCount: 98,
    reviewHighlight: 'Affordable Fees',
    rankingSummary: 'Best Value Nursing College in Mangalore',
    pgScore: 1560,
    badge: 'Best Value',
  },
  {
    id: 'st-alphonsa-mysore',
    rank: 7,
    name: 'St. Alphonsa Group of Institutes',
    city: 'Mysore',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ 4,25,000',
    feeAnnualInr: 425000,
    totalFeeDisplay: '₹ 10,70,000',
    totalFeeInr: 1070000,
    avgPackageDisplay: '₹ 4.1 LPA',
    highestPackageDisplay: '₹ 10 LPA',
    placementScore: 855,
    rating: 4.2,
    reviewCount: 118,
    reviewHighlight: 'Faith-Based Institution',
    rankingSummary: 'Top Nursing College in Mysore',
    pgScore: 1610,
  },
  {
    id: 'dayananda-sagar-nursing-blr',
    rank: 8,
    name: 'Dayananda Sagar University — Nursing',
    city: 'Bangalore',
    state: 'Karnataka',
    accreditation: 'INC, DSU',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd730992d8?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ 1,82,000',
    feeAnnualInr: 182000,
    totalFeeDisplay: '₹ 7,28,000',
    totalFeeInr: 728000,
    avgPackageDisplay: '₹ 4.0 LPA',
    highestPackageDisplay: '₹ 10 LPA',
    placementScore: 875,
    rating: 4.3,
    reviewCount: 156,
    reviewHighlight: 'University Campus',
    rankingSummary: 'Top University Nursing Programme in Bangalore',
    pgScore: 1665,
    badge: 'University Campus',
  },
  {
    id: 'gopala-gowda-mysore',
    rank: 9,
    name: 'Gopala Gowda Institute',
    city: 'Mysore',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ 4,50,000',
    feeAnnualInr: 450000,
    totalFeeDisplay: '₹ 10,50,000',
    totalFeeInr: 1050000,
    maleTotalFeeDisplay: '₹ 11,50,000',
    maleTotalFeeInr: 1150000,
    avgPackageDisplay: '₹ 3.9 LPA',
    highestPackageDisplay: '₹ 9.5 LPA',
    placementScore: 845,
    rating: 4.1,
    reviewCount: 101,
    reviewHighlight: 'Mysore City Campus',
    rankingSummary: 'Leading Nursing College in Mysore',
    pgScore: 1595,
  },
  {
    id: 'aadrsha-udupi',
    rank: 10,
    name: 'Aadrsha College of Nursing',
    city: 'Udupi',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ 3,05,000',
    feeAnnualInr: 305000,
    totalFeeDisplay: '₹ 10,70,000',
    totalFeeInr: 1070000,
    avgPackageDisplay: '₹ 3.7 LPA',
    highestPackageDisplay: '₹ 8.5 LPA',
    placementScore: 830,
    rating: 4.0,
    reviewCount: 88,
    reviewHighlight: 'Coastal Clinical Exposure',
    rankingSummary: 'Top Nursing College in Udupi',
    pgScore: 1565,
  },
  {
    id: 'shyadri-mangalore',
    rank: 11,
    name: 'Shyadri College of Nursing',
    city: 'Mangalore',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5b1?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ 2,75,000',
    feeAnnualInr: 275000,
    totalFeeDisplay: '₹ 8,54,000',
    totalFeeInr: 854000,
    avgPackageDisplay: '₹ 3.6 LPA',
    highestPackageDisplay: '₹ 8 LPA',
    placementScore: 820,
    rating: 3.9,
    reviewCount: 74,
    reviewHighlight: 'Experienced Faculty',
    rankingSummary: 'Top Nursing College in Mangalore',
    pgScore: 1530,
  },
  {
    id: 'city-college-nursing',
    rank: 12,
    name: 'City College of Nursing',
    city: 'Karnataka',
    state: 'Karnataka',
    accreditation: 'INC, RGUHS',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    courses: ['B.Sc Nursing'],
    primaryCourse: 'B.Sc Nursing',
    courseFeeDisplay: '₹ —',
    feeAnnualInr: 257500,
    totalFeeDisplay: '₹ 10,30,000',
    totalFeeInr: 1030000,
    avgPackageDisplay: '₹ 3.8 LPA',
    highestPackageDisplay: '₹ 9 LPA',
    placementScore: 835,
    rating: 4.0,
    reviewCount: 80,
    reviewHighlight: 'City Location',
    rankingSummary: 'Established Nursing College in Karnataka',
    pgScore: 1555,
  },
];

// ─── ARTS / COMMERCE / SCIENCE ────────────────────────────────────────────────

export type CourseWithFees = {
  name: string;
  firstYearFee: number;
  secondYearFee: number;
  thirdYearFee: number;
  totalFee: number;
};

export type CourseGroup = {
  groupName: string;
  courses: CourseWithFees[];
};

export type ArtsCommerceCollege = {
  id: string;
  rank: number;
  name: string;
  city: string;
  state: string;
  image: string;
  courseGroups: CourseGroup[];
  remarks?: string;
};

export const artsCommerceColleges: ArtsCommerceCollege[] = [
  {
    id: 'de-paul-mysore',
    rank: 1,
    name: 'De Paul',
    city: 'Mysore',
    state: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    remarks: 'Indo–American Collaboration',
    courseGroups: [
      {
        groupName: 'BCA',
        courses: [
          {
            name: 'BCA — Ethical Hacking / Cyber Security',
            firstYearFee: 190000,
            secondYearFee: 98000,
            thirdYearFee: 72000,
            totalFee: 360000,
          },
          {
            name: 'BCA — AI & ML',
            firstYearFee: 185000,
            secondYearFee: 90500,
            thirdYearFee: 74500,
            totalFee: 350000,
          },
          {
            name: 'BCA — Data Analytics',
            firstYearFee: 185000,
            secondYearFee: 90500,
            thirdYearFee: 74500,
            totalFee: 350000,
          },
        ],
      },
      {
        groupName: 'BBA / B.Com',
        courses: [
          {
            name: 'B.Com / BBA — Logistics & Supply Chain',
            firstYearFee: 192300,
            secondYearFee: 94000,
            thirdYearFee: 64000,
            totalFee: 350300,
          },
          {
            name: 'BBA — Hospital Administration',
            firstYearFee: 192300,
            secondYearFee: 94000,
            thirdYearFee: 64000,
            totalFee: 350300,
          },
          {
            name: 'BBA / B.Com — Aviation',
            firstYearFee: 192300,
            secondYearFee: 94000,
            thirdYearFee: 64000,
            totalFee: 350300,
          },
          {
            name: 'BBA / B.Com — Digital Marketing with AI',
            firstYearFee: 182300,
            secondYearFee: 89000,
            thirdYearFee: 64000,
            totalFee: 335300,
          },
          {
            name: 'BBA — Business Intelligence & Data Analytics',
            firstYearFee: 182300,
            secondYearFee: 89000,
            thirdYearFee: 64000,
            totalFee: 335300,
          },
          {
            name: 'B.Com — Business Intelligence & Data Analytics',
            firstYearFee: 182300,
            secondYearFee: 89000,
            thirdYearFee: 64000,
            totalFee: 335300,
          },
        ],
      },
    ],
  },
  {
    id: 'scs-mangalore',
    rank: 2,
    name: 'SCS Group of Institutions',
    city: 'Mangalore',
    state: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    courseGroups: [
      {
        groupName: 'BBA',
        courses: [
          {
            name: 'BBA',
            firstYearFee: 185000,
            secondYearFee: 40000,
            thirdYearFee: 35000,
            totalFee: 260000,
          },
          {
            name: 'BBA — Aviation & Logistics',
            firstYearFee: 185000,
            secondYearFee: 70000,
            thirdYearFee: 70000,
            totalFee: 325000,
          },
          {
            name: 'BBA — Logistics & Port Management',
            firstYearFee: 185000,
            secondYearFee: 65000,
            thirdYearFee: 60000,
            totalFee: 310000,
          },
          {
            name: 'BBA — Aviation & Hospitality Management',
            firstYearFee: 185000,
            secondYearFee: 65000,
            thirdYearFee: 60000,
            totalFee: 310000,
          },
          {
            name: 'BBA — Retail & Digital Management',
            firstYearFee: 185000,
            secondYearFee: 65000,
            thirdYearFee: 60000,
            totalFee: 310000,
          },
          {
            name: 'BBA — Retail & Tourism',
            firstYearFee: 185000,
            secondYearFee: 65000,
            thirdYearFee: 60000,
            totalFee: 310000,
          },
        ],
      },
      {
        groupName: 'B.Com',
        courses: [
          {
            name: 'B.Com',
            firstYearFee: 185000,
            secondYearFee: 40000,
            thirdYearFee: 35000,
            totalFee: 260000,
          },
          {
            name: 'B.Com — Accounting & Finance',
            firstYearFee: 185000,
            secondYearFee: 50000,
            thirdYearFee: 40000,
            totalFee: 275000,
          },
          {
            name: 'B.Com — Aviation & Logistics',
            firstYearFee: 185000,
            secondYearFee: 70000,
            thirdYearFee: 65000,
            totalFee: 320000,
          },
          {
            name: 'B.Com — ACCA',
            firstYearFee: 185000,
            secondYearFee: 65000,
            thirdYearFee: 60000,
            totalFee: 310000,
          },
          {
            name: 'B.Com — CMA',
            firstYearFee: 185000,
            secondYearFee: 65000,
            thirdYearFee: 60000,
            totalFee: 310000,
          },
          {
            name: 'B.Com — Data & Analytics',
            firstYearFee: 185000,
            secondYearFee: 70000,
            thirdYearFee: 70000,
            totalFee: 325000,
          },
        ],
      },
      {
        groupName: 'BCA',
        courses: [
          {
            name: 'BCA',
            firstYearFee: 185000,
            secondYearFee: 55000,
            thirdYearFee: 45000,
            totalFee: 285000,
          },
          {
            name: 'BCA — Digital Marketing',
            firstYearFee: 185000,
            secondYearFee: 60000,
            thirdYearFee: 55000,
            totalFee: 300000,
          },
          {
            name: 'BCA — AI & Machine Learning',
            firstYearFee: 185000,
            secondYearFee: 70000,
            thirdYearFee: 70000,
            totalFee: 325000,
          },
          {
            name: 'BCA — Cloud Computing',
            firstYearFee: 185000,
            secondYearFee: 70000,
            thirdYearFee: 70000,
            totalFee: 325000,
          },
          {
            name: 'BCA — Data Analyst / Data Science',
            firstYearFee: 185000,
            secondYearFee: 70000,
            thirdYearFee: 70000,
            totalFee: 325000,
          },
          {
            name: 'BCA — Cybersecurity & Blockchain Management',
            firstYearFee: 185000,
            secondYearFee: 70000,
            thirdYearFee: 70000,
            totalFee: 325000,
          },
        ],
      },
      {
        groupName: 'B.Sc',
        courses: [
          {
            name: 'B.Sc Animation & VFX',
            firstYearFee: 130000,
            secondYearFee: 50000,
            thirdYearFee: 50000,
            totalFee: 230000,
          },
          {
            name: 'B.Sc Interior Design',
            firstYearFee: 130000,
            secondYearFee: 50000,
            thirdYearFee: 50000,
            totalFee: 230000,
          },
          {
            name: 'B.Sc Food & Nutrition',
            firstYearFee: 125000,
            secondYearFee: 60000,
            thirdYearFee: 60000,
            totalFee: 245000,
          },
          {
            name: 'B.Sc Fashion Design',
            firstYearFee: 125000,
            secondYearFee: 55000,
            thirdYearFee: 55000,
            totalFee: 235000,
          },
        ],
      },
    ],
  },
];

// ─── ENGINEERING ──────────────────────────────────────────────────────────────

export type EngineeringCourse = {
  name: string;
  feePerYear: number;
  totalFee: number;
};

export type EngineeringCollege = {
  id: string;
  rank: number;
  name: string;
  city: string;
  state: string;
  accreditation: string;
  image: string;
  courses: EngineeringCourse[];
  remarks?: string;
};

export const engineeringColleges: EngineeringCollege[] = [
  {
    id: 'aj-institute-mangalore',
    rank: 1,
    name: 'AJ Institute of Technology',
    city: 'Mangalore',
    state: 'Karnataka',
    accreditation: 'VTU',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    remarks: 'Food & accommodation extra',
    courses: [
      { name: 'CS Engineering',                     feePerYear: 250000, totalFee: 1000000 },
      { name: 'CS AI & ML Engineering',             feePerYear: 275000, totalFee: 1100000 },
      { name: 'CS ICB Engineering',                 feePerYear: 225000, totalFee:  900000 },
      { name: 'Mechanical Engineering',             feePerYear: 125000, totalFee:  500000 },
      { name: 'Civil Engineering',                  feePerYear: 125000, totalFee:  500000 },
      { name: 'E & C Engineering',                  feePerYear: 140000, totalFee:  560000 },
      { name: 'Electronics VLSI Engineering',       feePerYear: 140000, totalFee:  560000 },
      { name: 'Information Science Engineering',    feePerYear: 225000, totalFee:  900000 },
    ],
  },
  {
    id: 'yenepoya-moodabidri',
    rank: 2,
    name: 'Yenepoya Institute of Technology',
    city: 'Moodabidri, Mangalore',
    state: 'Karnataka',
    accreditation: 'VTU',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    remarks: 'Food & accommodation extra',
    courses: [
      { name: 'CS AI & ML Engineering',                      feePerYear: 250000, totalFee: 1000000 },
      { name: 'CS Engineering',                              feePerYear: 225000, totalFee:  900000 },
      { name: 'CS Data Science',                             feePerYear: 225000, totalFee:  900000 },
      { name: 'CS Cyber Security & Blockchain Technology',   feePerYear: 225000, totalFee:  900000 },
      { name: 'Information Science Engineering',             feePerYear: 211000, totalFee:  844000 },
      { name: 'Mechanical Engineering',                      feePerYear: 185000, totalFee:  740000 },
      { name: 'Electrical & Electronics Engineering',        feePerYear: 185000, totalFee:  740000 },
      { name: 'Electronics & Communication Engineering',     feePerYear: 200000, totalFee:  800000 },
    ],
  },
  {
    id: 'dayananda-sagar-engineering-blr',
    rank: 3,
    name: 'Dayananda Sagar University',
    city: 'Bangalore',
    state: 'Karnataka',
    accreditation: 'VTU, Deemed University',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    remarks: 'Food & accommodation extra',
    courses: [
      { name: 'CSE (AI & ML)',           feePerYear: 525000, totalFee: 2100000 },
      { name: 'CSE (AI & DS)',           feePerYear: 525000, totalFee: 2100000 },
      { name: 'CSE Core',               feePerYear: 482000, totalFee: 1928000 },
      { name: 'CSE Data Science',       feePerYear: 482000, totalFee: 1928000 },
      { name: 'CSE Cyber Security',     feePerYear: 482000, totalFee: 1928000 },
      { name: 'AI & Robotics',          feePerYear: 482000, totalFee: 1928000 },
      { name: 'CSE Medical Engineering',feePerYear: 482000, totalFee: 1928000 },
      { name: 'CSE Technology',         feePerYear: 482000, totalFee: 1928000 },
      { name: 'Mechanical Engineering', feePerYear: 415000, totalFee: 1660000 },
      { name: 'Aerospace Engineering',  feePerYear: 415000, totalFee: 1660000 },
    ],
  },
];

// ─── DIPLOMA / SHORT-TERM ─────────────────────────────────────────────────────

export type DiplomaCourse = {
  name: string;
  /** One-time admission fee */
  admissionFee: number;
  /** Fee paid in the first month */
  firstMonthFee: number;
  /** Recurring monthly fee after first month */
  monthlyFee: number;
  durationMonths: number;
  totalFee: number;
  /** Additional fee payable after placement */
  afterPlacementFee: number;
};

export type DiplomaCollege = {
  id: string;
  name: string;
  locations: string[];
  image: string;
  courses: DiplomaCourse[];
};

export const diplomaColleges: DiplomaCollege[] = [
  {
    id: 'skill-yuvam',
    name: 'Skill Yuvam',
    locations: ['Sirsi', 'Udupi', 'Bangalore'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    courses: [
      {
        name: 'Aviation Diploma',
        admissionFee: 10000,
        firstMonthFee: 25000,
        monthlyFee: 6250,
        durationMonths: 4,
        totalFee: 60000,
        afterPlacementFee: 50000,
      },
      {
        name: 'Fire and Safety',
        admissionFee: 10000,
        firstMonthFee: 25000,
        monthlyFee: 6250,
        durationMonths: 4,
        totalFee: 60000,
        afterPlacementFee: 50000,
      },
      {
        name: 'Hotel Management',
        admissionFee: 10000,
        firstMonthFee: 25000,
        monthlyFee: 6250,
        durationMonths: 4,
        totalFee: 60000,
        afterPlacementFee: 50000,
      },
      {
        name: 'Fashion Design',
        admissionFee: 10000,
        firstMonthFee: 25000,
        monthlyFee: 6250,
        durationMonths: 4,
        totalFee: 60000,
        afterPlacementFee: 50000,
      },
    ],
  },
];