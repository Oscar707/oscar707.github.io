import React from 'react';

export default function ArticlesNaval() {
  return (
    <div className="w-full max-w-screen-md mx-auto p-5">
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="text-gray-400 text-sm mb-2">July 2025</div>
        <h1 className="text-3xl font-bold text-cyan-400 mb-4">Naval Ravikant</h1>
        
        <p className="text-gray-200 mb-4">
          Naval is a tech investor who writes short and concise tweets about his learnings. I have learned a lot from listening to his podcasts and reading "The Almanack of Naval Ravikant".
        </p>
        
        <p className="text-gray-200 mb-4">
          Here are some quotes that struck to me, some are self-explanatory and others need explanation:
        </p>
        
        <div className="space-y-4">
          <blockquote className="border-l-4 border-cyan-400 pl-4 py-2">
            <p className="text-cyan-400 font-semibold text-lg">
              "You learn faster by doing than by learning."
            </p>
          </blockquote>
          
          <blockquote className="border-l-4 border-cyan-400 pl-4 py-2">
            <p className="text-cyan-400 font-semibold text-lg">
              "You learn faster by reading than by listening."
            </p>
          </blockquote>
          
          <blockquote className="border-l-4 border-cyan-400 pl-4 py-2">
            <p className="text-cyan-400 font-semibold text-lg">
              "In most difficult things in life, the solution is indirect."
            </p>
          </blockquote>
          
          <p className="text-gray-200 mb-4">
            You don't catch a butterfly by chasing it, you build a beautiful garden so that it lands on you. You don't become rich by chasing money, you build a product that people need, and then money comes to you.
          </p>
          
          <blockquote className="border-l-4 border-cyan-400 pl-4 py-2">
            <p className="text-cyan-400 font-semibold text-lg">
              "Maybe intelligence is more about getting the things you want in life."
            </p>
          </blockquote>
          
          <blockquote className="border-l-4 border-cyan-400 pl-4 py-2">
            <p className="text-cyan-400 font-semibold text-lg">
              "If you are so smart then why aren't you happy?"
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
} 