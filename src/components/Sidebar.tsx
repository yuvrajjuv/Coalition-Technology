import { Users } from 'lucide-react';
import { PatientData } from '../utils/api';

interface SidebarProps {
  patients: PatientData[];
  selectedPatient: PatientData | null;
  onSelectPatient: (patient: PatientData) => void;
}

export default function Sidebar({ patients, selectedPatient, onSelectPatient }: SidebarProps) {
  return (
    <aside className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Tech.Care</h1>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Patients</h2>
            <div className="space-y-2">
              {patients.map((patient) => (
                <button
                  key={patient.name}
                  onClick={() => onSelectPatient(patient)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    selectedPatient?.name === patient.name
                      ? 'bg-blue-50 border-2 border-blue-500'
                      : 'hover:bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <img
                    src={patient.profile_picture}
                    alt={patient.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 text-left">
                    <p className="font-medium text-gray-900">{patient.name}</p>
                    <p className="text-sm text-gray-500">
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
