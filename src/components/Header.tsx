import { Home, Users, Calendar, MessageSquare, CreditCard, Settings, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <nav className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors">
            <Home className="w-5 h-5" />
            <span>Overview</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
            <Users className="w-5 h-5" />
            <span>Patients</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors">
            <Calendar className="w-5 h-5" />
            <span>Schedule</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span>Message</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors">
            <CreditCard className="w-5 h-5" />
            <span>Transactions</span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
              alt="Dr. Jose Simmons"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">Dr. Jose Simmons</p>
              <p className="text-xs text-gray-500">General Practitioner</p>
            </div>
          </div>
          <div className="h-10 w-px bg-gray-200"></div>
          <button className="text-gray-600 hover:text-gray-900">
            <Settings className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
