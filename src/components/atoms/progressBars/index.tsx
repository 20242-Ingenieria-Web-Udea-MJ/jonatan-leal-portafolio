import React from 'react';

interface ProgressBarProps {
  percentage: number;
  label: string;
}

const ProgressBar = ({ percentage, label }: ProgressBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between text-sm font-medium text-gray-700">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="relative w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className="absolute top-0 left-0 h-full bg-primary"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
