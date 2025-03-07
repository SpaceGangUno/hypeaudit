import React, { useState } from 'react';
import { SectionCard } from './components/SectionCard';
import { auditSections } from './data';
import { SectionScore, calculateOverallScore, getLetterGrade } from './types';
import { Store, Award } from 'lucide-react';

function App() {
  const [storeName, setStoreName] = useState('');
  const [sections, setSections] = useState<SectionScore[]>(auditSections);

  const handleScoreChange = (sectionIndex: number, criteriaIndex: number, newScore: number) => {
    setSections(prevSections => {
      const newSections = [...prevSections];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        criteria: [...newSections[sectionIndex].criteria]
      };
      newSections[sectionIndex].criteria[criteriaIndex] = {
        ...newSections[sectionIndex].criteria[criteriaIndex],
        score: newScore
      };
      return newSections;
    });
  };

  const overallScore = calculateOverallScore(sections);
  const overallGrade = getLetterGrade(overallScore);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
            <Store className="w-8 h-8 text-blue-600" />
            Hype Audit Form
          </h1>
          <p className="mt-2 text-gray-600">
            Complete the audit by scoring each criterion from 1 to 5
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <label className="block font-medium text-gray-700 mb-2">
            Store Name
          </label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter store name"
          />
        </div>

        <div className="space-y-6">
          {sections.map((section, sectionIndex) => (
            <SectionCard
              key={sectionIndex}
              section={section}
              onScoreChange={(criteriaIndex, newScore) =>
                handleScoreChange(sectionIndex, criteriaIndex, newScore)
              }
            />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Overall Score</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl font-semibold">{overallScore.toFixed(1)}</span>
              <span className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                {overallGrade}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;