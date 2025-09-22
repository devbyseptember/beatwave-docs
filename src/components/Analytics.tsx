'use client';

import { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

export default function Analytics({ trackingId }: AnalyticsProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      // Google Analytics 4
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', trackingId);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [trackingId]);

  return null;
}

// Page view tracking
export function usePageView() {
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_TRACKING_ID', {
          page_path: window.location.pathname,
        });
      }
    };

    // Track initial page view
    handleRouteChange();

    // Listen for route changes (for SPA navigation)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
}

// Performance monitoring
export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Log performance metrics
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
          
          // You could send this data to your analytics service
          if (window.gtag && entry.entryType === 'navigation') {
            const navigationEntry = entry as PerformanceNavigationTiming;
            window.gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(navigationEntry.loadEventEnd - navigationEntry.fetchStart)
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}

// Accessibility helper
export function AccessibilityEnhancer() {
  useEffect(() => {
    // Add skip-to-content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhance focus management
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close any open modals/menus
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
}

// Declare global types for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}