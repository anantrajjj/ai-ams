import React from 'react';
import { Activity, LineChart, Dumbbell, DollarSign, Trophy } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">AthleteAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={<LineChart className="h-5 w-5" />} text="Analytics" />
            <NavLink icon={<Dumbbell className="h-5 w-5" />} text="Training" />
            <NavLink icon={<DollarSign className="h-5 w-5" />} text="Finance" />
            <NavLink icon={<Trophy className="h-5 w-5" />} text="Career" />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <a href="#" className="flex items-center text-gray-300 hover:text-white">
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);

export default Navbar;