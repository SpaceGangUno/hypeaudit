import React from 'react';
import { ScoreInput } from './ScoreInput';
import { SectionScore, calculateSectionAverage, getLetterGrade } from '../types';
import { ClipboardList } from 'lucide-react';

interface SectionCardProps {
  section: SectionScore;
  onScoreChange: (criteriaIndex: number, newScore: number) => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({ section, onScoreChange }) => {
  const average = calculateSectionAverage(section);
  const grade = getLetterGrade(average);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center space-x-3">
        <ClipboardList className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold">{section.name}</h2>
        <div className="ml-auto flex items-center space-x-2">
          <span className="text-sm text-gray-600">Average:</span>
          <span className="font-semibold">{average.toFixed(1)}</span>
          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
            {grade}
          </span>
        </div>
      </div>
      
      <div className="space-y-6">
        {section.criteria.map((criterion, index) => (
          <div key={index} className="space-y-2">
            <label className="block font-medium text-gray-700">
              {criterion.name}
            </label>
            <ScoreInput
              value={criterion.score}
              onChange={(newScore) => onScoreChange(index, newScore)}
              description={criterion.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};