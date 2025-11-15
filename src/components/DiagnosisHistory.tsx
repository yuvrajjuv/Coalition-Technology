import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DiagnosisHistoryItem {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
  heart_rate: { value: number; levels: string };
  respiratory_rate: { value: number; levels: string };
  temperature: { value: number; levels: string };
}

interface DiagnosisHistoryProps {
  data: DiagnosisHistoryItem[];
}

export default function DiagnosisHistory({ data }: DiagnosisHistoryProps) {
  const last6Months = data.slice(0, 6).reverse();

  const chartData = {
    labels: last6Months.map((item) => `${item.month.slice(0, 3)}, ${item.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: last6Months.map((item) => item.blood_pressure.systolic.value),
        borderColor: '#C26EB4',
        backgroundColor: 'rgba(194, 110, 180, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointBackgroundColor: '#C26EB4',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: 'Diastolic',
        data: last6Months.map((item) => item.blood_pressure.diastolic.value),
        borderColor: '#7E6CAB',
        backgroundColor: 'rgba(126, 108, 171, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointBackgroundColor: '#7E6CAB',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#111827',
        bodyColor: '#6B7280',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: '#6B7280',
        },
        grid: {
          color: '#F3F4F6',
        },
      },
      x: {
        ticks: {
          color: '#6B7280',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const latestData = data[0];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Diagnosis History</h2>

      <div className="mb-6 h-72">
        <div className="flex items-center gap-6 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Blood Pressure</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#C26EB4]"></div>
              <span className="text-sm text-gray-600">Systolic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#7E6CAB]"></div>
              <span className="text-sm text-gray-600">Diastolic</span>
            </div>
          </div>
        </div>
        <Line data={chartData} options={options} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#E0F3FA] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#C26EB4]"></div>
            <p className="text-sm font-medium text-gray-900">Systolic</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{latestData.blood_pressure.systolic.value}</p>
          <p className="text-sm text-gray-600 mt-1">{latestData.blood_pressure.systolic.levels}</p>
        </div>

        <div className="bg-[#FFE6F0] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#7E6CAB]"></div>
            <p className="text-sm font-medium text-gray-900">Diastolic</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{latestData.blood_pressure.diastolic.value}</p>
          <p className="text-sm text-gray-600 mt-1">{latestData.blood_pressure.diastolic.levels}</p>
        </div>

        <div className="bg-[#FFE6E9] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#E66253]"></div>
            <p className="text-sm font-medium text-gray-900">Respiratory Rate</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{latestData.respiratory_rate.value} bpm</p>
          <p className="text-sm text-gray-600 mt-1">{latestData.respiratory_rate.levels}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-[#FFE6E9] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#E66253]"></div>
            <p className="text-sm font-medium text-gray-900">Temperature</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{latestData.temperature.value}°F</p>
          <p className="text-sm text-gray-600 mt-1">{latestData.temperature.levels}</p>
        </div>

        <div className="bg-[#FFE6F0] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#E66253]"></div>
            <p className="text-sm font-medium text-gray-900">Heart Rate</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{latestData.heart_rate.value} bpm</p>
          <p className="text-sm text-gray-600 mt-1">{latestData.heart_rate.levels}</p>
        </div>
      </div>
    </div>
  );
}
