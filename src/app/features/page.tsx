import Image from "next/image";
import Link from "next/link";

export default function FeaturesPage() {
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
                  <span className="text-blue-600 font-medium">✨ Features</span>
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
              <h3 className="font-semibold text-gray-900 mb-4">Feature Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#audio-management" className="text-blue-600 hover:text-blue-800">🎵 Audio Management</a></li>
                <li><a href="#player-features" className="text-blue-600 hover:text-blue-800">▶️ Player Features</a></li>
                <li><a href="#licensing" className="text-blue-600 hover:text-blue-800">📄 Licensing System</a></li>
                <li><a href="#analytics" className="text-blue-600 hover:text-blue-800">📊 Analytics</a></li>
                <li><a href="#customization" className="text-blue-600 hover:text-blue-800">🎨 Customization</a></li>
                <li><a href="#automation" className="text-blue-600 hover:text-blue-800">⚡ Automation</a></li>
                <li><a href="#integration" className="text-blue-600 hover:text-blue-800">🔌 Integration</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                  ✨ <span className="ml-3">BeatWave Features</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Discover all the powerful features that make BeatWave the ultimate beat marketplace solution.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="mb-12">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="font-bold text-lg mb-2">5-Minute Setup</h3>
                    <p className="text-blue-100 text-sm">Get your beat store live in minutes, not hours</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center">
                    <div className="text-3xl mb-3">🎵</div>
                    <h3 className="font-bold text-lg mb-2">Professional Player</h3>
                    <p className="text-purple-100 text-sm">Waveform visualization & seamless playback</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white text-center">
                    <div className="text-3xl mb-3">⚡</div>
                    <h3 className="font-bold text-lg mb-2">Instant Delivery</h3>
                    <p className="text-green-100 text-sm">Automated license delivery after purchase</p>
                  </div>
                </div>
              </div>

              {/* Audio Management */}
              <section id="audio-management" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🎵 <span className="ml-2">Audio Management</span>
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        📁 <span className="ml-2">Smart Upload System</span>
                      </h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Drag & drop interface</li>
                        <li>• Automatic metadata extraction</li>
                        <li>• Bulk upload support (Pro)</li>
                        <li>• Progress tracking</li>
                        <li>• Error handling & retry</li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        🌊 <span className="ml-2">Waveform Generation</span>
                      </h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Automatic waveform creation</li>
                        <li>• High-resolution visualization</li>
                        <li>• Interactive seeking</li>
                        <li>• Custom color schemes</li>
                        <li>• Mobile-optimized display</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        📊 <span className="ml-2">Audio Analysis</span>
                      </h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• BPM detection</li>
                        <li>• Key detection</li>
                        <li>• Duration analysis</li>
                        <li>• Quality assessment</li>
                        <li>• Format validation</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        🎚️ <span className="ml-2">Audio Processing</span>
                      </h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Preview generation</li>
                        <li>• Watermark insertion</li>
                        <li>• Multi-format conversion</li>
                        <li>• Quality optimization</li>
                        <li>• CDN distribution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Player Features */}
              <section id="player-features" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ▶️ <span className="ml-2">Advanced Beat Player</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border">
                    <h3 className="font-semibold text-gray-900 mb-4">Player Capabilities</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          🎛️ <span className="ml-2">Playback Controls</span>
                        </h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Play/pause/stop</li>
                          <li>• Skip prevention</li>
                          <li>• Volume control</li>
                          <li>• Seeking with waveform</li>
                          <li>• Playlist management</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          📱 <span className="ml-2">Responsive Design</span>
                        </h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Mobile-first approach</li>
                          <li>• Touch-friendly controls</li>
                          <li>• Adaptive layouts</li>
                          <li>• Cross-browser support</li>
                          <li>• Accessibility features</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          🎨 <span className="ml-2">Visual Effects</span>
                        </h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Real-time waveforms</li>
                          <li>• Progress animations</li>
                          <li>• Custom color themes</li>
                          <li>• Loading states</li>
                          <li>• Smooth transitions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Player Layouts</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Compact Player</h4>
                        <p className="text-gray-700 text-sm mb-3">Perfect for product listings and grid layouts</p>
                        <div className="bg-white border rounded p-3 text-center text-sm">
                          [▶️] Beat Title - Artist | 2:45
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Full Player</h4>
                        <p className="text-gray-700 text-sm mb-3">Complete experience with waveform visualization</p>
                        <div className="bg-white border rounded p-3">
                          <div className="text-center text-sm mb-2">Beat Title - Artist</div>
                          <div className="bg-blue-200 h-8 rounded mb-2 flex items-center justify-center text-xs">
                            Waveform Visualization
                          </div>
                          <div className="flex justify-center space-x-2 text-xs">
                            [⏮️] [▶️] [⏭️] | 1:23 / 2:45
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Licensing System */}
              <section id="licensing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📄 <span className="ml-2">Flexible Licensing System</span>
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📝</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Basic License</h3>
                      <p className="text-gray-600 text-sm mb-3">Non-commercial use, limited streams</p>
                      <div className="text-2xl font-bold text-green-600 mb-2">$25-50</div>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• MP3 delivery</li>
                        <li>• 2,500 streams</li>
                        <li>• Attribution required</li>
                      </ul>
                    </div>

                    <div className="border-2 border-blue-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow bg-blue-50">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Premium License</h3>
                      <p className="text-gray-600 text-sm mb-3">Commercial use, higher limits</p>
                      <div className="text-2xl font-bold text-blue-600 mb-2">$75-150</div>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• WAV delivery</li>
                        <li>• 100,000 streams</li>
                        <li>• Commercial rights</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">👑</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Exclusive License</h3>
                      <p className="text-gray-600 text-sm mb-3">Full ownership, unlimited use</p>
                      <div className="text-2xl font-bold text-purple-600 mb-2">$250-500</div>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Stems included</li>
                        <li>• Unlimited streams</li>
                        <li>• Beat removed from store</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
                    <h3 className="font-semibold text-blue-900 mb-4">License Management Features</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-blue-900 mb-2">Customization</h4>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• Custom license names</li>
                          <li>• Flexible pricing tiers</li>
                          <li>• Usage right definitions</li>
                          <li>• Stream/sale limits</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900 mb-2">Delivery</h4>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• Instant download links</li>
                          <li>• Secure file delivery</li>
                          <li>• PDF license agreements</li>
                          <li>• Email notifications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Analytics */}
              <section id="analytics" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📊 <span className="ml-2">Comprehensive Analytics</span>
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        💰 <span className="ml-2">Revenue Tracking</span>
                      </h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Daily/weekly/monthly revenue</li>
                        <li>• Revenue by license type</li>
                        <li>• Top performing beats</li>
                        <li>• Average sale price</li>
                        <li>• Revenue forecasting</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        👥 <span className="ml-2">Customer Insights</span>
                      </h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Customer demographics</li>
                        <li>• Purchase behavior</li>
                        <li>• Geographic distribution</li>
                        <li>• Repeat customer rate</li>
                        <li>• Customer lifetime value</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        🎵 <span className="ml-2">Beat Performance</span>
                      </h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Play count tracking</li>
                        <li>• Conversion rates</li>
                        <li>• Genre performance</li>
                        <li>• Engagement metrics</li>
                        <li>• Trending beats</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        📈 <span className="ml-2">Growth Metrics</span>
                      </h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Monthly growth rate</li>
                        <li>• Traffic sources</li>
                        <li>• Conversion funnels</li>
                        <li>• Seasonal trends</li>
                        <li>• Market insights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Customization */}
              <section id="customization" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🎨 <span className="ml-2">Brand Customization</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
                    <h3 className="font-semibold text-purple-900 mb-4">Theme Customization</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium text-purple-900 mb-2">Colors</h4>
                        <ul className="text-purple-800 text-sm space-y-1">
                          <li>• Primary brand color</li>
                          <li>• Secondary accents</li>
                          <li>• Background themes</li>
                          <li>• Text colors</li>
                          <li>• Button styles</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-900 mb-2">Layout</h4>
                        <ul className="text-purple-800 text-sm space-y-1">
                          <li>• Grid vs. list views</li>
                          <li>• Card layouts</li>
                          <li>• Player positioning</li>
                          <li>• Navigation styles</li>
                          <li>• Responsive breakpoints</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-900 mb-2">Branding</h4>
                        <ul className="text-purple-800 text-sm space-y-1">
                          <li>• Logo placement</li>
                          <li>• Custom fonts</li>
                          <li>• Brand messaging</li>
                          <li>• Social links</li>
                          <li>• Contact information</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Automation */}
              <section id="automation" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ⚡ <span className="ml-2">Smart Automation</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      🤖 <span className="ml-2">Automated Workflows</span>
                    </h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Instant license delivery</li>
                      <li>• Customer email notifications</li>
                      <li>• Beat categorization</li>
                      <li>• Price optimization suggestions</li>
                      <li>• Inventory management</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      📧 <span className="ml-2">Email Marketing</span>
                    </h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Welcome email series</li>
                      <li>• Purchase confirmations</li>
                      <li>• New beat notifications</li>
                      <li>• Abandoned cart recovery</li>
                      <li>• Customer retention campaigns</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Integration */}
              <section id="integration" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🔌 <span className="ml-2">Platform Integration</span>
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-3xl mb-3">🛒</div>
                      <h3 className="font-semibold text-green-900 mb-2">Shopify Native</h3>
                      <p className="text-green-800 text-sm">Built specifically for Shopify with deep integration</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                      <div className="text-3xl mb-3">🔌</div>
                      <h3 className="font-semibold text-blue-900 mb-2">API Access</h3>
                      <p className="text-blue-800 text-sm">RESTful API for custom integrations and workflows</p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                      <div className="text-3xl mb-3">📊</div>
                      <h3 className="font-semibold text-purple-900 mb-2">Analytics Tools</h3>
                      <p className="text-purple-800 text-sm">Google Analytics, Facebook Pixel, and more</p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Supported Integrations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Payment Processors</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Shopify Payments</li>
                          <li>• PayPal</li>
                          <li>• Stripe</li>
                          <li>• Apple Pay / Google Pay</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Marketing Tools</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Mailchimp</li>
                          <li>• Klaviyo</li>
                          <li>• Google Analytics</li>
                          <li>• Facebook Pixel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Experience BeatWave?</h3>
                <p className="text-blue-100 mb-6">
                  Start your 14-day free trial and see how BeatWave can transform your beat business.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="/quick-start" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    🚀 Start Free Trial
                  </Link>
                  <Link href="/installation" className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold">
                    📖 View Setup Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}