
import React from 'react';

interface ReviewSectionProps {
    title: string;
    data: { [key: string]: string | undefined };
  }
  
  export default function ReviewSection({ title, data }: ReviewSectionProps) {
    return (
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="bg-gray-100 rounded p-4 space-y-1">
          {Object.entries(data).map(([key, value]) => (
            <p key={key}>
              <strong>{capitalizeLabel(key)}:</strong> {value || '—'}
            </p>
          ))}
        </div>
      </div>
    );
  }
  
  function capitalizeLabel(label: string) {
    return label
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  }  