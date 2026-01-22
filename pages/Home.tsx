
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-slate-900">
      <div className="text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6">
          Official Support & Legal
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          FIRECalc for iOS
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          The comprehensive financial independence calculator. 
          Everything you need to plan your retirement and track your journey to financial freedom.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/privacy" 
            className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 font-semibold border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm"
          >
            Terms of Use
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
            <i className="fa-solid fa-shield-halved text-xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-3">Privacy First</h3>
          <p className="text-slate-500 text-sm">
            FIRECalc is a "Local-First" application. We believe your financial data is yours alone and stays on your device.
          </p>
        </div>
        
        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
            <i className="fa-solid fa-chart-line text-xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-3">Accurate Data</h3>
          <p className="text-slate-500 text-sm">
            Simulations based on historical market trends and community-standard financial methodologies.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
            <i className="fa-solid fa-headset text-xl"></i>
          </div>
          <h3 className="text-lg font-bold mb-3">Support</h3>
          <p className="text-slate-500 text-sm">
            Contact <strong>FIRECalcApp@gmail.com</strong> for assistance or feature requests for the app developed by Tim DeGraff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
