import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DiagnosisHistory from './components/DiagnosisHistory';
import PatientProfile from './components/PatientProfile';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults';
import { fetchPatients, getPatientByName, PatientData } from './utils/api';

function App() {
  const [patients, setPatients] = useState<PatientData[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPatients() {
      try {
        setLoading(true);
        const data = await fetchPatients();
        setPatients(data);

        const jessicaTaylor = getPatientByName(data, 'Jessica Taylor');
        if (jessicaTaylor) {
          setSelectedPatient(jessicaTaylor);
        }
      } catch (err) {
        setError('Failed to load patient data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPatients();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading patient data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!selectedPatient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No patient selected</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar
          patients={patients}
          selectedPatient={selectedPatient}
          onSelectPatient={setSelectedPatient}
        />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <DiagnosisHistory data={selectedPatient.diagnosis_history} />
                  <DiagnosticList diagnostics={selectedPatient.diagnostic_list} />
                </div>

                <div className="space-y-6">
                  <PatientProfile patient={selectedPatient} />
                  <LabResults results={selectedPatient.lab_results} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
