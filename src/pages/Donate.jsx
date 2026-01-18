// pages/Donate.jsx
import React, { useState } from 'react';
import { CreditCard, Banknote, Smartphone, CheckCircle2, ArrowRight, Heart } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleAmountSelect = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    setAmount(val ? parseInt(val) : 0);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col lg:flex-row">

      {/* LEFT: Immersive Visuals (Sticky) */}
      <div className="lg:w-1/2 bg-gray-900 relative lg:h-screen lg:sticky lg:top-0 overflow-hidden flex flex-col justify-end p-8 md:p-16 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Hopeful child"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-xl">
          <div className="mb-8 hidden lg:block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-red-400 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              Urgent Need
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Your Generosity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Changes Lives.
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              100% of your donation funds life-saving capability. We provide water, shelter, and education to those who need it most.
            </p>
          </div>

          {/* Live Impact Preview */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide block mb-4">Your Impact Preview</span>
            <div className="flex items-start gap-4">
              <div className="text-5xl font-bold text-white">${amount || 0}</div>
              <div className="pt-2 text-gray-300 leading-snug">
                {amount < 50 && "Provides essential nutrition for a child for one month."}
                {amount >= 50 && amount < 100 && "Supplies a student with books and school materials for a year."}
                {amount >= 100 && amount < 500 && "Contributes to building a secure water well for an entire village."}
                {amount >= 500 && "Funds a full scholarship and housing for a vulnerable student."}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Interaction Area (Scrollable) */}
      <div className="lg:w-1/2 bg-white flex flex-col justify-center p-8 md:p-16 lg:py-24">
        <div className="max-w-lg mx-auto w-full">

          {/* Intro for Mobile (hidden on desktop generally, but useful to keep context) */}
          <div className="lg:hidden mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Make a Donation</h1>
            <p className="text-gray-500">Secure, tax-deductible, and impactful.</p>
          </div>

          {/* Donation Type Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-2xl mb-12">
            <button
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${donationType === 'one-time' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Give Once
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${donationType === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Monthly <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-[10px] ml-1">Most Popular</span>
            </button>
          </div>

          {/* Amount Grid */}
          <div className="mb-12">
            <label className="block text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Choose Amount</label>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => handleAmountSelect(preset)}
                  className={`py-4 rounded-xl border-2 font-bold text-lg transition-all duration-200 ${amount === preset && !customAmount
                      ? 'border-red-600 bg-red-50 text-red-600'
                      : 'border-gray-100 text-gray-500 hover:border-gray-200 hover:text-gray-900'
                    }`}
                >
                  ${preset}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-xl">$</span>
              <input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-12 pr-6 text-xl font-bold text-gray-900 placeholder:text-gray-300 focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
          </div>

          {/* Payment Method - Simple Selection */}
          <div className="mb-12">
            <label className="block text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Payment Method</label>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-5 border border-gray-200 rounded-2xl hover:border-red-600 hover:bg-red-50/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                    <CreditCard size={20} className="text-gray-600 group-hover:text-red-600" />
                  </div>
                  <span className="font-bold text-gray-700 group-hover:text-gray-900">Card</span>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-red-600"></div>
              </button>
              <button className="w-full flex items-center justify-between p-5 border border-gray-200 rounded-2xl hover:border-red-600 hover:bg-red-50/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                    <Banknote size={20} className="text-gray-600 group-hover:text-red-600" />
                  </div>
                  <span className="font-bold text-gray-700 group-hover:text-gray-900">PayPal</span>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-red-600"></div>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-gray-900 text-white py-6 rounded-2xl font-bold text-xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gray-200 mb-6 flex items-center justify-center gap-3">
            Donate ${amount || 0}
            <ArrowRight size={24} />
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-medium">
            <CheckCircle2 size={16} className="text-green-500" />
            Secure 256-bit SSL Encrytped
          </div>

        </div>
      </div>

    </div>
  );
};

export default Donate;