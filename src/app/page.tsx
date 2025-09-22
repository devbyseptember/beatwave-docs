// Professional BeatWave Documentation Site
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/beatwave_logo_admin.png"
                alt="BeatWave Logo"
                width={120}
                height={40}
                className="rounded-xl"
              />
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">v2.0.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to BeatWave Documentation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to build and manage your professional beat store on Shopify
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quick-start"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              🚀 Quick Start
            </a>
            <a
              href="/features"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              🎵 Features
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Quick Start Section */}
        <section id="quick-start" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg border p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              🚀 <span className="ml-2">Quick Start Guide</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Install BeatWave</h4>
                <p className="text-gray-600 text-sm">Add BeatWave to your Shopify store from the App Store in just one click.</p>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎵</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Upload Beats</h4>
                <p className="text-gray-600 text-sm">Upload your MP3 or WAV files and let BeatWave generate waveforms automatically.</p>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Start Selling</h4>
                <p className="text-gray-600 text-sm">Set license types, pricing, and start earning from your beats immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section id="features" className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">📚 Documentation Index</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Getting Started */}
            <a href="/quick-start" className="group">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow group-hover:border-blue-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Getting Started</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Quick Start Guide</li>
                  <li>• Installation Instructions</li>
                  <li>• Configuration Settings</li>
                </ul>
              </div>
            </a>

            {/* Beat Management */}
            <a href="/features" className="group">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow group-hover:border-purple-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎵</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Beat Management</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Upload & Manage Beats</li>
                  <li>• Licensing Options</li>
                  <li>• Audio Processing</li>
                </ul>
              </div>
            </a>

            {/* Sales & Commerce */}
            <a href="/api" className="group">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow group-hover:border-green-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Sales & Commerce</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Payment Setup</li>
                  <li>• Subscription Plans</li>
                  <li>• Analytics & Reporting</li>
                </ul>
              </div>
            </a>

            {/* Customization */}
            <a href="/installation" className="group">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow group-hover:border-orange-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Customization</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Theme Integration</li>
                  <li>• Player Customization</li>
                  <li>• Branding Options</li>
                </ul>
              </div>
            </a>

            {/* Advanced */}
            <a href="/api" className="group">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow group-hover:border-red-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Advanced</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• API Documentation</li>
                  <li>• Webhooks Integration</li>
                  <li>• Troubleshooting</li>
                </ul>
              </div>
            </a>

            {/* FAQ */}
            <a href="/faq" className="group">
              <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow group-hover:border-yellow-300">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">❓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">FAQ</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• General Questions</li>
                  <li>• Pricing & Plans</li>
                  <li>• Technical Support</li>
                </ul>
              </div>
            </a>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">💰 BeatWave Pricing Plans</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">Starter</h4>
                <div className="text-2xl font-bold mb-2">$0<span className="text-sm">/mo</span></div>
                <p className="text-sm opacity-90">Upload up to 10 beats</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center border-2 border-white/30">
                <h4 className="font-semibold mb-2">Pro</h4>
                <div className="text-2xl font-bold mb-2">$19.95<span className="text-sm">/mo</span></div>
                <p className="text-sm opacity-90">Upload unlimited beats</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">Premium</h4>
                <div className="text-2xl font-bold mb-2">$39.95<span className="text-sm">/mo</span></div>
                <p className="text-sm opacity-90">Unlimited beats + API access</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/beatwave_logo.png"
                  alt="BeatWave Logo"
                  width={120}
                  height={40}
                  className="rounded"
                />
              </div>
              <p className="text-gray-400 text-sm">Professional Beat Store & Licensing Platform for Shopify</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Getting Started</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/quick-start" className="hover:text-white">Quick Start</a></li>
                <li><a href="/installation" className="hover:text-white">Installation</a></li>
                <li><a href="/features" className="hover:text-white">Configuration</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Features</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/features" className="hover:text-white">Beat Upload</a></li>
                <li><a href="/features" className="hover:text-white">Licensing</a></li>
                <li><a href="/api" className="hover:text-white">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="/api" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 BeatWave. Professional Beat Store & Licensing Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}