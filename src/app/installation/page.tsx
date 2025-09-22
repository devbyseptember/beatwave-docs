import Image from "next/image";
import Link from "next/link";

export default function InstallationPage() {
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
                  <span className="text-blue-600 font-medium">📦 Installation</span>
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
              <h3 className="font-semibold text-gray-900 mb-4">Installation Steps</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#requirements" className="text-blue-600 hover:text-blue-800">📋 Requirements</a></li>
                <li><a href="#shopify-install" className="text-blue-600 hover:text-blue-800">🛒 Shopify Install</a></li>
                <li><a href="#configuration" className="text-blue-600 hover:text-blue-800">⚙️ Configuration</a></li>
                <li><a href="#theme-setup" className="text-blue-600 hover:text-blue-800">🎨 Theme Setup</a></li>
                <li><a href="#testing" className="text-blue-600 hover:text-blue-800">✅ Testing</a></li>
                <li><a href="#troubleshooting" className="text-blue-600 hover:text-blue-800">🔧 Troubleshooting</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                  📦 <span className="ml-3">Installation Guide</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Complete step-by-step installation of BeatWave for your Shopify store.
                </p>
              </div>

              {/* Requirements */}
              <section id="requirements" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📋 <span className="ml-2">Requirements</span>
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Before You Begin</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        🛒 <span className="ml-2">Shopify Store</span>
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span>Active Shopify store (any plan)</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span>Store owner or staff permissions</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span>Access to Shopify admin dashboard</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        🎵 <span className="ml-2">Content Ready</span>
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span>Music beats (MP3/WAV format)</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span>Beat metadata (titles, BPM, keys)</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span>License pricing strategy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Shopify Installation */}
              <section id="shopify-install" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🛒 <span className="ml-2">Shopify Installation</span>
                </h2>
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-3">Visit BeatWave on Shopify App Store</h3>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <p className="text-gray-700 mb-3">Navigate to the BeatWave app listing:</p>
                          <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                            <p className="text-blue-800 font-medium">
                              🔗 <a href="https://apps.shopify.com/beatwave" className="underline hover:no-underline">
                                https://apps.shopify.com/beatwave
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <p className="text-yellow-800 text-sm">
                            💡 <strong>Tip:</strong> Make sure you&apos;re logged into your Shopify admin before clicking the link.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-3">Install the App</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-2">Click &ldquo;Add app&rdquo;</h4>
                            <p className="text-gray-700 text-sm">This will redirect you to your Shopify admin for app installation.</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-2">Review Permissions</h4>
                            <p className="text-gray-700 text-sm mb-2">BeatWave requires the following permissions:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Read and write products (to create beat listings)</li>
                              <li>• Read and write files (for audio file management)</li>
                              <li>• Read orders (for license delivery)</li>
                              <li>• Write script tags (for beat player integration)</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-2">Confirm Installation</h4>
                            <p className="text-gray-700 text-sm">Click &ldquo;Install app&rdquo; to proceed with the installation.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-3">Choose Your Plan</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="border rounded-lg p-4 hover:border-green-300 transition-colors">
                            <h4 className="font-semibold text-green-600 mb-2">Starter - $0/month</h4>
                            <ul className="text-sm text-gray-600 space-y-1 mb-3">
                              <li>• Up to 10 beats</li>
                              <li>• Basic analytics</li>
                              <li>• Email support</li>
                              <li>• Standard player themes</li>
                            </ul>
                            <p className="text-sm text-green-600 font-medium">✨ Free Forever</p>
                          </div>
                          <div className="border-2 border-blue-300 bg-blue-50 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-600 mb-2">Pro - $19.95/month</h4>
                            <ul className="text-sm text-gray-600 space-y-1 mb-3">
                              <li>• Unlimited beats</li>
                              <li>• Advanced analytics</li>
                              <li>• Priority support</li>
                              <li>• Custom player themes</li>
                              <li>• Bulk upload tools</li>
                            </ul>
                            <p className="text-sm text-blue-600 font-medium">🌟 Most Popular</p>
                          </div>
                          <div className="border rounded-lg p-4 hover:border-purple-300 transition-colors">
                            <h4 className="font-semibold text-purple-600 mb-2">Premium - $39.95/month</h4>
                            <ul className="text-sm text-gray-600 space-y-1 mb-3">
                              <li>• Unlimited beats</li>
                              <li>• Advanced analytics</li>
                              <li>• Priority support</li>
                              <li>• Custom player themes</li>
                              <li>• Bulk upload tools</li>
                              <li>• Full API access</li>
                            </ul>
                            <p className="text-sm text-purple-600 font-medium">⭐ Complete Control</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Configuration */}
              <section id="configuration" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ⚙️ <span className="ml-2">Initial Configuration</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                    <h3 className="font-semibold text-green-900 mb-4">🎉 Installation Complete!</h3>
                    <p className="text-green-800 mb-4">
                      BeatWave has been successfully installed. You should now see it in your Shopify admin under Apps.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-green-800 font-medium">Next: Access BeatWave Dashboard</p>
                      <p className="text-green-700 text-sm">Go to Apps → BeatWave to start the setup wizard.</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Setup Wizard Steps</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                        <span className="text-gray-900">Configure license types and pricing</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                        <span className="text-gray-900">Set up payment processing</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                        <span className="text-gray-900">Customize beat player appearance</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                        <span className="text-gray-900">Upload your first beat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Theme Setup */}
              <section id="theme-setup" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🎨 <span className="ml-2">Theme Integration</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
                    <h3 className="font-semibold text-blue-900 mb-3">Automatic Theme Integration</h3>
                    <p className="text-blue-800 mb-4">
                      BeatWave automatically integrates with most Shopify themes. The beat player and store pages are added automatically during installation.
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-2">What&apos;s Added:</h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• Beat store page at <code>/pages/beats</code></li>
                        <li>• Beat player JavaScript library</li>
                        <li>• CSS styles for player components</li>
                        <li>• Navigation menu item (optional)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Manual Theme Customization (Optional)</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Add Beat Store to Navigation</h4>
                        <ol className="text-sm text-gray-700 space-y-1">
                          <li>1. Go to Online Store → Navigation</li>
                          <li>2. Edit your main menu</li>
                          <li>3. Add new menu item: &ldquo;Beats&rdquo; → /pages/beats</li>
                        </ol>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Customize Player Colors</h4>
                        <p className="text-sm text-gray-700 mb-2">Match your brand colors in BeatWave settings:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Primary color (buttons, progress bars)</li>
                          <li>• Background color</li>
                          <li>• Text color</li>
                          <li>• Waveform color</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Testing */}
              <section id="testing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ✅ <span className="ml-2">Testing Your Setup</span>
                </h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Post-Installation Checklist</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Upload a test beat</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Preview beat player functionality</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Test license purchase flow</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Verify automatic license delivery</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Check mobile responsiveness</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Test beat store page (/pages/beats)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section id="troubleshooting" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🔧 <span className="ml-2">Troubleshooting</span>
                </h2>
                <div className="space-y-6">
                  <details className="group bg-red-50 rounded-lg p-6 hover:bg-red-100 transition-colors border border-red-200">
                    <summary className="font-semibold text-red-900 cursor-pointer flex items-center justify-between">
                      <span>Beat player not loading</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-red-800 space-y-3">
                      <p><strong>Common causes:</strong></p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Theme conflicts with JavaScript</li>
                        <li>Ad blockers preventing script loading</li>
                        <li>Cached files not updated</li>
                      </ul>
                      <p><strong>Solutions:</strong></p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Clear browser cache and hard refresh</li>
                        <li>Check browser console for errors</li>
                        <li>Contact support with theme details</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group bg-yellow-50 rounded-lg p-6 hover:bg-yellow-100 transition-colors border border-yellow-200">
                    <summary className="font-semibold text-yellow-900 cursor-pointer flex items-center justify-between">
                      <span>Upload errors</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-yellow-800 space-y-3">
                      <p><strong>Check these requirements:</strong></p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>File size under 50MB</li>
                        <li>Supported format (MP3, WAV)</li>
                        <li>Stable internet connection</li>
                        <li>Not exceeding plan limits</li>
                      </ul>
                    </div>
                  </details>

                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Still Need Help?</h3>
                    <p className="text-gray-600 mb-4">Our support team is here to help with your installation.</p>
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        💬 Live Chat
                      </a>
                      <a href="#" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        📧 Email Support
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}