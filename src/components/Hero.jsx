import React from 'react';
import Mbti from './Mbti';

const Hero = () => {
  return (
    <section className="min-h-[50vh] bg-slate-800 px-4 md:px-8 py-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:gap-8">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            <span className="text-white">Recent graduate motivated by learning and problem solving</span>
          </h1>
        </div>
        <div className="w-full md:w-1/3">
          <Mbti />
        </div>
      </div>
    </section>
  );
};

export default Hero;