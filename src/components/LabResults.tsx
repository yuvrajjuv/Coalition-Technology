import { Download } from 'lucide-react';

interface LabResultsProps {
  results: string[];
}

export default function LabResults({ results }: LabResultsProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Lab Results</h2>

      <div className="space-y-2 max-h-80 overflow-y-auto">
        {results.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span className="text-sm text-gray-900">{result}</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Download className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
