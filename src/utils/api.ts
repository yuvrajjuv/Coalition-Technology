const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const USERNAME = 'coalition';
const PASSWORD = 'skills-test';

export interface PatientData {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: { value: number; levels: string };
      diastolic: { value: number; levels: string };
    };
    heart_rate: { value: number; levels: string };
    respiratory_rate: { value: number; levels: string };
    temperature: { value: number; levels: string };
  }[];
  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];
  lab_results: string[];
}

export async function fetchPatients(): Promise<PatientData[]> {
  const credentials = btoa(`${USERNAME}:${PASSWORD}`);

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
}

export function getPatientByName(patients: PatientData[], name: string): PatientData | undefined {
  return patients.find(patient => patient.name === name);
}
