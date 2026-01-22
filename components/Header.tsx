
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-blue-700 transition-colors">
            F
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">FIRECalc</span>
        </Link>
        
        <nav className="hidden sm:flex space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Home
          </Link>
          <Link 
            to="/privacy" 
            className={`text-sm font-medium transition-colors ${isActive('/privacy') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            className={`text-sm font-medium transition-colors ${isActive('/terms') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Terms of Use
          </Link>
        </nav>

        {/* Mobile menu button could go here, but for simple legal site links work fine */}
      </div>
    </header>
  );
};

export default Header;
