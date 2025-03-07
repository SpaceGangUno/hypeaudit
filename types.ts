export interface SectionScore {
  name: string;
  criteria: {
    name: string;
    score: number;
    description: string[];
  }[];
}

export interface AuditData {
  storeName: string;
  sections: SectionScore[];
}

export const getLetterGrade = (score: number): string => {
  if (score >= 4.5) return 'A';
  if (score >= 3.5) return 'B';
  if (score >= 2.5) return 'C';
  if (score >= 1.5) return 'D';
  return 'F';
};

export const calculateSectionAverage = (section: SectionScore): number => {
  const scores = section.criteria.map(c => c.score);
  return scores.reduce((a, b) => a + b, 0) / scores.length;
};

export const calculateOverallScore = (sections: SectionScore[]): number => {
  const sectionAverages = sections.map(calculateSectionAverage);
  return sectionAverages.reduce((a, b) => a + b, 0) / sections.length;
};