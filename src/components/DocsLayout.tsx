import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import { ReadingProgress } from "./TableOfContents";
import { PerformanceMonitor, AccessibilityEnhancer } from "./Analytics";

interface NavItem {
  href: string;
  label: string;
  icon: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: "🏠",
    description: "Documentation overview"
  },
  {
    href: "/quick-start",
    label: "Quick Start",
    icon: "🚀",
    description: "Get started in 5 minutes"
  },
  {
    href: "/installation",
    label: "Installation",
    icon: "📦",
    description: "Step-by-step setup guide"
  },
  {
    href: "/features",
    label: "Features",
    icon: "✨",
    description: "Explore all capabilities"
  },
  {
    href: "/api",
    label: "API Reference",
    icon: "🔌",
    description: "REST API documentation"
  },
  {
    href: "/faq",
    label: "FAQ",
    icon: "❓",
    description: "Common questions answered"
  }
];

interface DocsLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
}

export default function DocsLayout({ 
  children, 
  currentPath = "/", 
  title, 
  description, 
  breadcrumbLabel 
}: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ReadingProgress />
      <PerformanceMonitor />
      <AccessibilityEnhancer />
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
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
            
            {/* Search Bar - Desktop */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <SearchBar />
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium">v2.0.0</span>
              <ThemeToggle />
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.slice(1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                      currentPath === item.href 
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
                        : "text-gray-700"
                    }`}
                  >
                    {item.icon} {item.label}
                  </Link>
                ))}
              </nav>
              <MobileMenu currentPath={currentPath} />
            </div>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-4">
          <SearchBar />
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  📚 Documentation
                </Link>
              </li>
              {currentPath !== "/" && (
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-blue-600 font-medium">{breadcrumbLabel}</span>
                  </div>
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 p-6 sticky top-24 transition-colors duration-300">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Documentation</h3>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-start p-3 rounded-lg transition-all hover:bg-blue-50 hover:border-blue-200 border ${
                      currentPath === item.href 
                        ? "bg-blue-50 border-blue-300 text-blue-800" 
                        : "border-transparent text-gray-700"
                    }`}
                  >
                    <span className="text-lg mr-3 flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t">
                <h4 className="font-medium text-gray-900 mb-3 text-sm">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                    📞 Contact Support
                  </a>
                  <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                    💬 Community Forum
                  </a>
                  <a href="#" className="block text-sm text-blue-600 hover:text-blue-800">
                    📊 Status Page
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <main id="main-content" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 p-8 transition-colors duration-300">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">{description}</p>
              </div>
              
              {children}
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/beatwave_logo_admin.png"
                  alt="BeatWave Logo"
                  width={100}
                  height={32}
                  className="rounded-xl"
                />
              </div>
              <p className="text-gray-600 text-sm">
                The ultimate beat marketplace solution for Shopify stores.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Documentation</h3>
              <ul className="space-y-2">
                {navItems.slice(1, 4).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-600 hover:text-blue-600 text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                    API Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 BeatWave. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}