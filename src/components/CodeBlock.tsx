'use client';

import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  filename?: string;
}

export default function CodeBlock({ children, language = 'javascript', title, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className="relative group">
      {/* Header */}
      {(title || filename) && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 text-gray-200 text-sm rounded-t-lg border-b border-gray-700">
          <div className="flex items-center space-x-2">
            {filename && (
              <span className="text-blue-400">📄 {filename}</span>
            )}
            {title && !filename && (
              <span className="text-gray-300">{title}</span>
            )}
            {language && (
              <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                {language}
              </span>
            )}
          </div>
        </div>
      )}
      
      {/* Code Container */}
      <div className="relative">
        <pre className={`overflow-x-auto p-4 bg-gray-900 dark:bg-gray-950 text-gray-100 text-sm leading-relaxed ${
          title || filename ? 'rounded-b-lg' : 'rounded-lg'
        }`}>
          <code className={`language-${language}`}>{children}</code>
        </pre>
        
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded text-xs flex items-center space-x-1"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// Syntax highlighting for common languages (basic implementation)
export function HighlightedCode({ children, language }: { children: string; language: string }) {
  const highlightSyntax = (code: string, lang: string) => {
    switch (lang) {
      case 'json':
        return code
          .replace(/"([^"]+)":/g, '<span class="text-blue-400">"$1":</span>')
          .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
          .replace(/: (\d+)/g, ': <span class="text-yellow-400">$1</span>')
          .replace(/(true|false|null)/g, '<span class="text-purple-400">$1</span>');
      
      case 'bash':
      case 'shell':
        return code
          .replace(/^(curl|git|npm|yarn|cd|ls|mkdir|cp|mv|rm|chmod|sudo)(\s)/gm, '<span class="text-green-400">$1</span>$2')
          .replace(/--?[\w-]+/g, '<span class="text-blue-400">$&</span>')
          .replace(/"([^"]*)"/g, '<span class="text-yellow-400">"$1"</span>');
      
      case 'javascript':
      case 'typescript':
        return code
          .replace(/\b(const|let|var|function|class|if|else|for|while|return|import|export|from|async|await|try|catch|finally)\b/g, '<span class="text-purple-400">$1</span>')
          .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-yellow-400">$1</span>')
          .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
          .replace(/\/\/.*$/gm, '<span class="text-gray-500">$&</span>');
      
      default:
        return code;
    }
  };

  return (
    <code 
      dangerouslySetInnerHTML={{ __html: highlightSyntax(children, language) }}
      className={`language-${language}`}
    />
  );
}