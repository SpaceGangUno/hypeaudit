import React from 'react';

interface ScoreInputProps {
  value: number;
  onChange: (value: number) => void;
  description: string[];
}

export const ScoreInput: React.FC<ScoreInputProps> = ({ value, onChange, description }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-4">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            onClick={() => onChange(score)}
            className={`w-10 h-10 rounded-full ${
              value === score
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            } flex items-center justify-center font-semibold transition-colors`}
          >
            {score}
          </button>
        ))}
      </div>
      <details className="text-sm text-gray-600">
        <summary className="cursor-pointer hover:text-gray-800">View criteria</summary>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </details>
    </div>
  );
};