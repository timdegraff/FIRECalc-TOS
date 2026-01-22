
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-4 tracking-tight">FIRECalc</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering your financial independence journey with precision tools and clear insights.
            </p>
            <p className="text-slate-400 text-xs mt-4">
              Developed by <span className="font-medium text-slate-600">Tim DeGraff</span>
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="mailto:FIRECalcApp@gmail.com" className="hover:text-blue-600 transition-colors">FIRECalcApp@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Tim DeGraff. All rights reserved.</p>
          <p className="mt-2 md:mt-0 italic">iOS and App Store are trademarks of Apple Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
