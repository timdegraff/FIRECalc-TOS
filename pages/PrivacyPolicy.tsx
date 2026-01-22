
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">Privacy Policy</h1>
        <p className="text-slate-500 text-sm font-medium">Last Updated: January 2026</p>
      </div>
      
      <div className="legal-content prose prose-slate max-w-none">
        <p className="text-slate-600 leading-relaxed">
          Your privacy is important to us. This policy explains how we handle your data.
        </p>

        <h2 className="text-slate-900 font-bold">1. Data Storage & iCloud</h2>
        <p className="text-slate-600 leading-relaxed">
          FIRECalc is a "Local-First" application. Your financial data is stored locally on your device.
        </p>
        <p className="text-slate-600 leading-relaxed">
          However, this data may be automatically backed up to your personal iCloud storage or iTunes backup as part of your device's standard backup procedures. This data is encrypted by Apple and is governed by Apple's Privacy Policy. We (the developers) do not have access to your personal iCloud data or financial profile.
        </p>

        <h2 className="text-slate-900 font-bold">2. Analytics</h2>
        <p className="text-slate-600 leading-relaxed">
          We may use anonymous usage analytics (e.g., "User visited Fire Tab") to improve the app. No personally identifiable financial values are tracked.
        </p>
        
        <h2 className="text-slate-900 font-bold">3. Contact</h2>
        <p className="text-slate-600 leading-relaxed">
          For privacy concerns, please contact support at <a href="mailto:FIRECalcApp@gmail.com" className="text-blue-600 hover:underline">FIRECalcApp@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
