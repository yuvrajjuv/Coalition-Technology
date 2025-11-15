import { Phone, Calendar, Shield } from 'lucide-react';

interface PatientData {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
}

interface PatientProfileProps {
  patient: PatientData;
}

export default function PatientProfile({ patient }: PatientProfileProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col items-center mb-6">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-900">{patient.name}</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-gray-600">Date Of Birth</p>
            <p className="font-medium text-gray-900">{patient.date_of_birth}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-5 h-5 text-gray-500 mt-0.5 flex items-center justify-center">
            <span className="text-lg">♀</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">Gender</p>
            <p className="font-medium text-gray-900">{patient.gender}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <Phone className="w-5 h-5 text-gray-500 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-gray-600">Contact Info</p>
            <p className="font-medium text-gray-900">{patient.phone_number}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <Phone className="w-5 h-5 text-gray-500 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-gray-600">Emergency Contacts</p>
            <p className="font-medium text-gray-900">{patient.emergency_contact}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <Shield className="w-5 h-5 text-gray-500 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-gray-600">Insurance Provider</p>
            <p className="font-medium text-gray-900">{patient.insurance_type}</p>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
        Show All Information
      </button>
    </div>
  );
}
