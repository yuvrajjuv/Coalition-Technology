interface DiagnosticItem {
  name: string;
  description: string;
  status: string;
}

interface DiagnosticListProps {
  diagnostics: DiagnosticItem[];
}

export default function DiagnosticList({ diagnostics }: DiagnosticListProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Diagnostic List</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Problem/Diagnosis</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Description</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diagnostic, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 text-sm text-gray-900">{diagnostic.name}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{diagnostic.description}</td>
                <td className="py-4 px-4 text-sm text-gray-900">{diagnostic.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
