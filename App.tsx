
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Utility component to scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}>Home</Link>
          <Link to="/privacy" className={`text-sm font-medium transition-colors ${isActive('/privacy') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}>Privacy Policy</Link>
          <Link to="/terms" className={`text-sm font-medium transition-colors ${isActive('/terms') ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}>Terms of Use</Link>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-slate-200 pt-12 pb-8 mt-auto">
    <div className="max-w-5xl mx-auto px-4 text-left">
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

const Home: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-slate-900 text-left">
    <div className="mb-20">
      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-6">
        Official Support & Legal
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">FIRECalc for iOS</h1>
      <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
        The comprehensive financial independence calculator. Plan your retirement and track your journey to financial freedom.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link to="/privacy" className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 text-center">Privacy Policy</Link>
        <Link to="/terms" className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 font-semibold border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm text-center">Terms of Use</Link>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm text-left">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6"><i className="fa-solid fa-shield-halved text-xl"></i></div>
        <h3 className="text-lg font-bold mb-3">Privacy First</h3>
        <p className="text-slate-500 text-sm">FIRECalc is a "Local-First" application. Your data stays on your device.</p>
      </div>
      <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm text-left">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6"><i className="fa-solid fa-chart-line text-xl"></i></div>
        <h3 className="text-lg font-bold mb-3">Accurate Data</h3>
        <p className="text-slate-500 text-sm">Simulations based on historical market trends and community-standard methodologies.</p>
      </div>
      <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm text-left">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6"><i className="fa-solid fa-headset text-xl"></i></div>
        <h3 className="text-lg font-bold mb-3">Support</h3>
        <p className="text-slate-500 text-sm">Contact <strong>FIRECalcApp@gmail.com</strong> for assistance or feature requests.</p>
      </div>
    </div>
  </div>
);

const PrivacyPolicy: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-left">
    <div className="mb-12">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight uppercase">Privacy Policy</h1>
      <p className="text-slate-500 text-sm font-medium">Last Updated: January 2026</p>
    </div>
    <div className="space-y-12">
      <div>
        <p className="text-slate-600 leading-relaxed">Your privacy is important to us. This policy explains how we handle your data.</p>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">1. Data Storage & iCloud</h2>
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">FIRECalc is a "Local-First" application. Your financial data is stored locally on your device.</p>
          <p className="text-slate-600 leading-relaxed">However, this data may be automatically backed up to your personal iCloud storage or iTunes backup as part of your device's standard backup procedures. This data is encrypted by Apple and is governed by Apple's Privacy Policy. We (the developers) do not have access to your personal iCloud data or financial profile.</p>
        </div>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">2. Analytics</h2>
        <p className="text-slate-600 leading-relaxed">We may use anonymous usage analytics to improve the app. No personally identifiable financial values are tracked.</p>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">3. Contact</h2>
        <p className="text-slate-600 leading-relaxed">For privacy concerns, please contact support at <a href="mailto:FIRECalcApp@gmail.com" className="text-blue-600 hover:underline">FIRECalcApp@gmail.com</a>.</p>
      </div>
    </div>
  </div>
);

const TermsOfUse: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-left">
    <div className="mb-12">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight uppercase">Terms of Use</h1>
      <p className="text-slate-500 text-sm font-medium">Last Updated: January 2026</p>
    </div>
    <div className="space-y-12">
      <div>
        <p className="text-slate-600 leading-relaxed">By using this application, you agree to the following terms.</p>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">1. Not Financial Advice</h2>
        <p className="text-slate-600 leading-relaxed">This tool is for educational and entertainment purposes only. The simulations are hypothetical and do not guarantee future results. Consult a qualified advisor before making investment decisions.</p>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">2. Subscriptions</h2>
        <p className="text-slate-600 leading-relaxed">Premium features require an active subscription. Subscriptions auto-renew unless canceled at least 24 hours before the end of the current period.</p>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">3. Liability</h2>
        <p className="text-slate-600 leading-relaxed">The developers of FIRECalc are not liable for any financial losses or damages resulting from the use of this software.</p>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">4. Government Programs & Data Accuracy</h2>
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">Estimates regarding government programs and tax liabilities are based on generalized data which may be outdated or inaccurate. This application does not guarantee eligibility for any program.</p>
          <p className="text-slate-600 leading-relaxed font-semibold">This application does not guarantee eligibility for any program. You must register and apply directly with the appropriate government authorities to determine actual eligibility and receive benefits.</p>
        </div>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">5. Apple Standard EULA</h2>
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">This application is subject to the standard Apple Licensed Application End User License Agreement (EULA). By using this application, you acknowledge and agree to be bound by its terms.</p>
          <p className="text-slate-600 leading-relaxed">
            You may view the full EULA at:<br />
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
              https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
            </a>
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold mb-1 text-lg">Contact</h2>
        <p className="text-slate-600 leading-relaxed">Questions? Contact <a href="mailto:FIRECalcApp@gmail.com" className="text-blue-600 hover:underline">FIRECalcApp@gmail.com</a>.</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
