import Image from "next/image";
import Link from "next/link";

export default function APIPage() {
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
                  <span className="text-blue-600 font-medium">🔌 API Reference</span>
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
              <h3 className="font-semibold text-gray-900 mb-4">API Endpoints</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#authentication" className="text-blue-600 hover:text-blue-800">🔐 Authentication</a></li>
                <li><a href="#beats" className="text-blue-600 hover:text-blue-800">🎵 Beats</a></li>
                <li><a href="#licenses" className="text-blue-600 hover:text-blue-800">📄 Licenses</a></li>
                <li><a href="#analytics" className="text-blue-600 hover:text-blue-800">📊 Analytics</a></li>
                <li><a href="#webhooks" className="text-blue-600 hover:text-blue-800">🔔 Webhooks</a></li>
                <li><a href="#rate-limits" className="text-blue-600 hover:text-blue-800">⚡ Rate Limits</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                  🔌 <span className="ml-3">API Reference</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Integrate BeatWave with your applications using our REST API.
                </p>
              </div>

              {/* API Overview */}
              <div className="mb-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
                <h2 className="text-lg font-semibold text-blue-900 mb-3">API Base URL</h2>
                <div className="bg-blue-900 text-blue-100 p-3 rounded font-mono text-sm">
                  https://api.beatwave.app/v2
                </div>
                <p className="text-blue-800 mt-3 text-sm">
                  All API requests must be made over HTTPS. HTTP requests will be rejected.
                </p>
              </div>

              {/* Authentication */}
              <section id="authentication" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🔐 <span className="ml-2">Authentication</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">API Key Authentication</h3>
                    <p className="text-gray-700 mb-4">
                      BeatWave uses API keys for authentication. Include your API key in the Authorization header:
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                      <div className="text-green-400"># Example Request</div>
                      <div className="mt-2">
                        curl -H &ldquo;Authorization: Bearer YOUR_API_KEY&rdquo; \<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://api.beatwave.app/v2/beats
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">🔑 Getting Your API Key</h4>
                    <p className="text-yellow-700 text-sm">
                      Find your API key in your BeatWave dashboard under Settings → Developer → API Keys
                    </p>
                  </div>
                </div>
              </section>

              {/* Beats API */}
              <section id="beats" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🎵 <span className="ml-2">Beats API</span>
                </h2>
                <div className="space-y-8">
                  {/* List Beats */}
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">List All Beats</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">GET</span>
                    </div>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm mb-4">
                      GET /beats
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Query Parameters</h4>
                        <div className="bg-gray-50 p-3 rounded text-sm">
                          <ul className="space-y-1">
                            <li><code className="text-purple-600">limit</code> - Number of beats to return (default: 20, max: 100)</li>
                            <li><code className="text-purple-600">offset</code> - Number of beats to skip</li>
                            <li><code className="text-purple-600">genre</code> - Filter by genre</li>
                            <li><code className="text-purple-600">bpm</code> - Filter by BPM range (e.g., 120-140)</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Response</h4>
                        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                          <pre>{`{
  "beats": [
    {
      "id": "beat_123",
      "title": "Hard Trap Beat",
      "artist": "Producer Name",
      "bpm": 140,
      "key": "G minor",
      "genre": "trap",
      "duration": 180,
      "waveform_url": "https://cdn.beatwave.app/waveforms/beat_123.json",
      "preview_url": "https://cdn.beatwave.app/previews/beat_123.mp3",
      "licenses": [
        {
          "type": "basic",
          "price": 25.00,
          "currency": "USD"
        }
      ],
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 45,
  "limit": 20,
  "offset": 0
}`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Upload Beat */}
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Upload Beat</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">POST</span>
                    </div>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm mb-4">
                      POST /beats
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Request Body (multipart/form-data)</h4>
                        <div className="bg-gray-50 p-3 rounded text-sm">
                          <ul className="space-y-1">
                            <li><code className="text-purple-600">audio_file</code> - Beat audio file (MP3/WAV, max 50MB)</li>
                            <li><code className="text-purple-600">title</code> - Beat title</li>
                            <li><code className="text-purple-600">artist</code> - Artist/producer name</li>
                            <li><code className="text-purple-600">bpm</code> - Beats per minute (optional)</li>
                            <li><code className="text-purple-600">key</code> - Musical key (optional)</li>
                            <li><code className="text-purple-600">genre</code> - Genre tags (comma-separated)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Licenses API */}
              <section id="licenses" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📄 <span className="ml-2">Licenses API</span>
                </h2>
                <div className="space-y-8">
                  {/* Purchase License */}
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Purchase License</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">POST</span>
                    </div>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm mb-4">
                      POST /beats/{'{beat_id}'}/purchase
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Request Body</h4>
                        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm">
                          <pre>{`{
  "license_type": "premium",
  "customer_email": "customer@example.com",
  "customer_name": "John Doe",
  "payment_method": "stripe_token_here"
}`}</pre>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Response</h4>
                        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm">
                          <pre>{`{
  "license_id": "lic_abc123",
  "beat_id": "beat_123",
  "license_type": "premium",
  "download_url": "https://secure.beatwave.app/download/lic_abc123",
  "expires_at": "2024-02-15T10:30:00Z",
  "license_agreement_url": "https://cdn.beatwave.app/agreements/lic_abc123.pdf"
}`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Analytics API */}
              <section id="analytics" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📊 <span className="ml-2">Analytics API</span>
                </h2>
                <div className="space-y-8">
                  {/* Sales Analytics */}
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Sales Analytics</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">GET</span>
                    </div>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm mb-4">
                      GET /analytics/sales
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Query Parameters</h4>
                        <div className="bg-gray-50 p-3 rounded text-sm">
                          <ul className="space-y-1">
                            <li><code className="text-purple-600">start_date</code> - Start date (ISO 8601)</li>
                            <li><code className="text-purple-600">end_date</code> - End date (ISO 8601)</li>
                            <li><code className="text-purple-600">granularity</code> - day, week, month (default: day)</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Response</h4>
                        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm">
                          <pre>{`{
  "total_revenue": 1250.00,
  "total_sales": 52,
  "avg_sale_price": 24.04,
  "top_beats": [
    {
      "beat_id": "beat_123",
      "title": "Hard Trap Beat",
      "sales": 8,
      "revenue": 200.00
    }
  ],
  "daily_breakdown": [
    {
      "date": "2024-01-15",
      "sales": 3,
      "revenue": 75.00
    }
  ]
}`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Webhooks */}
              <section id="webhooks" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🔔 <span className="ml-2">Webhooks</span>
                </h2>
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
                    <h3 className="font-semibold text-purple-900 mb-3">Available Events</h3>
                    <ul className="space-y-2 text-purple-800">
                      <li>• <code>beat.uploaded</code> - New beat uploaded</li>
                      <li>• <code>license.purchased</code> - License purchased</li>
                      <li>• <code>payment.completed</code> - Payment processed</li>
                      <li>• <code>payment.failed</code> - Payment failed</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Webhook Payload Example</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm">
                      <pre>{`{
  "event": "license.purchased",
  "data": {
    "license_id": "lic_abc123",
    "beat_id": "beat_123",
    "customer_email": "customer@example.com",
    "license_type": "premium",
    "amount": 75.00,
    "currency": "USD",
    "timestamp": "2024-01-15T10:30:00Z"
  },
  "webhook_id": "wh_def456"
}`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rate Limits */}
              <section id="rate-limits" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  ⚡ <span className="ml-2">Rate Limits</span>
                </h2>
                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-3">Standard Limits</h3>
                      <ul className="space-y-2 text-yellow-800">
                        <li>• <strong>1000 requests/hour</strong> per API key</li>
                        <li>• <strong>10 uploads/hour</strong> for beat uploads</li>
                        <li>• <strong>100 MB/hour</strong> upload bandwidth</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-3">Rate Limit Headers</h3>
                      <ul className="space-y-1 text-yellow-800 font-mono text-sm">
                        <li>X-RateLimit-Limit</li>
                        <li>X-RateLimit-Remaining</li>
                        <li>X-RateLimit-Reset</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* SDK & Examples */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Need help integrating?</h3>
                <p className="mb-4">Check out our SDKs and code examples to get started quickly.</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    📖 View Examples
                  </a>
                  <a href="#" className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                    📦 Download SDK
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