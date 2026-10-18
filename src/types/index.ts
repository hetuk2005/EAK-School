export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
  highlight: string;
}

export interface AcademicProgram {
  id: string;
  level: string;
  subtitle: string;
  grades: string;
  ageRange: string;
  ratio: string;
  description: string;
  keyFeatures: string[];
  curriculum: string;
  colorScheme: {
    bg: string;
    border: string;
    badge: string;
    accent: string;
  };
}

export interface HighlightStat {
  id: string;
  value: string;
  label: string;
  subtext: string;
  icon: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'Academics' | 'Labs & Tech' | 'Sports' | 'Campus Life';
  description: string;
  features: string[];
  imageUrl: string;
  badge: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  actionHint: string;
  checklist: string[];
}

export interface ImportantDate {
  id: string;
  event: string;
  date: string;
  displayDate: string;
  status: 'Open' | 'Upcoming' | 'Crucial';
  description: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  mandatory: boolean;
  applicableGrades: string;
  description: string;
  format: string;
}

export interface FeeItem {
  gradeRange: string;
  annualFee: number;
  admissionFee: number;
  quarterlyTuition: number;
  labAndTechFee: number;
  description: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  parentName: string;
  parentDesignation: string;
  studentName: string;
  grade: string;
  rating: number;
  quote: string;
  avatar: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics & Faculty' | 'Fees & Transport' | 'Campus Visit';
}
