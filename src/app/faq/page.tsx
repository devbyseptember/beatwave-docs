import Image from "next/image";
import Link from "next/link";

export default function FAQPage() {
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
                  <span className="text-blue-600 font-medium">❓ FAQ</span>
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
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#getting-started" className="text-blue-600 hover:text-blue-800">🚀 Getting Started</a></li>
                <li><a href="#uploads" className="text-blue-600 hover:text-blue-800">📁 Uploads & Files</a></li>
                <li><a href="#licensing" className="text-blue-600 hover:text-blue-800">📄 Licensing</a></li>
                <li><a href="#payments" className="text-blue-600 hover:text-blue-800">💳 Payments</a></li>
                <li><a href="#technical" className="text-blue-600 hover:text-blue-800">⚙️ Technical</a></li>
                <li><a href="#billing" className="text-blue-600 hover:text-blue-800">💰 Billing</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                  ❓ <span className="ml-3">Frequently Asked Questions</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Find quick answers to common questions about BeatWave.
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <span className="text-gray-400">🔍</span>
                  </div>
                </div>
              </div>

              {/* Getting Started */}
              <section id="getting-started" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🚀 <span className="ml-2">Getting Started</span>
                </h2>
                <div className="space-y-6">
                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>What is BeatWave and how does it work?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700 space-y-3">
                      <p>BeatWave is a comprehensive beat marketplace solution for Shopify stores. It allows music producers to:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Upload and manage beat libraries</li>
                        <li>Sell different license types (Basic, Premium, Exclusive)</li>
                        <li>Provide instant preview and waveform visualization</li>
                        <li>Deliver licenses automatically after purchase</li>
                        <li>Track sales and analytics</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>How quickly can I start selling beats?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>You can be selling beats within 5 minutes! Simply install BeatWave, upload your first beat, set your license prices, and you&apos;re ready to go. The whole setup process is designed to be quick and intuitive.</p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>Do I need coding knowledge to use BeatWave?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>Not at all! BeatWave is designed for musicians and producers, not developers. Everything is managed through an intuitive dashboard with drag-and-drop uploading, simple pricing controls, and automated license delivery.</p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Uploads & Files */}
              <section id="uploads" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📁 <span className="ml-2">Uploads & Files</span>
                </h2>
                <div className="space-y-6">
                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>What audio formats are supported?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>BeatWave supports:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>MP3</strong> - Recommended for web streaming (320kbps preferred)</li>
                        <li><strong>WAV</strong> - High-quality uncompressed audio</li>
                        <li><strong>FLAC</strong> - Lossless compression (coming soon)</li>
                      </ul>
                      <p className="mt-3">Maximum file size: <strong>50MB per beat</strong></p>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>How many beats can I upload?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>Upload limits depend on your plan:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Starter Plan ($0/month):</strong> Up to 10 beats</li>
                        <li><strong>Pro Plan ($19.95/month):</strong> Unlimited beats</li>
                        <li><strong>Premium Plan ($39.95/month):</strong> Unlimited beats + API access</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>Can I upload beats in bulk?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>Yes! BeatWave Pro and Premium plans include bulk upload features:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Upload multiple files at once</li>
                        <li>Bulk metadata editing</li>
                        <li>CSV import for beat information</li>
                        <li>ZIP file extraction</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </section>

              {/* Licensing */}
              <section id="licensing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📄 <span className="ml-2">Licensing</span>
                </h2>
                <div className="space-y-6">
                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>What&apos;s the difference between license types?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <div className="space-y-4">
                        <div className="border-l-4 border-green-400 pl-4">
                          <h4 className="font-semibold">Basic License ($25-50)</h4>
                          <p>Non-commercial use, 2,500 streams, MP3 delivery</p>
                        </div>
                        <div className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold">Premium License ($75-150)</h4>
                          <p>Commercial use, 100,000 streams, WAV delivery</p>
                        </div>
                        <div className="border-l-4 border-purple-400 pl-4">
                          <h4 className="font-semibold">Exclusive License ($250-500)</h4>
                          <p>Full ownership, unlimited use, stems included</p>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>Can I customize license terms?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>Absolutely! BeatWave allows full customization of:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>License names and descriptions</li>
                        <li>Usage rights and restrictions</li>
                        <li>Stream/sale limits</li>
                        <li>Commercial vs. non-commercial terms</li>
                        <li>Distribution platforms allowed</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </section>

              {/* Payments */}
              <section id="payments" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  💳 <span className="ml-2">Payments</span>
                </h2>
                <div className="space-y-6">
                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>How do I get paid for beat sales?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>Payments work through your existing Shopify payment system:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Customers pay through Shopify checkout</li>
                        <li>Funds go directly to your Shopify Payments account</li>
                        <li>You receive payouts according to your Shopify schedule</li>
                        <li>BeatWave subscription is separate from beat sales revenue</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>What payment methods do customers have?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>BeatWave supports all Shopify payment methods:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Credit/Debit cards (Visa, Mastercard, Amex)</li>
                        <li>PayPal, Apple Pay, Google Pay</li>
                        <li>Shop Pay for faster checkout</li>
                        <li>Buy now, pay later options (Klarna, Afterpay)</li>
                        <li>Bank transfers (depending on region)</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </section>

              {/* Technical */}
              <section id="technical" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ⚙️ <span className="ml-2">Technical</span>
                </h2>
                <div className="space-y-6">
                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>How does the beat player work?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>BeatWave includes a professional audio player with:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Waveform visualization</strong> - Generated automatically</li>
                        <li><strong>Skip prevention</strong> - 30-60 second previews only</li>
                        <li><strong>Mobile responsive</strong> - Works on all devices</li>
                        <li><strong>Playlist support</strong> - Queue multiple beats</li>
                        <li><strong>Social sharing</strong> - Share beat links</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>Can I customize the player appearance?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>Yes! The beat player is fully customizable:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Custom colors to match your brand</li>
                        <li>Multiple layout options</li>
                        <li>Show/hide waveforms</li>
                        <li>Custom button styles</li>
                        <li>Logo placement options</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </section>

              {/* Billing */}
              <section id="billing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  💰 <span className="ml-2">Billing</span>
                </h2>
                <div className="space-y-6">
                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>How much does BeatWave cost?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold text-green-600">Starter - $0/month</h4>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Up to 10 beats</li>
                            <li>• Basic analytics</li>
                            <li>• Email support</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4 border-blue-300 bg-blue-50">
                          <h4 className="font-semibold text-blue-600">Pro - $19.95/month</h4>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Unlimited beats</li>
                            <li>• Advanced analytics</li>
                            <li>• Priority support</li>
                            <li>• Bulk upload</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4 border-purple-300 bg-purple-50">
                          <h4 className="font-semibold text-purple-600">Premium - $39.95/month</h4>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Unlimited beats</li>
                            <li>• Advanced analytics</li>
                            <li>• Priority support</li>
                            <li>• Bulk upload</li>
                            <li>• Full API access</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                      <span>Is there a free trial?</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-700">
                      <p>Yes! We offer a <strong>14-day free trial</strong> with full access to all Starter plan features. No credit card required to start your trial.</p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Contact Support */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                <p className="mb-4">Our support team is here to help you succeed with BeatWave.</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    💬 Live Chat
                  </a>
                  <a href="#" className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                    📧 Email Support
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