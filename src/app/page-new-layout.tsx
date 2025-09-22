// Professional BeatWave Documentation Site
import DocsLayout from "@/components/DocsLayout"; 
import Link from "next/link";

export default function Home() {
  return (
    <DocsLayout 
      currentPath="/"
      title="🎵 BeatWave Documentation"
      description="Complete guide to building and managing your beat marketplace with BeatWave."
      breadcrumbLabel="Home"
    >
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
          <span className="text-green-600 text-sm font-medium">✨ Latest Version 2.0.0</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quick-start"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            🚀 Quick Start
          </Link>
          <Link
            href="/features"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            🎵 Explore Features
          </Link>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link href="/quick-start" className="group">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all group-hover:scale-105">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold text-gray-900 mb-2">Quick Start</h3>
            <p className="text-gray-600 text-sm">Get your beat store running in just 5 minutes with our step-by-step guide.</p>
          </div>
        </Link>

        <Link href="/installation" className="group">
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 hover:shadow-lg hover:border-green-300 transition-all group-hover:scale-105">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-bold text-gray-900 mb-2">Installation</h3>
            <p className="text-gray-600 text-sm">Complete installation guide with troubleshooting and configuration tips.</p>
          </div>
        </Link>

        <Link href="/features" className="group">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 hover:shadow-lg hover:border-purple-300 transition-all group-hover:scale-105">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold text-gray-900 mb-2">Features</h3>
            <p className="text-gray-600 text-sm">Discover all the powerful features that make BeatWave special.</p>
          </div>
        </Link>

        <Link href="/api" className="group">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-300 transition-all group-hover:scale-105">
            <div className="text-3xl mb-3">🔌</div>
            <h3 className="font-bold text-gray-900 mb-2">API Reference</h3>
            <p className="text-gray-600 text-sm">Comprehensive API documentation for custom integrations.</p>
          </div>
        </Link>

        <Link href="/faq" className="group">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6 hover:shadow-lg hover:border-yellow-300 transition-all group-hover:scale-105">
            <div className="text-3xl mb-3">❓</div>
            <h3 className="font-bold text-gray-900 mb-2">FAQ</h3>
            <p className="text-gray-600 text-sm">Find answers to common questions and troubleshooting tips.</p>
          </div>
        </Link>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="font-bold text-gray-900 mb-2">Support</h3>
          <p className="text-gray-600 text-sm mb-4">Need help? Our support team is here for you.</p>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Contact Support →
          </a>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">New to BeatWave?</h2>
          <p className="text-blue-100 mb-6">
            Start with our quick setup guide and have your beat store live in minutes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-semibold mb-2">Install BeatWave</h3>
              <p className="text-blue-100 text-sm">Add BeatWave to your Shopify store from the app store</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-semibold mb-2">Upload Beats</h3>
              <p className="text-blue-100 text-sm">Upload your music with our drag-and-drop interface</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-semibold mb-2">Start Selling</h3>
              <p className="text-blue-100 text-sm">Configure licenses and start earning from your beats</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Highlight */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎵 Why Choose BeatWave?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-lg p-2 mr-4">
                <span className="text-blue-600">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Lightning Fast Setup</h3>
                <p className="text-gray-600 text-sm">Get your beat store live in under 5 minutes with our automated setup.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-lg p-2 mr-4">
                <span className="text-purple-600">🎨</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Professional Player</h3>
                <p className="text-gray-600 text-sm">Beautiful waveform visualization and seamless audio playback.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-lg p-2 mr-4">
                <span className="text-green-600">💰</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Smart Licensing</h3>
                <p className="text-gray-600 text-sm">Flexible license types with automatic delivery and legal protection.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 rounded-lg p-2 mr-4">
                <span className="text-orange-600">📊</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Advanced Analytics</h3>
                <p className="text-gray-600 text-sm">Track sales, understand customers, and optimize your beat business.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Current Pricing</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">Starter Plan</h3>
                <span className="text-2xl font-bold text-gray-900">$29</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Perfect for getting started</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 100 beats</li>
                <li>• Basic analytics</li>
                <li>• Email support</li>
                <li>• 14-day free trial</li>
              </ul>
            </div>

            <div className="border-2 border-purple-300 bg-purple-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-semibold text-purple-600">Pro Plan</h3>
                  <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">Most Popular</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">$79</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">For serious beat makers</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 1,000 beats</li>
                <li>• Advanced analytics</li>
                <li>• Priority support</li>
                <li>• API access</li>
                <li>• Bulk upload tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}