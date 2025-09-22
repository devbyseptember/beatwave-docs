'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  keywords: string[];
}

// Mock search data - in a real app this would come from an API or search index
const searchData: SearchResult[] = [
  {
    title: "Quick Start Guide",
    description: "Get your BeatWave beat store up and running in just 5 minutes!",
    url: "/quick-start",
    category: "Getting Started",
    keywords: ["setup", "install", "quick", "start", "guide", "tutorial"]
  },
  {
    title: "Installation Guide",
    description: "Complete step-by-step installation of BeatWave for your Shopify store.",
    url: "/installation",
    category: "Setup",
    keywords: ["install", "setup", "shopify", "app", "requirements"]
  },
  {
    title: "Features Overview",
    description: "Discover all the powerful features that make BeatWave the ultimate beat marketplace solution.",
    url: "/features",
    category: "Features",
    keywords: ["features", "audio", "player", "licensing", "analytics", "customization"]
  },
  {
    title: "API Reference",
    description: "Integrate BeatWave with your applications using our REST API.",
    url: "/api",
    category: "Development",
    keywords: ["api", "integration", "rest", "endpoints", "authentication", "webhooks"]
  },
  {
    title: "FAQ",
    description: "Find quick answers to common questions about BeatWave.",
    url: "/faq",
    category: "Support",
    keywords: ["faq", "questions", "help", "support", "troubleshooting", "billing"]
  },
  {
    title: "Upload Beats",
    description: "Learn how to upload and manage your beat library",
    url: "/quick-start#upload",
    category: "Beat Management",
    keywords: ["upload", "beats", "music", "files", "mp3", "wav", "metadata"]
  },
  {
    title: "License Types",
    description: "Understanding Basic, Premium, and Exclusive licenses",
    url: "/features#licensing",
    category: "Licensing",
    keywords: ["license", "basic", "premium", "exclusive", "pricing", "rights"]
  },
  {
    title: "Audio Player",
    description: "Professional beat player with waveform visualization",
    url: "/features#player-features",
    category: "Player",
    keywords: ["player", "audio", "waveform", "playback", "controls", "visualization"]
  },
  {
    title: "Revenue Analytics",
    description: "Track sales, revenue, and customer insights",
    url: "/features#analytics",
    category: "Analytics",
    keywords: ["analytics", "revenue", "sales", "tracking", "insights", "customers"]
  },
  {
    title: "Theme Customization",
    description: "Customize colors, layouts, and branding",
    url: "/features#customization",
    category: "Customization",
    keywords: ["theme", "customization", "colors", "branding", "layout", "design"]
  }
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query_lower = searchQuery.toLowerCase();
    const filteredResults = searchData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query_lower);
      const descriptionMatch = item.description.toLowerCase().includes(query_lower);
      const keywordMatch = item.keywords.some(keyword => 
        keyword.toLowerCase().includes(query_lower)
      );
      const categoryMatch = item.category.toLowerCase().includes(query_lower);
      
      return titleMatch || descriptionMatch || keywordMatch || categoryMatch;
    });

    // Sort by relevance (title matches first, then description, then keywords)
    const sortedResults = filteredResults.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(query_lower);
      const bTitle = b.title.toLowerCase().includes(query_lower);
      
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      
      return 0;
    });

    setResults(sortedResults.slice(0, 6)); // Limit to 6 results
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    performSearch(newQuery);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          window.location.href = results[selectedIndex].url;
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut to focus search (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyboardShortcut = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyboardShortcut);
    return () => document.removeEventListener('keydown', handleKeyboardShortcut);
  }, []);

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search documentation... (⌘K)"
          className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Search Results */}
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={result.url}
                  href={result.url}
                  className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    selectedIndex === index ? 'bg-blue-50 dark:bg-blue-800/20' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                          {result.title}
                        </h3>
                        <span className="ml-2 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                    <svg className="ml-2 h-4 w-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ) : query ? (
            <div className="px-4 py-6 text-center">
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                <div className="mb-2">🔍</div>
                <div>No results found for &ldquo;{query}&rdquo;</div>
                <div className="text-xs mt-2">Try searching for &ldquo;setup&rdquo;, &ldquo;upload&rdquo;, or &ldquo;license&rdquo;</div>
              </div>
            </div>
          ) : (
            <div className="px-4 py-6">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">Popular searches:</div>
              <div className="flex flex-wrap gap-2">
                {['quick start', 'upload beats', 'api', 'licensing', 'pricing'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setQuery(term);
                      performSearch(term);
                    }}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}