import Image from "next/image";
import Link from "next/link";

export default function QuickStartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/beatwave_logo_admin.png"
                alt="BeatWave Logo"
                width={120}
                height={40}
                className="rounded-xl"
              />
            </Link>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">v2.0.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  📚 Documentation
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-blue-600 font-medium">🚀 Quick Start</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg border p-6 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#prerequisites" className="text-blue-600 hover:text-blue-800">⚡ Prerequisites</a></li>
                <li><a href="#install" className="text-blue-600 hover:text-blue-800">📦 Step 1: Install</a></li>
                <li><a href="#upload" className="text-blue-600 hover:text-blue-800">🎵 Step 2: Upload Beats</a></li>
                <li><a href="#configure" className="text-blue-600 hover:text-blue-800">⚙️ Step 3: Configure</a></li>
                <li><a href="#sell" className="text-blue-600 hover:text-blue-800">💰 Step 4: Start Selling</a></li>
                <li><a href="#next-steps" className="text-blue-600 hover:text-blue-800">🎯 Next Steps</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                  🚀 <span className="ml-3">Quick Start Guide</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Get your BeatWave beat store up and running in just 5 minutes!
                </p>
              </div>

              {/* Prerequisites */}
              <section id="prerequisites" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ⚡ <span className="ml-2">Prerequisites</span>
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">Before you begin, make sure you have:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>A Shopify store (any plan)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Music beats ready to upload (MP3 or WAV format)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Basic understanding of your Shopify admin</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Step 1 */}
              <section id="install" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📦 <span className="ml-2">Step 1: Install BeatWave</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">1. Visit the Shopify App Store</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Go to <a href="#" className="text-blue-600 hover:underline">BeatWave on Shopify App Store</a></li>
                      <li>• Click <strong>&ldquo;Add app&rdquo;</strong></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">2. Install the App</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Review the permissions BeatWave needs</li>
                      <li>• Click <strong>&ldquo;Install app&rdquo;</strong> to confirm</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">3. Choose Your Plan</h3>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-green-600">Starter - $0/month</h4>
                        <p className="text-sm text-gray-600">Upload up to 10 beats</p>
                      </div>
                      <div className="border rounded-lg p-4 border-blue-300 bg-blue-50">
                        <h4 className="font-semibold text-blue-600">Pro - $19.95/month</h4>
                        <p className="text-sm text-gray-600">Upload unlimited beats</p>
                      </div>
                      <div className="border rounded-lg p-4 border-purple-300 bg-purple-50">
                        <h4 className="font-semibold text-purple-600">Premium - $39.95/month</h4>
                        <p className="text-sm text-gray-600">Unlimited beats + API access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 2 */}
              <section id="upload" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🎵 <span className="ml-2">Step 2: Upload Your First Beat</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">1. Access BeatWave Admin</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• From your Shopify admin, go to <strong>Apps → BeatWave</strong></li>
                      <li>• Click <strong>&ldquo;Upload New Beat&rdquo;</strong></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">2. Upload Your Audio File</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Drag & drop your MP3 or WAV file</li>
                      <li>• BeatWave will automatically generate waveforms</li>
                      <li>• Add beat title, artist name, and tags</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800">
                      <strong>💡 Pro Tip:</strong> Use descriptive titles and tags to help customers find your beats!
                    </p>
                  </div>
                </div>
              </section>

              {/* Step 3 */}
              <section id="configure" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ⚙️ <span className="ml-2">Step 3: Configure License Types</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Set Up License Pricing</h3>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="border rounded-lg p-4 text-center">
                        <h4 className="font-semibold text-gray-900">Basic License</h4>
                        <div className="text-2xl font-bold text-green-600 my-2">$25</div>
                        <p className="text-sm text-gray-600">Non-commercial use</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center border-blue-300 bg-blue-50">
                        <h4 className="font-semibold text-blue-900">Premium License</h4>
                        <div className="text-2xl font-bold text-blue-600 my-2">$75</div>
                        <p className="text-sm text-gray-600">Commercial use</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <h4 className="font-semibold text-gray-900">Exclusive License</h4>
                        <div className="text-2xl font-bold text-purple-600 my-2">$250</div>
                        <p className="text-sm text-gray-600">Full ownership</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step 4 */}
              <section id="sell" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  💰 <span className="ml-2">Step 4: Start Selling</span>
                </h2>
                <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">🎉 Congratulations!</h3>
                  <p className="mb-4">Your BeatWave store is now live and ready to sell beats!</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">✨ What happens next:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Customers can preview your beats</li>
                        <li>• Purchase licenses instantly</li>
                        <li>• Automatic license delivery</li>
                        <li>• Real-time analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">🚀 Share your store:</h4>
                      <p className="text-sm">Your beat store is now available at:<br/>
                        <strong>your-store.myshopify.com/pages/beats</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🎯 <span className="ml-2">Next Steps</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/features" className="group">
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow group-hover:border-purple-300">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        🎵 <span className="ml-2">Explore Features</span>
                      </h3>
                      <p className="text-gray-600 text-sm">Learn about advanced beat management, waveforms, and player customization.</p>
                    </div>
                  </Link>
                  
                  <Link href="/api" className="group">
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow group-hover:border-blue-300">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        📊 <span className="ml-2">Analytics & API</span>
                      </h3>
                      <p className="text-gray-600 text-sm">Track your sales, understand your customers, and integrate with our API.</p>
                    </div>
                  </Link>
                </div>
              </section>

              {/* Support */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">Our support team is here to help you succeed.</p>
                <div className="flex justify-center space-x-4">
                  <Link href="/faq" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    📋 View FAQ
                  </Link>
                  <a href="#" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    💬 Live Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}