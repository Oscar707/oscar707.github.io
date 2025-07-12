import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    date: 'April 2024',
    title: 'Iterations: The Journey of Building This Site',
    summary: 'A behind-the-scenes look at the process, challenges, and lessons learned while developing this website. Explore the iterations, design choices, and what comes next.',
    url: '/articles/iterations',
  },
  // Add more articles here as needed
];

export default function Articles() {
  return (
    <div className="w-full max-w-screen-md mx-auto p-5">
      {articles.map((article, idx) => (
        <div key={idx} className="mb-8">
          <div className="text-gray-400 text-sm mb-1">{article.date}</div>
          <Link to={article.url} className="text-xl md:text-2xl font-semibold text-cyan-400 hover:underline block mb-1">
            {article.title}
          </Link>
          <div className="text-gray-200 mb-2">{article.summary}</div>
          <Link 
            to={article.url} 
            className="text-cyan-400 hover:underline flex items-center gap-1 w-fit"
          >
            Read Article
            <span className="ml-1">→</span>
          </Link>
        </div>
      ))}
    </div>
  );
} 