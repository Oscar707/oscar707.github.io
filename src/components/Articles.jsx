import React from 'react';

const articles = [
  {
    date: 'July 2025',
    title: 'Iterations: Improve sustainably',
    summary: 'How to get better at anything in life.',
    url: '#/articles/iterations',
  },
  {
    date: 'July 2025',
    title: 'Naval Ravikant',
    summary: 'An intellectual reader',
    url: '#/articles/naval',
  },
  // Add more articles here as needed
];

export default function Articles() {
  return (
    <div className="w-full max-w-screen-md mx-auto p-5">
      {articles.map((article, idx) => (
        <div key={idx} className="mb-8">
          <div className="text-gray-400 text-sm mb-1">{article.date}</div>
          <a href={article.url} className="text-xl md:text-2xl font-semibold text-cyan-400 hover:underline block mb-1">
            {article.title}
          </a>
          <div className="text-gray-200 mb-2">{article.summary}</div>
          <a 
            href={article.url} 
            className="text-cyan-400 hover:underline flex items-center gap-1 w-fit"
          >
            Read Article
            <span className="ml-1">→</span>
          </a>
        </div>
      ))}
    </div>
  );
} 