// pages/Donate.jsx
import React, { useState } from 'react';
import { CreditCard, Banknote, Smartphone, Heart, Shield } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState(50);
  const [donationType, setDonationType] = useState('one-time');
  const [selectedProject, setSelectedProject] = useState('general');

  const presetAmounts = [25, 50, 100, 250, 500];
  const projects = [
    { id: 'general', name: 'Where Most Needed', description: 'Let us allocate to urgent needs' },
    { id: 'water', name: 'Clean Water Project', description: 'Build wells and water systems' },
    { id: 'shelter', name: 'Safe Shelter Program', description: 'Construct homes for children' },
    { id: 'food', name: 'Nutrition Program', description: 'Provide daily nutritious meals' },
    { id: 'education', name: 'Education Fund', description: 'Build schools and provide supplies' }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard /> },
    { id: 'paypal', name: 'PayPal', icon: <Banknote /> },
    { id: 'mobile', name: 'Mobile Money', icon: <Smartphone /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Make a <span className="text-red-600">Difference</span> Today
          </h1>
          <p className="text-gray-600 text-lg">
            Your donation directly impacts children's lives across Africa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Donation Type</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-lg border-2 ${donationType === 'one-time' ? 'border-red-600 bg-red-50' : 'border-gray-200'}`}
                  >
                    <div className="font-semibold">One-Time Donation</div>
                    <div className="text-sm text-gray-500">Make an immediate impact</div>
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`p-4 rounded-lg border-2 ${donationType === 'monthly' ? 'border-red-600 bg-red-50' : 'border-gray-200'}`}
                  >
                    <div className="font-semibold">Monthly Support</div>
                    <div className="text-sm text-gray-500">Sustained change</div>
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Select Amount</h2>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setAmount(preset)}
                      className={`p-4 rounded-lg border-2 ${amount === preset ? 'border-red-600 bg-red-600 text-white' : 'border-gray-200 hover:border-red-300'}`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none text-lg"
                    min="1"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Select Project</h2>
                <div className="space-y-3">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className={`w-full p-4 rounded-lg border-2 text-left ${selectedProject === project.id ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <div className="font-semibold">{project.name}</div>
                      <div className="text-sm text-gray-500">{project.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      className="w-full p-4 rounded-lg border-2 border-gray-200 hover:border-red-300 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-gray-600">{method.icon}</div>
                        <span className="font-medium">{method.name}</span>
                      </div>
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition duration-300 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Donate ${amount} {donationType === 'monthly' ? 'Monthly' : 'Today'}
              </button>
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-b from-red-600 to-red-700 text-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Your Impact</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">${amount}</div>
                  <div className="text-red-100">can provide:</div>
                </div>

                {amount >= 25 && (
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Droplet className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Clean Water</div>
                      <div className="text-sm text-red-100">
                        {Math.floor(amount / 25)} people access to clean water for a month
                      </div>
                    </div>
                  </div>
                )}

                {amount >= 15 && (
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Nutritious Food</div>
                      <div className="text-sm text-red-100">
                        {Math.floor(amount / 15)} children fed for a week
                      </div>
                    </div>
                  </div>
                )}

                {amount >= 50 && (
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Education</div>
                      <div className="text-sm text-red-100">
                        School supplies for {Math.floor(amount / 50)} children
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Your Donation is Secure</span>
                  </div>
                  <ul className="text-sm space-y-2 text-red-100">
                    <li>• 100% secure payment processing</li>
                    <li>• Tax-deductible receipt provided</li>
                    <li>• 93% of funds go directly to programs</li>
                    <li>• Regular impact reports sent to you</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;