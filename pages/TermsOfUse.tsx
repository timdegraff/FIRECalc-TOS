
import React, { useEffect } from 'react';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">Terms of Use</h1>
        <p className="text-slate-500 text-sm font-medium">Last Updated: January 2026</p>
      </div>
      
      <div className="legal-content prose prose-slate max-w-none">
        <p className="text-slate-600 leading-relaxed">
          By using this application, you agree to the following terms.
        </p>

        <h2 className="text-slate-900 font-bold">1. Not Financial Advice</h2>
        <p className="text-slate-600 leading-relaxed">
          This tool is for educational and entertainment purposes only. The simulations are hypothetical and do not guarantee future results. You should consult a qualified financial advisor before making investment decisions.
        </p>

        <h2 className="text-slate-900 font-bold">2. Subscriptions</h2>
        <p className="text-slate-600 leading-relaxed">
          Premium features require an active subscription. Subscriptions auto-renew unless canceled at least 24 hours before the end of the current period. You can manage your subscription in your device settings.
        </p>
        
        <h2 className="text-slate-900 font-bold">3. Liability</h2>
        <p className="text-slate-600 leading-relaxed">
          The developers of FIRECalc are not liable for any financial losses or damages resulting from the use of this software.
        </p>

        <h2 className="text-slate-900 font-bold">4. Government Programs & Data Accuracy</h2>
        <p className="text-slate-600 leading-relaxed">
          Estimates regarding government programs (including but not limited to SNAP, Medicaid, Medicare, and Social Security) and tax liabilities are based on generalized data which may be outdated, inaccurate, or subject to specific state exclusions. State and Federal laws change frequently.
        </p>
        <p className="text-slate-600 leading-relaxed font-semibold">
          This application does not guarantee eligibility for any program. You must register and apply directly with the appropriate government authorities to determine actual eligibility and receive benefits.
        </p>

        <h2 className="text-slate-900 font-bold mt-8">5. Apple Standard EULA</h2>
        <div className="mt-4">
          <p className="text-slate-600 leading-relaxed mb-4">
            This application is subject to the standard Apple Licensed Application End User License Agreement (EULA).
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            By using this application, you acknowledge and agree to be bound by its terms.
          </p>
          <p className="text-slate-600 leading-relaxed">
            You may view the full EULA at:<br />
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
              https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
            </a>
          </p>
        </div>

        <h2 className="text-slate-900 font-bold mt-8">Contact</h2>
        <p className="text-slate-600 leading-relaxed">
          For questions regarding these terms, contact <a href="mailto:FIRECalcApp@gmail.com" className="text-blue-600 hover:underline">FIRECalcApp@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
