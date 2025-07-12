import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showUnderscore, setShowUnderscore] = useState(true);
  const fullText = 'Welcome';
  
  useEffect(() => {
    // Typing animation
    if (text.length < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 70); // Add a new letter every 200ms
      
      return () => clearTimeout(typingTimeout);
    }
  }, [text]);

  useEffect(() => {
    // Blinking underscore animation
    const interval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[50vh] bg-slate-800 px-4 md:px-8 py-8 flex items-center justify-center">
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-mono">
          <span className="text-[#8B5CF6]">&gt;&nbsp;</span>
          <span className="text-[#8B5CF6]">{text}</span>
          <span className="w-[0.5em] inline-block text-[#8B5CF6]" style={{ 
            opacity: showUnderscore ? 0.70 : 0,
            transition: 'opacity 0.1s ease'
          }}>_</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;